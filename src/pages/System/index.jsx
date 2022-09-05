import React, { Component } from 'react'
import { message } from 'antd';
import system from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={system.container}>
           <h1>系统配置</h1>
        </div>
      )
    }
  
  }