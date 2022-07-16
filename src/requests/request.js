import axios from 'axios';
import {
  GET_ALL_AUTHORS, GET_ALL_LOCATIONS, GET_ALL_PAINTINGS, GET_PAINTINGS_BY_PAGE,
} from './routes';

export const getAllAuthors = () => axios.get(GET_ALL_AUTHORS);
export const getAllPaintings = () => axios.get(GET_ALL_PAINTINGS);
export const getAllLocations = () => axios.get(GET_ALL_LOCATIONS);
export const getPaintingsByPage = (page) => axios.get(GET_PAINTINGS_BY_PAGE + page);
export const getFilteredPaintings = async (urlWithQuery) => axios.get(urlWithQuery);
