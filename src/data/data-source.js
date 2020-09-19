class DataSource {
    static getMeals(){
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => response.json())
            .then(responseJson => responseJson.meals)
            .catch(alert);
    }

    static getMealById(id){
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(responseJson => responseJson.meals)
            .catch(alert);
    }
}

export default DataSource;