import React from 'react';
import '../scss/styles.scss';
import  Unselected  from '../scss/Favourite-Unselected.svg';

const AddFavourite = (props) => {
    // const FavouriteComponent = props.favouriteComponent;

    return (
        <body>
            <div className="fav-wrapper">
                <h1>Favourites</h1>
            </div>
        </body>

        // <img className="movie-favourite" src={Unselected} alt="Unfavourite" faveComp={FavouriteComponent} /> 
    )
};

export default AddFavourite;