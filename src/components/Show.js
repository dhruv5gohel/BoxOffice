import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { searchShowMain } from "../api/tvMaze";
import { useQuery } from "react-query";
import ShowMain from "./Show/ShowMain";
import ShowDetails from "./Show/ShowDetails";
import Cast from "./Show/Cast";

const Show = () => {
    const { showId } = useParams();

    const { data: showData, error: showError } = useQuery({
        queryKey: ["show", showId],
        queryFn: () => searchShowMain(showId),
    });

    if (showError) {
        return <div>Some Error Occured: {showError}</div>
    }

    if (showData) {
        return <div style={{ margin: "3rem 7rem" }}>
            <Link to="/">Go back to Home</Link>
            <ShowMain image={showData.image} name={showData.name} language={showData.language} genre={showData.genres} rating={showData.rating} summary={showData.summary} />
            <ShowDetails country={showData.network?showData.network.country.name:""} premiered={showData.premiered} status={showData.status} episodes={showData._embedded.episodes} />
            <div className="cast-grid" >
            {showData._embedded.cast.map((item) => {
                return ( <div key={item.character.id} >
                    <Cast image={item.character.image} />
                    <p style={{textAlign: "center"}}>{item.person.name} as {item.character.name}</p>
                    </div>);
            })}
                </div>
        </div>
    }

    return (
        <div>Content Loading</div>
    );
}

export default Show;