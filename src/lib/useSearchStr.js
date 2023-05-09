import { useEffect, useState } from "react";

// const usePersistedState = (reducer, initialState, localStorageKey) => {
//     const [state, dispatch] = useReducer(reducer, initialState, initial => {
//         const previousValue = localStorage.getItem(localStorageKey);

//         return previousValue ? JSON.parse(previousValue) : initial;
//     })

//     useEffect(() => {
//         localStorage.setItem(localStorageKey, JSON.stringify(state));
//     }, [state, localStorageKey]);

//     return [state, dispatch];
// }

const usePersistedState = (initialState, sessionStorageKey) => {
    const [state, setState] = useState(()=>{
        const persistedValue = sessionStorage.getItem(sessionStorageKey);

        return persistedValue ? JSON.parse(persistedValue) : initialState;
    });

    useEffect(()=>{
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
    }, [state, sessionStorageKey]);

    return [state, setState];
}

export const useSearchStr = () => {
    return usePersistedState('', "SearchBox");
}