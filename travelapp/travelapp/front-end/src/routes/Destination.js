import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import ReviewForm from "../components/ReviewForm";
import {
  GetDestinationById,
  LikeDestinationById,
  AddReview,
} from "../store/actions/DestinationActions";

const mapStateToProps = ({ destinationState }) => {
  return { destinationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestination: (id) => dispatch(GetDestinationById(id)),
    addLike: (id) => dispatch(LikeDestinationById(id)),
    addReview: (id, newReview) => dispatch(AddReview(id, newReview)),
  };
};

const Destination = (props) => {
  console.log(props);
  const { destination } = props.destinationState;
  const { id } = useParams();

  useEffect(async () => {
    props.fetchDestination(id);
  }, []);

  if (!destination._id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={destination.img} className="destination-image-full" />

      <h1>{destination.location}</h1>

      <p>{destination.desc}</p>

      <div className="likes">
        {destination.likes} likes
        <button onClick={() => props.addLike(id)}>Like</button>
      </div>

      <div>
        <h2>Add a Review</h2>
        <ReviewForm addReview={props.addReview} id={id} />
      </div>

      <div>
        <h2>Reviews:</h2>
        {destination.reviews.map((review) => (
          <div key={review._id}>
            {review.name}: {review.comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
