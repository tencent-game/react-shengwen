import React, { Component } from 'react'
import border from '@/styles/border';
import {
  ArtListWrap
} from './PageHomeStyle'
import watch from '@a/img/homepage/watch.png';
import Active from '@a/img/homepage/art-1.png';
import {withRouter} from "react-router-dom"
@withRouter
class ArticleList extends Component {

  handleDetail=()=>{
    let {history}=this.props
    history.push('/detail')
  }
  render() {
    return (
      <ArtListWrap >
        <div className="art-card" onClick={this.handleDetail}>
          <div className="art-left" >
            <div className="art-left-top">
              首届UGD设计大会在京举办，引领增长时代的设计变
            </div>
            <div className="art-left-bot">
              <div  className="img-watch" style={
                {background:`url(${watch})center center/  18px 14px no-repeat`}  
              }
              ></div>
              <span>30603</span>
            </div>
            <div className="art-left-ri">
              <span>Daisy</span>
              <span>16分钟前</span>
            </div>
          </div>
          <div className="art-right" style={
          {background:`url(${Active}) center center`}
          }>
          </div>
        </div>
        <border></border>
      </ArtListWrap>
    )
  }
}

export default ArticleList
