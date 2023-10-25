import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateLoginField, updatePasswordField, signIn } from '../redux/reducers/auth'


const LoginForm = () => {
  const { login, password } = useSelector((s) => s.auth)
  const dispatch = useDispatch()

  const handleInputLogin = (e) => {
    const inputLogin = e.target.value
    dispatch(updateLoginField(inputLogin))
  }
  const handleInputPassword = (e) => {
    const inputPassword = e.target.value
    dispatch(updatePasswordField(inputPassword))
  }
  const handleClickSignIn = () => {
    dispatch(signIn())
    dispatch(updateLoginField(''))
    dispatch(updatePasswordField(''))
  }
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className=" max-w-xs ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleInputLogin}
              value={login}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={handleInputPassword}
              value={password}
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleClickSignIn()}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
