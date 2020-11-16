import React from 'react';
import { useHistory } from "react-router-dom"
import back from "@/assets/img/my/back.png";
import { StyledMyPersonalDataTop, StyledPersonalDataArticle } from "@/my/personal/ui/styledMyDynamic";
import watch from "@/assets/img/homepage/watch.png";

function HistoryLogUI(props) {
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

      {
        props.historyList.map((item) => {
          return (
            <div key={item.articleId}>
              <StyledPersonalDataArticle width="0 0 1px 0">
                <div className="item-img">
                  <img src={item.articleCover} alt=""/>
                </div>
                <div className="item-text">
                  <p>{item.articleHeadline}</p>
                  <div className="item-bottom">
                    <p><img src={watch} alt=""/>{item.articleViewCount}</p>
                    <span>{item.articleTime}</span>
                  </div>
                </div>
              </StyledPersonalDataArticle>
            </div>
          )
        })
      }
    </div>
  );
}

export default HistoryLogUI;