import React, { Component } from 'react'
import { message } from 'antd';
import classify from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={classify.container}>
           <h1>数据分类功能</h1>
        </div>
      )
    }
  
  }