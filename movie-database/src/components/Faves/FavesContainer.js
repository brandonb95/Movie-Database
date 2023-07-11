import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "../Movies/Card";
import "../../scss/styles.scss";

import isFave from "../movieVariables";

const FavesContainer = () => {
  // grab isFaves() stored in state variable "value". Related to Redux
  const faves = useSelector((state) => state.favourites.value);

  return (
    <>
      {faves.length < 1 ? (
        <section className="no-fav">
          <p>
            Nothing here! Go back to <Link to="/">home</Link> to start adding to
            your list.
          </p>
        </section>
      ) : (
        <div className="movie-data fave-data">
          <div className="movie-list fave-data">
            <div className="movie-container fave-data">
              {/* If faves array has items, map out individual movies */}
              {faves.map((movie) => (
                <Card
                  object={movie}
                  key={movie.id}
                  // this returns true or false
                  isFave={isFave(faves, null, movie.id)}
                  id={movie.id}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  overview={movie.overview}
                  posterPath={movie.poster_path}
                  releaseDate={movie.release_date}
                  movieObj={movie}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavesContainer;
