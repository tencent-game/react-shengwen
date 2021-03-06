import { MyMain } from "@/my/index"
import { FollowAndFans } from "@/my/followandfans/index";
import { PersonalData } from "@/my/personal/index";
import Submitted from "@/my/submitted/Submitted"
import Activities from "@/my/activities/Activities";
import Wallet from "@/my/wallet/Wallet";
import Settings from "@/my/settings/Settings";
import Feedback from "@/my/feedback/Feedback";
import Withdrawals from "@/my/wallet/Withdrawals";
import { AmbulatoryAndArticle } from "@/my/ambulatoryandarticle/index";
import { HistoryLog } from "@/my/history/index";
import EditInfo from "@/my/editinfo/EditInfo";

const MyRoute = [
  {
    id: 1, path: "/my", component: MyMain, exact: false
  },
  {
    id: 2, path: "/followFans", component: FollowAndFans, exact: false
  },
  {
    id: 3, path: "/personal/:tag", component: PersonalData, exact: false
  },
  {
    id: 4, path: "/submitted", component: Submitted, exact: false
  },
  {
    id: 5, path: "/activities", component: Activities, exact: false
  },
  {
    id: 6, path: "/wallet", component: Wallet, exact: false
  },
  {
    id: 7, path: "/settings", component: Settings, exact: false
  },
  {
    id: 8, path: "/feedback", component: Feedback, exact: false
  },
  {
    id: 9, path: "/withdrawals", component: Withdrawals, exact: false
  },
  {
    id: 10, path: "/ambulatoryArticle", component: AmbulatoryAndArticle, exact: false
  },
  {
    id: 11, path: "/historyLog", component: HistoryLog, exact: false
  },
  {
    id: 12, path: "/editInfo", component: EditInfo, exact: false
  }
]
export default MyRoute