import React,{useState} from 'react';
import DispatchDynamicHeader from './DispatchDynamicHeader';
import DispatchDynamicInfo from './DispatchDynamicInfo';
import { useHistory,useLocation } from 'react-router-dom'
import { Toast } from 'antd-mobile';
import { ForwardDynamicCss} from './StyledDynamic'
import {post} from '@u/http'
const ForwardDynamicUi = (props) => {
  let [value,setValue] = useState('')
  const history = useHistory()
  const location = useLocation()
  function handleChange(e){
    // console.log(e.target.value)
    setValue(e.target.value)
  }

  async function  handleSubmit(){
    if(value===""){
      Toast.info('请填写内容',1)
    }else{
      Toast.info("转发成功")
    }
    console.log(location.state.id)
    let result =await post({
      url:"/api/dynamic/forward",data:JSON.stringify({
        shareText:value,
        dynamicId:location.state.id
      })
    })
    console.log(result)
    if(result.message==="转发成功"){
      history.push("/dynamic/hot")
    }
  }

  console.log(location.state)
  return (
    <React.Fragment>
      <DispatchDynamicHeader title={"转发动态"} onSubmitInfo={handleSubmit}></DispatchDynamicHeader>
      <DispatchDynamicInfo value={value} onSubmit={handleChange} ></DispatchDynamicInfo>
      <ForwardDynamicCss>
        <div className='forward'>
          <span>
            {location.state.name} : &nbsp;
            <p> {location.state.detail}</p>
          </span>
        </div>
      </ForwardDynamicCss>
    </React.Fragment>
  );
};

export default ForwardDynamicUi;