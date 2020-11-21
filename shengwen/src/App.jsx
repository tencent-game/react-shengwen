import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router-dom"
import PageFooter from "./component/PageFooter"
import routes from "@/router";

class App extends Component {
  renderFooter() {
    let {pathname} = this.props.location
    if (pathname.match(/\/home.*?|\/dynamic.*?|\/message.*?|\/my.*?/)) return <PageFooter/>
    return ''
  }

  render() {
    return (
      <div style={{height: '100%'}}  >
        <Switch>
          {
            routes.map((route) => {
              return (
                <Route path={route.path} component={route.component} exact={route.exact} key={route.id} />
              )
            })
          }
          <Redirect from="/" to="/login"/>
        </Switch>
        {this.renderFooter()}
      </div>
    );
  }
}

export default withRouter(App);