import React from 'react';
import '../scss/styles.scss';
import  Unselected  from '../scss/Favourite-Unselected.svg';

const AddFavourite = (props) => {
    // const FavouriteComponent = props.favouriteComponent;

    return (
        <body>
            <div className="fav-wrapper">
                <h1>Your Favourites</h1>
                <p>Heres a list of your favourite movies & shows!</p>

                <div className="fav-movie-container">
                    {/* <img className="movie-favourite" src={Unselected} alt="Unfavourite" faveComp={FavouriteComponent} />  */}
                </div>
            </div>
        </body>

        
    )
};

export default AddFavourite;