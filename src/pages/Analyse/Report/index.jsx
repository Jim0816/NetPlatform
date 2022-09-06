import React, { Component } from 'react'
import { message } from 'antd';
import report from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={report.container}>
         <div className={report.top}>
           <div className={report.top_top}>
            <span className={report.top_top_item}></span>
            <span className={report.top_top_item}></span>
            <span className={report.top_top_item}></span>
           </div>
           <div className={report.top_bottom}>
            数据列表: <a href='https://ant.design/components/table-cn/' target="_blank">参考组件</a>
           </div>
         </div>
         <div className={report.bottom}>
          <div className={report.bottom_left}>
            折线图 <a href='https://echarts.apache.org/examples/zh/editor.html?c=line-simple' target="_blank">参考组件</a>
          </div>
           <div className={report.bottom_right}>
            运行日志 <a href='https://ant.design/components/table-cn/' target="_blank">参考组件</a>
           </div>
         </div>
        </div>
      )
    }
  
  }