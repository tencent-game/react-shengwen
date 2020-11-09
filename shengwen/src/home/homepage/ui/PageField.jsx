import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import watch from '@a/img/homepage/watch.png';
import {FieldWrap} from './PageHomeStyle'
import Active from '@a/img/homepage/art-1.png';
import Active1 from '@a/img/homepage/active-1.png';
import Active2 from '@a/img/homepage/active-2.png';
import Active3 from '@a/img/homepage/active-3.png';

import { withRouter } from "react-router-dom"
@withRouter
 class PageField extends Component {
   constructor(props){
     super(props)
     this.state={
        title:this.props.location.state.itemValue
     }
   }
   handleReturn=()=>{
     let {history}=this.props
     history.goBack()
   }
   handleDetail=()=>{
      let {history}=this.props
      history.push("/detail")
   }
  render() {
    return (
      <FieldWrap>
        <NavBar
            mode="light"
            icon={<Icon style={
              {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}} />}
            onLeftClick={this.handleReturn}
            >{this.state.title}</NavBar>
        <div>
          <div className="art-card"  onClick={this.handleDetail}>
            <div className="art-left">
              <img src={Active} alt=""/>
            </div>
            <div className="art-right" >
              <div className="art-right-top">
                首届UGD设计大会在京举办，引领增长时代的设计变
              </div>
              <div className="art-right-bot">
                <div  className="img-watch" style={
                  {background:`url(${watch})center center/  18px 14px no-repeat`}  
                }
                ></div>
                <span>30603</span>
              </div>
              <div className="art-right-ri">
                <span>Daisy</span>
                <span>16分钟前</span>
              </div>
            </div>
          </div>
          <div className="art-modular" onClick={this.handleDetail}>
            <div className="modular-title">首届UGD设计大会在京举办，引领增长时代的设计变</div>
            <div className="modular-img">
              <div>
                <img src={Active1} alt=""/>
              </div>
              <div>
                <img src={Active2} alt=""/>
              </div>
              <div>
                <img src={Active3} alt=""/>
              </div>
            </div>
            <div className="modular-right-bot">
              <div  className="modular-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>30603</span>
            </div>
            <div className="modular-right-ri">
              <span>Daisy</span>
              <span>16分钟前</span>
            </div>
          </div>
          <div className="art-card"  onClick={this.handleDetail}>
            <div className="art-left">
              <img src={Active} alt=""/>
            </div>
            <div className="art-right" >
              <div className="art-right-top">
                首届UGD设计大会在京举办，引领增长时代的设计变
              </div>
              <div className="art-right-bot">
                <div  className="img-watch" style={
                  {background:`url(${watch})center center/  18px 14px no-repeat`}  
                }
                ></div>
                <span>30603</span>
              </div>
              <div className="art-right-ri">
                <span>Daisy</span>
                <span>16分钟前</span>
              </div>
            </div>
          </div>
          <div className="art-modular" onClick={this.handleDetail}>
            <div className="modular-title">首届UGD设计大会在京举办，引领增长时代的设计变</div>
            <div className="modular-img">
              <div>
                <img src={Active1} alt=""/>
              </div>
              <div>
                <img src={Active2} alt=""/>
              </div>
              <div>
                <img src={Active3} alt=""/>
              </div>
            </div>
            <div className="modular-right-bot">
              <div  className="modular-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>30603</span>
            </div>
            <div className="modular-right-ri">
              <span>Daisy</span>
              <span>16分钟前</span>
            </div>
          </div>
          <div className="art-card"  onClick={this.handleDetail}>
            <div className="art-left">
              <img src={Active} alt=""/>
            </div>
            <div className="art-right" >
              <div className="art-right-top">
                首届UGD设计大会在京举办，引领增长时代的设计变
              </div>
              <div className="art-right-bot">
                <div  className="img-watch" style={
                  {background:`url(${watch})center center/  18px 14px no-repeat`}  
                }
                ></div>
                <span>30603</span>
              </div>
              <div className="art-right-ri">
                <span>Daisy</span>
                <span>16分钟前</span>
              </div>
            </div>
          </div>
          <div className="art-modular" onClick={this.handleDetail}>
            <div className="modular-title">首届UGD设计大会在京举办，引领增长时代的设计变</div>
            <div className="modular-img">
              <div>
                <img src={Active1} alt=""/>
              </div>
              <div>
                <img src={Active2} alt=""/>
              </div>
              <div>
                <img src={Active3} alt=""/>
              </div>
            </div>
            <div className="modular-right-bot">
              <div  className="modular-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>30603</span>
            </div>
            <div className="modular-right-ri">
              <span>Daisy</span>
              <span>16分钟前</span>
            </div>
          </div>
          <div className="art-card"  onClick={this.handleDetail}>
            <div className="art-left">
              <img src={Active} alt=""/>
            </div>
            <div className="art-right" >
              <div className="art-right-top">
                首届UGD设计大会在京举办，引领增长时代的设计变
              </div>
              <div className="art-right-bot">
                <div  className="img-watch" style={
                  {background:`url(${watch})center center/  18px 14px no-repeat`}  
                }
                ></div>
                <span>30603</span>
              </div>
              <div className="art-right-ri">
                <span>Daisy</span>
                <span>16分钟前</span>
              </div>
            </div>
          </div>
          <div className="art-modular" onClick={this.handleDetail}>
            <div className="modular-title">首届UGD设计大会在京举办，引领增长时代的设计变</div>
            <div className="modular-img">
              <div>
                <img src={Active1} alt=""/>
              </div>
              <div>
                <img src={Active2} alt=""/>
              </div>
              <div>
                <img src={Active3} alt=""/>
              </div>
            </div>
            <div className="modular-right-bot">
              <div  className="modular-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>30603</span>
            </div>
            <div className="modular-right-ri">
              <span>Daisy</span>
              <span>16分钟前</span>
            </div>
          </div>
          <div className="art-card"  onClick={this.handleDetail}>
            <div className="art-left">
              <img src={Active} alt=""/>
            </div>
            <div className="art-right" >
              <div className="art-right-top">
                首届UGD设计大会在京举办，引领增长时代的设计变
              </div>
              <div className="art-right-bot">
                <div  className="img-watch" style={
                  {background:`url(${watch})center center/  18px 14px no-repeat`}  
                }
                ></div>
                <span>30603</span>
              </div>
              <div className="art-right-ri">
                <span>Daisy</span>
                <span>16分钟前</span>
              </div>
            </div>
          </div>
          <div className="art-modular" onClick={this.handleDetail}>
            <div className="modular-title">首届UGD设计大会在京举办，引领增长时代的设计变</div>
            <div className="modular-img">
              <div>
                <img src={Active1} alt=""/>
              </div>
              <div>
                <img src={Active2} alt=""/>
              </div>
              <div>
                <img src={Active3} alt=""/>
              </div>
            </div>
            <div className="modular-right-bot">
              <div  className="modular-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>30603</span>
            </div>
            <div className="modular-right-ri">
              <span>Daisy</span>
              <span>16分钟前</span>
            </div>
          </div>
        </div>
      </FieldWrap>
    )
  }
}
export default PageField