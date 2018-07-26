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
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleShip(id);
  }

  render() {
    const singleShip = this.props.singleShip;

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
        <button onClick={() => {this.setState({quantity:this.state.quantity+1})}} >+</button>

        <hr />
        <button onClick={() => this.props.putInCart(singleShip.name, this.state.quantity)}>Add To Cart</button>
        <hr />
        {/* <ReviewList /> */}
      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    singleShip: state.ship.singleShip
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleShip: shipId => (dispatch(fetchSingleShip(shipId))),
    putInCart: (product) => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipPage);
