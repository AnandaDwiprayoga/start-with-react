import React from 'react'
import Meal from "./meal";

const MovieList = ({meals}) => {

    return (
        <div className="movie-list">
            {meals.map(meal => (
                <Meal meal={meal} key={meal.idMeal}/>   
            ))}
        </div>
    );
}

export default MovieList;