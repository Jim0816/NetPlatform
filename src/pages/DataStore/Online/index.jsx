import React, { Component } from 'react'
import { message } from 'antd';
import online from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={online.container}>
           <h1>在线分析功能</h1>
        </div>
      )
    }
  
  }