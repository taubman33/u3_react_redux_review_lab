import {
  GetDestinations,
  GetDestination,
  LikeDestination,
  CreateReview,
} from "../../services/DestinationService";

import {
  GET_DESTINATIONS,
  GET_DESTINATION_BY_ID,
  LIKE_DESTINATION,
  ADD_REVIEW,
} from "../types";

export const LoadDestinations = () => {
  return async (dispatch) => {
    try {
      const destinations = await GetDestinations();

      dispatch({
        type: GET_DESTINATIONS,
        payload: destinations,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const GetDestinationById = (id) => {
  return async (dispatch) => {
    try {
      const destination = await GetDestination(id);

      dispatch({
        type: GET_DESTINATION_BY_ID,
        payload: destination,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LikeDestinationById = (id) => {
  return async (dispatch) => {
    try {
      const like = await LikeDestination(id);

      dispatch({
        type: LIKE_DESTINATION,
        payload: like,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const AddReview = (id, review) => {
  return async (dispatch) => {
    try {
      const newReview = await CreateReview(id, review);

      console.log("NEW REVIEW: ", newReview);

      dispatch({
        type: ADD_REVIEW,
        payload: newReview,
      });
    } catch (error) {
      throw error;
    }
  };
};
