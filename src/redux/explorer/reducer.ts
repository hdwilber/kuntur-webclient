import { Action, handleActions } from 'redux-actions';
import { 
  EXPLORER_LOGIN,
  EXPLORER_LOGIN_FAILED,
  EXPLORER_FAILED,

  EXPLORER_REGISTER,
  EXPLORER_REGISTER_FAILED,
  EXPLORER_REGISTER_SUCCESS,

  EXPLORER_SESSION_FAILED,
  EXPLORER_SESSION,
  EXPLORER_SESSION_CHANGED,

  EXPLORER_SESSION_RESTORE,

  IEXPLORER_DEFAULT,
  EXPLORER_CHANGED,
  IExplorer,
} from './constants'


import { Explorer, Session, IError } from '../../types'

export const explorerReducer = handleActions<IExplorer, any>({
  [EXPLORER_SESSION]: (state: IExplorer, action: Action<EXPLORER_SESSION>) : IExplorer => {
    return {
      ...state,
      status: 'loading',
    }
  },

  [EXPLORER_SESSION_CHANGED]: (state: IExplorer, action: Action<EXPLORER_SESSION_CHANGED>) : IExplorer => {
    return {
      ...state,
      status: 'logged',
      session: action.payload.session,
      explorer: new Explorer()
    }
  },
  [EXPLORER_SESSION_FAILED]: (state: IExplorer, action:Action<EXPLORER_FAILED>) : IExplorer => {
    console.log(action)
    return {
      ...state,
      status: 'error',
      error: {
        code: action.payload.code,
        description: action.payload.description
      } as IError
    } as IExplorer
  },

  [EXPLORER_REGISTER]: (state: IExplorer, action: Action<EXPLORER_SESSION>) : IExplorer => {
    return state
  },
  
  [EXPLORER_REGISTER_SUCCESS]: (state: IExplorer, action: Action<EXPLORER_REGISTER_SUCCESS>) : IExplorer => {
    return state
  },

  [EXPLORER_REGISTER_FAILED]: (state: IExplorer, action:Action<EXPLORER_FAILED>) : IExplorer => {
    return {
      ...state,
      status: 'error',
      error: {
        code: action.payload.code,
        description: action.payload.description
      }
    } 
  },
}, IEXPLORER_DEFAULT)
