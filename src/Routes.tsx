import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './root/Home'

interface RoutesProps {
  Wrapper: any;
};

const Routes: React.SFC<RoutesProps> = (props: RoutesProps) => {
  const { Wrapper } = props;

  return  (
    <Wrapper>
      <Switch> 
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </Wrapper>
  )
}
export default Routes;

