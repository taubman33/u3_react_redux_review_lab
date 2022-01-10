import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { LoadDestinations } from "../store/actions/DestinationActions";

const mapStateToProps = ({ destinationState }) => {
  return { destinationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestinations: () => dispatch(LoadDestinations()),
  };
};

const Destinations = (props) => {
  useEffect(() => {
    props.fetchDestinations();
  }, []);

  console.log(props);

  return (
    <div className="destinations">
      {props.destinationState.destinations.map((destination) => (
        <Link
          className="destination"
          key={destination._id}
          to={`/destinations/${destination._id}`}
        >
          <img src={destination.img} className="destination-image-preview" />
          <h2>{destination.location}</h2>
        </Link>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
