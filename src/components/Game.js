import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadGameDetail } from '../actions/gamesAction';
import { popUp } from '../utils/animation';
import { resizeImg } from '../utils/util';

const Game = ({name, released, id, image, from}) => {
    
    const dispatch = useDispatch();

    const onLoadDetailHandler = () => {
        dispatch(loadGameDetail(id, from));
        //mendisable scrolling body saat detail popup
        document.body.style.overflow = "hidden";
    }

    return (
        <StyledGame variants={popUp} initial="hidden" animate="show" onClick={onLoadDetailHandler} layoutId={`${from}-${id}`}>
            <motion.h3 layoutId={`title-${from}-${id}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image-${from}-${id}`} src={resizeImg(image, 640)} alt={name}/>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0,0,0,.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game
