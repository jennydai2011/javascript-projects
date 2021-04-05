import React, {Component} from 'react'

//样式模块化，少用，但是可以用于区分相同的样式在不同的组件里重名
import hello from './Hello.module.css'

export default class Hello extends Component{
    render(){
        return(
            <h2 className={hello.title}>Hello, react 2--</h2>

        )
    }
}