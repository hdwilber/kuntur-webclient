import * as React from 'react'
import { Image, Button, Card } from 'semantic-ui-react'
import { MediaFile, Record } from '../../types'


interface OwnProps{
  data: Record;
}
interface OwnState {
  title: string
  description: string
}

const { REACT_APP_API_BASEURL } = process.env
class RecordView extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props)
  }

  render () {
    const { data: { media, title, description, id }} = this.props
    return (
      <Card>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Content>
        {description}
      </Card.Content>
      <Image.Group>
      { media.map ((m: MediaFile, idx: number) => {
        return ( <Image key={idx} src={`${REACT_APP_API_BASEURL}/${m.url}`} /> );
      })}
      </Image.Group>
      </Card>
    )
  }
}

export default RecordView

