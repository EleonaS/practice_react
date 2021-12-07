import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFilmsById } from "../Services/api";
const FilmDetails = () => {

  const { filmId } = useParams();

  const [film, setFilm] = useState([]);
  useEffect(() => {
    getFilmsById(filmId).then(({ data }) => setFilm(data))
    
  }, [filmId]);

  return (
<>
  
    
    
      <div>
        <h1>Film name: {film.title}</h1>
        <p>{film.release_date}</p>
        
        <img src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`} alt={film.title} />
        <p>{film.overview}</p>
      </div>
   
    </>
  )
}

export default FilmDetails;