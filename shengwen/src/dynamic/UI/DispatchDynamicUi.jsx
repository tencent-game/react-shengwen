import { Toast } from 'antd-mobile';
import React,{useState} from 'react';
import DispatchDynamicHeader from './DispatchDynamicHeader';
import DispatchDynamicInfo from './DispatchDynamicInfo';
import {post} from '@u/http'
import { useHistory } from 'react-router-dom'

const DispatchDynamicUi = (props) => {
  let [value,setValue] = useState('')
  const history = useHistory()
  function handleChange(e){
    
    setValue(e.target.value)
  }
  async function  handleSubmit(){
    console.log(value)
    
    if(value===""){
      Toast.info('请填写内容',1)
    }else{
      Toast.info("提交成功")
    }

    let result =await post({
      url:"/api/dynamic/insert",data:value
    })
    console.log(result)
    if(result.message==="发表成功"){
      history.push("/dynamic/hot")
    }
  }
  return (
    <React.Fragment>
      <DispatchDynamicHeader onSubmitInfo={handleSubmit} title={'发表动态'}></DispatchDynamicHeader>
      <DispatchDynamicInfo value={value} onSubmit={handleChange}></DispatchDynamicInfo>
    </React.Fragment>
  );
};

export default DispatchDynamicUi;