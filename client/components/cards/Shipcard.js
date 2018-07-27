
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
require('./style/shipCard.css')
//Not really sure about this page, but it would be useful, ask team



import React from 'react'

export default function ShipCard(props) {
  const ship = props.ship;
  return (
    <div className="card">
      <div className='img-container'>
        <img src={ship.imageUrl} />
      </div>
      <div className="container">
        <h4 className='center'><b>{ship.name}</b></h4>
        <div className='center'>
          <Link to={`/starships/${ship.id}`} >
            <p>Model: {ship.model} </p>
            <p>Price: {ship.price} </p>
          </Link>
          <button className="button button2">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
