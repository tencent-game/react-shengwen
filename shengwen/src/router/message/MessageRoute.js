import Message from '@/message/container/Message'
import Like from "@/message/ui/Like";
import Remark from "@/message/ui/Remark";
import Fans from "@/message/ui/Fans";
import Notice from "@/message/ui/Notice";

const MessageRoute = [
  {
    id: 1, path: "/message", component: Message, exact: false
  },
  {
    id: 2, path: "/like", component: Like, exact: false
  },
  {
    id: 3, path: "/remark", component: Remark, exact: false
  },
  {
    id: 4, path: "/fans", component: Fans, exact: false
  },
  {
    id: 5, path: "/notice", component: Notice, exact: false
  }
]

export default MessageRoute