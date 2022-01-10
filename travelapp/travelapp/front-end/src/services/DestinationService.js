import Client from "./";

export const GetDestinations = async () => {
  try {
    const res = await Client.get("/destinations");
    return res.data.destinations;
  } catch (error) {
    throw error;
  }
};

export const GetDestination = async (destinationId) => {
  try {
    const res = await Client.get(`/destinations/${destinationId}`);
    return res.data.destination;
  } catch (error) {
    throw error;
  }
};

export const LikeDestination = async (destinationId) => {
  try {
    const res = await Client.post(`/destinations/${destinationId}/like`);
    return res.data.likes;
  } catch (error) {
    throw error;
  }
};

export const CreateReview = async (destinationId, review) => {
  try {
    const res = await Client.post(
      `/destinations/${destinationId}/addReview`,
      review
    );
    return res.data.review;
  } catch (error) {
    throw error;
  }
};
