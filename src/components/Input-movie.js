import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
// import action
import { AddMovieAction } from './../redux/actions';

const InputMovie = () => {
    const [ inputName, inputNameState ]  = useState("");
    const [ inputPrice, inputPriceState ]  = useState("");
    const dispatch = useDispatch();

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

        dispatch(AddMovieAction(movieInput));

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