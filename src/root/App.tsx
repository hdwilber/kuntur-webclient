import * as React from 'react';
import { connect } from 'react-redux'
import '../scss/index.scss';
import { Session } from '../types'

import { Grid, Modal } from 'semantic-ui-react'

import Navbar from '../components/Navbar'
import { ExplorerLogin } from '../components/Explorer'

import { restore, login, register } from '../redux/explorer/actions'


interface OwnProps{
}
interface OwnState{
  showStartDialog: boolean
}

interface ConnProps {
  explorer: any;
}

interface ConnDispatches {
  explorerSessionRestore: () => void;
  explorerLogin: (data: any) => void;
  explorerRegister: (data: any) => void;
}

function mapStateToProps(state: any) {
  return {
    explorer: state.explorer,
  }
}

function mapDispatchesToProps(dispatch: any) {
  return {
    explorerSessionRestore: () => dispatch (restore()),
    explorerLogin: (data: any) => dispatch(login(data)),
    explorerRegister: (data: any) => dispatch(register(data)),
  }
};

class App extends React.Component<OwnProps & ConnProps & ConnDispatches, OwnState>{
  constructor(props: any) {
    super(props)

    this.state = {
      showStartDialog: false 
    }

    this.handleClickLogin = this.handleClickLogin.bind(this)
    this.handleExplorerLogin = this.handleExplorerLogin.bind(this)
    this.handleExplorerRegister = this.handleExplorerRegister.bind(this)
    this.handleExplorerCancel = this.handleExplorerCancel.bind(this)
  }

  componentDidMount () {
    const { explorerSessionRestore } = this.props
    explorerSessionRestore()

  }

  handleExplorerLogin (data: any) {
    const { explorerLogin } = this.props
    explorerLogin (data)
  }

  handleExplorerRegister(data: any) {
    const { explorerRegister } = this.props
    explorerRegister(data)
  }

  handleClickLogin() {
    this.setState({
      showStartDialog: true
    })
  }

  handleExplorerCancel () {
    this.setState({
      showStartDialog: false
    })
  }

  render() {
    const { explorer } = this.props
    return (
      <div>
        <Navbar 
          active={'records'}
          session={explorer.session}
          explorer={explorer.explorer}
          onClickLogin={this.handleClickLogin}
        />
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={16}>
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal open={this.state.showStartDialog}
          onClose={this.handleExplorerCancel}
          size="tiny"
        >
          <Modal.Header>Start to Explore</Modal.Header>
          <Modal.Content>
            <ExplorerLogin
              onLogin={this.handleExplorerLogin}
              onRegister={this.handleExplorerRegister}
            /> 
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(App);
