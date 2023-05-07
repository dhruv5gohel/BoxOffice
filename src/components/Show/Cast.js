const Cast = ({ image }) => {
    return (
        <>
            <img className="cast-img" src={image? image.original: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt="" style={{display: "inline"}}/>
        </>
    )
}

export default Cast;