import * as React from 'react'
import { Grid,  } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { ExplorerLogin } from '../components/Explorer'
import { RecordCreate } from '../components/Record'

import { login, register } from '../redux/explorer/actions'
import { create } from '../redux/record/actions'

interface OwnProps{
}
interface OwnState{
}

interface ConnProps {
  explorer: any;
  record: any;
};

interface ConnDispatches {
  explorerLogin: (data: any) => void;
  explorerRegister: (data: any) => void;
  recordCreate: (data: any) => void
};


function mapStateToProps(state: any) {
  return {
    explorer: state.explorer,
    record: state.record,
  };
};
function mapDispatchesToProps(dispatch: any) {
  return {
    explorerLogin: (data: any) => dispatch(login(data)),
    explorerRegister: (data: any) => dispatch(register(data)),
    recordCreate: (data: any) => dispatch(create(data)),
  }
};

class Home extends React.Component<OwnProps & ConnProps & ConnDispatches, OwnState> {
  constructor (props: any) {
    super(props) 

    this.handleExplorerLogin = this.handleExplorerLogin.bind(this)
    this.handleExplorerRegister = this.handleExplorerRegister.bind(this)
    this.handleRecordCreateSubmit = this.handleRecordCreateSubmit.bind(this)
    this.handleRecordCreateCancel = this.handleRecordCreateCancel.bind(this)
  }

  handleExplorerLogin (data: any) {
    const { explorerLogin } = this.props
    explorerLogin (data)
  }

  handleExplorerRegister(data: any) {
    const { explorerRegister } = this.props
    explorerRegister(data)
  }

  handleRecordCreateSubmit (data: any) {
    const { recordCreate } = this.props
    recordCreate(data)
  }

  handleRecordCreateCancel (data: any) {
    console.log('Cancel create')
  }
  render () {
    const { explorer } = this.props
    if (explorer.session) {
      return (
        <Grid centered>
          <Grid.Column mobile={12} tablet={6} computer={4} width={4}>
            <RecordCreate
              onSubmit={this.handleRecordCreateSubmit}
              onCancel={this.handleRecordCreateCancel}
            />
          </Grid.Column>
        </Grid>
      )
    } else {
      return (
        <Grid centered>
          <Grid.Column mobile={12} tablet={6} computer={4} width={4}>
            <ExplorerLogin
              onLogin={this.handleExplorerLogin}
              onRegister={this.handleExplorerRegister}
            /> 
          </Grid.Column>
        </Grid>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(Home);

