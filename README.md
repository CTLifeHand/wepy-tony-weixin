# wepy-tony-weixin

### 可以优化的地方 : 就算我不import 项目一样去解析所有wpy的文件 导致任何一个空文件都会导致报错

- 改成wpy1的后缀就可以了

```
TypeError: Cannot read property 'script' of null
    at /usr/local/lib/node_modules/wepy-cli/lib/compile.js:132:28
    at Array.forEach (<anonymous>)
    at /usr/local/lib/node_modules/wepy-cli/lib/compile.js:131:49
    at Array.forEach (<anonymous>)
    at Object.findReference (/usr/local/lib/node_modules/wepy-cli/lib/compile.js:124:19)
    at /usr/local/lib/node_modules/wepy-cli/lib/compile.js:361:40
    at Array.forEach (<anonymous>)
    at Object.build (/usr/local/lib/node_modules/wepy-cli/lib/compile.js:356:19)
    at Command.<anonymous> (/usr/local/lib/node_modules/wepy-cli/lib/wepy.js:243:27)
    at Command.listener (/usr/local/lib/node_modules/wepy-cli/node_modules/commander/index.js:315:8)
```


### WePY项目构建
- 小程序官方程序的默认模板

```
全局安装或更新WePY命令行工具

npm install wepy-cli -g
在开发目录中生成Demo开发项目

wepy new myproject
切换至项目目录

cd myproject
开启实时编译

wepy build --watch
```


### 重要提醒
- 使用微信开发者工具-->添加项目，项目目录请选择dist目录。

- 微信开发者工具-->项目-->关闭ES6转ES5。 重要：漏掉此项会运行报错。

- 微信开发者工具-->项目-->关闭上传代码时样式自动补全。 重要：某些情况下漏掉此项也会运行报错。

- 微信开发者工具-->项目-->关闭代码压缩上传。 重要：开启后，会导致真机computed, props.sync 等等属性失效。（注：压缩功能可使用WePY提供的build指令代替，详见后文相关介绍以及Demo项目根目录中的wepy.config.js和package.json文件。）

- 本地项目根目录运行wepy build --watch，开启实时编译。（注：如果同时在微信开发者工具-->设置-->编辑器中勾选了文件保存时自动编译小程序，将可以实时预览，非常方便。）

### 代码高亮
- 文件后缀为.wpy，可共用VUE的高亮规则

- 下面提供一些常见IDE或编辑器中实现代码高亮的相关设置步骤以供参考(也可通过更改文件后缀名的方式来实现高亮，详见后文相关介绍)。

- VS Code
    - 1. 在 Code 里先安装 Vue 的语法高亮插件 Vetur。

    - 2. 打开任意 .wpy 文件。

    - 3. 点击右下角的选择语言模式，默认为纯文本。

    - 4. 在弹出的窗口中选择 .wpy 的配置文件关联...。

    - 5. 在选择要与 .wpy 关联的语言模式 中选择 Vue。
