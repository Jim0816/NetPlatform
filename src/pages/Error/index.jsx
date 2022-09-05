import React, { Component } from 'react'
import { message } from 'antd';
import error from './index.module.css'

export default class index extends Component {
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={error.container}>
         <h1>错误页面</h1>  
        </div>
      )
    }
  
  }