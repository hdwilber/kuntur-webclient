import * as React from 'react'
import { Grid, Card,  } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getAll, create } from '../../redux/record/actions'

import RecordView from '../../components/Record/View'
import { Record } from '../../types'

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
  recordGetAll: () => void
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
      recordGetAll: () => dispatch(getAll()),
  }
};

class RecordList extends React.Component<OwnProps & ConnProps & ConnDispatches, OwnState> {
  constructor (props: any) {
    super(props) 
  }
  
  componentDidMount () {
    const { recordGetAll } = this.props
    recordGetAll()
  }

  render () {
    const { record, explorer } = this.props
    if (record) {
      console.log(record.list)
      return (
        <Grid centered>
          <Grid.Column width={16}>

          <Card.Group itemsPerRow={4} stackable>
          {record.list.map((r: Record, idx: number) => <RecordView key={idx} data={r} />)}
          </Card.Group>

          </Grid.Column>
        </Grid>
      )
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps, mapDispatchesToProps)(RecordList);

