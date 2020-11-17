import React, { useState, useEffect } from 'react';
import { StyledSubmitted } from "./styledSubmitted"
import { Radio, ImagePicker, List, TextareaItem, Toast } from "antd-mobile"
import MyListPublicTitle from "../../component/MyListPublicTitle";
import { get, post } from "@/utils/http"

const RadioItem = Radio.RadioItem;

function Submitted(props) {
  const [files, setFiles] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [value, setValue] = useState("")
  const [fieldData, setFieldData] = useState([])

  useEffect(() => {
    (async () => {
      let result = await get("/api/domain/findDomains")
      console.log(result)
      setFieldData(result.data.data.rows)
    })()
  }, [])

  const contentChange = (value) => {
    setContent(value)
  }

  const titleChange = (value) => {
    console.log(value.length)
    setTitle(value)
  }

  const handleShare = async () => {
    if (!title) {
      Toast.info("请填写标题！", 1);
    } else {
      Toast.info("提交成功，我们会尽快审核！", 1);
    }
    let formData = new FormData()
    formData.append("photo", files[0].file)
    let result = await post({url: "/api/article/upload", data: formData})
    console.log(result)
    let articleResult = await post({
      url: "/api/article/contribution", data: JSON.stringify({
        articleCover: result.data.url,
        articleHeadline: title,
        articleText: content,
        domainId: value
      })
    })
    console.log(articleResult)
  }

  const onChange = (files) => {
    setFiles(files);
    console.log(files)
  }


  const onChecked = (value) => {
    console.log(value)
    setValue(value)
  }

  return (
    fieldData && <StyledSubmitted>
      <MyListPublicTitle onShareClick={handleShare} title="我要投稿"/>
      <List renderHeader={() => '请选择发布领域'}>
        {fieldData.map(i => (
          <RadioItem key={i.domainId} checked={value === i.domainId} onChange={() => onChecked(i.domainId)}>
            {i.domainName}
          </RadioItem>
        ))}
      </List>
      <div className="add-img">
        <ImagePicker
          files={files}
          onChange={onChange}
          style={{width: ".8rem", height: ".8rem"}}
          length="1"
          selectable={files.length < 1}
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
            defaultValue={content}
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