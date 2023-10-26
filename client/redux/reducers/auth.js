

const UPDATE_EMAIL = 'auth_example/auth/UPDATE_EMAIL'
const UPDATE_PASSWORD = 'auth_example/auth/UPDATE_PASSWORD'
const LOGIN = 'auth_example/auth/LOGIN'

const initialState = {
  email: '',
  password: '',
  token: ''
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
        dispatch({ type: LOGIN, payload: data.token })
      })
  }
}
