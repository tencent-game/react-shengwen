import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import actionCreator from "@/my/actionCreator";

const useGetUserInfo = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (!state) {
  //     dispatch(actionCreator.loadDataSyncSaga())
  //   }
  // }, [dispatch])

  dispatch(actionCreator.loadDataSyncSaga())
  const state = useSelector((state) => {
    state.getIn(["my", "userInfo"])
  })
  console.log(state)
  return {
    state
  }
}

export default useGetUserInfo