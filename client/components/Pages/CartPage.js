
import { connect } from 'react-redux';
import React, { Component } from 'react'
import CartItem from '../cards/CartItems'
require('../style/cart.css')

 class CartPage extends Component {
  render() {
    return (
      <div className='cart'>
      <div className='products'>
            <h1> Your Cart </h1>

            <div className='list-item-cal'>
            <hr />

            <div className='list-item'>
            <p>Item</p>
            </div>

            <div className='list-price'>
            <p>Price</p>
            </div>

            <div className='list-quantity '>
            <p>Quantity</p>
            </div>
            <hr />

            <div className='ship-list '>
                <CartItem />
            </div>



      </div>
        
      </div>
      <div className='total'>
        <div className='summary'>
        <h3> Summary (1 item) </h3>


        <div className='container'>
        <p className='inline-block'> Subtotal </p>
        <p className='inline-block right'>$20</p>
        </div>

        <div className='container'>
        <p className='inline-block'> Shipping </p>
        <p className='inline-block right'>$20</p>
        </div>


        <div className='container'>
        <p className='inline-block'> Est. Taxes </p>
        <p className='inline-block right'>$20</p>
        </div>

        <hr />
        <div className='container'>
        <p className='inline-block'><b>Total</b></p>
        <p className='inline-block right'>$20</p>
        </div>

        <div className='checkout'>
        <button class="button button2">Checkout</button>
        </div>
        </div>
      </div>
        
      </div>
    )
  }
}


// export default CartPage
// const mapStateToProps = (state) => {
//   let total = 0;
//   const items = {};
//   state.cart.forEach(product => {
//     if (items.hasOwnProperty(product.id)) {
//       items[product.id].quantity++;
//     } else {
//       items[product.id] = product;
//       items[product.id].quantity = 1;
//     }
//     total += product.price;
//   });
//   return {items, total};
// };

// const Cart = connect(mapStateToProps, null)(CartPage);

export default CartPage;


      {/* {Object.keys(props.items).length === 0
        ? <div>Is empty :(</div>
        : (
          <div>
          {Object.keys(props.items).map(productId => {
            const item = props.items[productId];
            return (
              <div key={productId}>
                {item.title} (x{item.quantity})
              </div>
            );
          })}
          <p>Your total: ${(props.total / 100).toFixed(2)}</p>
          </div>
        )
      } */}