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

  // Create slides
  const slides = [
    {
      url: "http://brandonbirk.ca/movie-database/carousel-image-1.jpg",
      title: "Spider-Man",
    },
    {
      url: "http://brandonbirk.ca/movie-database/carousel-image-2.jpg",
      title: "After Ever Happy",
    },
    {
      url: "http://brandonbirk.ca/movie-database/carousel-image-3.jpg",
      title: "The Woman King",
    },
  ];

  const containerStyles = {
    width: "100%",
    height: "200px",
    margin: "0 auto",
  };

  return (
    <body>
      <div className="fav-wrapper">
        <h1>Your Favourites</h1>
        <p>Find your favourites here, all in one place.</p>

        <section className="faves-page">
          <FavesContainer />
        </section>
      </div>
    </body>
  );
}

export default MoviesPage;
