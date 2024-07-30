import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"

// значения по умолчанию
const reedbackInitialState: FeedbackSliceState = {
  like: 0,
  dislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: reedbackInitialState,
  reducers: create => ({
    onLike: create.reducer((state: FeedbackSliceState) => {
      state.like += 1
    }),
    onDislike: create.reducer((state: FeedbackSliceState) => {
      state.dislike += 1
    }),
    // resetResults: create.reducer((state: FeedbackSliceState) => {
    //   state.like = 0
    //   state.dislike = 0
    // }),
    resetResults: create.reducer(() => 
        return reedbackInitialState;
    )
  }),
  selectors: {
    like: (state: FeedbackSliceState) => {
      return state.like
    },
    dislike: (state: FeedbackSliceState) => {
      return state.dislike
    },
  },
})

// делаем action для каждого reduce
export const feedbackSliceActions = feedbackSlice.actions

//даем подписаться
export const feedbackSliceSelectors = feedbackSlice.selectors


