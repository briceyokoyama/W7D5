import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`;
export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`;
export const RECEIVE_SESSION_ERRORS = `RECEIVE_ERRORS`;

export const receiveCurrentUser = (currentUser) => {
  debugger;
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser 
  })
}

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  currentUser: {}
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
})

export const login = (user) => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user))).fail(e => dispatch(receiveErrors(e)))
)

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(user => dispatch(logoutCurrentUser(user))).fail(e => dispatch(receiveErrors(e)))
)

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user))).fail(e => dispatch(receiveErrors(e)))
)