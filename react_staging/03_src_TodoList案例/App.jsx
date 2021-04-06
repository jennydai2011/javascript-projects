import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里
    
    state = {
        todos:[
            {id:'001', name:'吃饭', done: true},
            {id:'002', name:'睡觉', done: false},
            {id:'003', name:'游戏', done: true},
            {id:'004', name:'写代码', done: false}
        ]
    }

    //add a new todo, 接收的参数是todo对象
    //addTodo 从App 传给Header, 在Header中调用
    addTodo = (todoObj) => {
        console.log("App( data from child).....", todoObj);
        
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    //handle item CheckBoxchange
    //changeTodo 从App 传给List， 再传给Item, 在Header中调用
    changeTodo =(id, done) => {
        console.log('changeTodo', id, done);
        const {todos} = this.state

        const newTodos  = todos.map( (todoObj) => {
            if(todoObj.id === id)
                return {...todoObj, done}
            else
                return todoObj
        })

        this.setState({todos: newTodos})
    }

    //deleteTodo
    deleteTodo = (id) =>{
        const {todos} = this.state

        //删除指定ID的TODO对象
        const newTodos = todos.filter( (todoObj) => {
            return todoObj.id !== id
        })

        //update state
        this.setState({todos: newTodos})
    }

    //handleCheckAll
    checkAllTodos = (done) => {
        const {todos}  = this.state
        const newTodos = todos.map( (todo) => {            
            return {...todo, done : done}
        })

        this.setState({todos: newTodos})
    }

    deleteAllDoneTodos = () =>{
        const {todos} = this.state
        const newTodos = todos.filter( (todo) => {
            return !todo.done
        })

        this.setState({todos: newTodos})
    }
    render() {
        const {todos} = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">

                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodos={this.checkAllTodos}
                            deleteAllDoneTodos={this.deleteAllDoneTodos}/>
                </div>
            </div>
        )
    }
}
