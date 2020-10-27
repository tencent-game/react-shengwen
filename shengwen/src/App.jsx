import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
import Login from "./login/Login";
import {withRouter} from "react-router-dom"
import My from "./my/My"
import FollowAndFans from "./my/FollowAndFans";
import MyPersonalData from "./my/MyPersonalData";
import Home from "./home/Home"
import PageFooter from "./component/PageFooter"

class App extends Component {

  renderFooter() {
    let {pathname} = this.props.location
    if (!/\/(home|dynamic|my|message)/.test(pathname)) return "";
    return <PageFooter/>
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/my">
            <My/>
          </Route>
          <Route path="/dynamic">
            <div>
              <button onClick={() => {
                this.props.history.push("/detail")
              }}>跳转
              </button>
            </div>
          </Route>
          <Route path="/message">
            <div>message</div>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/followFans/:tag"><FollowAndFans/></Route>
          <Route path="/personal/:tag"><MyPersonalData/></Route>
          <Redirect from="/" to="/home"/>
        </Switch>
        {this.renderFooter()}
      </div>
    );
  }
}

export default withRouter(App);