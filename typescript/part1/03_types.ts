let aa: 10; //typescript可以使用字面量进行类型声明
aa= 10;

let b: "male" | "female"; // | is or
b ="female";
//b="other" ; //typescript会检查 联合声明的值范围

let cc: boolean | string;
cc= true;
cc = 'hello';

//any表示任意类型，相当于不检查类型， 不建议使用
let d: any;
d=10;
d='hello'
d=true;

//如果声明时不指定类型，TS解析器会自动判断类型为any， 也不建议使用，应该尽量避免
let e;

//unknown表示未知类型
let ef : unknown;
ef =10;
ef ="hello";
ef= true;

let s:string;
//s =d;//d 的类型是any，赋值后s的类型也是any，any会传递，会引出隐藏问题，尽量不要使用any

//s = ef; //不能把unknown类型赋值给其它类型，是一种安全的 任意类型

//先检查类型，再赋值
if(typeof ef === "string"){
    s = ef; 
}

//类型断言，相当于先检查e的类型 （ if typeof ef ==="string"), 是if的简写
//两种简写方法， as 或者 <>
s = ef as string;
s =<string>e;

//函数不指定返回类型时，根据 return的值推断
function fn() {
    return true;
}

//指定返回类型为void,则不能返回值，但是可以为null
function f2(): void{
    //return "s"; //
    return null;
}

//never 表示永远不会返回结果, 会返回错误
function fn3() : never{
    throw new Error("error")
}
