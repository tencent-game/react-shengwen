import React, { Component } from 'react'
import {
  HeaderWrap
} from './PageHomeStyle'
import menu from '@a/img/homepage/menu.png';
import search from '@a/img/homepage/search.png';
export default class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <h1>首页</h1>
        <div>
          <div className="menu" style={
            {background:`url(${menu}) center center /  23px 23px no-repeat`}
          }></div>
          <div className="search" style={
            {background:`url(${search}) center center /  23px 23px no-repeat`}
          }></div>
        </div>
      </HeaderWrap>
    )
  }
}
