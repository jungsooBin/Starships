import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleShip } from '../../store/ship';
import { addToCart } from '../../store/cart';
//import {ReviewList} from './ReviewList'

class SingleShipPage extends Component {

  constructor() {
    super();
    this.state = {
      quantity : 0,
      product : this.props.singleShip
    }
  }

  componentDidMount() {
    this.props.fetchSingleShip();
  }

  render() {
    const singleShip = this.state.product;

    return (
      <div>
        <h3>{singleShip.name}</h3>
        <h3>{singleShip.price}</h3>

        <hr />
        <img src={singleShip.imageUrl} />

        <hr />
        <p>Manufacturer: {singleShip.manufacturer}</p>
        <p>Model: {singleShip.model}</p>

        <hr />
        <p>Quantity:</p>
        <button onClick={() => {this.setState({quantity:this.state.quantity-1})}} >-</button>
        <h6>{this.state.quantity}</h6>
        <button onClick={() => {this.setState({quantity:this.state.quantity-1})}} >+</button>

        <hr />
        <button onClick={() => putInCart(singleShip.name, quantity)}>Add To Cart</button>
        <hr />
        <ReviewList />
      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    singleShip: state.singleShip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShip: shipId => (dispatch(fetchSingleShip(shipId))),
    putInCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipPage);
