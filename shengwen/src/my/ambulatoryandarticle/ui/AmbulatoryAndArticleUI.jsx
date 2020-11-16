import React from 'react';
import { useHistory } from "react-router-dom"
import back from "@/assets/img/my/back.png";
import { StyledMyPublicMain, StyledMyPublicTop } from "@/my/followandfans/ui/styledFollowAndFans";
import demo from "@/assets/img/my/article-demo-img.png";
import more from "@/assets/img/my/more.png";
import { StyledAmbulatoryAndArticle } from "./styledAmbulatoryArticle";

function AmbulatoryAndArticleUI(props) {
  const history = useHistory()
  const pathname = history.location.pathname
  return (
    <div>
      <StyledMyPublicTop>
        <div className="back">
          <img
            src={back}
            alt="back"
            onClick={() => history.goBack()}
          /></div>
        <ul>
          <li
            className={pathname === "/ambulatoryArticle/article" ? "active" : ""}
            onClick={() => history.replace("/ambulatoryArticle/article")}
          >
            <h3>我的文章</h3>
            <span/>
          </li>
          <li
            className={pathname === "/ambulatoryArticle/ambulatory" ? "active" : ""}
            onClick={() => history.replace("/ambulatoryArticle/ambulatory")}
          >
            <h3>我的动态</h3>
            <span/>
          </li>
        </ul>
      </StyledMyPublicTop>
      {
        history.location.pathname === "/ambulatoryArticle/article" ? (
          <StyledMyPublicMain>
            <div className="my-title">共{props.articleList.length}篇文章</div>

            {
              props.articleList.map((item) => {
                return (
                  <div key={item.articleId}>
                    <StyledAmbulatoryAndArticle width="0 0 1px 0">
                      <div className="item-img">
                        <img src={item.articleCover} alt=""/>
                      </div>
                      <div className="item-text">
                        <p>{item.articleHeadline}</p>
                        <i>审核中</i>
                        <div className="item-bottom">
                          <p>{item.articleTime}</p>
                          <span><img src={more} alt=""/></span>
                        </div>
                      </div>
                    </StyledAmbulatoryAndArticle>
                  </div>
                )
              })
            }
            <StyledAmbulatoryAndArticle width="0 0 1px 0">
              <div className="item-img">
                <img src={demo} alt=""/>
              </div>
              <div className="item-text">
                <p>首届UGD设计大会在京举办，引领增长时代的设计变</p>
                <i>审核中</i>
                <div className="item-bottom">
                  <p>2018-05-15</p>
                  <span><img src={more} alt=""/></span>
                </div>
              </div>
            </StyledAmbulatoryAndArticle>

            <StyledAmbulatoryAndArticle width="0 0 1px 0">
              <div className="item-img">
                <img src={demo} alt=""/>
              </div>
              <div className="item-text">
                <p>首届UGD设计大会在京举办，引领增长时代的设计变</p>
                <i className="error">审核失败，原因：标题中含有敏感词</i>
                <div className="item-bottom">
                  <p>2018-05-15</p>
                  <span><img src={more} alt=""/></span>
                </div>
              </div>
            </StyledAmbulatoryAndArticle>

            <StyledAmbulatoryAndArticle width="0 0 1px 0">
              <div className="item-img">
                <img src={demo} alt=""/>
              </div>
              <div className="item-text">
                <p>首届UGD设计大会在京举办，引领增长时代的设计变</p>
                <i className="push">已发布</i>
                <div className="item-bottom">
                  <p>2018-05-15</p>
                  <span><img src={more} alt=""/></span>
                </div>
              </div>
            </StyledAmbulatoryAndArticle>

            <div className="my-bottom">没有了~</div>
          </StyledMyPublicMain>
        ) : (
          <StyledMyPublicMain>
            {/*动态*/}
            <div className="my-bottom">没有了~</div>
          </StyledMyPublicMain>
        )
      }
    </div>
  );
}

export default AmbulatoryAndArticleUI;