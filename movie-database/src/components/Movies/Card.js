import { useEffect, useState } from 'react';
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

const [oView, oUpdate] = useState(0);


// Change the length of movie overview
useEffect(() => {

    const resizeWin = () => {
    const changeOverview = window.innerWidth > 768 ? 10 : 300;
    
    oUpdate(changeOverview);

    let value = 100;

    if(window.innerWidth > 1632){
        value=200;
    } else if(window.innerWidth > 1500){
        value=100;
    } else if(window.innerWidth > 1344){
        value=70;
    } else if(window.innerWidth > 1200){
        value=250;
    } else if(window.innerWidth > 1000){
        value=230;
    } 

    oUpdate(value);
}
    window.addEventListener("resize", resizeWin);
},[])
    

console.log(oView);
    


    return (
        <div>
            <div className="card-poster">
            <p><div className="overview">{overview.substring(0, oView)}...</div></p>
                <img className="single-poster" src={"https://image.tmdb.org/t/p/w500" + posterPath} alt="Movie" />
                <button className="movie-favourite"></button>
                <div className="average-score">{voteAverage}</div>
            </div>
            <div className="card-title">{title}</div>
            <div className="release-date">{releaseDate}</div>
        </div>
    );
}

export default Card;