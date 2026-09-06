// Form to add a new character to the vault // 

import { useState } from 'react';

function AddCharacter({ onAddCharacter }) {

    const [name, setName] = useState('');
    const [realName, setRealName] = useState('');
    const [team, setTeam] = useState(''); //empty string
    const [category, setCategory] = useState('Male'); //default category
    const [rating, setRating] = useState(3);
    const [image, setImage] = useState('');

    function handleSubmit(e) { //will run when the form is submitted
        e.preventDefault();

        if (!name) { // if the name is empty, users will be asked to enter a name
            alert('Please enter a character name!');
            return;
        }

        const newCharacter = {
            id: Date.now(), // easier way to generate a unique id 
            name: name,
            realName: realName,
            team: team,
            category: category,
            rating: Number(rating), // change type
            image: image || 'https://placehold.co/300x400?text=' + name.replace(' ', '+') //backup image (placeholder)
        };

        onAddCharacter(newCharacter);

        setName('');
        setRealName('');
        setTeam('');
        setCategory('Male');
        setRating(3);
        setImage(''); // reset the form fields after submitted
    }

    return (
        <div className="add-character">
            <h4 className="add-title">➕ Add a Character</h4>
            <form onSubmit={handleSubmit}>

                <div className="form-row">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Character Name *"
                        value={name} // make sure input sync with state
                        onChange={(e) => setName(e.target.value)} // will updated the name state when the user types
                    />
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Real Name"
                        value={realName}
                        onChange={(e) => setRealName(e.target.value)}
                    />
                </div>

                <div className="form-row">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Team (e.g. Avengers)"
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                    />
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Image URL (optional)"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div className="form-row">
                    <select
                        className="form-input"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Animal">Animal</option>
                    </select>

                    <select
                        className="form-input"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value={1}>★ 1</option>
                        <option value={2}>★★ 2</option>
                        <option value={3}>★★★ 3</option>
                        <option value={4}>★★★★ 4</option>
                        <option value={5}>★★★★★ 5</option>
                    </select>
                </div>

                <button className="add-btn" type="submit">Add to Vault</button>

            </form>
        </div>
    );
}

export default AddCharacter;