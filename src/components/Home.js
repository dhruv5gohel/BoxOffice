import { useState } from "react"
import MovieItem from "./MovieItem";
import { searchAPI } from "../api/tvMaze";

const Home = () => {
  const [inpVal, setInpVal] = useState("");
  const [movie, setMovie] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleInput = (e) => {
    setInpVal(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await searchAPI(inpVal);
      setMovie(result);
    }
    catch (error) {
      setApiError(error);
    }
  }

  const renderAPI = () => {
    if (apiError) {
      return <div>Some Error Occured</div>
    }

    if (movie) {
      return movie.map((m) => {
        return <MovieItem key={m.show.id} title={m.show.name}/>
      })
    }

    return null;
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="search" id="search" placeholder="Enter Movie or an Actor name" onChange={handleInput} value={inpVal} />
          <input type="submit" className="sub" value="Submit" />
        </form>
      </div>
      <div className="movieCont">
        { renderAPI() }
      </div>
    </>
  )
}

export default Home
