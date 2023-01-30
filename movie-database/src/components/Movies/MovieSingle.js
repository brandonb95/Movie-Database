import React from 'react';
// add the place holder no movieposter here
import noPoster from '';
// import buttons here !

const MovieSingle = ({ movie }) => {

  // convert movie rating into percent here
  const rating = Math.round((movie.vote_average / 10) * 100);

  return (
    <section className="single-movie-style">
      <div className="single-movie-poster">
        {movie.poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`Poster for ${movie.title}`}
          />
        ) : (
            //ADD A NO POSTER IMAGE
          <img src={noPoster} alt="no poster uwu" />
        )}
      </div>

      <div className="single-movie-text">
        <h1>{movie.title}</h1>
        <article>
            {/* HAVE TO ADD THE RATINGS AND RUNTIME FROM THE API */}
          <p>{rating}%</p>
          <p>{movie.runtime} minutes</p>
        </article>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};

export default MovieSingle;