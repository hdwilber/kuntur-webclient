import * as React from 'react'
import { Icon, Dropdown, Image, Menu } from 'semantic-ui-react'

import { Record, Session } from '../types'

//interface URL {
    //revokeObjectURL(url: string): void;
    //createObjectURL(object: any, options?: ObjectURLOptions): string;
//}

//declare var URL: URL;

interface MediaNavigatorProps {
  files: FileList
};


function buildFiles(props: MediaNavigatorProps) {
  const { files } = props
  const fs = []
  if (files) {
    for(var i = 0; i < files.length; i++) {
      //formData.append('mediaFiles', files.item(i), files.item(i).name)
      fs.push ({
        fileName: files.item(i).name,
        file: files.item(i),
      })
    }
  }
  return fs
}

const MediaNavigator: React.SFC<MediaNavigatorProps> = (props: MediaNavigatorProps) => {
  const files = buildFiles (props)
  return (
    
    <Image.Group size='tiny'>
    {files.map ((i, idx) => <Image key={idx} src={URL.createObjectURL(i.file)} />
    )}
    </Image.Group>
  )
}

export default MediaNavigator
