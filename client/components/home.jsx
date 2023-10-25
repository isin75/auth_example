import React from 'react'
import Head from './head'
import LoginForm from './login'


const Home = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <LoginForm />
    </div>
  )
}

Home.propTypes = {}

export default Home
