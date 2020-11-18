import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import AmbulatoryAndArticleUi from "@/my/ambulatoryandarticle/ui/AmbulatoryAndArticleUI";
import { get } from "@/utils/http";

function AmbulatoryAndArticle(props) {
  const userId = useSelector((state) => {
    state.getIn(["login", "userId"])
  })

  const [articleList, setArticleList] = useState(null)
  const [ambulatoryList, setAmbulatoryList] = useState(null)

  useEffect(() => {
    (async () => {
      let article = await get("/api/article/findarticlebyuserid", {
        limit: 5,
        offset: 0,
        userId: userId || 2
      })
      let ambulatory = await get("/api/dynamic/findbyuserid", {
        limit: 5,
        offset: 0,
        userId: userId || 2
      })
      setArticleList(article.data.data.rows)
      setAmbulatoryList(ambulatory.data.data.rows)
    })()
  }, [userId])

  return (
    ambulatoryList && articleList && (
      <AmbulatoryAndArticleUi
        ambulatoryList={ambulatoryList}
        articleList={articleList}
      />
    )
  );
}

export default AmbulatoryAndArticle;