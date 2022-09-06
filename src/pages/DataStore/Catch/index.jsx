import React, { Component } from 'react'
import { message } from 'antd';
import catchs from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={catchs.container}>
           <h1>数据捕捉功能</h1>
        </div>
      )
    }
  
  }