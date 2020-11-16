import React, { Component } from 'react'
import {
  HeaderWrap
} from './PageHomeStyle'
import {get} from '@/utils/http.js'
import { Modal, List, Icon, NavBar } from 'antd-mobile';
import menu from '@a/img/homepage/menu.png';
import search from '@a/img/homepage/search.png';
import {withRouter} from "react-router-dom"
@withRouter
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      filedList:[],
    };
  }
  async componentDidMount(){
    let result= await get ({
      url:'/api/domain/findDomains'
    })
    // console.log(result.data.data);
      this.setState({
        filedList:result.data.data.rows
      })
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  
  handleHistory=()=>{
    let  list=this.props.list
    let  {history}=this.props
    history.push('./search',{list})
  }
  handleField= async(dataItem)=>{
    let itemValue=dataItem.domainName
    let result= await get ({
      url:'/api/domain/article?domainId='+dataItem.domainId+'&limit=2&offset=0'
    
    })
    console.log(result.data.data.rows);
    let FieldList=result.data.data.rows
    let  {history}=this.props
     history.push('./field',{FieldList,itemValue,})
   }
  render() {
   
    return (<HeaderWrap >
      <NavBar
        mode="light"
        leftContent={[<span key="2" style={{fontSize:".22rem",color:"#000000"}}>首页</span>]}
        rightContent={[
          <Icon  key="0" className="menu" style={
         {background:`url(${menu}) center center /  23px 23px no-repeat`,  
         height: ".23rem",
         width: ".23rem",
         marginRight:".4rem"}}
         onClick={this.showModal('modal1')}
          ></Icon>,
          <Icon key="1" className="search" style={
            {background:`url(${search}) center center /  23px 23px no-repeat`,
            height: ".23rem",
            width: ".23rem",
          }}
          onClick={this.handleHistory}
          ></Icon>
        ]}
        >
      </NavBar>
      <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="选择领域"
          closable={true}
          style={{height: "100%",width: "100%",}}
        >
          <List className="popup-list" style={{
            display: "block",
            
          }}>
            {this.state.filedList&&this.state.filedList.map((dataItem) => (
             <List.Item key={dataItem.domainId} style={{
                width: "1.03rem",
                height: ".5rem",
                float:"left",
                border: "1px solid #0080ff",
                marginRight:".12rem",
                marginBottom:".1rem",
                fontColor:'#0080ff',
              }} onClick={this.handleField.bind(this,dataItem)}>{dataItem.domainName}</List.Item>
            ))}
          </List>
        </Modal>
    </HeaderWrap>);
  }
}
export default Header