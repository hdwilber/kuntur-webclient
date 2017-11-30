import { Action, handleActions } from 'redux-actions';
import { 
  RECORD_CREATE_FAILED,
  RECORD_CREATE_SUCCESS,
  RECORD_FAILED,
  RECORD_CREATE,

  RECORD_UPLOAD_MEDIA,
  RECORD_UPLOAD_MEDIA_FAILED,
  RECORD_UPLOAD_MEDIA_SUCCESS,
  RECORD_SET,
  RECORD_UNSET,

  RECORD_GET_ALL_FAILED,

  RECORD_CHANGED,
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

  [RECORD_SET]: (state: IRecord, action: Action<RECORD_SET>) : IRecord => {
    return {
      ...state,
      current: action.payload.record
    }
  },

  [RECORD_UNSET]: (state: IRecord, action: Action<RECORD_UNSET>) : IRecord => {
    return {
      ...state,
      current: null
    }
  },

  [RECORD_CREATE_SUCCESS]: (state: IRecord, action: Action<RECORD_CREATE_SUCCESS>) : IRecord => {
    return {
      ...state,
      status: 'created',
      list: state.list.concat([action.payload.record]),
      current: action.payload.record,
    }
  },
  [RECORD_CREATE_SUCCESS]: (state: IRecord, action: Action<RECORD_CREATE_SUCCESS>) : IRecord => {
    return {
      ...state,
      status: 'created',
      current: action.payload.record,
    }
  },

  [RECORD_UPLOAD_MEDIA_SUCCESS]: (state: IRecord, action: Action<RECORD_UPLOAD_MEDIA_SUCCESS>) : IRecord => {
    const {record, media} = action.payload

    var current = state.list.find(r => r.id === record.id)
    console.log(action.payload)
    if (current) {
      if (current.media) {
        current.media = current.media.concat(media)
      } else {
        current.media = media
      }

      return {
        ...state,
        current: current
      }
    }
    return state
  },

  [RECORD_CHANGED]: (state: IRecord, action: Action<RECORD_CHANGED>) : IRecord => {
    const {record, list} = action.payload

    if (record) {
      return {
        ...state,
        status: 'created',
        current: record,
      }
    } else if (list) {
      return {
        ...state,
        status: 'created',
        current: list[0],
        list: list,
      }
    } else return state
  },

  [RECORD_GET_ALL_FAILED]: (state: IRecord, action:Action<RECORD_GET_ALL_FAILED>) : IRecord => {
    return {
      ...state,
      status: 'error',
      error: {
        code: action.payload.code,
        description: action.payload.description
      } as IError
    } as IRecord
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

  [RECORD_UPLOAD_MEDIA_FAILED]: (state: IRecord, action:Action<RECORD_FAILED>) : IRecord => {
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
