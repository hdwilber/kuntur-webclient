import * as React from 'react';
import { connect } from 'react-redux'
import '../scss/index.scss';
import { Session } from '../types'

import { Grid } from 'semantic-ui-react'

import Navbar from '../components/Navbar'
import { restore } from '../redux/explorer/actions'



interface OwnProps{
}
interface OwnState{
}

interface ConnProps {
  explorer: any;
};

interface ConnDispatches {
  explorerSessionRestore: () => void;
};

function mapStateToProps(state: any) {
  return {
    explorer: state.explorer,
  };
};
function mapDispatchesToProps(dispatch: any) {
  return {
    explorerSessionRestore: () => dispatch (restore()),
  }
};

class App extends React.Component<OwnProps & ConnProps & ConnDispatches, OwnState>{
  componentDidMount () {
    const { explorerSessionRestore } = this.props
    explorerSessionRestore()
  }

  render() {
    const { explorer } = this.props
    return (
      <div>
        <Navbar 
          active={'records'}
          session={explorer.session}
          explorer={explorer.explorer}
        />
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={16}>
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(App);
