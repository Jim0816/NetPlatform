import React, { Component } from 'react'
import { message } from 'antd';
import signalToken from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={signalToken.container}>
         <h1>参照文档说明，业务跟踪功能和网络信令数据分析功能页面结构相似</h1>  
        </div>
      )
    }
  
  }