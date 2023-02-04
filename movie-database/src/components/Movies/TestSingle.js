import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posterPath } from "../movieVariables";
import {API_KEY} from '../movieVariables';

// import { addFavourite, removeFavourite } from '../Faves/favouritesSlice';

const Single = () => {
  const [movieData, setmovieData] = useState({});

  const [rating, setRating] = useState(null);

  let { id } = useParams();


  let fetchMovie = async () => {

    let results = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const jsonData = await results.json();
    setmovieData(jsonData);
    setRating(Math.round(jsonData.vote_average * 10));
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  

  
  return (
    <div>
      <h1>{movieData.title}</h1>
      <div>
        <img src={posterPath + movieData.poster_path} alt={movieData.title}></img>
      </div>
      <div>
        <div className="rating">
          <p>{rating}%</p>
        </div>
        <button>add to favourites</button>
      </div>
      <div>
        <h2>Overview</h2>
        <p>{movieData.overview}</p>
      </div>
      <div>
        <p>Released {movieData.release_date}</p>
      </div>
      
    </div>
  );
};
export default Single;