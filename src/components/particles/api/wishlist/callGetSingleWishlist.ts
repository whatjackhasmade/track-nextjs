import { fetchAPI } from 'particles';

type GetSingleWishlistParamaters = {};

export const callGetWishlist = async (parameters: GetSingleWishlistParamaters) => {
  const response = await fetchAPI({ method: `GET`, parameters, route: `wishlist` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callGetWishlist;
