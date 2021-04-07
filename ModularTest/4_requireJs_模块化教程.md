## require.js 使用教程
1. 下载require.js, 并引入html
 * 官网: http://www.requirejs.org
 * github: https://github.com/requirejs/requirejs
 * 将require.js 导入项目， js/libs/require.js

2. 创建项目结构
    ```
    |-js
        |-libs
            |-requirejs
        |-modules
            |-alerter.js
            |-dataService.js
        |-main.js
    |-index.html

    ```
3. 定义require.js的模块代码
    * dataService.js
    