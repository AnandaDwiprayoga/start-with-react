import React, {useEffect, useState} from 'react'
import DataSource from '../data/data-source';

const MealDetail = ({match}) => {
    
    useEffect(() => {
        DataSource.getMealById(match.params.id)
            .then(updateMealState);
    }, [match]);


    const [meal, mealState] = useState({});

    const updateMealState = meals => {
        const meal = meals[0];
        meal.strYoutube = meal.strYoutube.replace('watch?v=', 'embed/');

        mealState(meal);
    }

    return (
        <div className="movie-detail">
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <iframe src={meal.strYoutube} frameBorder="0" title={meal.idMeal} ></iframe>
        </div>
    );
}

export default MealDetail;