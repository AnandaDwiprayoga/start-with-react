import React from 'react'
import Movie from "./movie";
import { useSelector } from 'react-redux';

const MovieList = () => {
    const movies = useSelector(state => state.movies);
    
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id}/>
            ))}
        </div>
    );
}

export default MovieList;