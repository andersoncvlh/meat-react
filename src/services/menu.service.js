import api from "../config/api.config";

const url = process.env.REACT_APP_API_URL;

const getRestaurantMenu = async (id) => {
  const response = await api.get(`${url}/menu?restaurantId=${id}`);
  return response.data;
};

export { getRestaurantMenu };
