const filterMovies = movies =>
  movies.map(({ id, title, backdrop_path: img, overview: text }) =>
({
  id,
  title,
  img,
  text,
  isWatched: false,
}));
    
export default filterMovies;