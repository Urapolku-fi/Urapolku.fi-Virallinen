import { useAuth0 } from "@auth0/auth0-react";

let backend = import.meta.env.VITE_BACKEND_URL + "/api"

export const getUser = async (userId) =>  {
    let result = await fetch(`${backend}/user/${userId}`);
    let user = await result.json()
    return user;
}

export const useFetch = () => {
    const { getAccessTokenSilently } = useAuth0();

    const fetchWithToken = async (url, options = {}) => {
        const token = await getAccessTokenSilently();
        const response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    return fetchWithToken;
}