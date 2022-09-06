import React, { Component } from 'react'
import { message } from 'antd';
import offline from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={offline.container}>
         <h1>离线分析功能</h1>  
        </div>
      )
    }
  
  }