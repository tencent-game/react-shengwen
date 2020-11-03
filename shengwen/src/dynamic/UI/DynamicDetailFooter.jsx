import React from 'react';
import { DynamicDetailFooterCss} from './StyledDynamic'
import AddComment from './AddComment'
import DynamicFooter from './DynamicFooter'

const DynamicDetailFooter = () => {
  return (
    <DynamicDetailFooterCss>
      <AddComment ></AddComment> 
      <div className='replay'>
        <DynamicFooter></DynamicFooter>
      </div>
    </DynamicDetailFooterCss>
  );
};

export default DynamicDetailFooter;