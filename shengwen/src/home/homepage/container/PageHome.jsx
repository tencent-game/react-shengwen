import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import PageHomeUi from '../ui/PageHomeUi'

 class PageHome extends Component {
  render() {
    return (
        <PageHomeUi></PageHomeUi>
    )
  }
}
export default withRouter(PageHome)
