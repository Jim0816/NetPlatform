import React, { Component } from 'react'
import { message } from 'antd';
import filter from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={filter.container}>
           <h1>数据捕捉过滤功能</h1>
        </div>
      )
    }
  
  }