// 格式化时间（参数时间戳） Y-m-d H:i:s
export const formatTime = (time) => {
    if((time + '').length === 10){
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

// 判断微信浏览器
export const isWeiXin = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
// 判断是否是安卓
export const isAndroid = () => {
    // 获取手机系统信息
    const u = navigator.userAgent,
    return u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
}
// 判断是否是IOS
export const isIOS = () => {
    // 获取手机系统信息
    const u = navigator.userAgent,
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
// 字符串转BASE64
export const fltStringToBase = (val) => {
    const Base64 = require('js-base64').Base64
    const base = Base64.encode(val)
    return base
}
// BASE64转字符串
export const fltBaseToString = (val) => {
    const Base64 = require('js-base64').Base64
    const base = Base64.decode(val)
    return base
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
    return function() {
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
        timer  = setTimeout(() => {
          func.apply
        }, wait)
      }
    }
}
// 节流函数，wait - 时间戳
function throttle(func, wait) {
    let previous = 0;
    return function() {
      let now = Date.now();
      let context = this;
      let args = arguments;
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    }
}
