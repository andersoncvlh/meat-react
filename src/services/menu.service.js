import api from "../config/api.config";

const getRestaurantMenu = async (id) => {
  const response = await api.get(
    `http://localhost:3001/menu?restaurantId=${id}`
  );
  return response.data;
};

export { getRestaurantMenu };
