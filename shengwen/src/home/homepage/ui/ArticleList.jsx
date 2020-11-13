import React, { Component } from 'react'

import {
  ArtListWrap
} from './PageHomeStyle'
import watch from '@a/img/homepage/watch.png';
import {withRouter} from "react-router-dom"
@withRouter
class ArticleList extends Component {
  handleDetail=(data)=>{
    let {history}=this.props
    history.push('/detail',{data})
  }
  render() {
    return (
      <ArtListWrap>
        {this.props.list&&this.props.list.map(item=>{
          return <div key={item.id} className="art-card" onClick={this.handleDetail.bind(this,item)} >
          <div className="art-left" >
            <div className="art-left-top">
              {item.title}
            </div>
            <div className="art-left-bn">
              <div className="art-left-bot">
                <div  className="img-watch" style={
                  {background:`url(${watch})center center/  18px 14px no-repeat`}  
                }
                ></div>
                <span>{item.watchNumber}</span>
              </div>
              <div className="art-left-ri">
                <span>{item.author}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
          <div className="art-right" style={
          {background:`url(${item.img[0]}) center center/1.42rem 1.02rem`}
          }>
          </div>
        </div>
        })}
      </ArtListWrap>
    )
  }
}

export default ArticleList
