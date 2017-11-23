import Service from './Service'
import { Session } from '../types'

export default class RecordService extends Service {
  constructor(session: Session) {
    super(session, 'Records')
  }

  create (data: any): Promise<any> {
    if (this.session) {
      return fetch (`${this.getBaseUrl()}`, {
        method: 'POST',
        headers: this.createHeaders(),
        body: JSON.stringify(data),
      });
    }
    return Promise.reject('You do not have the enough privileges')
  }
}

