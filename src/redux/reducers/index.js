import AddMovieReducer from './add-movie-reducer';
import { combineReducers } from 'redux';

// Untuk menamai state dan menggunakan banyak reducer lebih baik gunakan combineReducers
const reducers = combineReducers({movies : AddMovieReducer});

export default reducers;