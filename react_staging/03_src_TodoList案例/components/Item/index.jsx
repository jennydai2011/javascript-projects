import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse:false}

    handleMouse = (flag) =>{
        
        return (event)=>{
            //console.log(flag)
            this.setState({mouse:flag})                
        }
    }

    handleCheck = (id) => {
        //方式1: 高阶函数
        return (event) =>{
            console.log(id, event.target.checked)

            //执行从porps传入的回调函数 --定义在App组件中
            this.props.changeTodo(id, event.target.checked)
        }
    }

    //删除一个TODO
    handleDelete =(id) => {
        //此处是个小坑，如果不加windows.， 会报错，confirm没有定义
        if(window.confirm('confirm to delete this line?')){
            //方式2 -- 直接执行， 但是事件监听处，需要包装成函数
            //执行从porps传入的回调函数 --定义在App组件中
            this.props.deleteTodo(id)
        }
        
    }
    render() {
        const { id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd': '#fff'}}
                onMouseEnter={this.handleMouse(!mouse)}
                >
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={ () => {this.handleDelete(id)}} 
                className="btn btn-danger" 
                style={{ display: mouse?'block': 'none' }}>删除</button>
            </li>
        )
    }
}
