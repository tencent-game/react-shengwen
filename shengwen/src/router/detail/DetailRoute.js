import PageDetail from '@/detail/detailpage/container/PageDetail'
import appreciatePage from '@/detail/detailpage/ui/appreciatePage'



const DetailRoute = [
  {
    id: 1, path: "/detail", component: PageDetail, exact: false
  },
  {
    id: 2, path: "/appreciate", component: appreciatePage, exact: false
  },
]

export default DetailRoute