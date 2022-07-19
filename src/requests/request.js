import axios from 'axios';
import { GET_ALL_LOCATIONS, GET_ALL_PAINTINGS } from './routes';

export const getAllPaintings = () => axios.get(GET_ALL_PAINTINGS);
export const getAllLocations = () => axios.get(GET_ALL_LOCATIONS);
