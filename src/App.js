import { Component } from 'react';
import movies from './data/films.json';
import filterMovies from './helpers/filterArr';
import FilmsList from './components/FilmsList/FilmsList';
import Container from './components/Container/Container';
import Overlay from './components/Overlay/Overlay';

class App extends Component {
  state = {
    movies: [...filterMovies(movies)],
    text: '',
    

  };

  handleItemClick = text => this.setState({ text });
  handleCloseOverlay = () => this.setState({ text: '' });
  handleChangeStatus = id => {
    const { movies } = this.state;
    const newMovies = [];

    for (const movie of movies) {
      if (movie.id === id) {
        movie.isWatched = !movie.isWatched;
        newMovies.push(movie);
      }
    else
      {
        newMovies.push(movie);
      }
    };
    this.setState({ movies: newMovies });
  };
 
  

  render() {
    const { movies, text } = this.state;

    return (
      <>
        <Container>
          <FilmsList
            movies={movies}
            onClick={this.handleItemClick}
            onStatusClick={this.handleChangeStatus}
          />
        </Container>
        {text && <Overlay text={text} onClick={this.handleCloseOverlay} />}
      </>);

  }

}
export default App;
