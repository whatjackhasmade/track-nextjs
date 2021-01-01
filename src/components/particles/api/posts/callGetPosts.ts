import { fetchAPI } from 'particles';

type GetPostsParameters = {};

export const callGetPosts = async (parameters: GetPostsParameters) => {
  const response = await fetchAPI({ method: `GET`, route: `posts` });
  const error = response?.error?.message;
  if (error) throw error;
  return response;
};

export default callGetPosts;
