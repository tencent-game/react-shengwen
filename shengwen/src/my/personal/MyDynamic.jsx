import React from 'react';
import {StyledMyDynamic} from "./styledMyDynamic"
import avatar from "../../assets/img/my/avatar.png"

function MyDynamic(props) {
  return (
    <StyledMyDynamic>
      <div className="dynamic-item">
        <div className="dynamic-item-title">
          <img src={avatar} alt=""/>
          <div>
            <h3>十点新闻</h3>
            <span>2018-05-06 10:56:56</span>
          </div>
        </div>
      </div>
    </StyledMyDynamic>
  );
}

export default MyDynamic;