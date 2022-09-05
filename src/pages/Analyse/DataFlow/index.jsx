import React, { Component } from 'react'
import { message } from 'antd';
import dataflow from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={dataflow.container}>
         <h1>流量分析</h1>  
        </div>
      )
    }
  
  }