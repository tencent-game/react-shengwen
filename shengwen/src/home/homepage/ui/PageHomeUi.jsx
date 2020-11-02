import React from 'react'


import Header from './Header'
import Swiper from './Swiper'
import ArticleList from './ArticleList';
import SelectionofActivities from './SelectionofActivities'

const PageHomeUi=()=>{
  return(
    <div>
      <Header></Header>
      <Swiper></Swiper>
      <ArticleList></ArticleList>
      <SelectionofActivities></SelectionofActivities>
      <ArticleList></ArticleList>
      <ArticleList></ArticleList>
    </div>
  )
}

export default PageHomeUi