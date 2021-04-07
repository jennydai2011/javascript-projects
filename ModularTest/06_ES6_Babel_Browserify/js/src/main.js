//引入其它模块



//语法 import xxx from '路径'

//ES6要求必须要用对象引用方式引入

import {foo, bar} from './module1'
import {fun, fun2} from  './module2'
import module3 from './module3'
//console.log(module1, module2) //不能直接使用模块，要先解构对象，再使用对象属性或方法

foo()
bar()
fun()
fun2()

console.log(module3.msg)
module3.m1();
module3.m2();


//引入第三方库,直接引入包名，在node_modules下
import $ from 'jquery'

$('body').css('background','green')
