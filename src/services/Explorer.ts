import Service from './Service'

import { Session } from '../types'

export default class ExplorerService extends Service {
  constructor(session: Session) {
    super(session, 'Explorers')
  }

  register (data: any): Promise<any> {
    return fetch (`${this.getBaseUrl()}`, {
      method: 'POST',
      headers: this.createHeaders(),
      body: JSON.stringify(data),
    });
  }

  login (data: any): Promise<any> {
    this.createHeaders();
    return fetch (`${this.getBaseUrl()}/login`, {
      method: 'POST',
      headers: this.createHeaders(),
      body: JSON.stringify(data),
    })
  }
}

