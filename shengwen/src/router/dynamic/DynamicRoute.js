import Dynamic from '@/dynamic/container/Dynamic'
import DynamicDetail from "@/dynamic/container/DynamicDetail";
import DispatchDynamics from '@/dynamic/container/DispatchDynamics';
import ForwardDynamic from '../../dynamic/container/ForwardDynamic';


const DynamicRoute = [
  {
    id: 1, path: "/dynamic", component: Dynamic, exact: false
  },
  {
    id: 2, path: "/Dynamicdetail/:id", component: DynamicDetail, exact: false
  },
  {
    id:3,path:"/Dispatch" ,  component:DispatchDynamics ,exact:false
  },
  {
    id:4,path:"/ForwardDynamic" ,  component:ForwardDynamic ,exact:false
  }
]

export default DynamicRoute