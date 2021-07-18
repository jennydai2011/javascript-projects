import React, { Component } from 'react'
import PubSub from 'pubsub-js';

import './index.css'
export default class List extends Component {
  state = {
    users:[],
    isFirst: true,
    isLoading:false,
    err:''
  } //

  //组件加载即开始订阅
  componentDidMount(){
    this.token = PubSub.subscribe('githubuser', (_, stateObj) =>{
      console.log('list组件收到数据了', stateObj)
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    Pubsub.unsubscribe(this.token)
  }

  render() {
    //const {users, isFirst, isLoading, err} = this.props
    const {users, isFirst, isLoading, err} = this.state

   

    return (
      <div className="row">
        {
          
            isFirst? <h2>enter the search key</h2> :
            isLoading? <h2>loading</h2> : 
            err? <h2>error</h2> :
            users.map( (userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url}
                target="_blank" rel="noreferrer">
                  <img alt="head_portrait" 
                  src={userObj.avatar_url} style={{ width: '100px' }} />
                </a>

                <p className="card-text">{userObj.login}</p>
              </div>

            )
          })
        }
      </div>

    )
  }
}
