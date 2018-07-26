//to be rendered top right of checkout page and on top right of checkout success page

import React from 'react';

const SummaryCard = (props) => {
  const { item } = props;
  const subtotal = item.price * item.quantity;

  return (
    <div>
      <h3>Summary: ({item.quantity} item)</h3>
      <br />
      <p>Subtotal: {subtotal}</p>
      <br />
      <p>Shipping: </p>
      <br />
      <hr/>
      <p>Total: {subtotal}</p>
    </div>
  )
}

export default SummaryCard;