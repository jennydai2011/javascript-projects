import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from  './Message'

export default class Home extends Component {
    render() {
        //console.log(this.props);

        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/Home/news">news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/Home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 注册路由 */}
                    <Switch>
                          <Route  path="/Home/news" component={News}/>
                            <Route  path="/Home/message" component={Message}/>
                            <Redirect to="/Home/news"></Redirect>
                   </Switch>
                            
                </div>
            </div>
            
        )
    }
}
