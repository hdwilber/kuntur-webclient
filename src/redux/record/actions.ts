import { Action } from 'redux-actions';
import { 
  RECORD_CREATE_FAILED,
  RECORD_CREATE_SUCCESS,
  RECORD_FAILED,
  RECORD_CREATE,
  IRecord,
  IRECORD_DEFAULT
} from './constants'


import { IError } from '../../types'
import { RecordService } from '../../services'

const rService = new RecordService(null)

export function create (data: any) {
  return (dispatch: any, getState: () =>any) => {
    const state = getState()

    dispatch({
      type: RECORD_CREATE,
      payload: {
      } 
    } as Action<RECORD_CREATE>)

    rService.setSession (state.explorer.session)

    rService.create (data)
    .then (res => {
      if (res.ok) {
        return res.json ()
      }  else {
        dispatch ({
          type: RECORD_CREATE_FAILED,
          payload: {
            code: -1,
            description: 'Record create Failed',
          }
        }) as Action<RECORD_FAILED>
      }
    })
    .then (data => {
      dispatch ({
        type: RECORD_CREATE_SUCCESS,
        payload: {
          record: data
        }
      } as Action<RECORD_CREATE_SUCCESS>) 
    }) 
    .catch (error => {
      dispatch ({
        type: RECORD_CREATE_FAILED,
        payload: {
          code: -1,
          description: error.message,
        } 
      } as Action<RECORD_FAILED>) 
    })
  }
}

