import React from 'react';
import {connect} from 'react-redux';
import {updateSingleCampus} from '../reducers/campusReducer'
import CampusForm from './CampusForm'

const EditCampusForm = ({ handleSubmit, campus}) => (
  <React.Fragment>
    <h1>Edit the existing campus</h1>
    <CampusForm initialReviewData={campus} handleSubmit={handleSubmit}/>
  </React.Fragment>
)

const mapStateToprops = (state) => (console.log(state),{
  campus: state.campuses.campus
});

const mapDisPatchToProps = (dispatch, ownProps) => ({
  
  handleSubmit: async (event, campusData) =>{
    console.log(ownProps)

    event.preventDefault();
    const campusAction = await dispatch(updateSingleCampus(campusData));
    console.log(campusAction)
    const theId = campusAction.payload[1][0].id
    console.log(theId)
    ownProps.history.push(`/campuses/${theId}`)
  }
})

const EditCampus = connect(mapStateToprops, mapDisPatchToProps)(EditCampusForm)
export default EditCampus;