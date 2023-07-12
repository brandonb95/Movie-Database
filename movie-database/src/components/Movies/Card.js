import React from "react";
import FavBtn from "../Faves/FaveBtn";
import { addFavourite, removeFavourite } from "../Faves/favouritesSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Unselected from "../../scss/Favourite-Unselected.svg";

function Card({
  id,
  title,
  voteAverage,
  overview,
  posterPath,
  releaseDate,
  movieObj,
  isFave,
}) {
  // Redux related for favouriting funciton
  const dispatch = useDispatch();

  const handleFaveClick = (addToFave, obj) => {
    if (addToFave === true) {
      dispatch(removeFavourite(obj));
    } else {
      dispatch(addFavourite(obj));
    }
  };
  const [oView, oUpdate] = useState(100);

  // Change the length of movie overview
  useEffect(() => {
    const resizeWin = () => {
      const changeOverview = window.innerWidth > 768 ? 100 : 500;

      oUpdate(changeOverview);

      let value = 100;

      if (window.innerWidth > 1632) {
        value = 200;
      } else if (window.innerWidth > 1500) {
        value = 100;
      } else if (window.innerWidth > 1344) {
        value = 70;
      } else if (window.innerWidth > 1200) {
        value = 250;
      } else if (window.innerWidth > 1000) {
        value = 230;
      } else if (window.innerWidth > 768) {
        value = 110;
      } else if (window.innerWidth > 500) {
        value = 200;
      }

      oUpdate(value);
    };

    window.addEventListener("resize", resizeWin);
  }, []);

  return (
    <div className="single-movie-container">
      <div className="card-poster">
        <div className="average-score">{voteAverage}</div>
        {isFave ? (
          <FavBtn
            isFave={true}
            handleFaveClick={() => handleFaveClick(isFave, movieObj)}
            className="movie-favourite"
          />
        ) : (
          <FavBtn
            isFave={false}
            handleFaveClick={() => handleFaveClick(isFave, movieObj)}
            className="movie-favourite"
          />
        )}

        {/* OVERVIEW IS THE CONTAINER FOR THE CARD HOVER STATES */}
        <div className="overview">
          <Link className="more-info-btn" to={`/single-movie/${id}`}>
            <p>More Info</p>
          </Link>
          <div className="info">{overview.substring(0, oView)}...</div>
        </div>

        <img
          className="single-poster"
          src={"https://image.tmdb.org/t/p/w500" + posterPath}
          alt="Movie"
        />

        {/* <div className="card-title">{title}</div>
                <div className="release-date">{releaseDate}</div> */}
      </div>
      <div className="card-title">{title}</div>
      <p className="release-date">Released</p>
      <div className="release-date">{releaseDate}</div>
      <Link className="more-info-btn-mobile" to={`/single-movie/${id}`}>
        More Info
      </Link>
    </div>
  );
}

export default Card;
