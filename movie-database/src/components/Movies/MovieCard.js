import { Link } from 'react-router-dom';
import FaveBtn from '';
import { addFavourite, removeFavourite } from '';
import { useDispatch } from 'react-redux';

const MovieCard = ({ movie, isFavourite }) => {
  // this cuts the description so that it isnt too long in the card divs!
  const shortDesc = movie.overview.substring(0, 200) + ' ...';
  // Shortens Movie Title to maintain card info positioning
  const shortTitle = movie.title.substring(0, 20) + ' ...';

  // this converts the rating from a x/10 to a percentage :)
  const rating = Math.round((movie.vote_average / 10) * 100);

  const dispatch = useDispatch();

  const handleFaveClick = (addToFave, obj) => {
    if (addToFave === true) {
          dispatch(addFavourite(obj));
    } else {
          dispatch(removeFavourite(obj));
    }
  }
  
  // convert the date here
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // raw release date
  const rDate = new Date(movie.release_date);
  // convert it to the mm/dd/yyyy
  const releaseDate = months[rDate.getMonth()] + ' ' + rDate.getDate() + ', ' + rDate.getFullYear();


  return (
    <article className="movie-card">
      <div className="img-container">
        {movie.poster_path !== null && (
          <Link to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`Poster for '${movie.title}'`}
            />
          </Link>
        )}
        {/* Hover Card*/}
        <article className="hover-card">
            <p>{movie.overview.length > 200 ? shortDesc : movie.overview}</p>
            <div className="more-info">
              <Link to={`/movies/${movie.id}`}>More info</Link>
            </div>
        </article>
      </div>

      <section className="movie-text">
        <h2>{movie.title.length > 20 ? shortTitle : movie.title}</h2>
            <p>{releaseDate}</p>
        <article>
            <p className="rating">{!movie.vote_average ? 'N/A' : rating + '%'}</p>
          <div>
            { isFavourite ?
              <FaveBtn movie={movie} isFave={true} handleFaveClick={handleFaveClick}/>
              :
              <FaveBtn movie={movie} isFave={false} handleFaveClick={handleFaveClick}/>
            }
          </div>
        </article>
        <article className="synopsis">
            <p>{movie.overview.length > 200 ? shortDesc : movie.overview} <Link to={`/movies/${movie.id}`}>More</Link></p>
        </article>
      </section>
    </article>
  );
};

export default MovieCard;
