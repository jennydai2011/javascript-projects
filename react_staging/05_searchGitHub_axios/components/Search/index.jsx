import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        //1.  获取输入
        //第一种写法，直接取
        //console.log(this.keyWordElement.value);

        //第二种方法，解构keyWordElement.value，然后取
        // const {value} = this.keyWordElement
        // console.log(value);

        //第三种写法，解构keyWordElement，然后连续解构
        // const {keyWordElement:{value}} = this
        // console.log(value);


        //第四种写法，解构keyWordElement，然后连续解构，然后重新定义变量名字
        const {keyWordElement:{value:data}} = this
        console.log(data);



        //2.   发送网络请求
        //
        this.props.updateAppState({isFirst:false, isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${data}`)
             .then(                
                 response=> {
                     console.log('成功了', response.data);
                     this.props.updateAppState({isFirst:false, users:response.data.items, isLoading:false})
                    
                    },
                 error => {
                     //console.log('失败了', error)
                     this.props.updateAppState({isFirst:false, isLoading:false, err:error.message})
                    
                  }
             )
    }
    render() {
        return (
            <section className="jumbotron">
          <h3 className="jumbotron-heading">Search GitHub Users</h3>
          <div>
              <input ref={c => this.keyWordElement =c } type="text" placeholder="enter the name"/>&nbsp;
              <button onClick={this.search}>Search</button>
          </div>
          </section>
        )
    }
}
