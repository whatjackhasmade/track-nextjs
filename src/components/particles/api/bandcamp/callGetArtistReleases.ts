import { fetchAPI } from 'particles';

type GetSingleWishlistParamaters = {
  id: string;
};

export const callGetArtistReleases = async (parameters: GetSingleWishlistParamaters) => {
  const response = await fetchAPI({ method: `GET`, parameters, route: `bandcamp` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callGetArtistReleases;
