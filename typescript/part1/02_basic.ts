let a: number; //typescript 中所有类型都是小写，不能大写

a = 10;

//a = "hello"; //报错， 变量a的类型不能改变

let c = false;
c=true;

//JS 中的函数是不考虑函数的个数和类型
function sum(a:number, b:number) : number{
    return a + b;
    //return a + 'hello';//typescript 会检查返回值类型
}
console.log(sum(1,4));
//console.log(sum(1, "23")); //typescript会检查参数类型，
//console.log(sum(1, 23, 789)); //typescript会检查参数个数

let result = sum( 22, 33);
