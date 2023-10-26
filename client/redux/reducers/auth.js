import Cookies from 'universal-cookie'
import { history } from '..'

const UPDATE_EMAIL = 'auth_example/auth/UPDATE_EMAIL'
const UPDATE_PASSWORD = 'auth_example/auth/UPDATE_PASSWORD'
const LOGIN = 'auth_example/auth/LOGIN'

const cookies = new Cookies()
const initialState = {
  email: '',
  password: '',
  token: cookies.get('token'),
  user: {}
}

/* eslint-disable default-param-last */
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.payload
      }
    }
    case UPDATE_PASSWORD: {
      return {
        ...state,
        password: action.payload
      }
    }
    case LOGIN: {
      return {
        ...state,
        token: action.payload,
        user: action.user,
        email: '',
        password: ''
      }
    }
    default:
      return state
  }
}

export function updateLoginField(email) {
  return { type: UPDATE_EMAIL, payload: email }
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, payload: password }
}

export function trySigIn() {
  return (dispatch) => {
    fetch('/api/v1/auth')
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: LOGIN, payload: data.token, user: data.user })
        history.push('/private')
      })
  }
}

export function tryGetUserInfo() {
  return () => {
    fetch('/api/v1/user-info')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
      })
  }
}

export function signIn() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: LOGIN, payload: data.token, user: data.user })
      history.push('/private')
      })
  }
}
