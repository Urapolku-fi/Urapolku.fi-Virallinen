import { useAuth0 } from '@auth0/auth0-react';

let backend = import.meta.env.VITE_BACKEND_URL + 'api';

export const useFetch = () => {
  const { getAccessTokenSilently } = useAuth0();

  const withAuth = {
    get: async (url, options = {}) => {
      const token = await getAccessTokenSilently();
      const response = await fetch(backend + url, {
        ...options,
        mode: 'cors',
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        json: await response.json(),
        status: response.status,
        params: response.params,
      };
    },

    post: async (url, body, options = {}) => {
      const token = await getAccessTokenSilently();
      const response = await fetch(backend + url, {
        method: 'POST',
        ...options,
        mode: 'cors',
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        json: await response.json(),
        status: response.status,
        params: response.params,
      };
    },

    patch: async (url, body, options = {}) => {
      const token = await getAccessTokenSilently();
      const response = await fetch(backend + url, {
        method: 'PATCH',
        ...options,
        mode: 'cors',
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        json: await response.json(),
        status: response.status,
        params: response.params,
      };
    },
  };

  return withAuth;
};
