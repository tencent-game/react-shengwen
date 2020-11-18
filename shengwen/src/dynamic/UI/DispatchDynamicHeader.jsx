import { NavBar, Icon } from 'antd-mobile';
import React from 'react'
import {useHistory} from 'react-router-dom'
import { share } from '@a/img/Dynamic'
const DispatchDynamicHeader = (props) => {
  const history = useHistory()
  console.log(props)
  return (
    <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => history.goBack()}
      rightContent={ <img src={share} onClick={props.onSubmitInfo} /> }
    >{props.title}</NavBar>
  </div>
  );
};

export default DispatchDynamicHeader;