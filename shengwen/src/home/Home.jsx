import React, {Component} from 'react';
import {withRouter} from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.history.push("/login")
        }}>点击
        </button>
      </div>
    );
  }
}

export default withRouter(Home);