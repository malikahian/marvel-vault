// filter character by category or team //

function FilterBar({ activeFilter, onFilterChange, characters }) {

    const categories = ['All', 'Male', 'Female', 'Animal']; // 4 filter that remain constant 
    const teams = [...new Set(characters.map(c => c.team).filter(t => t))]; //This will take team from each character and remove the duplicates and null
    const filters = [...categories, ...teams]; // combine both elements into one array

    return (
        <div className="filterbar">
            {filters.map((filter) => ( // map through the filters and create a button for each filter
                <button
                    key={filter}
                    className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'} //colour change only lah
                    onClick={() => onFilterChange(filter)} // send the filter to the parent component (app.jsx)
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;