
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';
require('./style/shipCard.css')
//Not really sure about this page, but it would be useful, ask team



import React, { Component } from 'react'

export default class Shipcard extends Component {
  render() {
    return (
    <div className="card">
        <div className='img-container'>
        <img src="https://i.stack.imgur.com/l60Hf.png" />
        </div>
    <div className="container">
        <h4 className = 'center'><b>Ship Name</b></h4>
        <div className='center'>
        <p>Name: Ship Name </p> 
        <p>Model: Ship Model </p> 
        <p>Price: Ship Price </p> 
        <button className="button button2">Add to Cart</button>
        </div>
      </div>
  </div>
    )
  }
}
