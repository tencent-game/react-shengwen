import React from 'react';
import { DynamicDetailFooterCss} from './StyledDynamic'
import AddComment from './AddComment'
import DynamicFooter from './DynamicFooter'

const DynamicDetailFooter = (props) => {
  // console.log(props)
  return (
    <DynamicDetailFooterCss>
      <AddComment ></AddComment> 
      <div className='replay'>
        <DynamicFooter {...props}></DynamicFooter>
      </div>
    </DynamicDetailFooterCss>
  );
};

export default DynamicDetailFooter;