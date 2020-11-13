import PageHome from "@/home/homepage/container/PageHome";
import PageSearch from '@/home/searchpage/container/PageSearch'
import searchResult from '@/home/searchpage/ui/searchResult'
import Article from '@/home/searchpage/ui/Article'
import Author from '@/home/searchpage/ui/Author'
import PageField from "@/home/homepage/ui/PageField";
import PageNoResult from '@/home/searchpage/ui/noresult'

const HomeRoute = [
  {
    id: 1, path: "/home", component: PageHome, exact: false
  },
  {
    id: 2, path: "/search", component: PageSearch, exact: false
  },
  {
    id: 3, path: "/result", component: searchResult, exact: false
  },
  {
    id: 4, path: "/article", component: Article, exact: false
  },
  {
    id: 5, path: "/author", component: Author, exact: false
  },
  {
    id: 6, path: "/field", component: PageField, exact: false
  },
  {
    id: 7, path: "/noresult", component: PageNoResult, exact: false
  },
]

export default HomeRoute