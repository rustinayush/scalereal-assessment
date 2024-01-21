import React, { useEffect, useState } from 'react';
import './table.css';

const Table = ({ movies, sortedMovies, searchData, filterData, MovieDetail }) => {
    const [movieDetail, setMovieDetail] = useState("");

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

    const handleClick = (title, episode) => {
        const matchedMovie = movies.find((value) => value.title.toLowerCase().includes(title.toLowerCase()));

        if (matchedMovie) {
            const para = matchedMovie.opening_crawl;
            const title = matchedMovie.title;
            const director = matchedMovie.director;
            console.log(director);
            setMovieDetail(para);
            MovieDetail(para, episode, title, director);
            console.log(para);
        }
    };

    // Determine which set of movies to display based on sorting and searching
    const displayedMovies = searchData
        ? filterData.filter((value) => value.title.toLowerCase().includes(searchData.toLowerCase()))
        : sortedMovies.length > 0
            ? sortedMovies
            : filterData;

    return (
        <div className='table-container'>
            <table className='table'>
                {displayedMovies.map((values, id) => (
                    <tr key={id}>
                        <td>EPISODE {values.episode_id}</td>
                        <td onClick={() => handleClick(values.title, values.episode_id)} style={{ cursor: "pointer" }}>EPISODE {convertToRoman(values.episode_id)} - {values.title}</td>
                        <td className='table-spacing' style={{ paddingLeft: '100px' }}>{values.release_date}</td>
                    </tr>
                ))}
            </table>
        </div >
    );
};

export default Table;
