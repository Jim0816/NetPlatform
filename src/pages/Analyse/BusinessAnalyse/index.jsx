import React, { Component } from 'react'
import { Space, Table, Tag } from 'antd';
import { message } from 'antd';
import business from './index.module.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


export default class index extends Component {

  
  
    constructor(props) {
      super(props)
     }
  
     componentDidMount() {
     }
  
   
    render() {
      return (
        <div className={business.container}>
          <div className={business.top}>
            <span className={business.top_tool} style={{marginLeft: '20px'}}></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
            <span className={business.top_tool} ></span>
          </div>
          <div className={business.center}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{
                pageSize: 10,
              }}
              scroll={{
                y: 310,
              }}
            />
          </div>
          <div className={business.bottom_1}>
            <div className={business.bottom_1_left}>
              解码树: <a href='https://blog.csdn.net/weixin_41254345/article/details/117222154' target="_blank">参考组件</a>
            </div>
            <div className={business.bottom_1_right}>
              数据: 这部分细节比较多，需要自定义设计
            </div>
          </div>
          <div className={business.bottom_2}>数据概括</div>
        </div>
      )
    }
  
  }