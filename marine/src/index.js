import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let data = [
    {id: 0, text: '天气不错哦!!!', complete: false},
    {id: 1, text: '天气不错哦!!!', complete: false},
    {id: 2, text: '出去玩啊!!!', complete: true},
   ]

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
)