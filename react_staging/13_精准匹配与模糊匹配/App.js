import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from './pages/Home'   //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
 
  render() {
    
    return (
      <div >
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <Header/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2 col-xs-offset-2">
                    <div className="list-group container">
                        {/* 原生HTML，靠 <a>跳转页面 */}
                        {/* <a className="list-group-item" href="./about.html">About</a>
                        <a href="./home.html" className="list-group-item active">Home</a> */}

                        {/* 在react中靠路由链接实现切换组件 -编写路由链接*/}
                       
                        {/* <NavLink activeClassName="activeNav" className="list-grou-item" to="/about">About</NavLink>
                        <NavLink activeClassName="activeNav" className="list-grou-item" to="/Home">Home</NavLink> */}

                        <MyNavLink to="/about" >About</MyNavLink>
                        <MyNavLink to="/Home">Home</MyNavLink>

                        

                        
                    </div>
                </div>
                <div className="col-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                          {/* 注册路由 */}
                          <Switch>
                          <Route exact={true} path="/about" component={About}/>
                            <Route exact={true}  path="/Home" component={Home}/>
                            </Switch>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
