import * as React from 'react'
import { Grid,  } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { RecordEdit } from '../components/Record'

import { create } from '../redux/record/actions'

import RecordList from './Record/List'

interface OwnProps{
}

interface OwnState{
}

interface ConnProps {
  explorer: any;
  record: any;
};

interface ConnDispatches {
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
    recordCreate: (data: any) => dispatch(create(data)),
  }
};

class Home extends React.Component<OwnProps & ConnProps & ConnDispatches, OwnState> {
  constructor (props: any) {
    super(props) 
  }

  render () {
    const { explorer } = this.props
    if (explorer.session) {
      return (
        <Grid centered>
          <Grid.Column width={16}>
            <RecordList />


          </Grid.Column>
        </Grid>
      )
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(Home);

