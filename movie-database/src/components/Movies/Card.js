import React from "react";
import FavBtn from "../Faves/FaveBtn";
import { addFavourite, removeFavourite } from "../Faves/favouritesSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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
  const dispatch = useDispatch();
  const location = useLocation();

  const roundedVoteAverage = voteAverage.toFixed(1); // Constrain to 1 decimal place

  const handleFaveClick = (addToFave, obj) => {
    if (addToFave === true) {
      dispatch(removeFavourite(obj));
    } else {
      dispatch(addFavourite(obj));
    }
  };

  const [oView, setOView] = useState(100);

  useEffect(() => {
    const resizeWin = () => {
      let value = 100;

      if (location.pathname === "/favourites") {
        value = 40;
      } else if (window.innerWidth > 1632) {
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
        value = 430;
      }

      setOView(value);
    };

    window.addEventListener("resize", resizeWin);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", resizeWin);
    };
  }, [location.pathname]);

  return (
    <div className="single-movie-container">
      <div className="card-poster">
        <div className="average-score">{roundedVoteAverage}</div>
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
