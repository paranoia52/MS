<!-- 个人笔记 -->   
# proto生成命令 node static.proto.js
# 8位二进制为一个字节 ASCII码用7位表示 128个字符
# 插件 shadow reader
# 遇到的坑
  * 安卓手机中rem单位border-radius:50%画圆变形
      使用transform scale，先提前把px/rem相关的值放大一倍。
      然后用transform scale(.5)缩小一倍，也就是我们想要的倍数。

  * 帧动画，在IOS中使用rem 出现位置不正确
      首次加载页面时IOS计算rem单位的时候有问题，切换组件隐藏显示再加载动画的时候能正常显示，
      是因为此时计算rem已经正确了。所以延迟加载首页动画，等页面计算好rem单位后再加载动画就不会出现显示问题了。

  * vant-tabs 绑定的active是Number 类型！
      this.active = Number(--)

  * vue 点击子元素不触发父元素事件  子元素事件用stop修饰符

  * decodeURI转译 由于decodeURI转码时，通过%进行解析，如果字符串中存在% 报错Uncaught URIError: URI malformed
      URI.indexOf('%') > -1 ? URI.replace(/%/g,'%25') : URI

  * Element-UI中el-input无法输入 - 因为组件嵌套太深，导致无法组件无法刷新。
      使用@input事件，在输入时进行强制刷新
      <el-input v-model="input2" @input="onInput()" /> 　　
      onInput(){
        this.$forceUpdate();
      }
  * Vue+Elementui 项目滚动条消失问题 切换至x页面后，再返回首页，首页的滚动条就消失了，但是高度却是超出页面的。
    每次切换到x页面后，body的style总会被写入一个 [oveflow:hidden], 并且只在生产环境下，才会有这个情况。
    问题出在 el-image组件每次点击都会调用这个函数，该函数就会更改body的属性
    知道问题在哪，解决就简单了，重新覆盖下body属性即可。
  
  * Elementui 用了合并行 表格不能固定高度（会有合并行不显示的bug）

# CSS
  * 单行，添加省略号
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;

  * 多行省略号：
      display: -webkit-box;
      -webkit-box-orient: vertical;
      /*设置省略号在容器第四行文本后*/
      -webkit-line-clamp: 4; 
      overflow: hidden;

  * 抬头缩进
      text-indent: 2em;

  * 字间距
      text-indent：5px;

  * 占位隐藏
      visibility:hidden;
  
  * 元素缩小 位置居左
      transform: scale(0.8);
      transform-origin: left;
      
  * 奇数偶数选择器
      div:nth-child(odd) {}
      div:nth-child(even) {}

  * 文字竖着排
      -webkit-writing-mode: vertical-rl; // 文字竖排
      writing-mode: vertical-rl;

  * IOS index无效
      z-index: 999; /*这里是给chrome用的*/
      transform: translateZ(1000px); /*这里是给safari用的*/

  * IOS，帧动画 使用rotate() deg单位不显示
    父元素添加以下代码
      transform: perspective(1000);
      -moz-transform: perspective(1000);
      -o-transform: perspective(1000);
      -webkit-transform: perspective(1000);

  * 浏览器禁止复制
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

# JS
  * 字符串翻转
    Str = name.split('').reverse().join(''); 
  
  * 去除字符串的第一个字符
    newStr = Str.slice(1)

  * 删除对象某一属性
    var obj = { name: 'zhagnsan', age: 19}     delete obj.name

  * 生成当前时间戳
    new Date().getTime()
    Date.parse( new Date() )   // 后3位000

  * VUE 回车键登陆
    @keyup.enter.native="login"

  * 点击复制功能
    <div>
      <span id="officialQQ">123456</span>
      <span class="cop" @click="copyqq">点击复制</span>
    </div>
    <div id="NewsToolBox"></div>
    <script>
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
    </script>
    
  * h5页面拉起app，没有app跳转下载
    download() {
      const schemeUrl = "happyvoice://app/main"
      if(isIOS()) {
        window.location.href = schemeUrl
        setTimeout(()=>{
          window.location.href = this.downloadlink
        },500)
      } else{
        var r = document.createElement("iframe");
          (r.src = schemeUrl), (r.style.display = "none"), document.body.appendChild(r);
        setTimeout(()=>{
          document.body.removeChild(r);
          window.location.href = this.downloadlink
        },500)
      }
    }

# vue计算属性，watch写法，防抖函数，url在data中书写 store
  * computed: {
        sumData() {
          let sum = 0
          this.goodsList.map((item) => {
            this.checkList.indexOf(item.Id) != -1 ? (sum += item.Price * 0.8) : ''
          })
          return sum
        }
    },

  * watch: {
        '$store.state.user.userInfo': {
            handler: function(val) {
                if (val) {
                    this.$store.dispatch('getBetList')
                }
             },
             immediate: true // 页面初始化执行一次
        }
    }

  * onLoad: debounce(function () {
        console.log('babala')
    }, 100),

  * imgurl: require('@/assets/img/head.png')

  * filters: {
      fil(val) {
        return val.slice(0, 3) + '**' + val.slice(val.length - 4, val.length)
      }
    },

  * store模块化调用方法
    this.$store.commit('module/mutation', value)
    console.log(this.$store.state.module.list)




# vscode setting.json
  {
  // tab 大小为2个空格
  "editor.tabSize": 2,
  // 100 列后换行
  "editor.wordWrapColumn": 130,
  // 保存时格式化
  "editor.formatOnSave": false,
  // 开启 vscode 文件路径导航
  "breadcrumbs.enabled": true,
  // 选择 vue 文件中 template 的格式化工具
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // 显示 markdown 中英文切换时产生的特殊字符
  "editor.renderControlCharacters": true,
  // eslint 检测文件类型
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // vetur 的自定义设置
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 130, // 设置多个字符后换行 0 表示忽略
      "wrap_attributes": "auto", // html 标签属性 换行设置[auto|force|force-aligned|force-expand-multiline] ["auto"]
      "end_with_newline": true // 在文件结尾添加新行
    },
    "prettier": {
      "semi": false, //要不要分号
      "singleQuote": true //单引号
    }
  },
  // 修改500ms后自动保存
  "editor.formatOnSaveTimeout": 500,
  "files.autoSave": "off",
  "files.autoSaveDelay": 500,
  "editor.codeActionsOnSaveTimeout": 500,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "path-intellisense.mappings": {
    "@": "web_front_admin/src",
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": false
  },
  "python.jediEnabled": false,
  "terminal.integrated.automationShell.windows": "C:\\Windows\\sysnative\\cmd.exe",
  "editor.fontLigatures": null,
  "workbench.colorCustomizations": {
    "statusBar.background": "#1E1E1E", // 状态栏bg
    "statusBar.foreground": "#999999", // 状态栏文字color
    "statusBar.noFolderBackground": "#0A0A0D",
    "statusBar.debuggingBackground": "#511f1f"
  }
}