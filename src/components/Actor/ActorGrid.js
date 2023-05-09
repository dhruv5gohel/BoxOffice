const ActorGrid = ({ actors }) => {
    return (
        <div className="card">
            <div className="img-cont">
                <img src={actors.person.image ? actors.person.image.original : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt="" />
            </div>
            <div className="content">
                <h2 className="title">{actors.person.name}</h2>
                <p className="desc">
                    <p><b>Country: </b>{actors.person.country ? actors.person.country.name : "Lupt"}</p>
                    <p></p>
                </p>
                <div className="button">
                    {/* <button className="btn">Read More</button> */}
                    <div>
                        {/* <button className="star-icon"><i className="fa-regular fa-star"></i></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActorGrid;