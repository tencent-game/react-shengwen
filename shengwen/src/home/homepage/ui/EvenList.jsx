import React, { Component } from 'react'
import watch from '@a/img/homepage/watch.png';
import {EvenWrap} from './PageHomeStyle'
class EvenList extends Component {
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
      <EvenWrap>
        <div className="art-modular" onClick={this.handleDetail}>
            <div className="modular-title">{this.state.data.title}</div>
            <div className="modular-img">
              <div>
                <img src={this.state.data.img[0]} alt=""/>
              </div>
              <div>
                <img src={this.state.data.img[1]} alt=""/>
              </div>
              <div>
                <img src={this.state.data.img[2]} alt=""/>
              </div>
            </div>
            <div className="modular-right-bot">
              <div  className="modular-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>{this.state.data.watchNumber}</span>
            </div>
            <div className="modular-right-ri">
              <span>{this.state.data.author}</span>
              <span>{this.state.data.time}</span>
            </div>
          </div>
      </EvenWrap>
    )
  }
}
export default EvenList