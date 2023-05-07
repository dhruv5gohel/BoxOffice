import { useState } from "react"
import { searchAPI, searchActors } from "../api/tvMaze";
import SearchForm from "./SearchForm";
import ShowGrid from "./Show/ShowGrid";
import ActorGrid from "./Actor/ActorGrid";
import { useQuery } from "react-query";

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: result, error: apiError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () => filter.searchType === "shows" ? searchAPI(filter.inpVal) : searchActors(filter.inpVal),
    enabled: !!filter
  });

  const handleSubmit = async (searchType, inpVal) => {
    setFilter({ searchType, inpVal })
  }

  const renderAPI = () => {
    if (apiError) {
      return <div>Some Error Occured</div>
    }

    if (result?.length === 0) {
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
