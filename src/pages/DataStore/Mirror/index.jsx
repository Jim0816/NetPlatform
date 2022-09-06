import React, { Component } from 'react'
import { message } from 'antd';
import mirror from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={mirror.container}>
           <h1>数据镜像功能</h1>
        </div>
      )
    }
  
  }