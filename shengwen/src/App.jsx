import React, {Component} from 'react';
// <<<<<<< HEAD
import {Route, Switch} from "react-router-dom"
import Login from "./login/container/Login";
// import Home from "./home/Home";
// import Submitted from "./my/Submitted";
// import FollowAndFans from "./my/FollowAndFans";
// import MyPersonalData from "./my/MyPersonalData";
import Like from './message/ui/Like'
// import {NavLink} from "react-router-dom"
// import {NavBar} from "./StyledApp";
// import home from "./assets/img/home.png"
// import dynamic from "./assets/img/dynamic.png"
// =======
import {  Redirect} from "react-router-dom"
import PageHome from "@/home/homepage/container/PageHome";
// import Login from "./login/Login";
// import {Login} from "@/login/index";
import {withRouter} from "react-router-dom"
import My from "./my/My"
import FollowAndFans from "./my/followandfans/FollowAndFans";
import MyPersonalData from "./my/personal/MyPersonalData";
import PageFooter from "./component/PageFooter"
import Submitted from "./my/submitted/Submitted"
import Activities from "./my/activities/Activities";
import Wallet from "./my/wallet/Wallet";
import Settings from "./my/settings/Settings";
import Feedback from "./my/feedback/Feedback";
import VerificationCode from "./login/ui/VerificationCode";
import Withdrawals from "./my/wallet/Withdrawals";
import Message from './message/container/Message'
// >>>>>>> master

class App extends Component {

  renderFooter() {
    let {pathname} = this.props.location
    if (/^\/(home|dynamic|my|message)$/.test(pathname)) return <PageFooter/>;
    return null
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home"><PageHome/></Route>
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
            <Message/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/VeriCode"><VerificationCode/></Route>
          <Route path="/followFans/:tag"><FollowAndFans/></Route>
          <Route path="/personal/:tag"><MyPersonalData/></Route>
          <Route path="/submitted"><Submitted/></Route>
{/* <<<<<<< HEAD */}
          <Route path="/my/:tag"><FollowAndFans/></Route>
          <Route path="/myPersonalData"><MyPersonalData/></Route>
          <Route path="/like"><Like/></Route>
          {/* <Route path="/dianzan"><DianZan/></Route>
          <Route path="/dianzan"><DianZan/></Route>
          <Route path="/dianzan"><DianZan/></Route> */}
{/* ======= */}
          <Route path="/activities"><Activities/></Route>
          <Route path="/wallet"><Wallet/></Route>
          {/*提现*/}
          <Route path="/withdrawals"><Withdrawals/></Route>
          <Route path="/settings"><Settings/></Route>
          <Route path="/feedback"><Feedback/></Route>
          <Redirect from="/" to="/home"/>
{/* >>>>>>> master */}
        </Switch>
        {this.renderFooter()}
      </div>
    );
  }
}

export default withRouter(App);