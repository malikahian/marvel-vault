import { useState } from 'react';
import characters from './assets/marvelData';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CharacterCard from './components/CharacterCard';
import AddCharacter from './components/AddCharacter';
import './App.css';

function App() {

  const [allCharacters, setAllCharacters] = useState(characters);
  const [characterList, setCharacterList] = useState(characters);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState(''); // track what user types

  function handleFilter(filter) {
    setActiveFilter(filter);
    setSearchQuery('');

    if (filter === 'All') {
      setCharacterList(allCharacters);
    } else {
      const filtered = allCharacters.filter(c => c.category === filter || c.team === filter);
      setCharacterList(filtered);
    }
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    setActiveFilter('All');

    if (query === '') {
      setCharacterList(allCharacters);
    } else {
      const filtered = allCharacters.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.realName.toLowerCase().includes(query.toLowerCase())
      );
      setCharacterList(filtered);
    }
  }

  function handleAddCharacter(newCharacter) {
    const updated = [...allCharacters, newCharacter];
    setAllCharacters(updated);
    setCharacterList(updated);
    setActiveFilter('All');
    setSearchQuery('');
  }

  return (
    <div className="app">
      <Header totalCharacters={characterList.length} />
      <div className="container">

        <input
          className="search-input"
          type="text"
          placeholder="Search characters..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <FilterBar activeFilter={activeFilter} onFilterChange={handleFilter} characters={allCharacters} />

        <div className="card-grid">
          {characterList.map(c => (
            <CharacterCard key={c.id} character={c} />
          ))}
        </div>

        <AddCharacter onAddCharacter={handleAddCharacter} />

      </div>
    </div>
  );
}

export default App;