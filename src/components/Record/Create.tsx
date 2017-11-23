import * as React from 'react'
import { Button, Form } from 'semantic-ui-react'

interface OwnProps{
  onSubmit: (dta: any) => void 
  onCancel: (data:any) => void
}
interface OwnState {
  title: string
  description: string
}

class RecordCreate extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props)
    this.state = {
      title: '',
      description: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.create = this.create.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  create (e: any) {
    const { onSubmit } = this.props
    onSubmit ({
      title: this.state.title,
      description: this.state.description,
    })
    this.setState({
      title: '',
      description: '',
    })
  }

  cancel(e: any) {
    const { onCancel } = this.props

    onCancel({})
    this.setState({
      title: '',
      description: '',
    })
  }

  handleInputChange (e: any) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {console.log(this.state)})
  }
  render () {
    return (
      <Form>
      <h1>Create a new Record </h1>
        <Form.Field>
          <label>Title</label>
          <input name="email" value={this.state.title} onChange={this.handleInputChange} placeholder='Title' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea name="description" onChange={this.handleInputChange} placeholder='Description' >
            {this.state.description}
          </textarea>
        </Form.Field>
        <Button.Group fluid> 
          <Button primary onClick={this.create}>Create</Button>
          <Button secondary onClick={this.cancel}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}

export default RecordCreate
