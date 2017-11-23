import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/configureStore'

import App from './root/App'
import Routes from './Routes'

import 'semantic-ui/dist/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Routes Wrapper={App} />
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
