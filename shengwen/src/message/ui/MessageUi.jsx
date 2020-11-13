import React, { Component } from 'react'

import {Container} from './styledMessage'

import {withRouter} from "react-router-dom"


import Menu from './Menu'
import Tips from './Tips'

class MessagUi extends Component {

  render() {
    return (
      <Container>
        <header>消息</header>
        <Menu> </Menu>
        <Tips></Tips>
      </Container>
    )
  }
}

export default withRouter(MessagUi)
