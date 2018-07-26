import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component {

  constructor(){
    this.state = {
      ships : []
    }
    super();
  }

  componentDidMount(){
    fetchShips();
    this.setState({
      ships: this.props.ships
    })
  }

  render(){
    const featuredShips = this.state.ships.filter(ship => ship.isFeatured);
    return (
      <div>
        <h3>StarShips</h3>
        <p>Shop for the best starships in the Galaxy today!</p>
        <h5>Featured StarShips</h5>
        {featuredShips.map((ship) => (
          <ShipCard ship={ship} />
        ))}
        <Link to='/starships' >View All</Link>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    ships: state.ships
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchShips: () => (dispatch(fetchShips())),
    putInCart: (product, quantity) => dispatch(addToCart(product, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShipPage);
