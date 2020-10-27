import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom"
import Login from "./login/Login";
import Home from "./home/Home";
import Submitted from "./my/Submitted";
import FollowAndFans from "./my/FollowAndFans";
import MyPersonalData from "./my/MyPersonalData";
// import {NavLink} from "react-router-dom"
// import {NavBar} from "./StyledApp";
// import home from "./assets/img/home.png"
// import dynamic from "./assets/img/dynamic.png"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/submitted"><Submitted/></Route>
          <Route path="/my/:tag"><FollowAndFans/></Route>
          <Route path="/myPersonalData"><MyPersonalData/></Route>
        </Switch>
      </div>
    );
  }
}

export default App;