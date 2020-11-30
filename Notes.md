<!-- 个人笔记 -->
1 安卓手机中rem单位border-radius:50%画圆变形

    使用transform scale，先提前把px/rem相关的值放大一倍。然后用transform scale(.5)缩小一倍，也就是我们想要的倍数。

2 帧动画，在IOS中使用rem 出现位置不正确

    首次加载页面时IOS计算rem单位的时候有问题，切换组件隐藏显示再加载动画的时候能正常显示，是因为此时计算rem已经正确了。所以延迟加载首页动画，等页面计算好rem单位后再加载动画就不会出现显示问题了。

3  IOS，帧动画 使用rotate() deg单位不显示

    父元素添加一下代码
    transform: perspective(1000);
    -moz-transform: perspective(1000);
    -o-transform: perspective(1000);
    -webkit-transform: perspective(1000);

4  文字省略号（单行，溢出隐藏）
 
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

    多行省略号：
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /*设置省略号在容器第四行文本后*/
        -webkit-line-clamp: 4; 
        overflow: hidden;
    
5  vue计算属性，watch写法

    computed: {
        sumData() {
            return this.$store.state.quick.sumData || []
        }
    }，
    watch: {
         '$store.state.user.userInfo': {
            handler: function(val) {
                if (val) {
                    this.$store.dispatch('getBetList')
                }
             },
             immediate: true
        }
    }

6 生成时间戳

    13位（毫秒000） Date.parse( new Date() )
    13位                   new Date().getTime()