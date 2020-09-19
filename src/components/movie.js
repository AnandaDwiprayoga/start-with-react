import React from 'react'

const Movie = ({movie}) => {
    return (
        <div className="movie-item">
            <h3>{movie.name}</h3>
            <p>{movie.price}</p>
        </div>
    );
}

export default Movie;