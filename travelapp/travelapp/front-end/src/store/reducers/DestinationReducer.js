import {
  GET_DESTINATIONS,
  GET_DESTINATION_BY_ID,
  LIKE_DESTINATION,
  ADD_REVIEW,
} from "../types";

const initialState = {
  destinations: [],
  destination: {},
};

const DestinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      return { ...state, destinations: action.payload };
    case GET_DESTINATION_BY_ID:
      return { ...state, destination: action.payload };
    case LIKE_DESTINATION:
      const likedDestination = state.destination;
      likedDestination.likes = action.payload;
      return { ...state, destination: likedDestination };
    case ADD_REVIEW:
      const reviewedDestination = {
        ...state.destination,
        reviews: [...state.destination.reviews, action.payload],
      };
      return { ...state, destination: reviewedDestination };
    default:
      return { ...state };
  }
};

export default DestinationReducer;
