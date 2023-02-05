import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posterPath } from "../movieVariables";
import {API_KEY} from '../movieVariables';
import FavBtn from '../Faves/FaveBtn';
import { useDispatch,useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../Faves/favouritesSlice';
import isFave from '../movieVariables';

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
  
  const faves = useSelector((state) => state.favourites.value);

  console.log(faves);

  const dispatch = useDispatch();

  const handleFaveClick = (addToFave, obj) => {
    if (addToFave === true) {
        
          dispatch(removeFavourite(obj));
    } else {
       
          dispatch(addFavourite(obj));
        
    }
  }

  const isFavorite = isFave(faves, null, movieData.id);
  
  return (
    <div className="individual-wrapper">

      <div className="poster">
        <div>
          <img src={posterPath + movieData.poster_path} alt={movieData.title}></img>
        </div>

      </div>

      <section className="content-wrapper">
        <h1>{movieData.title}</h1>

        <section className="release-rating">
          <div className="release-date">
            <p>Released {movieData.release_date}</p>
          </div>

          <div className="rating">
              <p>{rating}%</p>
          </div>
        </section>

        <div className="movie-overview">
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
        </div>

        <div className="fav-button">
                { isFavorite ?
                  <FavBtn isFave={true} handleFaveClick={()=>handleFaveClick(isFavorite, movieData)} className="movie-favourite"/>
                  :
                  <FavBtn isFave={false} handleFaveClick={()=>handleFaveClick(isFavorite, movieData)}className="movie-favourite"/>
                }
        </div>
      </section>
    </div>
  );
};
export default Single;