import ShowItem  from "./ShowItem";

const ShowGrid = ({ shows, handleStar, starredShow }) => {

    return (
        <ShowItem image={shows.show.image?shows.show.image.original:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} title={shows.show.name} desc={shows.show.summary?(shows.show.summary.replace(/[<p></p><b></b>]/g, "")).split(' ').slice(0,40).join(" "):"No Summary Available"} id={shows.show.id} handleStar={handleStar} isStarred={starredShow.includes(shows.show.id)}/>
    );
}

export default ShowGrid;