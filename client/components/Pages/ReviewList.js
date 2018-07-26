import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../../store/review';

//possibly want to render ship cards on this page instead
//add isLoading


class ReviewList extends Component {
  componentDidMount() {
    this.props.loadReviews();
  }

  render() {
//singleShip is from SingleShipPage(component) and reviews is from mapStateToprops
    const {reviews} = this.props;

    return (
      <div>
        <h1>Reviews</h1>
          <ul>
            {reviews.map(review => (
              <div key={review.id}>

                <li>
                  <Link to={`/starships/${review.shipId}/${review.id}`}>
                    <p>Edit review</p>
                  </Link>
                  <h3>reviewer: {review.content}</h3>
                  <p>review content: {review.content}</p>
                  <p>review rate: {review.rate}</p>
                </li>
                
              </div>
            ))}
          </ul>
          <Link to ={`/starships/${reviews.shipId.id}/AddReview`}>Add review</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadReviews: () => dispatch(fetchReviews(ownProps.match.params.id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
