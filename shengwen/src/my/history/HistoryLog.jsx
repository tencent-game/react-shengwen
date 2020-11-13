import React from 'react';
import {useHistory} from "react-router-dom"
import back from "@/assets/img/my/back.png";
// import more from "@/assets/img/my/more.png";
import {StyledMyPersonalDataTop, StyledPersonalDataArticle} from "@/my/personal/styledMyDynamic";
import demo from "@/assets/img/my/article-demo-img.png";
import watch from "@/assets/img/homepage/watch.png";

function HistoryLog(props) {
  const history = useHistory()
  return (
    <div>
      <StyledMyPersonalDataTop
        className="personal-top"
        width="0 0 1px 0"
      >
        <img src={back} alt="back" onClick={() => history.goBack()}/>
        <h1>浏览记录</h1>
        <span>管理</span>
      </StyledMyPersonalDataTop>

      <StyledPersonalDataArticle width="0 0 1px 0">
        <div className="item-img">
          <img src={demo} alt=""/>
        </div>
        <div className="item-text">
          <p>首届UGD设计大会在京举办，引领增长时代的设计变</p>
          <div className="item-bottom">
            <p><img src={watch} alt=""/>30636</p>
            <span>Daisy 16分钟前</span>
          </div>
        </div>
      </StyledPersonalDataArticle>

    </div>
  );
}

export default HistoryLog;