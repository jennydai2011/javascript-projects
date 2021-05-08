console.log('hello TS!');
let a; //typescript 中所有类型都是小写，不能大写
a = 10;
//a = "hello"; //报错， 变量a的类型不能改变
let c = false;
c = true;
//JS 中的函数是不考虑函数的个数和类型
function sum(a, b) {
    return a + b;
    //return a + 'hello';//typescript 会检查返回值类型
}
console.log(sum(1, 4));
//console.log(sum(1, "23")); //typescript会检查参数类型，
//console.log(sum(1, 23, 789)); //typescript会检查参数个数
let result = sum(22, 33);
let aa; //typescript可以使用字面量进行类型声明
aa = 10;
let b; // | is or
b = "female";
//b="other" ; //typescript会检查 联合声明的值范围
let cc;
cc = true;
cc = 'hello';
//any表示任意类型，相当于不检查类型， 不建议使用
let d;
d = 10;
d = 'hello';
d = true;
//如果声明时不指定类型，TS解析器会自动判断类型为any， 也不建议使用，应该尽量避免
let e;
//unknown表示未知类型
let ef;
ef = 10;
ef = "hello";
ef = true;
let s;
//s =d;//d 的类型是any，赋值后s的类型也是any，any会传递，会引出隐藏问题，尽量不要使用any
//s = ef; //不能把unknown类型赋值给其它类型，是一种安全的 任意类型
//先检查类型，再赋值
if (typeof ef === "string") {
    s = ef;
}
//类型断言，相当于先检查e的类型 （ if typeof ef ==="string"), 是if的简写
//两种简写方法， as 或者 <>
s = ef;
s = e;
//函数不指定返回类型时，根据 return的值推断
function fn() {
    return true;
}
//指定返回类型为void,则不能返回值，但是可以为null
function f2() {
    //return "s"; //
    return null;
}
//never 表示永远不会返回结果, 会返回错误
function fn3() {
    throw new Error("error");
}
//object 表示一个js对象
let aobj; //不实用，不会这样使用
aobj = {};
aobj = function () { };
//{}用来指定对象中可以包含哪些属性
//语法: {属性名：属性值}， typescript会检查属性一定存在，且类型匹配
let bobj;
//bobj ={} ;//会报错,缺属性
//bobj={name2:"s"}//会报错， 属性名字不匹配
//bobj={name:10}//会报错， 属性值类型不匹配
//bobj={name:"2", age:10}//会报错， 多了属性
//属性名后面加问号，代表可选，可能有， 可能没有
let cobj;
cobj = { name: "22" }; //只有name必须加，age可加可不加
//
//[anyName:string]: any表示任意属性，任意类型
let dobj;
dobj = { name: "22" }; //只有name必须加，其它可加可不加
//限定函数的参数个数， 类型 和 返回 类型
let dfun;
dfun = function (n1, n2) {
    return 10;
};
//限定 array的元素类型 - 方式1
let e;
//e = ['a', 'b', 1] //会报错，所有元素类型都必须是string
//限定 array的元素类型 - 方式2
let g;
g = [1, 2, 3];
//typescript add 2 more types, tuple and num
//tuple 就是长度固定的数组
//tuple 语法 [类型， 类型]
let h;
//h=['1', '2', '3'] //会报错，长度不对，只能有2 个元素
//enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: 'name',
    gender: Gender.Male // 'male'
};
console.log(i.gender === Gender.Male);
//string or number
let j;
//and
let j2;
//j2={name:"1"} //error, missing age
j2 = { name: "1", age: 10 };
let m;
let k;
//k=6; //error, only can be 1-5
