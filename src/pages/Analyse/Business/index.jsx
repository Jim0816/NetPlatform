import React, { Component } from 'react'
import { message } from 'antd';
import business from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={business.container}>
         <h1>业务分析</h1>  
        </div>
      )
    }
  
  }