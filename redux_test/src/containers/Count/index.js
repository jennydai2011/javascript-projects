import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'

import {connect} from 'react-redux'


export default connect(
    state => ({count: state}),
    // dispatch => ({
    //         jia:number => dispatch(createIncrementAction(number)),
    //         jian:number => dispatch(createDecrementAction(number)),
    //         jiaAsync:(number, time) => dispatch(createIncrementAsyncAction(number, time)) 
    // })

    
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction 
    }
)(CountUI)