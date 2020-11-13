import React from 'react'
import propTypes from 'prop-types'
import memoize from 'memoize-one'
import Header from './Header'
import Swiper from './Swiper'
import ArticleList from './ArticleList';
import SelectionofActivities from './SelectionofActivities'
const PageHomeUi =(props)=> {
    const activities=memoize(list=>list.slice(0,5))
    const article1=memoize(list=>list.slice(0,2))
    const article2=memoize(list=>list.slice(2,10))
    return (
      <div>
        <Header list={props.list}></Header>
        <Swiper></Swiper>
        <ArticleList list={article1(props.list)}></ArticleList>
        <SelectionofActivities list={activities(props.list)}></SelectionofActivities>
        <ArticleList list={article2(props.list)}></ArticleList>
      </div>
    )
}
PageHomeUi.propTypes={
    list:propTypes.array
}
export default PageHomeUi