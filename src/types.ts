export class Session {
  id: string;
  explorerId: string;
  email: string
}

export class Explorer {
  id: string;
  email: string;
  name: string;
  displayName: string;
  photo: string;
}


export class IError {
  code: number
  description: string
}

export class Record {
  id: string;
  title: string;
  description: string;
}
