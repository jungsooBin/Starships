
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
// import AddReview from './'
// import EditReview from './'
import ShipList from './components/Pages/ShipList'
import SingleShipPage from './components/Pages/SingleShipPage'
import HomePage from './components/Pages/HomePage';
//import Cart from './components/Pages/Cart'
//Checkout, SingleUserPage,

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}
        {/* Routes placed here are only available after logging in */}
        <Route exact path="/starships" component={ShipList} />
        <Route exact path='/starships/:id' component={SingleShipPage}/>
        <Route exact path="/starships" component={ShipList} />
        <Route exact path='/starships/:id' component={SingleShipPage}/>
        <Route path="/cart" component={CartPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/users/:userId' component={SingleUserPage} />
        {/* Displays our Login component as a fallback */}
        <Route exact path='/home' component={HomePage} />
        <Route exact path= '/' component={HomePage} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

// <Route path='/checkout' component={Checkout} />
// <Route path='/users/:userId' component={SingleUserPage} />
//<Route path="/cart" component={Cart} />


// <Route exact path='/starships/:id/AddReview' component={AddReview}/>
// <Route exact path='/starships/:id/:reviewId' component={AddReview}/>