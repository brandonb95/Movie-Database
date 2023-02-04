import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '';
import MovieSingle from '../components/Movies/MovieSingle';
import { useSelector } from 'react-redux';
import isFave from './movieVariables';

const PageMovieSingle = () => {

  // store single movie data here
  const [movieData, setMovieData] = useState(false);

  const {id} = useParams();

  // Redux related for favouriting function
  const faves = useSelector((state) => state.favourites.value);

  // do query here

  useEffect(() => {
    
     // do query here
     const fetchMovieData = async () =>{
        // store the query here
        const query = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        // store result from query here
        const res = await query.json();

        // store the selected movie into the movie data const
        setMovieData(res);
     }

     fetchMovieData();
  },[])
  
    return (
      <>
        <section className="page-movie-single">
          {/* store the single movie data in a prop */}
          {movieData !== false   && <MovieSingle movie={movieData} isFave={isFave(faves, null, movieData.id)}/>}
        </section>
      </>
    );
  }
  
export default PageMovieSingle;