import React from 'react';
import  Unselected  from '../scss/Favourite-Unselected.svg';

const AddFavourite = () => {
    return(
        <>
        <span>Add to Favourites</span>
        <img src={Unselected} alt="Unfavourite" />

        </>
    )
}

export default AddFavourite;