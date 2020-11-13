import { NavBar, Icon } from 'antd-mobile';
import React from 'react'
import {useHistory} from 'react-router-dom'
const DynamicDetailHeader = () => {
  const history = useHistory()
  return (
    <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => history.goBack()}
    >动态详情</NavBar>
  </div>
  );
};

export default DynamicDetailHeader;

