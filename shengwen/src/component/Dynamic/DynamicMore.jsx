// import { Popover, NavBar, Icon } from 'antd-mobile';
import React from 'react'
import More from '../../assets/img/my/more.png'
// const Item = Popover.Item;


// export default class DynamicMore extends React.Component {
//   state = {
//     visible: false,
//     selected: '',
//   };
//   onSelect = (opt) => {
//     // console.log(opt.props.value);
//     this.setState({
//       visible: false,
//       selected: opt.props.value,
//     },()=>{
//       switch (this.state.selected) {
//         case 'uninterested':
//           return unInterested()
//         case 'shield':
//           return shield()
//         case 'report':
//             return report()
//         default:
//           return ''
//       }
//     });

//    function unInterested(){
//      console.log('333')
//    } 
//     function shield(){}
//     function report(){}
//   };
//   handleVisibleChange = (visible) => {
//     this.setState({
//       visible,
//     });
//   };
//   render() {
//     return (<div>
//       <NavBar
//         mode="light"
//         rightContent={
//           <Popover mask
//             overlayClassName="fortest"
//             overlayStyle={{ color: 'currentColor' }}
//             visible={this.state.visible}
//             overlay={[
//               <Item key="4" value="uninterested">不感兴趣</Item>,
//               <Item key="5" value="shield"  >屏蔽该作者</Item>,
//               <Item key="6" value="report" >举报</Item>,
//               <Item key="7" value="cancel" >取消</Item>,

//             ]}
//             align={{
//               overflow: { adjustY: 0, adjustX: 0 },
//               offset: [-10, 0],
//             }}
//             onVisibleChange={this.handleVisibleChange}
//             onSelect={this.onSelect}
//           >
//             <div style={{
//               height: '100%',
//               padding: '0 15px',
//               marginRight: '-15px',
//               display: 'flex',
//               alignItems: 'center',
//             }}
//             >
//               <img src={More} alt="" style={{width:'.2rem',height:'.2rem'}} />
//             </div>
//           </Popover>
//         }
//       >
        
//       </NavBar>
//     </div>);
//   }
// }

import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import { withRouter} from 'react-router-dom'
// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }
class DynamicMore extends React.Component {
  constructor() {
    super();
    const state={
      clicked:''
    }
  }
  
  showActionSheet = () => {
    const {pathname}= this.props.location
    console.log(pathname)
    const BUTTONS = pathname==='/dynamic/follow' ?  ['取消关注','举报','取消']: ['不感兴趣', '屏蔽该作者', '举报',  '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState(() => (
        { clicked: BUTTONS[buttonIndex] }
      ),
        () => {
          this.transmitValue(this.state.clicked)
          
        }
      );
    });
  }
  transmitValue=(value)=>{
    console.log(value)
    switch (value) {
      case '不感兴趣':
       let str= '不感兴趣成功，以后为您减少此类推荐'
       Toast.info(str)
       break
      case '屏蔽该作者':
        let str1='屏蔽成功，将不在推荐该作者'
        Toast.info(str1)
        break
      case '取消关注':
        let str2='成功取消关注！'
        Toast.info(str2)
        break
      case '举报':
        let str3 = '成功举报！'
        Toast.info(str3)
        break
      default:
        return ''
    } 
  }

  componentDidMount(){
    setTimeout(() => {
      Toast.hide()
    },2000)
  }

  render() {
    return (<WingBlank>
      <Button onClick={this.showActionSheet} style={{height:'.44rem',margin: 0,padding: 0,border: 'none',  outline: 'none',display:'contents'}} ><img src={More} alt="" style={{width:'.2rem',height:'.2rem'}} /> </Button>
      <WhiteSpace />
      
    </WingBlank>);
  }
}
export default withRouter(DynamicMore)

