/*import { Component } from 'react';
//import movies from './data/films.json';
import filterMovies from './helpers/filterArr';
import FilmsList from './components/FilmsList/FilmsList';
import Container from './components/Container/Container';
import Overlay from './components/Overlay/Overlay';
import Button  from './components/Button/Button';
import * as api from './Services/api'

const INITIAL_STATE = {
  page: 1,
  movies:[], 
}

class App extends Component {
  state = {
//movies: [...filterMovies(movies)],
    ...INITIAL_STATE,
    text: '',
    isLoading:false,
  };

 componentDidMount() {
        const { page } = this.state;
        this.getFilms(page);
 }
  
   componentDidUpdate(prevProps, prevState) {
        const { movies, page } = this.state;
       if (prevState.page !== page) {
           this.getFilms(page);
       }
     if (page > 1) {
       window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            })};
         
    }

  getFilms = page => {
    this.setState({ isLoading: true });
    api.getFilms(page).then(
      ({ data }) => {
        console.log(data); this.setState(prevState => (
          {movies: [...prevState.movies, ...filterMovies(data.results)],
          }));
        })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
     };

  handleClick = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  
    //this.setState((prev) => ({ page: prev.page + 1 }))
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
          { movies.length >0 &&
          <><FilmsList
            movies={movies}
            onClick={this.handleItemClick}
            onStatusClick={this.handleChangeStatus}
          />
            <Button onClick={this.handleClick}/>
          </>
          }
        </Container>
        {text && <Overlay text={text} onClick={this.handleCloseOverlay} />}
      </>);

  }

}
export default App;
*/

//------------hooks-----------//

import {useState, useEffect } from 'react';
//import movies from './data/films.json';
import filterMovies from './helpers/filterArr';
import FilmsList from './components/FilmsList/FilmsList';
import Container from './components/Container/Container';
import Overlay from './components/Overlay/Overlay';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import * as api from './Services/api'

export default function App  (){
const [page,setPage ]= useState(1)
const [movies,setMovies]=  
  useState([])
const [text,setText]=  
  useState('')
const [isLoading,setIsLoading]=    
  useState(false)

useEffect(() => {
        setIsLoading(true);
        api.getFilms(page)
            .then(({ data }) => {
                setMovies(prevState => [...prevState, ...filterMovies(data.results)]);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(false);
                if (page > 1) {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
                }
            });
    }, [page]);
/*
  const getFilms = page => {
    setIsLoading(true);
    api.getFilms(page).then(
      ({ data }) => {
         setMovies(prevState => [...prevState, ...filterMovies(data.results)]);
        })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
     };
*/
  const handleClick = () => {
   
    setPage( prevPage => prevPage + 1 );
  
    //this.setState((prev) => ({ page: prev.page + 1 }))
  };

  

  const handleItemClick = text => setText( text );

  const handleCloseOverlay = () =>  setText('');
  
  const handleChangeStatus = id => {

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
    setMovies(newMovies);
  };
 

    return (
      <>
        <Container>
          { movies.length >0 &&
          <><FilmsList
            movies={movies}
            onClick={handleItemClick}
            onStatusClick={handleChangeStatus}
          />
            <Button onClick={handleClick}/>
          </>
          }
        </Container>
        {isLoading && <Loader/> }
        {text && <Overlay text={text} onClick={handleCloseOverlay} />}
      </>);

  }


