import React, { Component } from 'react'
import { message } from 'antd';
import indicator from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={indicator.container}>
         <h1>指标分析</h1>  
        </div>
      )
    }
  
  }