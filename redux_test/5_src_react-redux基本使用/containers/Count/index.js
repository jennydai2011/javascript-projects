import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'

import {connect} from 'react-redux'



/**
 * 1. mapStateToProps返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组案件props的key， value就作为传递给UI组件的props的value
 * 3.mapStateToProps用于传递状态
 * 
 * @param {} state 
 * @returns 
 */
function mapStateToProps(state){
    return {count: state}
}
/**
 * 1. mapDispatchToProps返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组案件props的key， value就作为传递给UI组件的props的value
 * 3.mapDispatchToProps用于传递状态
 * 
 * @param {} state 
 * @returns 
 */
function mapDispatchToProps(dispatch){
    return {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number, time) => dispatch(createIncrementAsyncAction(number, time)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)