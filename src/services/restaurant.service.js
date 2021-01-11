import api from "../config/api.config";

const listRestaurants = async () => {
  const response = await api.get("http://localhost:3001/restaurants");
  return response.data;
};

export { listRestaurants };
