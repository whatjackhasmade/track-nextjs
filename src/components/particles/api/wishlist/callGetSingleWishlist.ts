import { fetchAPI } from 'particles';

type GetSingleWishlistParamaters = {
  id: string;
};

export const callGetSingleWishlist = async (parameters: GetSingleWishlistParamaters) => {
  const response = await fetchAPI({ method: `GET`, parameters, route: `wishlist` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callGetSingleWishlist;
