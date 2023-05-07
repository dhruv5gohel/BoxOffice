const ShowDetails = ({country, premiered, status, episodes}) =>{
    return (
        <div className="details-container">
            <h1>Other Details: </h1>
            <div>
                <p>Country: {country}</p>
                <p>Premiered on: {premiered}</p>
                <p>Status: {status}</p>
                <p>Total no. of episodes: {episodes.length}</p>
            </div>
        </div>
    );
}

export default ShowDetails;