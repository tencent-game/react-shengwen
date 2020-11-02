import Dynamic from '@/dynamic/container/Dynamic'
import DynamicDetail from "@/dynamic/container/DynamicDetail";


const DynamicRoute = [
  {
    id: 1, path: "/dynamic", component: Dynamic, exact: false
  },
  {
    id: 2, path: "/Dynamicdetail", component: DynamicDetail, exact: false
  },
]

export default DynamicRoute