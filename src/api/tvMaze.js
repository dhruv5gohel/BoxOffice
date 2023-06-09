const baseURL = "https://api.tvmaze.com";

const getAPI = async (query) => {
    const response = await fetch(`${baseURL}${query}`);
    const body = await response.json();

    return body;
}

export const searchAPI = (searchLink) => getAPI(`/search/shows?q=${searchLink}`);

export const searchActors = (searchLink) => getAPI(`/search/people?q=${searchLink}`)

export const searchShowMain = (searchLink) => getAPI(`/shows/${searchLink}?embed[]=episodes&embed[]=cast`);

export const searchStarred = async (showIds) => {
    let promises = await showIds.map((id)=> getAPI(`/shows/${id}`))

    let result = await Promise.all(promises);

    return result;
}