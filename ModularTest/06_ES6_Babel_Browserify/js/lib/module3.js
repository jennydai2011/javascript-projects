"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _module = require("../../../02_CommonJS-Node/modules/module2");

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//如果需要暴露多个方法，全部放到一个对象中
exports.default = {
    msg: '默认暴露',
    m1: function m1() {
        console.log("m1");
    },
    m2: function m2() {
        console.log("m2");
    }
}; //默认暴露
//export default--只能有一个默认暴露
/* export default ()=>{
    console.log('export default arrow function')
} */