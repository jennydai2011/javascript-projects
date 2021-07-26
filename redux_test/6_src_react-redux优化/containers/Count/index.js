//优化: container组件和UI组件合并为一个组件，不需要2个jsx文件
//import CountUI from '../../components/Count'

import React, { Component } from 'react'

import {
    createIncrementAction,
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'


import {connect} from 'react-redux'

//定义UI 组件
class Count extends Component {
    state = {}
    
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }
    incrementIfOdd= () => {
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0 ){
            this.props.jia(value*1)
        }
    }
    incrementAsync= () => {
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1, 500)
    }

    render() {
        console.log('UI 组件收到的props： ', this.props)
        return (
            <div>
                <h1>当前求和为: {this.props.count}</h1>
                <select ref={c => this.selectNumber = c }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">4</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和结果为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>

            </div>
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count: state}),
    // dispatch => ({
    //         jia:number => dispatch(createIncrementAction(number)),
    //         jian:number => dispatch(createDecrementAction(number)),
    //         jiaAsync:(number, time) => dispatch(createIncrementAsyncAction(number, time)) 
    // })

    //优化mapDispatch
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction 
    }
)(Count)