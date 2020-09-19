import React, {useState, createContext } from 'react';

//context api digunakan untuk state management
//menghindari melempar state yang terlalu banyak ke komponen komponen lain
const MovieContext = createContext();

const MovieProvider = (props) => {

    const [movies, moviesState ] = useState([
        {
            name: 'Harry Potter',
            price : '$10',
            id: 23124
        },
        {
            name: 'Ghame of Thrones',
            price : '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price : '$10',
            id: 23524
        }
    ]);

    return (
        //value pada provider bisa berupa array seperti contoh menggunakan state
        <MovieContext.Provider value={[movies, moviesState]}>
           {props.children} 
        </MovieContext.Provider>
    );
};


export {
    MovieContext,
    MovieProvider
}