import "./card.css"

function Card(){
    return(
        <div className="card">
            <img alt="profile picture" className="card-image" src="https://via.placeholder.com/150"></img>
            <h2 className="card-title">My Name</h2>
            <p className="card-text">This as a card.</p>
        </div>
    );
}

export default Card