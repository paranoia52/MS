// 十位时间戳 Y-m-d H:i:s
export const formattingTime = (time) => {
    const date = new Date(time * 1000);
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
