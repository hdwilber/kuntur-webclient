export const RECORD_CREATE = 'RECORD_CREATE'
export const RECORD_CREATE_SUCCESS = 'RECORD_CREATE_SUCCESS'
export const RECORD_CREATE_FAILED = 'RECORD_CREATE_FAILED'

export const RECORD_SAVE = 'RECORD_SAVE'
export const RECORD_SAVE_SUCCESS = 'RECORD_SAVE_SUCCESS'
export const RECORD_SAVE_FAILED = 'RECORD_SAVE_FAILED'

export const RECORD_UPLOAD_MEDIA = 'RECORD_UPLOAD_MEDIA'
export const RECORD_UPLOAD_MEDIA_FAILED = 'RECORD_UPLOAD_MEDIA_FAILED'
export const RECORD_UPLOAD_MEDIA_SUCCESS = 'RECORD_UPLOAD_MEDIA_SUCCESS'

export const RECORD_SET = 'RECORD_SET'
export const RECORD_UNSET = 'RECORD_UNSET'

export const RECORD_GET_ALL = 'RECORD_GET_ALL'
export const RECORD_GET_ALL_FAILED = 'RECORD_GET_ALL_FAILED'

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
  record?: Record
  list?: Record[]
}

export type RECORD_CREATE = {
}

export type RECORD_UPLOAD_MEDIA = {

}

export type RECORD_CREATE_SUCCESS = {
  record: Record
}

export type RECORD_FAILED = {
  code: number,
  description: string;
}

export type RECORD_GET_ALL = {
}

export type RECORD_GET_ALL_FAILED = {
  code: number;
  description: string;
}

export type RECORD_UPLOAD_MEDIA_SUCCESS = {
  record?: Record
  media?: Array<any>
}

export type RECORD_SET = {
  record: Record
}

export type RECORD_UNSET = {
}

export type RECORD_SAVE = {
  record: Record
}

export type RECORD_SAVE_SUCCESS = {

}

