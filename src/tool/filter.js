// 格式化时间（参数时间戳） Y-m-d H:i:s
export const formatTime = (time) => {
    if ((time + '').length === 10) {
        time = time * 1000
    }
    const date = new Date(time);
    const Y = date.getFullYear();
    const M =
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1);
    const D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return (
        Y + "-" +
        M + "-" +
        D + " " +
        (h.toString().length === 1 ? "0" + h + ":" : h + ":") +
        (m.toString().length === 1 ? "0" + m + ":" : m + ":") +
        (s.toString().length === 1 ? "0" + s : s)
    );
}
// 格式化时间（参数UTC时间格式） Y-m-d H:i:s
export const formatTimeUTC = (utc_datetime) => {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0, T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
    var new_datetime = year_month_day + " " + hour_minute_second;

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    var timestamp = timestamp + 8 * 60 * 60;

    // 时间戳转为时间
    function add0(m) { return m < 10 ? '0' + m : m }
    var time = new Date(timestamp * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

// 判断微信浏览器
export const isWeiXin = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
// 判断安卓
export const isAndroid = () => {
    const u = navigator.userAgent,
        app = navigator.appVersion;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}
// 判断IOS
export const isIOS = () => {
    const u = navigator.userAgent,
        app = navigator.appVersion;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

// 对象转字符串
export const stringifyObj = (obj) => {
    var newObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] instanceof Function) {
            newObj[key] = obj[key].toString().replace(/[\n\t]/g, "");
            continue;
        }
        newObj[key] = obj[key];
    }
    return JSON.stringify(newObj);
}
// 字符串转对象
export const parseObj = (strObj) => {
    var obj = JSON.parse(strObj);
    var funReg = /function\s\(.*\)/;
    for (var key in obj) {
        if (funReg.test(obj[key])) {
            try {
                var fun = new Function("return " + obj[key])();
                if (fun instanceof Function) {
                    obj[key] = fun;
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
    return obj;
}
/**
 * @desc 函数防抖
 * @param func 目标函数
 * @param wait 延迟执行毫秒数
 * @param immediate true - 立即执行， false - 延迟执行
 */
export function debounce(func, wait, immediate) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) func.apply(context, args);
        } else {
            timer = setTimeout(() => {
                func.apply
            }, wait)
        }
    }
}
// 节流函数，wait - 时间戳
export function throttle(func, wait) {
    let previous = 0;
    return function () {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
// 获取日期
// 当天开始日期（0点）
export const showDayFirstDay = () => {
    const beginTime = Date.parse(
        new Date(new Date(new Date().toLocaleDateString()).getTime())
    )
    return beginTime
}
// 本周开始日期（0点）
export const showWeekFirstDay = () => {
    const nowTemp = new Date() // 当前时间
    const oneDayLong = 24 * 60 * 60 * 1000 // 一天的毫秒数
    // tslint:disable-next-line:variable-name
    const c_time = nowTemp.getTime() // 当前时间的毫秒时间
    // tslint:disable-next-line:variable-name
    const c_day = nowTemp.getDay() || 7 // 当前时间的星期几
    // tslint:disable-next-line:variable-name
    const m_time = c_time - (c_day - 1) * oneDayLong // 当前周一的毫秒时间
    const monday = new Date(m_time) // 设置周一时间对象
    // tslint:disable-next-line:variable-name
    const m_year = monday.getFullYear()
    // tslint:disable-next-line:variable-name
    const m_month = monday.getMonth() + 1
    // tslint:disable-next-line:variable-name
    const m_date = monday.getDate()
    return Date.parse(m_year + '-' + m_month + '-' + m_date + ' ' + '00:00:00') // 周一的年月日
}
// 本月第一天（0点）
export const showmothfristday = () => {
    const data = new Date() // 本月
    data.setDate(1)
    data.setHours(0)
    data.setSeconds(0)
    data.setMinutes(0)
    // return this.getNowFormatDate(data) + " " + "00:00:00";
    return Date.parse(data)
}
// 本月最后一天（0点）
export const showmothLastday = () => {
    const date = new Date()
    let currentMonth = date.getMonth()
    const nextMonth = ++currentMonth
    const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
    const oneDay = 1000 * 60 * 60 * 24
    return Date.parse(new Date(nextMonthFirstDay - oneDay))
}
