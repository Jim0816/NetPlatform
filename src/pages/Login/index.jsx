import React, { Component } from 'react'
import { message } from 'antd';
import login from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={login.container}>
           <h1>登陆</h1>
        </div>
      )
    }
  
  }