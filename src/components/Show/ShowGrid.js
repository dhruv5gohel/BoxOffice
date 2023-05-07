import { useReducer } from "react";
import ShowItem  from "./ShowItem";

const starredReducer = (currentState, action ) =>{
    switch(action.type){
        case 'STAR': 
            return currentState.concat(action.showId);
        case 'UNSTAR':
            return currentState.filter(showId => showId !== action.showId);
        default: 
            return currentState
    }
}

const ShowGrid = ({ shows }) => {
    const [starredShow, dispatchStarred] = useReducer(starredReducer, []);

    const handleStar = (showId) => {
        const isStarred = starredShow.includes(showId);
        
        if(isStarred){
            dispatchStarred({ type: 'UNSTAR', showId});
        }
        else{
            dispatchStarred({ type: 'STAR', showId});
        }
    }

    return (
        <ShowItem image={shows.show.image?shows.show.image.original:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} title={shows.show.name} desc={shows.show.summary?(shows.show.summary.replace(/[<p></p><b></b>]/g, "")).split(' ').slice(0,40).join(" "):"No Summary Available"} id={shows.show.id} handleStar={handleStar}/>
    );
}

export default ShowGrid;