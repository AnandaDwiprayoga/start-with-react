import React from 'react'
import {Link } from 'react-router-dom';

const Meal = ({meal}) => {
    return (
        <div className="movie-item">
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <Link to={`shop/${meal.idMeal}`}>
                <h3>{meal.strMeal}</h3>
            </Link>
            <p>{meal.strInstructions}</p>
        </div>
    );
}

export default Meal;