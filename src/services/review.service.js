import api from "../config/api.config";

const listReview = async () => {
  const response = await api.get(
    `http://localhost:3001/reviews?restaurantId=bread-bakery`
  );
  return response.data;
};

export default listReview;
