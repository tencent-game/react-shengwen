import React, { useEffect, useState } from 'react';
import { get } from "@/utils/http";
import { useSelector } from "react-redux";
import { StyledAmbulatoryAndArticle } from "@/my/ambulatoryandarticle/ui/styledAmbulatoryArticle";
import more from "@/assets/img/my/more.png";

function MyArticle(props) {
  const [articleList, setArticleList] = useState(null)
  const userId = useSelector((state) => {
    state.getIn(["login", "userId"])
  })
  useEffect(() => {
    (async () => {
      let article = await get("/api/article/findarticlebyuserid", {
        limit: 5,
        offset: 0,
        userId: userId || 2
      })
      setArticleList(article.data.data.rows)
    })()
  })
  return (
    articleList && <div>
      {
        articleList.map((item) => {
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
    </div>
  );
}

export default MyArticle;