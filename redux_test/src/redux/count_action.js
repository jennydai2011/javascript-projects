/**
 * 该组件专门为Count组件生成action对象
 */
import {INCREMENT, DECREMENT} from './constant'

 export const createIncrementAction = data => ({type:INCREMENT, data})
 export const createDecrementAction = data => ({type:DECREMENT, data})


//异步action, action值为函数，异步action一般调用同步函数
//异步action不是必须的，由组件自己发起异步调用
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}