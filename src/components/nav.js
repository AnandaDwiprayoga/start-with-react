import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
    // use selector to get all state 
    const movies = useSelector(state => state.movies);

    return (
        <nav>
            <ul>
                <li>Fake movie</li>
                <li>Total your movie : <b>{movies.length}</b></li>
            </ul>
        </nav>
    );
}

export default Nav;
