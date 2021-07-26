import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))

//优化，使用Provider,自动监听store状态变化， container组件不用传store
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById('root'))
// })