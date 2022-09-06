import React, { Component } from 'react'
import { message } from 'antd';
import alarm from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={alarm.container}>
         <h1>告警功能</h1>  
        </div>
      )
    }
  
  }