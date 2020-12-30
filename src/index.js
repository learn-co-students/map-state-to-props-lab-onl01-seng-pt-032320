import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//  uses the createStore method from redux
import { Provider } from 'react-redux';
//  uses the Provider method from redux
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code




const store = createStore(
  manageUsers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



ReactDOM.render(
// Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider. 
// This will give your components access to the store.
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById('root')
);
