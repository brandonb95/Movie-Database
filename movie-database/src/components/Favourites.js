import React from 'react';
import  Unselected  from '../scss/Favourite-Unselected.svg';

const AddFavourite = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return(
        <>
        <img className="movie-favourite" src={Unselected} alt="Unfavourite" faveComp={FavouriteComponent} />
        </>
    )
}

export default AddFavourite;