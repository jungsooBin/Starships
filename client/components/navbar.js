
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
require('./style/navbar.css')

import React, { Component } from 'react'

 class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#starships">All Ships</a></li>
            <li><a href="#account"> User's Name</a></li>
            <li className='right'><a href="#account">Account</a></li>
            <li className='right'><a href="#cart">Cart (0)</a></li>
        </ul>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
