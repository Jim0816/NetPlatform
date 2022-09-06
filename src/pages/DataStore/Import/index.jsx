import React, { Component } from 'react'
import { message } from 'antd';
import imports from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={imports.container}>
           <h1>基础数据导入功能</h1>
        </div>
      )
    }
  
  }