//创建外壳组件App
import React from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

//创建并且暴露 App组件
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>

            </div>

        )
    }
}
