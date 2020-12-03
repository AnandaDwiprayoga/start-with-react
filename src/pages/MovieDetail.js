import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { pageAnimation } from '../animation';
import {Award} from '../components';
import {movieList} from "./../movies.js";

const MovieDetail = () => {
    const history = useHistory();
    const currentUrl = history.location.pathname;
    const [ movies ] = useState(movieList);
    const [ movie, setMovie ] = useState(null);

    //run once when the component mounth
    useEffect(() => {
        const movies = movieList();
        const movieMatchId = movies.find(mov => mov.url === currentUrl);
        setMovie(movieMatchId);
    }, [movies, currentUrl]);

 
    return (
        movie && (
            <Details variants={pageAnimation} exit="exit" initial='hidden' animate='show'>
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt={movie.title}/>
                </HeadLine>
                <Awards>
                    {movie.awards.map(award => (
                        <Award
                            key={Math.random() * 100}
                            title={award.title}
                            desc={award.description}
                        />
                    ))}
                </Awards>
                <ImageDisplayed>
                    <img src={movie.secondaryImg} alt={movie.title}/>
                </ImageDisplayed>
            </Details>
        ) 
    )
}

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display:flex;
    margin: 5rem;
    align-items:center;
    justify-content:space-between;

    @media (max-width: 1000px){
        display: block;
        margin: 2rem;
    }
`;

const ImageDisplayed = styled.div`
    min-height: 50vh;
    
    img {
        width: 100%;
        height: 100vh;
        object-fit:cover;
    }
`;

export default MovieDetail
