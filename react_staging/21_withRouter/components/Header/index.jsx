import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    back = () => {
        this.props.history.goBack() 
    }
    forward = () => {
        this.props.history.goForward() 
    }

    render() {
        //console.log("Header props", this.props)
        return (
            <div>
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        )
    }
}

export default withRouter(Header)
//withRouter 可以加工一般组件，让一般组件具有路由组件特有的api
//withRouter的返回值是一个新组件
