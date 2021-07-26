import {INCREMENT, DECREMENT} from '../../redux/constant'
/**
 * 1. reducer 是一个函数
 * 2. 接收2个参数
 * @param {} preState 
 * @param {*} action 
 */
const initState = 10
export default function countReducer(preState=initState, action){
    console.log(preState, action)
    //if(preState === undefined) preState = 0
    const{type, data} = action
    switch(type){
        case INCREMENT:
            console.log('000')
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}