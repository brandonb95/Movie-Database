import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import { posterPath } from './movieVariables';

function Home() {
// state for managing fetched data
const [movieData, setmovieData] = useState('');

const [filter, setFilter] = useState('popular');
// function that actually fetches the data asynchronously

const changeFilter = (event) =>{
  const newFilter = event.target.value;
  setFilter(newFilter);
}

useEffect(() =>{
  const fetchData = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=0dd20164c60e7144bc2ec57531eeddbd&language=en-US&page=1`);
    const jsonData = await api.json();
    setmovieData(jsonData.results);
  };
    fetchData();
}, [filter]);
    return(
        <section>
        <select onChange={changeFilter} name="filterSelector" id="filterSelector">
        <option value="popular">Popular</option>
        <option value="now_playing">Now Playing</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>

      {movieData === '' ? (
        '<h1>Fetching todos...</h1>'
       ) : (
         <ul>
           {movieData.map(item => (

            <li key={item.id}><img src={posterPath+item.poster_path} alt={''}></img>{item.title}</li>
           ))}
        </ul>
      )}
        </section>
    )
}

export default Home;