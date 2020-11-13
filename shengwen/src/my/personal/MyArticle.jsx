import React from 'react';
import {StyledPersonalDataArticle} from "./styledMyDynamic"
import demo from "@/assets/img/my/article-demo-img.png"
import watch from "@/assets/img/homepage/watch.png"

function MyArticle(props) {
  return (
    <div>
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

export default MyArticle;