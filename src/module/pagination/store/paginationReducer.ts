import { ReducerBuilder, reducerWithInitialState } from 'typescript-fsa-reducers'
import { paginationAsyncAction } from 'app/module/pagination/store/paginationAsyncAction'
import { PaginationInitialState, IPaginationState } from 'app/module/pagination/store/paginationState'

const getPostsStart = (state: IPaginationState): IPaginationState => {
  return {
    ...state,
    isLoading: true,
  }
}

const getPostsDone = (state: IPaginationState, payload: IPayload<IPosts[]>): IPaginationState => {
  return {
    ...state,
    isLoading: false,
    posts: payload.result,
  }
}

const getPostsError = (state: IPaginationState): IPaginationState => {
  return {
    ...state,
    isLoading: false,
  }
}

export const paginationReducer: ReducerBuilder<IPaginationState> = reducerWithInitialState(PaginationInitialState)
  .case(paginationAsyncAction.getPosts.async.started, getPostsStart)
  // @ts-ignore
  .case(paginationAsyncAction.getPosts.async.done, getPostsDone)
  .case(paginationAsyncAction.getPosts.async.failed, getPostsError)
