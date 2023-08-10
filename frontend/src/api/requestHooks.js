import { useAuth0 } from "@auth0/auth0-react";

let backend = import.meta.env.VITE_BACKEND_URL + "api";

export const useFetch = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getWAuth = async (url, options = {}) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(backend + url, {
      ...options,
      mode: "cors",
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      json: response.json(),
      status: response.status,
      params: response.params,
    };
  };

  const postWAuth = async (url, body, method = "POST", options = {}) => {
    const token = await getAccessTokenSilently();
    const response = await fetch(backend + url, {
      method: method,
      ...options,
      mode: "cors",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
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
  };

  return { getWAuth, postWAuth };
};
