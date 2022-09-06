import React, { Component } from 'react'
import { message } from 'antd';
import checkState from './index.module.css'

export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={checkState.container}>
         <div className={checkState.left}>
          <div className={checkState.left_top}>
            {/* 工具栏 */}
            <div className={checkState.left_top_top}>
              <span className={checkState.left_top_top_item}></span>
              <span className={checkState.left_top_top_item}></span>
              <span className={checkState.left_top_top_item}></span>
              <span className={checkState.left_top_top_item}></span>
            </div>
            {/* 数据列表 */}
            <div className={checkState.left_top_bottom}>
              数据列表: <a href='https://ant.design/components/table-cn/' target="_blank">参考组件</a>
            </div>
          </div>
          {/* 底部列表 */}
          <div className={checkState.left_bottom}>
            <p>本区域组件设计思路：一个div为一行，将数组中每个数据渲染到每行div中</p>
          </div>
         </div>
         <div className={checkState.right}></div>
        </div>
      )
    }
  
  }