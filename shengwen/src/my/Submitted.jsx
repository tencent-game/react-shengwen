import React from 'react';
import {withRouter} from "react-router-dom"


function Submitted(props) {
  const handleBack = () => {
    props.history.goBack()
  }

  return (
    <div>
      <button onClick={handleBack}>返回</button>
    </div>
  );
}

export default withRouter(Submitted);