import {useState, useEffect } from 'react';
//import movies from './data/films.json';
import filterMovies from '../helpers/filterArr';
import FilmsList from '../components/FilmsList/FilmsList';
import Container from '../components/Container/Container';
import Overlay from '../components/Overlay/Overlay';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import * as api from '../Services/api'

export default function FilmsView  (){
const [page,setPage ]= useState(1)
const [movies,setMovies]=  
  useState([])
const [img,setImg]=  
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

  

  const handleItemClick = img => setImg( img );

  const handleCloseOverlay = () =>  setImg('');
  
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
        {img && <Overlay img={img} onClick={handleCloseOverlay} />}
      </>);

  }

