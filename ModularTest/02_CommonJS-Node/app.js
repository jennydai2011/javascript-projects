//将其他模块汇集到主模块
let uniq = require('uniq')

let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

//module1是一个对象
module1.foo();

//module2是一个函数，直接调用
module2()

//module3是一个exports对象？
module3.foo();
module3.bar();

let result = uniq(module3.arr)//不仅去除重复的元素，还按字母顺序排序
console.log(result)
