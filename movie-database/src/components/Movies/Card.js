import  Unselected  from '../../scss/Favourite-Unselected.svg';


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


            </div>

        </div>
    );
}

export default Card;