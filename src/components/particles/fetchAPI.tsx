const handleGET = async ({ fetchOptions, url }) => {
  // Call the fetch function and parse as JSON
  const request = await fetch(url, fetchOptions);
  const response = await request.json();
  return response;
};

type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

declare type fetchAPIArgs = {
  method?: RequestMethod;
  route: string;
};

export const fetchAPI = async (args: fetchAPIArgs) => {
  const api: string = process.env.NEXT_PUBLIC_API;
  const method = args?.method;
  const route: string = args?.route;

  if (!route) return false;

  const url: string = api + route;

  // Construct fetch options using the getIdTokenResult Firebase value
  const fetchOptions = {
    body: null,
    headers: {
      authorization: null,
      'Content-Type': `application/json`,
    },
    method,
  };

  let response;

  switch (method) {
    case `GET`:
      response = await handleGET({ fetchOptions, url });
      break;
    default:
      response = await handleGET({ fetchOptions, url });
  }

  return response;
};

export default fetchAPI;
