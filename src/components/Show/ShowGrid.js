const ShowGrid = ({ shows }) => {

    return (
        <div className="card">
            <div className="img-cont">
                <img src={shows.show.image?shows.show.image.original:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt="" />
            </div>
            <div className="content">
                <h2 className="title">{shows.show.name}</h2>
                <p className="desc">{shows.show.summary?(shows.show.summary.replace(/[<p></p><b></b>]/g, "")).split(' ').slice(0,40).join(" "):"No Summary Available"}</p>
                <div className="button">
                    <button className="btn">Read More</button>
                    <div>
                        <button className="star-icon"><i className="fa-regular fa-star"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowGrid;