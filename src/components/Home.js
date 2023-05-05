import { useState } from "react"
import { searchAPI, searchActors } from "../api/tvMaze";
import SearchForm from "./SearchForm";
import ShowGrid from "./Show/ShowGrid";
import ActorGrid from "./Actor/ActorGrid";

const Home = () => {
  const [result, setResult] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async (searchType, inpVal) => {
    try {
      let results;
      if (searchType === "shows") {
        results = await searchAPI(inpVal);
      }
      else {
        results = await searchActors(inpVal);
      }
      setResult(results);
    }
    catch (error) {
      setApiError(error);
    }
  }

  const renderAPI = () => {
    if (apiError) {
      return <div>Some Error Occured</div>
    }

    if(result?.length === 0){
      return <div>Results Not Found</div>
    }

    if (result) {
      return result[0].show ? result.map((m) => {
        return <ShowGrid key={m.show.id} shows={m} />
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
