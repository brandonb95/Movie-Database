import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const movieDatabase = {
    title: 'Movie Database',
    authors: 'Brandon Birk, Mai Le, Len Tong'
  }

  return (
    <div>
      <title>Movie Database</title>
      <Header title="Movie Database"/>

      <Footer author={movieDatabase.authors}/>
    </div>
  );
}

export default App;
