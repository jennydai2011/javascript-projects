//object 表示一个js对象
let aobj: object; //不实用，不会这样使用
aobj  ={};
aobj = function(){};

//{}用来指定对象中可以包含哪些属性
//语法: {属性名：属性值}， typescript会检查属性一定存在，且类型匹配
let bobj: {name: string};
//bobj ={} ;//会报错,缺属性
//bobj={name2:"s"}//会报错， 属性名字不匹配
//bobj={name:10}//会报错， 属性值类型不匹配
//bobj={name:"2", age:10}//会报错， 多了属性

//属性名后面加问号，代表可选，可能有， 可能没有
let cobj: {name: string, age?:number}
cobj={name:"22"} ; //只有name必须加，age可加可不加

//
//[anyName:string]: any表示任意属性，任意类型
let dobj: {name: string, [anyName:string]: any}
dobj={name:"22"} ; //只有name必须加，其它可加可不加

//限定函数的参数个数， 类型 和 返回 类型
let dfun: (a:number, b: number) => number
dfun = function(n1: number, n2: number) : number {
    return 10;
}

//限定 array的元素类型 - 方式1
let e:  string[];
//e = ['a', 'b', 1] //会报错，所有元素类型都必须是string

//限定 array的元素类型 - 方式2
let g : Array<number>;
g = [1, 2, 3]

//typescript add 2 more types, tuple and num
//tuple 就是长度固定的数组
//tuple 语法 [类型， 类型]
let h: [string, string]
//h=['1', '2', '3'] //会报错，长度不对，只能有2 个元素

//enum
enum Gender{
    Male= 0,
    Female=1
}
let i :{name:string, gender:Gender};
i={
    name:'name',
    gender: Gender.Male   // 'male'
}
console.log(i.gender === Gender.Male)

//string or number
let j : string | number ;

//and
let j2: {name:string} & {age: number};
//j2={name:"1"} //error, missing age
j2={name:"1", age:10}

//alias
type myType = 1 | 2 | 3 | 4 | 5;
let m: myType; 
let k: myType;
//k=6; //error, only can be 1-5