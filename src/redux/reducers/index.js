import MovieReducers from './movie-reducer';
import { combineReducers } from 'redux';

// Untuk menamai state dan menggunakan banyak reducer lebih baik gunakan combineReducers
const reducers = combineReducers({movies : MovieReducers});

export default reducers;