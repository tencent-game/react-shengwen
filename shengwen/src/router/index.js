import HomeRoute from "@/router/home/HomeRoute";
import DynamicRoute from "@/router/dynamic/DynamicRoute";
import LoginRoute from "@/router/login/LoginRoute";
import MessageRoute from "@/router/message/MessageRoute";
import MyRoute from "@/router/my/MyRoute";
import DetailRoute from "@/router/detail/DetailRoute";

const routes = [
  ...MyRoute,
  ...MessageRoute,
  ...LoginRoute,
  ...DynamicRoute,
  ...HomeRoute,
  ...DetailRoute,
]

export default routes