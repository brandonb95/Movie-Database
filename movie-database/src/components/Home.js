import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Card from "../components/Movies/Card";
import '../scss/styles.scss';
import { posterPath } from './movieVariables';
import {API_KEY} from '../components/movieVariables';
import ImageSlider from "./ImageSlider";


import { useSelector } from "react-redux";
import isFave from './movieVariables';

import {Link} from "react-router-dom";

function Home() {
  

// state for managing fetched data
const [movieData, setmovieData] = useState([]);

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

console.log(movieData)

const favs = useSelector((state) => state.favourites.value);


let cards = movieData.map((movie, i) => (
  <Card
      object={movieData[i]}
      key={movie.id}
      // this returns true or false
      isFave={isFave(favs, null, movie.id)}
      id={movie.id}
      title={movie.title}
      voteAverage={movie.vote_average}
      overview={movie.overview}
      posterPath={movie.poster_path}
      releaseDate={movie.release_date}
      movieObj ={movie}
      // handleFavoriteClick={handleFavoriteButton}
  />
));




// Create slides
const slides =[
  {url: 'http://localhost:3000/carousel-image-1.jpg', title:'Spider-Man'},
  {url: 'http://localhost:3000/carousel-image-2.jpg', title:'After Ever Happy'},
  {url: 'http://localhost:3000/carousel-image-3.jpg', title:'The Woman King'},
];

const containerStyles = {
  width: '100%',
  height: '200px',
  margin: '0 auto',
}


    return(
      
      <div className="movie-data">
        <div style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>

        
        <section className="movie-list">
          <select onChange={changeFilter} name="filterSelector" id="filterSelector">
          <option value="popular">Popular</option>
          <option value="now_playing">Now Playing</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
          </select>
        </section>

        <section className="movie-list">
            <div className="movie-container">
                {cards}
            </div>
        </section>

      </div>


        
    )

}

export default Home;