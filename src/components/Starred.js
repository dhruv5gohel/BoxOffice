import { useQuery } from "react-query";
import { searchStarred } from "../api/tvMaze";
import { useStarredShow } from "../lib/useStarredShow";
import ShowGrid from "./Show/ShowGrid";

const Starred = () => {

    const [starredShowIds] = useStarredShow();

    const { data: starredShows, error: starredShowsError } = useQuery({
        queryKey: ["starred", starredShowIds],
        queryFn: () => searchStarred(starredShowIds).then(result => result.map(show => ({show}))),
    });

    const [starredShow, dispatchStarred] = useStarredShow();

    const handleStar = (showId) => {
        const isStarred = starredShow.includes(showId);

        if (isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId });
        }
        else {
            dispatchStarred({ type: 'STAR', showId });
        }
    }

    if(starredShows?.length === 0){
        return <div style={{textAlign: "center"}}>No Starred Show</div>
    }
    if (starredShowsError) {
        return <div>Some Error Occured</div>
    }

    if (starredShows) {
        return <div className="movieCont">
            {starredShows.map((item) => {
                return <ShowGrid key={item.show.id} shows={item} starredShow={starredShow} handleStar={handleStar}/>;
            })
            }
        </div>
    }

    return (
        <div>Content Loading</div>
    )
}


export default Starred;