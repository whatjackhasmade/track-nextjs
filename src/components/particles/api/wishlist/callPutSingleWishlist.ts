import { fetchAPI } from 'particles';

type PutSingleWishlistParameters = {};

export const callPutSingleWishlist = async (parameters: PutSingleWishlistParameters) => {
  const response = await fetchAPI({ method: `PUT`, parameters, route: `wishlist` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callPutSingleWishlist;
