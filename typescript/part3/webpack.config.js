const path= require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack中所有配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        //指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        //指定打包后的文件
        filename: "bundle.js",
    },

    //指定webpack打包要用到的模块
    module :{
        //指定加载规则
        rules: [
            {
                //test指定规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置babel， 如果配置比较简单，只需要设 babel-loader
                    {   

                        loader: 'babel-loader',
                        //babel-loader 选项
                        options:{

                            presets:[
                                [   
                                    //指定环境插件
                                    "@babel/preset-ent",
                                    //配置信息
                                    {   
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88"
                                        },
                                        //指定js的版本
                                        "corejs":"3",

                                        //使用corejs的方式"usage"表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }

                    },
                    
                    'ts-loader'],
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    },

    //配置插件
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            //title: "customized app page"
            template: "./src/index.html"
        }),
    ],

    //resolve
    resolve:{
        extensions: ['.ts', '.js']
    }
};