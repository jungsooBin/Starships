import React from 'react'
import {connect} from 'react-redux';
import {addReviews} from '../../store/review'
import ReviewForm from './ReviewForm'

const AddCampusForm = ({handleSubmit}) => (
  <React.Fragment>
    <h1>Add a new Review</h1>
    <ReviewForm handleSubmit={handleSubmit} />
  </React.Fragment>


)

const mapStateToprops = (state) => (console.log(state),{
  ship: state.singleShip
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   handleSubmit: async (event, reviewData) =>{
    console.log(ownProps)
    event.preventDefault();
    const starshipAction = await dispatch(addReviews(reviewData, ownProps));
    ownProps.history.push(`/starships/${ownProps.match.params.id}`)
  }
  
})

const AddCampus = connect(mapStateToprops, mapDispatchToProps)(AddCampusForm)
export default AddCampus;