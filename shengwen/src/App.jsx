import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
// import Login from "./login/Login";
import {Login} from "@/login/index";
import {withRouter} from "react-router-dom"
import My from "./my/My"
import FollowAndFans from "./my/followandfans/FollowAndFans";
import MyPersonalData from "./my/personal/MyPersonalData";
import Home from "./home/Home"
import PageFooter from "./component/PageFooter"
import Submitted from "./my/submitted/Submitted"
import Activities from "./my/activities/Activities";
import Wallet from "./my/wallet/Wallet";
import Settings from "./my/settings/Settings";
import Feedback from "./my/feedback/Feedback";
import VerificationCode from "./login/ui/VerificationCode";
import Withdrawals from "./my/wallet/Withdrawals";
import Dynamic from './dynamic/container/Dynamic'
import DynamicDetail from './dynamic/container/DynamicDetail';

class App extends Component {

  renderFooter() {
    let {pathname} = this.props.location
    if (pathname.match(/\/home.*?|\/dynamic.*?|\/message.*?|\/my.*?/)) return <PageFooter/>
    return ''
  }

  render() {
    return (
      <div style={{height:'100%'}}>
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/my">
            <My/>
          </Route>
          <Route path="/dynamic" component={Dynamic}></Route>
          <Route path="/Dynamicdetail" component={DynamicDetail}></Route>
          
          <Route path="/message">
            <div>message</div>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/VeriCode"><VerificationCode/></Route>
          <Route path="/followFans/:tag"><FollowAndFans/></Route>
          <Route path="/personal/:tag"><MyPersonalData/></Route>
          <Route path="/submitted"><Submitted/></Route>
          <Route path="/activities"><Activities/></Route>
          <Route path="/wallet"><Wallet/></Route>
          {/*提现*/}
          <Route path="/withdrawals"><Withdrawals/></Route>
          <Route path="/settings"><Settings/></Route>
          <Route path="/feedback"><Feedback/></Route>
          <Redirect from="/" to="/home"/>
        </Switch>
        {this.renderFooter()}
      </div>
    );
  }
}

export default withRouter(App);