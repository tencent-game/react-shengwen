import React from 'react';
import { DispatchDynamicInfoCss } from './StyledDynamic';

const DispatchDynamicInfo = (props) => {
  // let [value,setValue] = useState('')
  // function handleChange(e){
  //   console.log(e.target.value)
  //   setValue(value)
  // }
  console.log(props)
  return (
    <DispatchDynamicInfoCss>
      <div className='dispatch'>
        <textarea name="" id=""  placeholder='请输入你的想法' defaultValue={props.value} onChange={props.onSubmit}></textarea>
      </div>
    </DispatchDynamicInfoCss>
  );
};

export default DispatchDynamicInfo;