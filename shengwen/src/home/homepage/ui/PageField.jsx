import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import {FieldWrap} from './PageHomeStyle'
import watch from '@a/img/homepage/watch.png';
import { withRouter } from "react-router-dom"
@withRouter
class PageField extends Component {
  constructor(props){
    super(props)
    this.state={
       title:this.props.location.state.itemValue,
       FieldList:this.props.location.state.FieldList
    }
  }
   handleReturn=()=>{
     let {history}=this.props
     history.goBack()
   }
   handleDetail=()=>{
    //  console.log(this.state.FieldList);
      let {history}=this.props
       history.push("/detail")
   }
  render() {
    let dayList=this.state.FieldList&&this.state.FieldList.map(item=>{
      let dateStart=item.articleTime
      var dateBegin = new Date(dateStart.replace(/-/g, "/"))
      let dateEnd=new Date()
      var dateDiff = dateEnd.getTime() - dateBegin.getTime()
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))
      return dayDiff
    })
    return (
      <FieldWrap>
        <NavBar
            mode="light"
            icon={<Icon style={
              {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}} />}
            onLeftClick={this.handleReturn}
          >{this.state.title}</NavBar>
        {this.state.FieldList&&this.state.FieldList.map((item,index)=>{
            return(
              <div className="art-card" key={item.articleId} onClick={this.handleDetail}>
              <div className="art-left">
                <img className="art-img" src={item.articleCover} alt=""style={{
                  width:"1.42rem",
                  height: "1.02rem",
                  borderRadius:".1rem",
                }}/>
              </div>
              <div className="art-right" >
                <div className="art-right-top">
                  {item.articleHeadline}
                </div>
               <div className="art-bn">
                <div className="art-right-bot">
                    <div  className="img-watch" style={
                      {background:`url(${watch})center center/  18px 14px no-repeat`}  
                    }
                    ></div>
                    <span>{item.articleViewCount}</span>
                  </div>
                  <div className="art-right-ri">
                    <span>{item.userName}</span>
                    <span>{dayList[index]}天前</span>
                  </div>
                </div>
              </div>
            </div>
            )
        })}
      </FieldWrap>
    )
  }
}
export default PageField