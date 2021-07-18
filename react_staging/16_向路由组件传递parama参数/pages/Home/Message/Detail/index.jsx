import React, { Component } from 'react'

const DetailData = [
    {id:'01', content: 'hello1'},
    {id:'02', content: 'hello2'},
    {id:'03', content: 'hello3'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props)
        const {id, title } = this.props.match.params
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
