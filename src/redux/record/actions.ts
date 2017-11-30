import { Action } from 'redux-actions';
import { 
  RECORD_CREATE_FAILED,
  RECORD_CREATE_SUCCESS,
  RECORD_SAVE,
  RECORD_SAVE_SUCCESS,
  RECORD_SAVE_FAILED,
  RECORD_UPLOAD_MEDIA,
  RECORD_UPLOAD_MEDIA_FAILED,
  RECORD_UPLOAD_MEDIA_SUCCESS,
  RECORD_FAILED,
  RECORD_CREATE,
  RECORD_CHANGED,
  RECORD_GET_ALL,
  RECORD_GET_ALL_FAILED,
  RECORD_SET,
  RECORD_UNSET,
  IRecord,
  IRECORD_DEFAULT
} from './constants'


import { IError } from '../../types'
import { RecordService } from '../../services'
import { Record } from '../../types'

const rService = new RecordService(null)

export function set(record: Record) {
  return (dispatch: any, getState: () =>any) => {
    dispatch({
      type: RECORD_SET,
      payload: {
        record: record
      } 
    } as Action<RECORD_SET>)
  }
}

export function unSet() {
  return (dispatch: any, getState: () =>any) => {
    dispatch({
      type: RECORD_UNSET,
      payload: {
      } 
    } as Action<RECORD_UNSET>)

  }
}

export function upload(record: Record, files: FileList) {
  return (dispatch: any, getState: () =>any) => {
    const state = getState()

    dispatch({
      type: RECORD_UPLOAD_MEDIA,
      payload: {
      } 
    } as Action<RECORD_UPLOAD_MEDIA>)

    rService.setSession (state.explorer.session)
    rService.uploadMedia(record, files)
    .then (res => {
      if (res.ok) {
        return res.json ()
      }  else {
        dispatch ({
          type: RECORD_UPLOAD_MEDIA_FAILED,
          payload: {
            code: -1,
            description: 'Record upload Failed',
          }
        }) as Action<RECORD_FAILED>
      }
    })
    .then (data => {
      dispatch ({
        type: RECORD_UPLOAD_MEDIA_SUCCESS,
        payload: {
          record: record,
          media: data
        }
      } as Action<RECORD_UPLOAD_MEDIA_SUCCESS>) 
    }) 
    .catch (error => {
      dispatch ({
        type: RECORD_UPLOAD_MEDIA_FAILED,
        payload: {
          code: -1,
          description: error.message,
        } 
      } as Action<RECORD_FAILED>) 
    })
  }
}

export function save (data: any) {
  return (dispatch: any, getState: () =>any) => {
    const state = getState()

    dispatch({
      type: RECORD_SAVE,
      payload: {
      } 
    } as Action<RECORD_SAVE>)

    rService.setSession (state.explorer.session)

    rService.save (data)
    .then (res => {
      if (res.ok) {
        return res.json ()
      }  else {
        dispatch ({
          type: RECORD_SAVE_FAILED,
          payload: {
            code: -1,
            description: 'Record save Failed',
          }
        }) as Action<RECORD_FAILED>
      }
    })
    .then (data => {
      dispatch ({
        type: RECORD_SAVE_SUCCESS,
        payload: {
          record: data
        }
      } as Action<RECORD_SAVE_SUCCESS>) 
    }) 
    .catch (error => {
      dispatch ({
        type: RECORD_SAVE_FAILED,
        payload: {
          code: -1,
          description: error.message,
        } 
      } as Action<RECORD_FAILED>) 
    })
  }
}

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

export function getAll() {
  return (dispatch: any, getState: () =>any) => {
    console.log('calling here')
    const state = getState()

    dispatch({
      type: RECORD_GET_ALL,
      payload: {
      } 
    } as Action<RECORD_GET_ALL>)

    rService.getAll()
    .then (res => {
      if (res.ok) {
        return res.json ()
      }  else {
        dispatch ({
          type: RECORD_GET_ALL_FAILED,
          payload: {
            code: -1,
            description: 'Record Failed on Listing',
          }
        }) as Action<RECORD_FAILED>
      }
    })
    .then (data => {
      console.log(data)
      dispatch ({
        type: RECORD_CHANGED,
        payload: {
          list: data,
          record: null,
        }
      } as Action<RECORD_CHANGED>) 
    }) 
    .catch (error => {
      dispatch ({
        type: RECORD_GET_ALL_FAILED,
        payload: {
          code: -1,
          description: error.message,
        } 
      } as Action<RECORD_FAILED>) 
    })
  }
}

