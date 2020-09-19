import React, {useContext} from 'react';
import { MovieContext } from "./../ContextApi/movie-context";

const Nav = () => {
    const [ movies ] = useContext(MovieContext);
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