import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { trySigIn } from '../redux/reducers/auth'

const Startup = (props) => {
  const dispatch = useDispatch()
  const { token } = useSelector((s) => s.auth)
  useEffect(() => {}, [])
  if (token) {
  dispatch(trySigIn())
  }
  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
