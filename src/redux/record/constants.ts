export const RECORD_CREATE = 'RECORD_CREATE'
export const RECORD_CREATE_SUCCESS = 'RECORD_CREATE_SUCCESS'
export const RECORD_CREATE_FAILED = 'RECORD_CREATE_FAILED'

export const RECORD_CHANGED  = 'RECORD_CHANGED'

import { Record, Explorer, Session, IError } from '../../types'


export interface IRecord {
  status: string;
  current: Record;
  list: Array<Record>;
  error: IError;
}

export const IRECORD_DEFAULT = {
  status: 'empty',
  list: [],
  current: null,
  error: null
} as IRecord

export type RECORD_CHANGED = {
  record: Record
}

export type RECORD_CREATE = {
}

export type RECORD_CREATE_SUCCESS = {
  record: Record
}

export type RECORD_FAILED = {
  code: number,
  description: string;
}

