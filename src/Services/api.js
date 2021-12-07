import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

const key = 'e51fa7aa1819bb081f9c2dbbae1f5e9d';

export const getFilms = page => axios.get(BASE_URL + `/trending/movie/day` + `?page=${page}&api_key=${key}`)

export const getFilmsById= id=> axios.get(BASE_URL + `/movie/${id}?api_key=${key}`)