import FavesContainer from "../components/Faves/FavesContainer";

const PageFaves = () => {
  return (
    <div className="fav-wrapper">
      <h1>Your Favourites</h1>
      <p className="fav-subtitle">
        Find your favourites here, all in one place.
      </p>

      <section className="faves-page">
        <FavesContainer />
      </section>
    </div>
  );
};

export default PageFaves;
