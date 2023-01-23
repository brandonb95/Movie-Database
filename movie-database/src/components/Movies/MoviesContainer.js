import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import isFavourite from '';

const MoviesContainer = ( {moviesData}) => {
  const faves = useSelector((state) => state.favourites.value);

  return (
    <div className='movies-container'>
      {moviesData.map(movie => 
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          isFavourite={isFavourite(faves, null, movie.id)}
        />
      )}
    </div>
  )
}

export default MoviesContainer;