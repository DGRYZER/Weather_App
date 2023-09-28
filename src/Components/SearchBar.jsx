import React, { useState } from 'react';
import './search.css'
const SearchBar = ({ onLocationChange }) => {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location !== '') {
            onLocationChange(location);
        }
    };

    return (
        <div id="search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
