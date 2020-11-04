import React from 'react';
import {commentmore,step,nostep,report } from  '@a/img/Dynamic'
import { Popover, Toast } from 'antd-mobile'


const Item = Popover.Item;

// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class CommentMore extends React.Component {
  state = {
    visible: false,
    selected: '',
    bool:true
  };
  onSelect = (opt) => {
    console.log(opt.props.value);
    if(opt.props.value==='step'){
      this.setState({
        visible: false,
        bool:!this.state.bool,
        selected: opt.props.value,
      });
    }else{
      this.setState({
        visible: false,
        selected: opt.props.value,
      });
      Toast.info('成功举报！！')

    }
  };
  componentDidMount(){
    setTimeout(() => {
      Toast.hide()
    },1500)
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (
    <div>
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            placement='left'
            overlay={[
              (<Item key="4" value="step" style={{fontSize:'.12rem',float:"left",padding:0}}><img src={this.state.bool?step:nostep} alt=""/>{this.state.bool ?'踩评论' :'取消踩' }</Item>),
              (<Item key="5" value="report" style={{fontSize:'.12rem',float:"left",padding:0}} ><img src={report} style={{width:'.18rem',height:'.18rem'}} alt=""/>举报</Item>),
              
            ]}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <img src={commentmore} alt=""/>
          </Popover>
    </div>);
  }
}



export default CommentMore;



