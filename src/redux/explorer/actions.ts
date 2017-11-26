import { Action } from 'redux-actions';
import { 
  EXPLORER_SESSION,
  EXPLORER_SESSION_CHANGED,
  EXPLORER_SESSION_FAILED,

  EXPLORER_REGISTER,
  EXPLORER_REGISTER_SUCCESS,
  EXPLORER_REGISTER_FAILED,

  EXPLORER_FAILED,

  EXPLORER_SESSION_RESTORE,
  EXPLORER_SESSION_END,

  IEXPLORER_DEFAULT,
  EXPLORER_CHANGED,
  IExplorer,
} from './constants'


import { IError } from '../../types'
import { ExplorerService } from '../../services'

const eService = new ExplorerService(null)

export function restore() {
  return (dispatch: any, getState: () => IExplorer) => {
    dispatch({
      type: EXPLORER_SESSION_RESTORE,
      payload: {
      } 
    } as Action<EXPLORER_SESSION_RESTORE>)


    const session = localStorage.getItem ('KUNTUR_SESSION')
    if (session) {
      dispatch ({
        type: EXPLORER_SESSION_CHANGED,
        payload: {
          session: JSON.parse(session)
        }
      } as Action<EXPLORER_SESSION_CHANGED>) 
    } else {
      dispatch ({
        type: EXPLORER_SESSION_FAILED,
        payload: {
          code: -1,
          description: 'Login Failed',
        }
      }) as Action<EXPLORER_FAILED>
    }
  }
}

export function login (data: any) {
  return (dispatch: any, getState: () => IExplorer) => {
    dispatch({
      type: EXPLORER_SESSION,
      payload: {
      } 
    } as Action<EXPLORER_SESSION>)

    eService.login (data)
    .then (res => {
      if (res.ok) {
        return res.json ()
      }  else {
        dispatch ({
          type: EXPLORER_SESSION_FAILED,
          payload: {
            code: -1,
            description: 'Login Failed',
          }
        }) as Action<EXPLORER_FAILED>
      }
    })
    .then (data => {

      localStorage.setItem ('KUNTUR_SESSION', JSON.stringify(data))

      dispatch ({
        type: EXPLORER_SESSION_CHANGED,
        payload: {
          session: data
        }
      } as Action<EXPLORER_SESSION_CHANGED>) 
    }) 
    .catch (error => {
      dispatch ({
        type: EXPLORER_SESSION_FAILED,
        payload: {
          code: -1,
          description: error.message,
        } 
      } as Action<EXPLORER_FAILED>) 
    })
  }
}


export function logout () {
  return (dispatch: any, getState: () => IExplorer) => {
    dispatch({
      type: EXPLORER_SESSION_END,
      payload: {
      } 
    } as Action<EXPLORER_SESSION_END>)

    localStorage.removeItem ('KUNTUR_SESSION')

    dispatch ({
      type: EXPLORER_SESSION_CHANGED,
      payload: {
        session: null 
      }
    } as Action<EXPLORER_SESSION_CHANGED>) 
  }
}
export function register (data: any) {
  return (dispatch: any, getState: () => IExplorer) => {
    dispatch({
      type: EXPLORER_REGISTER,
      payload: {
      } 
    } as Action<EXPLORER_REGISTER>)

    eService.register (data)
    .then (res => {
      if (res.ok) {
        return res.json ()
      }  else {
        dispatch ({
          type: EXPLORER_REGISTER_FAILED,
          payload: {
            code: -1,
            description: 'Login Failed',
          }
        }) as Action<EXPLORER_FAILED>
      }
    })
    .then (data => {
      dispatch ({
        type: EXPLORER_REGISTER_SUCCESS,
        payload: {
        }
      } as Action<EXPLORER_SESSION_CHANGED>) 
    }) 
    .catch (error => {
      dispatch ({
        type: EXPLORER_SESSION_FAILED,
        payload: {
          code: -1,
          description: error.message,
        } 
      } as Action<EXPLORER_FAILED>) 
    })
  }

}

