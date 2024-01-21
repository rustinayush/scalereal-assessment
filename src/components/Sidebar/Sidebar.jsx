import React from 'react'
import './sidebar.css'
const Sidebar = ({ description, movieEpisode, title, director }) => {

    const convertToRoman = (num) => {
        const romanNumerals = {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI'
        };

        return romanNumerals[num] || num;
    };
    return (
        <div className='sidebar'>{description ?
            <div>
                <h4>EPISODE {convertToRoman(movieEpisode)} - {title}</h4>
                <p>{description}</p>
                <p>Directed by: {director}</p>
            </div> :
            <p>No Movies Selected</p>}</div>
    )
}

export default Sidebar