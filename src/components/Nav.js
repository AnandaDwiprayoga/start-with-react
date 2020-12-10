import { motion } from 'framer-motion';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchGames } from '../actions/gamesAction';
import logo from "../img/logo.svg";
import { fadeIn } from '../utils/animation';
import { TYPE_FETCH_GAMES_SEARCH_RESET } from '../utils/constant';

const Nav = () => {

    const dispatch = useDispatch();
    const [inputSearch, setInputSearch] = useState("");

    const onButtonSearchClicked = (event) => {
        event.preventDefault();
        dispatch(searchGames(inputSearch));
    }

    const resetSearch = () => {
        dispatch({type: TYPE_FETCH_GAMES_SEARCH_RESET});
        setInputSearch("");
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={resetSearch}>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text"  value={inputSearch} onChange={(event) => setInputSearch(event.target.value) }/>
                <button type="submit" onClick={onButtonSearchClicked}>Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 1rem  3rem;
    text-align: center;

    input {
        width: 30%;
        font-size: .8rem;
        padding: .5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0 0 30px rgba(0,0,0,.2);
        outline: none;
    }

    button {
        font-size: 1rem;
        border:none;
        padding: .5rem 1rem;
        cursor: pointer;
        background-color: #ff7676;
        color:white;
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    
    img {
        width: 2rem;
    }
`


export default Nav
