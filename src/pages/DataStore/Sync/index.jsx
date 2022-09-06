import React, { Component } from 'react'
import { message } from 'antd';
import sync from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={sync.container}>
           <h1>时间同步功能</h1>
        </div>
      )
    }
  
  }