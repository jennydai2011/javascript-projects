## Node.js 模块化教程
1. 下载安装Node.js
2. 创建项目结构
    ```
    |-modules
        |-module1.js
        |-module2.js
        |-moudle3.js
    |-app.js
    |-package.json
        {
            "name": "CommonJS-node",
            "version": "1.0.0"
        }
    ```
3. 下载第三方模块
    * npm install uniq --save
4. 模块化编码
 * module1.js
    ```
    //module.exports = value 暴露一个对象
    module.exports = {
        msg: 'module1',
        foo(){
            console.log(this.msg)
        }
    }

    ```
* module2.js
    ```
    //暴露一个函数 module.exports = function (){}
    module.exports = function (){
    console.log("module2")
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