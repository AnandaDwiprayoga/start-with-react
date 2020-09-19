import React, {useContext} from 'react'
import Movie from "./movie";
import { MovieContext } from "./../ContextApi/movie-context";

const MovieList = () => {
    const [ movies ] = useContext(MovieContext);
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Movie movie={movie} key={movie.id}/>
            ))}
        </div>
    );
}

export default MovieList;