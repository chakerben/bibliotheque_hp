import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import ListBooks from './containers/BookList'

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
  <ListBooks />
 </Provider>,
 document.getElementById('root')
);

serviceWorker.register();
