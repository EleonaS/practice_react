import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

const key = 'e51fa7aa1819bb081f9c2dbbae1f5e9d';

export const getFilms= page=>axios.get(BASE_URL+ `?page=${page}&api_key=${key}`)