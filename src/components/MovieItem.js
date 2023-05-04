const MovieItem = ({title}) => {
  return (
    <div className="card">
        <div className="img-cont">
            <img src="/img/card.jpg" alt=""/>
        </div>
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores magni natus error neque esse veniam, minima maxime id pariatur amet sapiente ratione, consequuntur corporis!</p>
            <div className="button">
                <button className="btn">Read More</button>
                <div>
                    <button className="star-icon"><i className="fa-regular fa-star"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieItem
