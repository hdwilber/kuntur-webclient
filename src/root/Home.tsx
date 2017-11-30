import * as React from 'react'
import { Grid,  } from 'semantic-ui-react'

import { connect } from 'react-redux'

import { RecordCreate } from '../components/Record'

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

    this.handleRecordCreateSubmit = this.handleRecordCreateSubmit.bind(this)
    this.handleRecordCreateCancel = this.handleRecordCreateCancel.bind(this)
  }

  handleRecordCreateSubmit (data: any) {
    console.log('create')
    const { recordCreate } = this.props
    recordCreate(data)
  }

  handleRecordCreateCancel (data: any) {
    console.log('Cancel create')
  }

  //componentWillReceiveProps(nextProps) {
    //if (nextProps.explorer) {
      //this.explorer.session
    //}
  //}


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
      return null
    }
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(Home);

