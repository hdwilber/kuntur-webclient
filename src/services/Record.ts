import Service from './Service'
import { Record, Session } from '../types'

export default class RecordService extends Service {
  constructor(session: Session) {
    super(session, 'Records')
  }

  save (data: any): Promise<any> {
    console.log(data)
    if (this.session) {
      return fetch (`${this.getBaseUrl()}/${data.id}`, {
        method: 'PATCH',
        headers: this.createHeaders(),
        body: JSON.stringify(data),
      });
    }
    return Promise.reject('You do not have the enough privileges')
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

  getAll (): Promise<any> {
    console.log('Getting all records')
    const filter = {
      include: ['media']
    }
    return fetch (`${this.getBaseUrl()}/?filter=${JSON.stringify(filter)}`, {
      method: 'GET',
      headers: this.createHeaders(),
    });
  }

  uploadMedia(record: Record, files: FileList) : Promise<any> {
    var formData = new FormData()
    for(var i = 0; i < files.length; i++) {
      formData.append('mediaFiles', files.item(i), files.item(i).name)
    }

    return fetch(this.getBaseUrl() +`/${record.id}/uploadMedia`, {
      method: 'POST',
      body: formData,
      headers: this.createUploadHeaders()
    })
  }
}

