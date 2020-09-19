import React, {useState, useContext} from 'react'
import { MovieContext } from "./../ContextApi/movie-context";

const InputMovie = () => {
    const [ inputName, inputNameState ]  = useState("");
    const [ inputPrice, inputPriceState ]  = useState("");
    const [ movies, moviesState ] = useContext(MovieContext); 

    const onInputNameChanged = e => {
        inputNameState(e.target.value);
    }

    const onInputPriceChanged = e => {
        inputPriceState(e.target.value);
    }

    const onButtonSubmitClicked = e => {
        e.preventDefault();

        const movieInput = {
            name : inputName,
            price : `$${inputPrice}`,
            id: Math.floor(Math.random() * 1000)
        };

        moviesState([...movies, movieInput]);

        inputNameState('');
        inputPriceState('');
    }
    return (
        <form action="">
            <input type="text" name="name" placeholder="enter movie name" className="name-input" value={inputName} onChange={onInputNameChanged}/>
            <input type="number" name="price" placeholder="enter movie price" className="price-input" value={inputPrice} onChange={onInputPriceChanged}/>
            <button onClick={onButtonSubmitClicked}>Add Movie</button>
        </form>
    );
}

export default InputMovie;