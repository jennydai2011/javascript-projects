import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
    {id:'01', content: 'hello1'},
    {id:'02', content: 'hello2'},
    {id:'03', content: 'hello3'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props)

        //接收param参数
        // const {id, title } = this.props.match.params

        //接收search参数, 需要querystring 帮助解析为对象
        const {search} = this.props.location
        const {id, title } = qs.parse(search.slice(1))

        const findObj = DetailData.find( (detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID: {id} </li>
                <li>Title: {title} </li>
                <li>Content: {findObj.content} </li>
            </ul>
        )
    }
}
