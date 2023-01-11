import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

function App() {

  const movieDatabase = {
    title: 'Sunset Movies',
    authors: 'Brandon Birk, Mai Le, Len Tong'
  }

  return (
    <div>
      <title>Sunset Movies</title>
      <Header title="SUNSET"/>

      {/* <Footer author={movieDatabase.authors}/> */}
    </div>
  );
}

export default App;
