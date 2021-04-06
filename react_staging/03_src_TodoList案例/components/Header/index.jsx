import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'


export default class Header extends Component {
    //对接收的props进行类型，必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        const {target} = event;

        console.log("Header", target.value);

       
        
        if(event.keyCode !== 13) 
            return
        else{
            //添加的todo不能为空
            if(target.value.trim() === ''){
                alert('输入不能为空')
                return 
            }
            //make a new todo obj
            const todoObj = {id:nanoid(), name:target.value, done:false}

             //调用来自父组件的函数--达到把数据从子组件传到父组件的效果
            this.props.addTodo(todoObj);

            //清空输入
            target.value = ''
        }
    }
    render() {
        console.log(this.props.a);
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
