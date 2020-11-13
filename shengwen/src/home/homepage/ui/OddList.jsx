import React, { Component } from 'react'
import watch from '@a/img/homepage/watch.png';
import {OddWrap} from './PageHomeStyle'
class OddList extends Component {
  constructor(props){
    super(props)
    this.state={
      data:this.props.list
    }
  }
  
  handleDetail=()=>{
    let data=this.state.data
    let {history}=this.props
    history.push('/detail',{data})
  }
  render() {
    return (
     <OddWrap>
        <div className="art-card"  onClick={this.handleDetail}>
          <div className="art-left">
            <img className="art-img" src={this.state.data.img[0]} alt=""style={{
              width:"1.42rem",
              height: "1.02rem"
            }}/>
          </div>
          <div className="art-right" >
            <div className="art-right-top">
              {this.state.data.title}
            </div>
            <div className="art-right-bot">
              <div  className="img-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>{this.state.data.watchNumber}</span>
            </div>
            <div className="art-right-ri">
              <span>{this.state.data.author}</span>
              <span>{this.state.data.time}</span>
            </div>
          </div>
        </div>
     </OddWrap>
    )
  }
}
export default OddList
