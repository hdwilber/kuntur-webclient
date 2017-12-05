import * as React from 'react'
import { Checkbox, Button, Form } from 'semantic-ui-react'
import { Record } from '../../types'
import MediaNavigator from '../MediaNavigator'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const leafletStyle = require('leaflet/dist/leaflet.css')

interface OwnProps{
  onSubmit: (dta: any) => void 
  onFileUpload: (list: any) => void
  onCancel: (data:any) => void
  data: Record
}

interface OwnState {
  title: string
  description: string
  published: boolean
  location: string
  files: FileList
  locationMap: any
}

class RecordEdit extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props)
    this.state = {
      title: '',
      description: '',
      published: false,
      location: '',
      files: null,
      locationMap: null,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleLocationFound = this.handleLocationFound.bind(this)

    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  save (e: any) {
    const { data, onSubmit } = this.props
    onSubmit ({
      id: data.id,
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      published: this.state.published,
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
    })
  }

  handleCheckboxChange(e:any, props: any) {
    this.setState({
      [props.name]: props.checked
    })
  }

  handleFileChange(e: any) {
    const { onFileUpload } = this.props
    this.setState({
      files: e.target.files
    })
    onFileUpload(e.target.files)
  }

  handleLocationFound (e: any) {
    this.setState({
      locationMap: e.latlng,
    })
  }

  render () {
    return (
      <Form>
        <Form.Field>
          <label>Title</label>
          <input name="title" value={this.state.title} onChange={this.handleInputChange} placeholder='Title' />
        </Form.Field>

        <Form.Field>
          <label>Media Files</label>
          <input type="file" name="description" onChange={this.handleFileChange} multiple />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <textarea name="description" onChange={this.handleInputChange} placeholder='Description' >
            {this.state.description}
          </textarea>
        </Form.Field>

        <MediaNavigator files={this.state.files} />

        <Map style={{height: '250px'}} center={this.state.locationMap || [-17.394,-66.166]} zoom={8}
          onlocationfound={this.handleLocationFound}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={[-17.394, -66.166]}>
            <Popup>
              <span>
                A pretty CSS3 popup.<br />Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>

        <Form.Field>
          <label>Location</label>
          <input name="location" value={this.state.location} onChange={this.handleInputChange} placeholder='Location' />
        </Form.Field>

        <Form.Field>
          <Checkbox name="published" checked={this.state.published} onChange={this.handleCheckboxChange} label='Mark this record as published.' />
        </Form.Field>

        <Button.Group fluid> 
          <Button primary onClick={this.save}>Save</Button>
          <Button secondary onClick={this.cancel}>Cancel</Button>
        </Button.Group>
      </Form>
    )
  }
}

export default RecordEdit
