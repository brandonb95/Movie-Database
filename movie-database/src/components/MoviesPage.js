import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Movies/Card";
import "../scss/styles.scss";
import { posterPath } from "./movieVariables";
import { API_KEY } from "./movieVariables";
import ImageSlider from "./ImageSlider";

import { useSelector } from "react-redux";
import isFave from "./movieVariables";

import { Link } from "react-router-dom";

function MoviesPage() {
  // state for managing fetched data
  const [movieData, setmovieData] = useState([]);

  const [filter, setFilter] = useState("popular");
  // function that actually fetches the data asynchronously

  const changeFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  };

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const jsonData = await api.json();
      setmovieData(jsonData.results);
    };
    fetchData();
  }, [filter]);

  const [oView, oUpdate] = useState(window.innerWidth < 768);

  // Change the length of movie overview
  useEffect(() => {
    const resizeWin = () => {
      oUpdate(window.innerWidth < 768);
    };

    window.addEventListener("resize", resizeWin);
  }, []);

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
      movieObj={movie}
    />
  ));

  return (
    <div className="movie-data movies-page">
      <div className="movie-filter-container movie-page-filter-container">
        <h2 className="page-title">Movies</h2>
        {oView === true ? (
          <section className="movie-list-filter">
            <select
              onChange={changeFilter}
              name="filterSelector"
              id="filterSelector"
              defaultValue="popular" // Set the default value
            >
              <option value="popular">Popular</option>
              <option value="now_playing">Now Playing</option>
              <option value="top_rated">Top Rated</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </section>
        ) : (
          <section className="movie-list movie-page-filter">
            <input
              onChange={changeFilter}
              type="radio"
              name="movies"
              id="popular"
              value="popular"
              defaultChecked // Set "Popular" as checked on page load
            />
            <label htmlFor="popular">Popular</label>
            <input
              onChange={changeFilter}
              type="radio"
              name="movies"
              id="now-playing"
              value="now_playing"
            />
            <label htmlFor="now-playing">Now Playing</label>
            <input
              onChange={changeFilter}
              type="radio"
              name="movies"
              id="top-rated"
              value="top_rated"
            />
            <label htmlFor="top-rated">Top Rated</label>
            <input
              onChange={changeFilter}
              type="radio"
              name="movies"
              id="upcoming"
              value="upcoming"
            />
            <label htmlFor="upcoming">Upcoming</label>
          </section>
        )}
      </div>

      <section className="movie-list movie-list-movies-page">
        <div className="movie-container">{cards}</div>
      </section>
    </div>
  );
}

export default MoviesPage;
