import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
  //第一种方式实现数据传递， search 和 list是兄弟关系，要传递数据只能依靠共同的父组件App
  // state = {
  //   users:[],
  //   isFirst: true,
  //   isLoading:false,
  //   err:''
  // } //

  // updateAppState=(stateObj) => {
  //   this.setState(stateObj)
  // }

  // render() {
    
  //   return (
  //     <div className="container">
  //         <Search updateAppState={this.updateAppState}/>
  //         <List {...this.state}/>

  //     </div>
  //   )
  // }


  //第二种方式用pub-sub在兄弟组件之间传递数据，不需要从父组件传递到子组件  

  render() {
    
    return (
      <div className="container">
          <Search />
          <List/>
      </div>
    )
  }
}
