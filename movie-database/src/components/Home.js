import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import '../scss/styles.scss';
import { posterPath } from './movieVariables';
import {API_KEY} from '../components/movieVariables';

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
    const api = await fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=1`);
    const jsonData = await api.json();
    setmovieData(jsonData.results);


     // get the first 12 movies here, then set them as the data
     const firstTwelve = jsonData.results.splice(0, 12);
     setmovieData(firstTwelve);
  };
    fetchData();
}, [filter]);
    return(
      <div className="movie-data">
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
        </div>
    )
}

export default Home;