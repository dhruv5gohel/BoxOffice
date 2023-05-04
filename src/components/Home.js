import { useState } from "react"
import MovieItem from "./MovieItem";
import { searchAPI, searchActors } from "../api/tvMaze";
import SearchForm from "./SearchForm";

const Home = () => {
  const [result, setResult] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async (searchType, inpVal) => {
    try {
      if (searchType === "shows") {
        let results = await searchAPI(inpVal);
        setResult(results);
      }
      else {
        let results = await searchActors(inpVal);
        setResult(results);
      }
    }
    catch (error) {
      setApiError(error);
    }
  }

  const renderAPI = () => {
    if (apiError) {
      return <div>Some Error Occured</div>
    }

    if (result) {
      return result[0].show ? result.map((m) => {
        return <MovieItem key={m.show.id} title={m.show.name} />
      }) : result.map((m) => {
        return <MovieItem key={m.person.id} title={m.person.name} />
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
