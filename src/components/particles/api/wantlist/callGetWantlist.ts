import { fetchAPI } from 'particles';

type GetWantlistParamaters = {};

export const callGetWantlist = async (parameters: GetWantlistParamaters) => {
  const response = await fetchAPI({ method: `GET`, route: `wantlist` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callGetWantlist;
