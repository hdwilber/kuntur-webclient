import * as React from 'react'
import { Button, Form } from 'semantic-ui-react'

interface OwnProps{
  onLogin: (dta: any) => void 
  onRegister: (data:any) => void
}
interface OwnState {
  email: string
  password: string
}

class ExplorerLogin extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  login (e: any) {
    const { onLogin } = this.props
    onLogin ({
      email: this.state.email,
      password: this.state.password
    })
    this.setState({
      email: '',
      password: '',
    })
  }

  register(e: any) {
    const { onRegister } = this.props

    onRegister ({
      email: this.state.email,
      password: this.state.password
    })
    this.setState({
      email: '',
      password: '',
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
        <Form.Field>
          <label>Email</label>
          <input name="email" value={this.state.email} onChange={this.handleInputChange} placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" placeholder='Password' />
        </Form.Field>
        <Button.Group fluid> 
          <Button primary onClick={this.login}>Login</Button>
          <Button secondary onClick={this.register}>Register</Button>
        </Button.Group>
      </Form>
    )
  }
}

export default ExplorerLogin
