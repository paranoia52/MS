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
            : date.getMonth() + 1) + "-";
    const D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return (
        Y +
        "-" +
        M +
        D +
        " " +
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
function debounce(func, wait, immediate) {
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
function throttle(func, wait) {
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
