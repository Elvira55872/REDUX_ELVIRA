import Feedback from "components/Feedback/Feedback"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

function Homework16() {
  // просто получаем функцию dispatch
  const dispatch = useAppDispatch()

  // подписаться на изменения в redux store
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const onLike = () => {
    dispatch(feedbackSliceActions.onLike())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.onDislike())
  }

  const onResetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={onResetResults}
      />
    </>
  )
}

export default Homework16
