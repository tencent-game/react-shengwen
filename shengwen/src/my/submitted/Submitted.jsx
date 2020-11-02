import React, {useState} from 'react';
import {StyledSubmitted} from "./styledSubmitted"
import {ImagePicker, List, TextareaItem,Toast} from "antd-mobile"
import MyListPublicTitle from "../../component/MyListPublicTitle";

function Submitted(props) {
  const [title, setTitle] = useState("")
  const contentChange = (value) => {
    console.log(value.length)
  }

  const titleChange = (value) => {
    console.log(value.length)
    setTitle(value)
  }

  const handleShare = () => {
    if (!title) {
      Toast.info("请填写标题！", 1);
    }else {
      Toast.info("提交成功，我们会尽快审核！", 1);
    }
  }

  return (
    <StyledSubmitted>
      <MyListPublicTitle onShareClick={handleShare}  title="我要投稿"/>
      <div className="add-img">
        <ImagePicker
          style={{width: ".8rem", height: ".8rem"}}
          onImageClick={(index, fs) => console.log(index, fs)}
          length={1}
        />
        <h3>请添加文章头图</h3>
        <span>大小在8MB以内，最小尺寸为640*360像素</span>
      </div>
      <div className="submitted-input">
        <List>
          <TextareaItem
            style={{fontSize: ".16rem"}}
            placeholder="标题（建议30字以内）"
            data-seed="logId"
            autoHeight
            onChange={titleChange}
            defaultValue={title}
          />
          <TextareaItem
            style={{fontSize: ".16rem"}}
            placeholder="请输入正文"
            data-seed="logId"
            autoHeight
            onChange={contentChange}
            rows={13}
          />
        </List>
      </div>
    </StyledSubmitted>
  );
}

export default Submitted;