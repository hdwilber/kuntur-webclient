export const EXPLORER_SESSION = 'EXPLORER_SESSION_START'
export const EXPLORER_SESSION_RESTORE = 'EXPLORER_SESSION_RESTORE'
export const EXPLORER_SESSION_CHANGED = 'EXPLORER_SESSION_CHANGED'
export const EXPLORER_SESSION_FAILED = 'EXPLORER_SESSION_FAILED'

export const EXPLORER_SESSION_END = 'EXPLORER_SESION_END'

export const EXPLORER_RESTORE = 'EXPLORER_RESTORE'
export const EXPLORER_LOGIN = 'EXPLORER_LOGIN'
export const EXPLORER_LOGIN_FAILED= 'EXPLORER_LOGIN_FAILED'

export const EXPLORER_REGISTER = 'EXPLORER_REGISTER'
export const EXPLORER_REGISTER_SUCCESS = 'EXPLORER_REGISTER_SUCCESS'
export const EXPLORER_REGISTER_FAILED = 'EXPLORER_REGISTER_FAILED'

export const EXPLORER_CHANGED  = 'EXPLORER_CHANGED'

import { Explorer, Session, IError } from '../../types'


export interface IExplorer {
  status: string;
  session: Session;
  explorer: Explorer;
  error: IError;
}

export const IEXPLORER_DEFAULT = {
  status: 'empty',
  explorer: null,
  session: null,
  error: null
} as IExplorer

export type EXPLORER_CHANGED = {
  session: Session;
}

export type EXPLORER_SESSION= {
}

export type EXPLORER_SESSION_END = {
}

export type EXPLORER_SESSION_RESTORE = {
}

export type EXPLORER_RESTORE = {
}

export type EXPLORER_LOGIN = {
}

export type EXPLORER_SESSION_CHANGED = {
  session: Session;
}

export type EXPLORER_LOGIN_FAILED = {
  code: number;
  description: string;
}

export type EXPLORER_FAILED = {
  code: number;
  description: string;
}

export type EXPLORER_REGISTER_SUCCESS = {
}

export type EXPLORER_REGISTER = {
}

