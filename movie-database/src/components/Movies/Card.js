

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
                <img src={"https://image.tmdb.org/t/p/w500" + posterPath} alt="Movie" />
                {title}

            <p>{overview}</p>
            <p>{releaseDate}</p>
            <p>{`${voteAverage *10}%`}</p>

            <Link className="more-info-btn" to={`/single-movie/${id}`}>
                More Info
            </Link>

            
            </div>

        </div>
    );
}

export default Card;