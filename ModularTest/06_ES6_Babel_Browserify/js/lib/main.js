'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(module1, module2) //不能直接使用模块，要先解构对象，再使用对象属性或方法

(0, _module.foo)(); //引入其它模块


//语法 import xxx from '路径'

//ES6要求必须要用对象引用方式引入

(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();

console.log(_module4.default.msg);
_module4.default.m1();
_module4.default.m2();

//引入第三方库,直接引入包名，在node_modules下


(0, _jquery2.default)('body').css('background', 'green');