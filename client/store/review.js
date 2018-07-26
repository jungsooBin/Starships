import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';
const DELETE_REVIEW = 'DELETE_REVIEW';
export const START_LOADING = 'START_LOADING';

//action creators
export const getReviews = reviews => ({type: GET_REVIEWS, payload: reviews });
export const deleteShip = Ship => ({ type: DELETE_REVIEW, payload: Ship });
export const startLoading = () => ({ type: START_LOADING });

//thunk creator
export const fetchReviews = () => {
  return async dispatch => {
  const res = await axios.get('/api/ship');
  dispatch(getReviews(res.data));
  }
}

export const fetchSingleShip = ShipId => {
  return async dispatch => {
    const res = await axios.get(`/api/Ship/${ShipId}`);
    return dispatch(getSingleShip(res.data));
  }
}

//ask team about using singleShip vs filtering ship by id to get a single one
const initialState = {
  ships: [],
  singleShip: {},
  isLoading: false
}

const shipReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPS:
      return {
        ...state,
        ships: action.payload,
        isLoading: false
      };
    case GET_SINGLE_SHIP:
      return {
        ...state,
        singleShip: action.payload,
        isLoading: false
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}

export default shipReducer;
