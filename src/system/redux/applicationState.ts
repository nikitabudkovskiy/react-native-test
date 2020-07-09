import { ISystemState } from 'app/system/redux/system'
import { IPaginationState } from 'app/module/pagination/store/paginationState'

export interface IApplicationState {
  system: ISystemState
  pagination: IPaginationState
}