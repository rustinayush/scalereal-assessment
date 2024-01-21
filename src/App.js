import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [description, setDescription] = useState("");
  const [movieEpisode, setMovieEpisode] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const fetchData = async () => {
    const response = await fetch(`https://swapi.dev/api/films/?format=json`);
    const data = await response.json();
    setMovies(data.results);
    setFilterData(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const MovieDetail = (moviePara, episode, title, director) => {
    setDescription(moviePara);
    setMovieEpisode(episode);
    setTitle(title);
    setDirector(director);
  };

  return (
    <div className="App">
      <Navbar
        setMovies={setMovies}
        movies={movies}
        setSortedMovies={setSortedMovies}
        setSearchData={setSearchData}
        searchData={searchData}
        setFilterData={setFilterData}
      />
      <div className="Box">
        <Table
          movies={movies}
          sortedMovies={sortedMovies}
          searchData={searchData}
          filterData={filterData}
          MovieDetail={MovieDetail}
        />
        <Sidebar
          description={description}
          movieEpisode={movieEpisode}
          title={title}
          director={director}
        />
      </div>
    </div>
  );
}

export default App;
