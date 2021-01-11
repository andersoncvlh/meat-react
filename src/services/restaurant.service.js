import api from "../config/api.config";

const listRestaurants = async () => {
  return await api.get("http://localhost:3001/restaurants").data;
};

export { listRestaurants };
