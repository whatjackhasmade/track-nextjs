const handleGET = async ({ fetchOptions, parameters, url }) => {
  // An ID parameter currently only exists on getOne[collectionType] functions
  // E.g. getOneKeyword will pass an ID value which we can auto append before any query parameters
  const id = parameters?.id;
  if (id) {
    url = url + `/` + id;
    delete parameters.id;
  }

  // Call the fetch function and parse as JSON
  const request = await fetch(url, fetchOptions);
  const response = await request.json();
  return response;
};

const handlePOST = async ({ fetchOptions, parameters, url }) => {
  fetchOptions.body = JSON.stringify(parameters);

  // Call the fetch function and parse as JSON
  const request = await fetch(url, fetchOptions);
  const response = await request.json();
  return response;
};

type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

declare type fetchAPIArgs = {
  method?: RequestMethod;
  parameters?: any;
  route: string;
};

export const fetchAPI = async (args: fetchAPIArgs) => {
  const api: string = process.env.NEXT_PUBLIC_API;
  const method = args?.method;
  const parameters = args?.parameters;
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
      response = await handleGET({ fetchOptions, parameters, url });
      break;
    case `POST`:
      response = await handlePOST({ fetchOptions, parameters, url });
      break;
    default:
      response = await handleGET({ fetchOptions, parameters, url });
  }

  return response;
};

export default fetchAPI;
