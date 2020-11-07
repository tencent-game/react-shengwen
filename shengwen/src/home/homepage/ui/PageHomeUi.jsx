import React, { Component } from 'react'
import Header from './Header'
import Swiper from './Swiper'
import ArticleList from './ArticleList';
import SelectionofActivities from './SelectionofActivities'
export default class PageHomeUi extends Component {
  render() {
    return (
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
}
