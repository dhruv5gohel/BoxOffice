import { useState, useReducer, useEffect } from "react"
import { searchAPI, searchActors } from "../api/tvMaze";
import SearchForm from "./SearchForm";
import ShowGrid from "./Show/ShowGrid";
import ActorGrid from "./Actor/ActorGrid";
import { useQuery } from "react-query";

const usePersistedState = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const previousValue = localStorage.getItem(localStorageKey);

    return previousValue ? JSON.parse(previousValue) : initial;
  })

  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
}

const starredReducer = (currentState, action ) =>{
  switch(action.type){
      case 'STAR': 
          return currentState.concat(action.showId);
      case 'UNSTAR':
          return currentState.filter(showId => showId !== action.showId);
      default: 
          return currentState;
  }
}

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: result, error: apiError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () => filter.searchType === "shows" ? searchAPI(filter.inpVal) : searchActors(filter.inpVal),
    enabled: !!filter,
    refetchOnWindowFocus: false
  });

  const handleSubmit = async (searchType, inpVal) => {
    setFilter({ searchType, inpVal })
  }

  const [starredShow, dispatchStarred] = usePersistedState(starredReducer, [], "StarredShows");

    const handleStar = (showId) => {
        const isStarred = starredShow.includes(showId);
        
        if(isStarred){
            dispatchStarred({ type: 'UNSTAR', showId});
        }
        else{
            dispatchStarred({ type: 'STAR', showId});
        }
      }
      console.log({starredShow})

  const renderAPI = () => {
    if (apiError) {
      return <div>Some Error Occured</div>
    }

    if (result?.length === 0) {
      return <div>Results Not Found</div>
    }

    if (result) {
      return result[0].show ? result.map((m) => {
        return <ShowGrid key={m.show.id} shows={m} handleStar={handleStar}/>
      }) : result.map((m) => {
        return <ActorGrid key={m.person.id} actors={m} />
      })

    }

    return null;
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <div className="movieCont">
        {renderAPI()}
      </div>
    </>
  )
}

export default Home
