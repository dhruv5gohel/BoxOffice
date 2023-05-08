import { useEffect, useReducer } from "react";

const usePersistedState = (reducer, initialState, localStorageKey) => {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        const previousValue = localStorage.getItem(localStorageKey);

        return previousValue ? JSON.parse(previousValue) : initial;
    })

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey]);

    return [state, dispatch];
}

const starredReducer = (currentState, action) => {
    switch (action.type) {
        case 'STAR':
            return currentState.concat(action.showId);
        case 'UNSTAR':
            return currentState.filter(showId => showId !== action.showId);
        default:
            return currentState;
    }
}

export const useStarredShow = () => { return usePersistedState(starredReducer, [], "StarredShows"); }