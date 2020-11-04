import React, { Component } from 'react'
import {
  HeaderWrap
} from './PageHomeStyle'
import { Drawer, List, NavBar } from 'antd-mobile';
import menu from '@a/img/homepage/menu.png';
import search from '@a/img/homepage/search.png';
import {withRouter} from "react-router-dom"
@withRouter
class Header extends Component {
  constructor(props){
    super(props)
  }
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  handleHistory=()=>{
    let  {history}=this.props
    history.push('./search')
  }
  render() {
    let arr=["医疗健康","新媒体","娱乐","AI","人工智能","大数据","社交","时政新闻","医疗健康","金融投资","股票证卷","硬件","互联网","教育"]
    const sidebar = (<List>
      {arr.map((i, index) => {
        return (<List.Item key={index}
        >{arr[index]}</List.Item>);
      })}
    </List>);

    return (<HeaderWrap >
      <NavBar
        mode="light"
        leftContent={[<h1 style={{color:"#000000",fontSize:".24rem"}}>首页</h1>]}
        rightContent={[
          <div key="555"  className="menu" style={
         {background:`url(${menu}) center center /  23px 23px no-repeat`,  
         height: ".23rem",
         width: ".23rem",
         marginRight:".4rem"}}
         onClick={() => this.onDock('docked')}
          ></div>,
          <div key="666"  className="search" style={
            {background:`url(${search}) center center /  23px 23px no-repeat`,
            height: ".23rem",
            width: ".23rem",
          }}
          onClick={this.handleHistory}
          ></div>
        ]}
        
        >
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        docked={this.state.docked}
        position={"top"}
      >
      </Drawer>
    </HeaderWrap>);
  }
}
export default Header