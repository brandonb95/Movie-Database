import React from 'react';
import FavBtn from '../Faves/FaveBtn';
import { addFavourite, removeFavourite } from '../Faves/favouritesSlice';
import { useDispatch } from 'react-redux';


import {Link} from 'react-router-dom';


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
  }

    return (
        <div>
            <div className="card-poster">
                <img className="single-poster" src={"https://image.tmdb.org/t/p/w500" + posterPath} alt="Movie" />

            <div>
            { isFave ?
              <FavBtn isFave={true} handleFaveClick={()=>handleFaveClick(isFave, movieObj)} className="movie-favourite"/>
              :
              <FavBtn isFave={false} handleFaveClick={()=>handleFaveClick(isFave, movieObj)}className="movie-favourite"/>
            }
                </div>

                <div className="overview">{overview}</div>
                <div className="card-title">{title}</div>
                <div className="release-date">{releaseDate}</div>
                <div className="average-score">{voteAverage}</div>

            <Link className="more-info-btn" to={`/single-movie/${id}`}>
                More Info
            </Link>

            
            </div>

        </div>
    );
}

export default Card;