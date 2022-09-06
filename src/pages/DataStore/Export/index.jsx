import React, { Component } from 'react'
import { message } from 'antd';
import exports from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={exports.container}>
           <h1>存储数据导出功能</h1>
        </div>
      )
    }
  
  }