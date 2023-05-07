import { Link } from "react-router-dom";

const ShowItem = ({ image, title, desc, id, handleStar}) => {
    return (
        <div className="card">
            <div className="img-cont">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="desc">{desc}</p>
                <div className="button">
                    <Link type="button" to={`/show/${id}`} className="btn">Read More</Link>
                    <div>
                        <button className="star-icon" onClick={()=>handleStar(id)}><i className="fa-regular fa-star"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowItem;