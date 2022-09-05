import React, { Component } from 'react'
import { message } from 'antd';
import monitor from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={monitor.container}>
           <h1>监控</h1>
        </div>
      )
    }
  
  }