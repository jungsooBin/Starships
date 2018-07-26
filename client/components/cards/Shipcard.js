import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShips } from '../../store/ship';

//Not really sure about this page, but it would be useful, ask team

class ShipCard extends Component {

  componentDidMount() {
    this.props.fetchShips();
  }

  render() {
    const ships = this.props.ships;
  }
}