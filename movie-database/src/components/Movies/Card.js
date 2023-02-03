import  Unselected  from '../../scss/Favourite-Unselected.svg';



import {Link} from 'react-router-dom';


function Card({
    object,
    id,
    title,
    voteAverage,
    overview,
    posterPath,
    releaseDate,
    movieObj,
    isFav,
    
}) {

    return (
        <div>
            <div className="card-poster">
                <img className="single-poster" src={"https://image.tmdb.org/t/p/w500" + posterPath} alt="Movie" />
                <img className="movie-favourite" src={Unselected} alt="Unfavourite" />

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