//默认暴露
//export default--只能有一个默认暴露
/* export default ()=>{
    console.log('export default arrow function')
} */

import module2 from "../../../02_CommonJS-Node/modules/module2"

//如果需要暴露多个方法，全部放到一个对象中
export default {
    msg: '默认暴露',
    m1(){
        console.log("m1")
    },
    m2(){
        console.log("m2")
    }
}
