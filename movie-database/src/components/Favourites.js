import FavesContainer from "../components/Faves/FavesContainer";

const PageFaves = () => {
  return (
    <body>
      <div className="fav-wrapper">
        <h1>Your Favourites</h1>
        <p>Find your favourites here, all in one place.</p>

        <section className="faves-page">
          <FavesContainer />
        </section>
      </div>
    </body>
  );
};

export default PageFaves;
