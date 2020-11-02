import React, { Component } from 'react'
import {
  HeaderWrap
} from './PageHomeStyle'
import { Drawer, List, NavBar } from 'antd-mobile';
import menu from '@a/img/homepage/menu.png';
import search from '@a/img/homepage/search.png';
class Header extends Component {
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    let arr=["医疗健康","新媒体","娱乐","AI","人工智能","大数据","社交","时政新闻","医疗健康","金融投资","股票证卷","硬件","互联网","教育"]
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i, index) => {
        return (<List.Item key={index}
        >{arr[index]}</List.Item>);
      })}
    </List>);

    return (<HeaderWrap >
      <NavBar 
        mode="light"
        leftContent={[
          <span style={{
            position: "absolute",
            float:"left",
            lineHeight: ".46rem",
            paddingLeft: ".1rem",
            fontSize:".24rem",
          }}>首页</span>
        ]}
        rightContent={[
          <div key="0"  className="menu" style={
         {background:`url(${menu}) center center /  23px 23px no-repeat`}}></div>
        ]}
        onClick={() => this.onDock('docked')}>
        <div key="0"  className="search" style={
         {background:`url(${search}) center center /  23px 23px no-repeat`}}></div>
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        docked={this.state.docked}
      >
      </Drawer>
    </HeaderWrap>);
  }
  // render() {
  //   return (
  //     <HeaderWrap>
  //       <h1>首页</h1>
  //       <div>
  //         <div className="menu" style={
  //           {background:`url(${menu}) center center /  23px 23px no-repeat`}
  //         }></div>
  //         <div className="search" style={
  //           {background:`url(${search}) center center /  23px 23px no-repeat`}
  //         }></div>
  //       </div>
  //     </HeaderWrap>
  //   )
  // }
}
export default Header