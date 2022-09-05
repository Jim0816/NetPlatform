// 根组件
import React from "react";
import './App.css';

import Frame from './components/Frame'
// 引入路由组件
import {Switch, Route, Redirect} from 'react-router-dom';
// 引入路由配置
import {adminRoutes} from './routes'


function App() {
  var routes = []
  var relation = {}
  for (let i = 0 ; i < adminRoutes.length ; i++){
    let route = adminRoutes[i]
    // {路径名称 ： {第一级路径，第二级路径}}
    relation[route.path] = {parent: route.path, child: route.default == undefined ? '' : route.default}
    routes.push(route)
    if (route.children != undefined && route.children.length > 0){
      for (let j = 0 ; j < route.children.length ; j++){
        let child = route.children[j]
        routes.push(child)
        // {路径名称 ： {第一级路径，第二级路径}}
        relation[child.path] = {parent: route.path, child: child.path}
      }
    }
  }

  return (
    <Frame relation={relation}>
      <Switch>
          {routes.map(route => {
            let childs = route.children
            return(
              <Route 
                key={route.path} 
                path={route.path} 
                exact={route.exact} 
                render={routeProps => {return <route.component {...routeProps}></route.component>}}>
              </Route>    
            );})}
          <Redirect to="/404" />
        </Switch>
    </Frame>
  )
}


export default App;