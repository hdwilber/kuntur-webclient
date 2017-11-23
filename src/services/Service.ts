import { Session } from '../types'

const { REACT_APP_API_BASEURL } = process.env

export default abstract class Service {
  baseHeaders: Headers;
  constructor(public session: Session = null, private baseName: string = null) {

  }

  createHeaders() {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    if (this.session) {
      headers.append('Authorization', this.session.id)
    }
    return headers
  }

  setSession(session: Session) {
    this.session = session
  }

  getBaseUrl () {
    return `${REACT_APP_API_BASEURL}/${this.baseName}`
  } 
}

