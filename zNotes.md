<!-- 个人笔记 -->   proto生成命令 node static.proto.js
1 安卓手机中rem单位border-radius:50%画圆变形

    使用transform scale，先提前把px/rem相关的值放大一倍。然后用transform scale(.5)缩小一倍，也就是我们想要的倍数。

2 帧动画，在IOS中使用rem 出现位置不正确

    首次加载页面时IOS计算rem单位的时候有问题，切换组件隐藏显示再加载动画的时候能正常显示，是因为此时计算rem已经正确了。所以延迟加载首页动画，等页面计算好rem单位后再加载动画就不会出现显示问题了。

3 IOS，帧动画 使用rotate() deg单位不显示

    父元素添加一下代码
    transform: perspective(1000);
    -moz-transform: perspective(1000);
    -o-transform: perspective(1000);
    -webkit-transform: perspective(1000);

4 文字省略号（单行，溢出隐藏）
 
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

    多行省略号：
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /*设置省略号在容器第四行文本后*/
        -webkit-line-clamp: 4; 
        overflow: hidden;
    
5 vue计算属性，watch写法，防抖函数
    computed: {
        sumData() {
            return this.$store.state.quick.sumData || []
        }
    },
    watch: {
        '$store.state.user.userInfo': {
            handler: function(val) {
                if (val) {
                    this.$store.dispatch('getBetList')
                }
             },
             immediate: true // 页面初始化执行一次
        }
    }

    onLoad: debounce(function () {
        console.log('babala')
    }, 100),

6 生成时间戳

    13位（毫秒000） Date.parse( new Date() )
    13位           new Date().getTime()

7 ios设置index不生效问题
    safrai浏览器是把z-index直接忽略了，直接忽略，忽略，不是别的，记住这个再看下面

    谷歌，火狐等浏览器都是直接将一个盒子一个盒子理解成一块一块的，想分层就按照你的z-index高低来区分，
    而safari不是，safari是将整个浏览器的页面看成一个整体，虽然也是一块一块的，但是他的分层是按照视觉感来分层的，它认为在下面的代码块总比在上面的代码块离人的眼睛近，所以就应该覆盖在上面的代码块上面，不应该用z-index来区分，而是应该用视觉来区分
    这样理解可能，大概，也许，或者就明白人家这个不是BUG而是独到的见解，
    刚好，有一个css属性叫 translateZ,如果有perspective属性的话，值越大，说明离人眼越近，块就越大，越应该在上层，好啦，这里就知道怎么解决了吧
    用视觉感来区分层级貌似也是一个不错的选择啦
        z-index: 999; /*这里是给chrome用的*/
        transform: translateZ(1000px); /*这里是给safari用的*/


9 navicat 链接mysql8.0   1251  错误

    1. 打开cmd命令窗口，输入命令 mysql -uroot -p 打开MySQL数据库，然后输入密码进行登录。
    2. 更改加密方式，输入命令 ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
    3. 更改密码,输入命令 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; 如果你要更改为其他密码，将命令中的123456替换为你的密码即可。
    4. 输入命令 FLUSH PRIVILEGES; 进行刷新。
    这个时候便可以使用Navicat连接我们的数据库，如果这个时候报出错误：ERROR 1396 (HY000): Operation ALTER USER failed for 'root'@'%' ：，那么我们需要先选择数据库，查看一下数据库中的数据，然后在执行上述的四步。即可以分别输入以下两条命令：

    use mysql;
    select user,host from user;

10  h5页面拉起app，没有app跳转下载
    download() {
      var ifr = document.createElement("iframe");
      ifr.src = "happyvoice://app/main?action=room&roomId=" + this.$route.query.roomId; // app配置
      ifr.style.display = "none";
      document.body.appendChild(ifr);
      window.setTimeout(function () {
        document.body.removeChild(ifr);
        // 下载地址
        if(isAndroid()){
          window.location.href = "https://www.happyyuyin.com/download/happyyuyin_1.0.0_release_2020_11_24.apk"
        } else if(isIOS()){
          // window.location.href = ""
        }
      }, 1000);
    },

11  点击复制功能
    <div>
      <span id="officialQQ">123456</span>
      <span class="cop" @click="copyqq">点击复制</span>
    </div>
    <div id="NewsToolBox"></div>

    copyqq() {
      let text = document.getElementById("officialQQ").innerHTML;
      let textarea = document.createElement("textarea"); //创建input对象
      let currentFocus = document.activeElement; //当前获得焦点的元素
      let toolBoxwrap = document.getElementById("NewsToolBox"); //将文本框插入到NewsToolBox这个之后
      let flag = "";
      toolBoxwrap.appendChild(textarea); //添加元素
      textarea.value = text;
      textarea.focus();
      if (textarea.setSelectionRange) {
        textarea.setSelectionRange(0, textarea.value.length); //获取光标起始位置到结束位置
      } else {
        textarea.select();
      }
      try {
        flag = document.execCommand("copy"); //执行复制
      } catch (eo) {
        flag = false;
      }
      toolBoxwrap.removeChild(textarea); //删除元素
      currentFocus.focus();
      Toast(flag ? "复制成功" : "复制失败");
    }, 

12  禁止长按选择复制
    *{
        -webkit-touch-callout:none; /*系统默认菜单被禁用*/
        -webkit-user-select:none; /*webkit浏览器*/
        -khtml-user-select:none; /*早期浏览器*/
        -moz-user-select:none;/*火狐*/
        -ms-user-select:none; /*IE10*/
        user-select:none;
    }
    以上代码也会禁止输入框的使用，可用以下代码解决：
    input {
        -webkit-user-select:auto; /*webkit浏览器*/
    }
    textarea {                                
        -webkit-user-select:auto; /*webkit浏览器*/
    }

13  