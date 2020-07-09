export interface IPaginationState {
  isLoading: boolean
  posts: IPosts[]
}

export const PaginationInitialState: IPaginationState = {
  isLoading: false,
  posts: [],
}