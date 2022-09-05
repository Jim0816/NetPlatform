import React, { Component } from 'react'
import exit from '../../asserts/photo/exit.png'
import frame from './index.module.css'


import { withRouter } from 'react-router-dom'

// 引入路由配置
import {adminRoutes} from '../../routes'

class index extends Component {

  state = {
    relation: {}
  }

  constructor(props){
    super(props)
    this.state.relation = props.relation
  }
  
  render(){
    var curPath = this.props.location.pathname
    let {relation} = this.state
    var parentPath = relation[curPath].parent
    var childPath = relation[curPath].child
    console.log(parentPath, childPath)

    var sencond_children = []
    for (let i = 0 ; i < adminRoutes.length ; i++){
      if (adminRoutes[i].path === parentPath){
        for (let j = 0 ; j < adminRoutes[i].children.length ; j++){
          sencond_children.push(adminRoutes[i].children[j])
        }
        break;
      }
    }

    return (
      <div className={frame.app_container}>
        <div className={frame.app_top}>
          <span className={frame.app_top_title}>网络监测平台</span>
          
          {/* 一级菜单 */}
          {adminRoutes.map((route, index) => {
            return(
              <span key={index} className={frame.app_top_item} style={{right: (index) * 140 + 'px', width: '150px'}} 
              onClick={e => this.props.history.push(route.path)}>
                <span className={frame.app_top_item_img}>
                  <img src={parentPath === route.path ? route.showIcon : route.hideIcon} style={{height: "100%", width: "100%"}}></img>
                </span>
                <label className={frame.app_top_item_text} style={{'color': parentPath === route.path? '#3BFCFB' : '#B0B0AF'}}>{route.title}</label>
              </span>
            );
          })}
          

        </div>
        <div className={frame.app_bottom}>
            {/* 左边二级菜单 */}
            <div className={frame.app_bottom_left}>
              {sencond_children.map((child, index) => {
                return(
                  <div className={frame.app_bottom_left_item} onClick={e => this.props.history.push(child.path)}>
                    <span className={frame.app_bottom_left_item_img}>
                      <img src={childPath === child.path? child.showIcon : child.hideIcon} style={{height: "100%", width: "100%"}}></img>
                    </span>
                    <span className={frame.app_bottom_left_item_text} style={{'color': childPath === child.path ? '#3BFCFB' : '#B0B0AF'}}>{child.title}</span>
                  </div>
                );
              })} 
            </div>
            {/* 内容区域 */}
            <div className={frame.app_bottom_right}>
              {this.props.children}
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(index)