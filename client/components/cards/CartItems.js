import React, { Component } from 'react'
require('./style/CartItems.css')
class CartItems extends Component {
  render() {
    return (
      <div className='container-ships'>
      <div className='container-ships-item '>
        <div className='container-ships-img'>
          <img src='http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png'/>
        </div>

        <div className='container-ships-info '>
          <p>Name: </p>
          <p>Model: </p>
          <p>manufacturer: </p>
        </div>
  
      </div>
      <div className='container-ships-price'>
        <p> $20</p>
      </div>
      <div className='container-ships-quantity'>
        <p> hello</p>
      </div>

      </div>
    )
  }
}

export default CartItems