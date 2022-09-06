import React, { Component } from 'react'
import { message } from 'antd';
import trace from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={trace.container}>
         <div className={trace.top}>
            <span className={trace.top_tool} style={{marginLeft: '20px'}}></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
            <span className={trace.top_tool} ></span>
          </div>
          <div className={trace.center}>数据列表: 
            <a href='https://ant.design/components/table-cn/' target="_blank">参考组件</a>
          </div>
          <div className={trace.bottom_1}>信号交互组件：
            <a href='https://github.com/Jim0816/magic_box/tree/main/src/components/ActionPlayer' target="_blank">参考1905分析仪源码</a>
          </div>
          <div className={trace.bottom_2}>概括</div>
        </div>
      )
    }
  
  }