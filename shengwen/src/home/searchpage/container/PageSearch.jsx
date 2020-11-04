import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import PageSearchUi from '../ui/searchPageUi'

 class PageSearch  extends Component {
  render() {
    return (
        <PageSearchUi></PageSearchUi>
    )
  }
}
export default withRouter(PageSearch)
