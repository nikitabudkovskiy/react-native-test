import { asyncActionCreator } from 'app/system/redux/actionCreator'
import { getPosts } from 'app/module/pagination/api/Api'

export class paginationAsyncAction {
  static getPosts = asyncActionCreator<{},IPosts[], Error>('PAGINATION/GET_POSTS', getPosts)
}
