
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
import {putInCart} from '../../store/cart';
require('./style/shipCard.css')



import React, { Component } from 'react'

export default class Shipcard extends Component {


  addingToCart(evt){
    console.log(evt)
  }

  render() {
    const ship = this.props.ship
    return (
      <div className="card">
      <div className='img-container'>
        <img src={ship.imageUrl} />
      </div>
      <div className="container">
        <h4 className='center'><b>{ship.name}</b></h4>
        <div className='center'>
          <Link to={`/starships/${ship.id}`} >
            <p>Name: {ship.name}</p>
            <p>Model: {ship.model} </p>
            <p>Price: {ship.price} </p>
          </Link>
          <button onClick={()=>this.addingToCart(ship.id)} className="button button2">Add to Cart</button>
        </div>
      </div>
    </div>
    )
  }
}
// const mapStateToProps = state =>{
//   return {
//     user : state.user
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     putInCart: (shipId) => dispatch(putInCart(shipId)),
//   }
// }

//  connect(mapStateToProps,mapDispatchToProps)(Shipcard)