import { fetchAPI } from 'particles';

type GetWishlistParamaters = {};

export const callGetWishlist = async (parameters: GetWishlistParamaters) => {
  const response = await fetchAPI({ method: `GET`, route: `wishlist` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callGetWishlist;
