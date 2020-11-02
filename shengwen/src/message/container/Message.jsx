import React from 'react'
import { withRouter } from 'react-router-dom'

import MessageUi from '../ui/MessageUi'

function Message (props) {
    return (
      <MessageUi></MessageUi>
    )
}
export default withRouter(Message)