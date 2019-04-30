import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as sessAction from './actions/session_actions'
import * as APIUtil from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  //for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;
  window.receiveCurrentUser = sessAction.receiveCurrentUser;
  window.logoutCurrentUser = sessAction.logoutCurrentUser;
  window.receiveErrors = sessAction.receiveErrors;

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});