<template>
    <section class="y-datepicker">
        <header class="y-datepicker-header">
            <ul class="y-datepicker-header-year">
                <li class="y-datepicker-header-year-pre" @click="switchToPreYear">
                    <
                </li>
                <li class="y-datepicker-header-year-current">
                    {{year}}
                </li>
                <li class="y-datepicker-header-year-next" @click="switchToNextYear">
                    >
                </li>
            </ul>
            <ul class="y-datepicker-header-month">
                <li class="y-datepicker-header-month-pre" @click="switchToPreMonth">
                    <
                </li>
                <li class="y-datepicker-header-month-current">
                    {{month + 1}}
                </li>
                <li class="y-datepicker-header-month-next" @click="switchToNextMonth">
                    >
                </li>
            </ul>
        </header>
        <main class="y-datepicker-body">
            <dateTable :table-data="tableData" />
        </main>
    </section>
</template>

<script>
    import {
        getCurrentYear,
        getCurrentMonth,
        getDate,
        dateInWeek,
        totalDaysInMonth
    } from './util';

    import dateTable from '../common/tables';

    export default {
        components: {
            dateTable
        },
        data() {
            const year = getCurrentYear();
            const month = getCurrentMonth();

            return {
                year,
                month,
                tableData: this.getDateTable(year, month)
            };
        },
        methods: {
            // 获取table 数据
            getDateTable(year, month) {
                const currentDay = getDate(year, month, 1).split(' ')[0];
                const currentMonth = month;
                const currentMonthTotalDay = totalDaysInMonth[currentMonth];
                const lastMonthTotalDay = currentMonth === 0 ? totalDaysInMonth[11] : totalDaysInMonth[currentMonth - 1];

                let rows;
                const columns = 7;

                const stableRow = Math.ceil(currentMonthTotalDay / 7);
                rows = dateInWeek[currentDay] === 0 ? stableRow : stableRow + 1;

                const lastMonthDay = dateInWeek[currentDay];
                let tableData = [];
                for (let row = 0; row < rows; row++) {
                    let currentRows = [];
                    for (let column = 0; column < columns; column++) {
                        const rowData = {
                            year: '',
                            month: '',
                            day: ''
                        };

                        const goHeadDays = row * 7 + column;

                        if (goHeadDays < lastMonthDay) {
                            // 上个月日期遍历
                            rowData.year = month === 0 ? year - 1 : year;
                            rowData.month = month === 0 ? 11 : month;
                            rowData.day = lastMonthTotalDay - (row * 7 + column);
                            currentRows.unshift(rowData);
                        }
                        else if (goHeadDays < currentMonthTotalDay + lastMonthDay) {
                            // 本月日期遍历
                            rowData.year = year;
                            rowData.month = month;
                            rowData.day = goHeadDays - lastMonthDay + 1;
                            currentRows.push(rowData);
                        }
                        else {
                            rowData.year = month === 11 ? year : year + 1;
                            rowData.month = month === 11 ? 0 : month + 1;
                            rowData.day = goHeadDays - currentMonthTotalDay - lastMonthDay + 1;
                            currentRows.push(rowData);
                        }
                    }

                    tableData.push(currentRows);
                }

                const prefixHead = [
                    '日',
                    '一',
                    '二',
                    '三',
                    '四',
                    '五',
                    '六'
                ];
                tableData.unshift(prefixHead);
                return tableData;
            },
            // 切换上月
            switchToPreMonth() {
                const {
                    month,
                    year
                } = this;

                let preMonth;
                let preYear;
                if (month === 0) {
                    preMonth = 11;
                    preYear = year - 1;
                }
                else {
                    preMonth = month - 1;
                    preYear = year;
                }

                this.year = preYear;
                this.month = preMonth;
                this.tableData = this.getDateTable(preYear, preMonth);
            },
            // 切换下月
            switchToNextMonth() {
                const {
                    month,
                    year
                } = this;

                let nextMonth;
                let nextYear;

                if (month === 11) {
                    nextMonth = 0;
                    nextYear = year + 1;
                }
                else {
                    nextMonth = month + 1;
                    nextYear = year;
                }

                this.year = nextYear;
                this.month = nextMonth;
                this.tableData = this.getDateTable(nextYear, nextMonth);
            },
            // 切换上一年
            switchToPreYear() {
                const {
                    month,
                    year
                } = this;

                let preYear = year - 1;
                this.year = preYear;
                this.tableData = this.getDateTable(preYear, month);
            },
            // 切换下一年
            switchToNextYear() {
                const {
                    month,
                    year
                } = this;

                let nextYear = year + 1;
                this.year = nextYear;
                this.tableData = this.getDateTable(nextYear, month);

            }

        }
    }
</script>

<style lang="scss">
    .y-datepicker {
        border: 1px solid green;
        height: 1000px;
        width: 1000px;
        user-select: none;

        &-header {
            font-size: 0;
            text-align: center;

            &-year,
            &-month {
                display: inline-block;
                vertical-align: center;
                font-size: 0;

                &-pre,
                &-current,
                &-next {
                    display: inline-block;
                    font-size: 14px;
                    cursor: pointer;
                }

                &-current {
                    cursor: default;
                }
            }
        }
    }
</style>