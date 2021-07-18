import React, { Component } from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {
 
  render() {
    
    return (
      <div className="container">
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生HTML，靠 <a>跳转页面 */}
                        {/* <a className="list-group-item" href="./about.html">About</a>
                        <a href="./home.html" className="list-group-item active">Home</a> */}

                        {/* 在react中靠路由链接实现切换组件 -编写路由链接*/}
                       
                        <Link className="list-grou-item" to="/about">About</Link>
                        <Link className="list-grou-item" to="/Home">Home</Link>

                        

                        
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                          {/* 注册路由 */}
                          
                          <Route path="/about" component={About}/>
                            <Route path="/Home" component={Home}/>
                         
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
