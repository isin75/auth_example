const UPDATE_LOGIN = 'auth_example/auth/UPDATE_LOGIN'
const UPDATE_PASSWORD = 'auth_example/auth/UPDATE_PASSWORD'
const LOGIN = 'auth_example/auth/LOGIN'


const initialState = {
  login: '',
  password: '',
  token: ''
}

/* eslint-disable default-param-last */
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return {
        ...state,
        login: action.payload
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
        token: action.payload
      }
    }
    default:
      return state
  }
}


export function updateLoginField(login) {
  return { type: UPDATE_LOGIN, payload: login }
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, payload: password }
}

export function signIn() {
  return (dispatch, getState) => {
    const { login, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: LOGIN, payload: data.token})
      })
  }
}