import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (event) => {
        console.log('handleCheckAll')
        this.props.checkAllTodos(event.target.checked)
    }

    deleteAllDoneTodos = () =>{
        console.log('deleteAllDoneTodos')
        this.props.deleteAllDoneTodos()
    }

   
    render() {
        const {todos} = this.props
        
        //已完成的个数
        const doneCount = todos.reduce ( (pre, todo) => {
            return pre + (todo.done?1:0)
        },0 );
        console.log('%%', doneCount);

        //总数
        const total = todos.length;
        console.log(total);
        
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" 
                            checked={doneCount === total && total !==0 ? true : false}                             
                            onChange = {this.handleCheckAll}
                    />
                    <span>已完成{doneCount}/全部{total}</span>
                </label>
                <button onClick={this.deleteAllDoneTodos} className="btn" style={{ display: 'block' }}>清除已完成任务</button>
            </div>
        )
    }
}
