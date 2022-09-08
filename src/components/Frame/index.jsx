import React, { Component } from 'react'
import { Table, Modal,Popconfirm } from 'antd';
import exit from '../../asserts/photo/exit.png'
import edit from '../../asserts/photo/edit.png'
import frame from './index.module.css'


import { withRouter } from 'react-router-dom'

// 引入路由配置
import {adminRoutes} from '../../routes'

const data = [
  {
    key: 0,
    label: `ip`,
    value: '127.0.0.1',
    remark: `IP地址`,
  },
  {
    key: 1,
    label: `mac`,
    value: 'ff-ff-ff-ff-ff-ff',
    remark: `mac地址`,
  }
];

const columns = [
  {
    title: '参数名称',
    dataIndex: 'label',
    width: 300,
  },
  {
    title: '参数值',
    dataIndex: 'value',
    width: 300
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (_, record) =>
      data.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
          <a>删除</a>
        </Popconfirm>
      ) : null,
  }
];



class index extends Component {

  state = {
    relation: {},
    open: false
  }

  constructor(props){
    super(props)
    this.state.relation = props.relation
  }

  openDialog = () => {
    this.state.open = true
    this.forceUpdate()
  }

  setOpen = (state) => {
    this.state.open = state
    this.forceUpdate()
  }

  handleDelete = (key) => {

  }
  
  render(){
    var curPath = this.props.location.pathname
    let {relation, open} = this.state
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
        {/* 对话框 */}
        <Modal
          title="网络信息配置"
          centered
          visible={open}
          width={1000}
          onOk={() => this.setOpen(false)}
          onCancel={() => this.setOpen(false)}
        >
          <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              scroll={{
                y: 400,
              }}
            />
        </Modal>
        
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
              <span className={frame.app_bottom_left_logo_btn} onClick={this.openDialog}>
                <img src={edit} style={{height: "100%", width: "100%"}}></img>
              </span>
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