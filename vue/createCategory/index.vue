<template>
    <section class="view">
        <div class="view-input">
            <Input search enter-button="新增" placeholder="增加一级目录" />
        </div>
        <Table :columns="columns1" :data="data1" border></Table>
        <div class="view-input-2">
            <Input search enter-button="新增" placeholder="增加二级目录" />
        </div>
        <Table :columns="columns2" :data="data2" border></Table>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                columns1: [
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '描述',
                        key: 'address'
                    },
                    {
                        title: '删除',
                        key: 'delete',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: '工具',
                        age: 18,
                        address: '工具类图书',
                        date: '2016-10-03'
                    },
                    {
                        name: '思考',
                        age: 24,
                        address: '思考类图书',
                        date: '2016-10-01'
                    },
                    {
                        name: '幼儿教育',
                        age: 30,
                        address: '幼儿教育类图书',
                        date: '2016-10-02'
                    },
                    {
                        name: '科技',
                        age: 26,
                        address: '科技类图书',
                        date: '2016-10-04'
                    }
                ],
                columns2: [
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '描述',
                        key: 'address'
                    },
                    {
                        title: '删除',
                        key: 'delete',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data2: [
                    {
                        name: '工具',
                        age: 18,
                        address: '工具类图书',
                        date: '2016-10-03'
                    },
                    {
                        name: '思考',
                        age: 24,
                        address: '思考类图书',
                        date: '2016-10-01'
                    },
                    {
                        name: '幼儿教育',
                        age: 30,
                        address: '幼儿教育类图书',
                        date: '2016-10-02'
                    },
                    {
                        name: '科技',
                        age: 26,
                        address: '科技类图书',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    body {
        height: 100%;
        background-color: #de335e !important;
        overflow: scroll;
    }

    $content-width: 1200px;
    .view {
        background-color: #fff;
        margin: 30px auto;
        padding: 30px;
        width: $content-width;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px #333;

        &-input {
            margin-bottom: 30px;

            &-2 {
                margin: 30px 0;
            }
        }
    }
</style>