import React, { useState } from 'react';
import './navbar.css'
const Navbar = ({ setMovies, movies, setSortedMovies, setSearchData, searchData, setFilterData }) => {
    const [sortOption, setSortOption] = useState('');


    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortOption(selectedOption);

        // Perform sorting based on the selected option
        if (selectedOption === 'Episode') {
            const sortedByEpisode = [...movies].sort((a, b) => a.episode_id - b.episode_id);
            setSortedMovies(sortedByEpisode);
        } else if (selectedOption === 'Year') {
            const sortedByYear = [...movies].sort((a, b) => {
                const yearA = parseInt(a.release_date.substring(0, 4));
                const yearB = parseInt(b.release_date.substring(0, 4));
                return yearA - yearB;
            });
            setSortedMovies(sortedByYear);
        }
    };

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();

        setSearchData(searchValue);

        // Filter movies based on the search value
        const filteredMovies = movies.filter((value) =>
            value.title.toLowerCase().includes(searchValue)
        );

        // Set the filtered movies
        setFilterData(filteredMovies);
    };

    return (
        <div className='navbar'>
            <div className='sort'>
                <select onChange={handleSortChange} value={sortOption}>
                    <option>Sort by...</option>
                    <option>Episode</option>
                    <option>Year</option>
                </select>
            </div>
            <div className='search'>
                <input placeholder='Type to search' onChange={handleSearch} value={searchData} style={{ width: "200vh" }} />
            </div>
        </div>
    );
};

export default Navbar;
