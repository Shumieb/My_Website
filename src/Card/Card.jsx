import sytles from "./card.module.css"

function Card(){
    return(
        <div className={sytles.card}>
            <img alt="profile picture" className={sytles.card-image} src="https://via.placeholder.com/150"></img>
            <h2 className={sytles.card-title}>My Name</h2>
            <p className={sytles.card-text}>This as a card.</p>
        </div>
    );
}

export default Card