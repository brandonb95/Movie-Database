
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
                <div className="card-title">{title}</div>
                <div className="release-date">{releaseDate}</div>
                <div className="average-score">{voteAverage}</div>


            </div>

        </div>
    );
}

export default Card;