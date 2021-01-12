import api from "../config/api.config";

const listRestaurants = async () => {
  const response = await api.get("http://localhost:3001/restaurants");
  return response.data;
};

const getByIdRestaurant = async (id) => {
  const response = await api.get(`http://localhost:3001/restaurants/${id}`);
  return response.data;
};

export { listRestaurants, getByIdRestaurant };
