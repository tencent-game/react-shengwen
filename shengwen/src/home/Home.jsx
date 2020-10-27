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
import PageHome from './homepage/container/PageHome';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'My',
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
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${home}) center center /  18px 19px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${homeActive}) center center /  18px 19px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'Home'}
            onPress={() => {
              this.setState({
                selectedTab: 'Home',
              });
            }}
            data-seed="logId"
          >
            <PageHome></PageHome>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${dynamic}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${dynamicActive}) center center /  21px 21px no-repeat`
              }}
              />
            }
            key="Dynamic"
            selected={this.state.selectedTab === 'Dynamic'}
            onPress={() => {
              this.setState({
                selectedTab: 'Dynamic',
              });
            }}
            data-seed="logId1"
          >
            <div>Dynamic</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${message}) center center /  19px 20px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${messageActive}) center center /  19px 20px no-repeat`
              }}
              />
            }
            key="Message"
            selected={this.state.selectedTab === 'Message'}
            onPress={() => {
              this.setState({
                selectedTab: 'Message',
              });
            }}
          >
            <div>Message</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${my}) center center /  16px 19px no-repeat`
              }}
              />
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
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home
