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
  const [oView, oUpdate] = useState(0);

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
      } else if (window.innerWidth > 500) {
        value = 230;
      }

      oUpdate(value);
    };
    window.addEventListener("resize", resizeWin);
  }, []);

  console.log(oView);

  return (
    <div>
      <div className="card-poster">
        <p>
            {/* OVERVIEW IS THE CONTAINER FOR THE CARD HOVER STATES */}
          <div className="overview">
          <div className="average-score">{voteAverage}</div>

          <div>
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
        </div>

            <Link className="more-info-btn" to={`/single-movie/${id}`}>
              More Info
            </Link>
            {overview.substring(0, oView)}...
          </div>
        </p>
        
        <img
          className="single-poster"
          src={"https://image.tmdb.org/t/p/w500" + posterPath}
          alt="Movie"
        />

        

        {/* <div className="card-title">{title}</div>
                <div className="release-date">{releaseDate}</div> */}
      </div>
      <div className="card-title">{title}</div>
      <div className="release-date">{releaseDate}</div>
    </div>
  );
}

export default Card;
