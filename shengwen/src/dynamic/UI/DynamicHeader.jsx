import React from 'react';
import {DynamicHeaderCss} from './StyledDynamic'
import {Route,NavLink } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const DynamicHeader = () => {
   const  {pathname} = useLocation()
  console.log(pathname)
  return (
    <DynamicHeaderCss>
      <ul>
        <NavLink to="/dynamic/follow"  ><li className={pathname==='/dynamic/follow' ? 'active' :''}>关注</li></NavLink>
        <NavLink to="/dynamic/hot"  ><li className={pathname==='/dynamic/hot' ? 'active' :''}>热门</li></NavLink>
      </ul>
      
    </DynamicHeaderCss>
  );
};

export default DynamicHeader;