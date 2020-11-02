import React, {Component} from "react";
import {TabBar} from 'antd-mobile';
import My from "../my/My";
import home from "../assets/img/home.png"
import homeActive from "../assets/img/active-home.png"
import dynamic from "../assets/img/dynamic.png"
import dynamicActive from "../assets/img/active-dynamic.png"
import message from "../assets/img/message.png"
import messageActive from "../assets/img/message-active.png"
import my from "../assets/img/my.png"
import myActive from "../assets/img/my-active.png"
import Dynamic from '../dynamic/container/Dynamic'
import {NavLink } from 'react-router-dom'

import {withRouter} from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.pathname.slice(1))
    this.state = {
      selectedTab: this.props.location.pathname.slice(1),
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? {position: 'fixed', height: '100%', width: '100%', top: 0} : {height: 400}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          
          <TabBar.Item
            key="home"
            icon={<NavLink to="/home"><div style={{
              width: '22px',
              height: '22px',
              background: `url(${home}) center center /  18px 19px no-repeat`
            }}
            /></NavLink>
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${homeActive}) center center /  18px 19px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            
          </TabBar.Item>
          
          <TabBar.Item
            icon={
              <NavLink to="/dynamic"><div style={{
                width: '22px',
                height: '22px',
                background: `url(${dynamic}) center center /  21px 21px no-repeat`
              }}
              /></NavLink>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${dynamicActive}) center center /  21px 21px no-repeat`
              }}
              />
            }
            key="dynamic"
            selected={this.state.selectedTab === 'dynamic'}
            onPress={() => {
              this.setState({
                selectedTab: 'dynamic',
              });
            }}
            data-seed="logId1"
          >
           
          </TabBar.Item>
          <TabBar.Item
            icon={
              <NavLink to="/message"><div style={{
                width: '22px',
                height: '22px',
                background: `url(${message}) center center /  19px 20px no-repeat`
              }}
              /></NavLink>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${messageActive}) center center /  19px 20px no-repeat`
              }}
              />
            }
            key="message"
            selected={this.state.selectedTab === 'message'}
            onPress={() => {
              this.setState({
                selectedTab: 'message',
              });
            }}
          >
            
          </TabBar.Item>
          <TabBar.Item
          
            icon={
              <NavLink to="/my"><div style={{
                width: '22px',
                height: '22px',
                background: `url(${my}) center center /  16px 19px no-repeat`
              }}
              /></NavLink>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${myActive}) center center /  16px 19px no-repeat`
              }}
              />
            }
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
              
            }}
          >
            
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Home)
