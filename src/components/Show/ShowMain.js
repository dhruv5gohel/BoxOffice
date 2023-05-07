const ShowMain = ({ image, name, language, genre, rating, summary }) =>{
    return (
        <>
            <div className="container">
                    <img src={image? image.original : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt="" />
                <div className="info-container">
                    <h1>{name}</h1>
                    <p className="lang">{language}</p>
                    <p>{genre.map(item => <span key={item}>{item} </span>)}</p>
                    <p><b>Rating:</b> {rating.average}</p>
                    <div dangerouslySetInnerHTML={ {__html: summary}}/>
                </div>
            </div>
        </>
    );
}

export default ShowMain