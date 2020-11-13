import React, { Component } from 'react';
import {ListWrap} from './styledMessage'
import img from '../../assets/img/message/head.png'

class List extends Component {
  render() {
    return (
      <ListWrap>
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>评论了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
        </div>
      </ListWrap>
    );
  }
}

export default List;