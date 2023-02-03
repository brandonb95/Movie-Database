import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../Movies/Card';

const FavesContainer = () => {
  // grab isFaves() stored in state variable "value". Related to Redux
  const faves = useSelector((state) => state.favourites.value);

  return (
    <div className="faves-container">
      {faves.length < 1 ? (
        <section className="empty-faves">
          <p>
            Your favourites are empty! Go back to <Link to="/">home</Link> to start adding to your list.
          </p>
        </section>
      ) : (
        <section>
            <p>You have {faves.length} favourite(s).</p>
          <div className="faves-grid">
            {/* If faves array has items, map out individual movies */}
            {faves.map((singleFave) => (
              <MovieCard key={singleFave.id} movie={singleFave} isFavourite={true}/>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FavesContainer;