import FavesContainer from '../components/Faves/FavesContainer';

const PageFaves = () => {
    return (
        <body>
            <div className="fav-wrapper">
            <h1>Your Favourites</h1>
            <p>Heres a list of your favourite movies & shows!</p>
            
                <section className='faves-page'>

                    <FavesContainer />
                </section>
            </div>
        </body>  
    );
};

export default PageFaves;