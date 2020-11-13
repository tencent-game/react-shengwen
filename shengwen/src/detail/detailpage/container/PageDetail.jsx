import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import PageDetailUi from '../ui/PageDetailUi'

 class PageDetail extends Component {
  render() {
    return (
        <PageDetailUi></PageDetailUi>
    )
  }
}
export default withRouter(PageDetail)
