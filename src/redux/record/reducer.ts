import { Action, handleActions } from 'redux-actions';
import { 
  RECORD_CREATE_FAILED,
  RECORD_CREATE_SUCCESS,
  RECORD_FAILED,
  RECORD_CREATE,
  IRecord,
  IRECORD_DEFAULT
} from './constants'


import { Record, Session, IError } from '../../types'

export const recordReducer = handleActions<IRecord, any>({
  [RECORD_CREATE]: (state: IRecord, action: Action<RECORD_CREATE>) : IRecord => {
    return {
      ...state,
      status: 'creating',
    }
  },

  [RECORD_CREATE_SUCCESS]: (state: IRecord, action: Action<RECORD_CREATE_SUCCESS>) : IRecord => {
    return {
      ...state,
      status: 'created',
      current: action.payload.record,
    }
  },
  [RECORD_CREATE_FAILED]: (state: IRecord, action:Action<RECORD_FAILED>) : IRecord => {
    return {
      ...state,
      status: 'error',
      error: {
        code: action.payload.code,
        description: action.payload.description
      } as IError
    } as IRecord
  },
}, IRECORD_DEFAULT)
