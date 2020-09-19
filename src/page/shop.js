import React, {useEffect, useState} from 'react';
import { MealList } from "./../components";
import DataSource from '../data/data-source';

const Shop = () => {
    
    //jika array kosong pada parameter kedua, berarti hanya menjalankan statement yang ada pada callback satu kali
    useEffect(()  => {
        DataSource.getMeals().then(mealsState);
    },[]);

    const [ meals, mealsState ] = useState([]);

    return(
        <div className="container">
            <h3>Shop Now</h3>
            <MealList meals={meals} />
        </div>
    );
}

export default Shop;