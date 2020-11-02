import Message from '@/message/container/Message'
import Like from "@/message/ui/Like";

const MessageRoute = [
  {
    id: 1, path: "/message", component: Message, exact: false
  },
  {
    id: 2, path: "/like", component: Like, exact: false
  },
]

export default MessageRoute