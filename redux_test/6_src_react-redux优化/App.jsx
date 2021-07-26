import React, { Component } from 'react'
import Count from './containers/Count'
//Count是container组件, redux的connect方法自动传入
export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
            </div>
        )
    }
}
