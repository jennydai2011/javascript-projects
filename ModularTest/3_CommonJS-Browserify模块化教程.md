## Browserify 模块化使用教程
1. 创建项目结构
    ```
    |-js
        |-dist //打包生成文件的目录
        |-src //源码所在的目录
            |-module1.js
            |-module2.js
            |-module3.js
            |-app.js //应用主源文件
    |-index.html
    |-package.json
        {
            "name": "browserify-test"
            "version": 
        }
    ```

2. 下载browserify
* 全局： npm install browserfiy -g
* 局部： npm install browserify --save -dev

3.定义模块代码
* module1.js
    ```
    //module.exports = value 暴露一个对象
    module.exports = {
        msg: 'module1',
        foo(){
            console.log('module 1 foo()', this.msg)
        }
    }

    ```
* module2.js
    ```
    //暴露一个函数 module.exports = function (){}
    module.exports = function (){
    console.log("module2 ")
    }

    //后面如果再写module.exports就会覆盖之前的module.exports
    ```
* module3.js
    ```
    //export.XXX=value

    exports.foo = function (){
        console.log("foo() module3")
    }

    exports.bar = function (){
        console.log("bar() module3")
    }

    exports.arr = [8, 2,1,2,3,3,5,7,8,8]
    ```

* 打包处理js:
 * browserify js/src/app.js -o js/dist/bundle.js

* 页面引入
    ```
    <script src="./js/dist/bundle.js" type="text/javascript"></script>
    
    ```