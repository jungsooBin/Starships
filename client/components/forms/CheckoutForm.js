import React, { Component } from 'react';
import { connect } from 'react-redux';

//need to import correct thunk from store to get user and then make maptostate and dispatch

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname : '',
      lastname : '',
      address : '',
      country : '',
      state: '',
      zip: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //at the moment all of the shipping info isnt defined on user

  async componentDidMount() {
    const res = await this.props.fetchUser();
    const user = res.payload;
    this.setState({
      firstname : user.firstName,
      lastname : user.lastName,
      address : user.address,
      country : user.country,
      state: user.state,
      zip: user.zip
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    //process pmt with stripe
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}> 
        First name:<br />
        <input type="text" name="firstname" />
        <br />
        Last name:<br />
        <input type="text" name="lastname" />
        <br />
        Address:<br />
        <input type="text" name="address" />
        <br />
        Country:<br />
        <input type="text" name="country" />
        <br />
        State:<br />
        <input type="text" name="state" />
        <br />
        Zip Code:<br />
        <input type="text" name="zip" />
        <br />
        <button type='submit' disabled={!this.state.firstName || !this.state.lastName || !this.state.address || !this.state.country || !this.state.state || !this.state.zip}> Submit</button>
        </form>
      </div>
    )
  }
}