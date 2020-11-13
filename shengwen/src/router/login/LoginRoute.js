import Login from "@/login/container/Login";
import VerificationCode from "@/login/ui/VerificationCode";


const LoginRoute = [
  {
    id: 1, path: "/login", component: Login, exact: false
  },
  {
    id: 2, path: "/VeriCode", component: VerificationCode, exact: false
  },
]

export default LoginRoute