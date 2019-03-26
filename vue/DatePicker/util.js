// 获取年份
export const getCurrentYear = () => {
    return new Date().getFullYear();
};

// 获取月份
export const getCurrentMonth = () => {
    return +new Date().getMonth();
};

// 获取年份
export const getCurrentDay = () => {
    return new Date().getDate();
};

// 获取星期几
export const getDay = () => {
    return new Date().getDay();
};

export const getDate = (year, month, day) => {
    return new Date(year, month, day).toDateString();
};

// 是否是闰年
const isLeapYear = (year) => {
    const cond1 = year % 4 === 0;  //条件1：年份必须要能被4整除
    const cond2 = year % 100 !== 0;  //条件2：年份不能是整百数
    const cond3 = year % 400 === 0;  //条件3：年份是400的倍数
    //当条件1和条件2同时成立时，就肯定是闰年，所以条件1和条件2之间为“与”的关系。
    //如果条件1和条件2不能同时成立，但如果条件3能成立，则仍然是闰年。所以条件3与前2项为“或”的关系。
    //所以得出判断闰年的表达式：
    return cond1 && cond2 || cond3;
};

// 每月有多少天
export const totalDaysInMonth = [
    31,
    isLeapYear(getCurrentYear()) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];

// 每周对应的日期
export const dateInWeek = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
};

