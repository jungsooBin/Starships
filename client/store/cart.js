export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = productId => ({
  type: 'REMOVE_FROM_CART',
  payload: productId
});

//check if remove is correct

const cartReducer = (cartState = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...cartState, action.payload];
    case REMOVE_FROM_CART:
      return cartState.filter(obj => obj.id !== action.payload);
    default:
      return cartState;
  }
};

export default cartReducer;