const baseURL = "https://api.tvmaze.com";

const getAPI = async (query) => {
    const response = await fetch(`${baseURL}${query}`);
    const body = await response.json();

    return body;
}

export const searchAPI = (searchLink) => getAPI(`/search/shows?q=${searchLink}`);