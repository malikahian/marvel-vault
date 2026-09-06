// character card component to display character information//

function CharacterCard({ character }) {  //recieve character from app.jsx as a prop and create a card

    function getStars(rating) { //create a rating system with stars and empty stars
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '★';
        }
        for (let i = rating; i < 5; i++) {
            stars += '☆';
        }
        return stars;
    }

    return (
        <div className="character-card">
            <img
                src={character.image} // visual
                alt={character.name}  // alternative
                className="card-image"
            />
            <div className="card-body">
                <h5 className="card-name">{character.name}</h5>
                <p className="card-realname">{character.realName}</p>
                <p className="card-team">{character.team}</p>
                <span className="card-category">{character.category}</span>
                <p className="card-stars">{getStars(character.rating)}</p>
            </div>
        </div>
    );
}

export default CharacterCard;