import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { movieList } from '../movies';
import { motion} from 'framer-motion';
import { fade, lineAnim, pageAnimation, photoAnim, slider, sliderContainer } from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/scrollTop';

const OurWork = () => {
    
    const [element0, controls0] = useScroll();
    const [element1, controls1] = useScroll();

    const allElementRef = [
        element0,
        element1,
    ];

    const allControls = [
        controls0,
        controls1,
    ]

    return (
        <Work variants={pageAnimation} initial='hidden' exit="exit" animate='show' style={{background: 'white'}}> 
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            {movieList().map((movie, index) => {
                return (
                    (index !== 0 ? 
                        <Movie 
                            ref={allElementRef[index-1]} 
                            animate={allControls[index-1]} 
                            variants={fade} 
                            initial="hidden"  
                            key={index}  
                        >
                            <motion.h2 variants={fade}>{movie.title}</motion.h2>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link to={movie.url}>
                                <Hide>
                                    <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title}/>
                                </Hide>
                            </Link>
                        </Movie>
                        : 
                        <Movie key={index}>
                            <motion.h2 variants={fade}>{movie.title}</motion.h2>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link to={movie.url}>
                                <Hide>
                                    <motion.img variants={photoAnim} src={movie.mainImg} alt={movie.title}/>
                                </Hide>
                            </Link>
                        </Movie>
                    )
                )
                })
            }
             <ScrollTop/>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem;

    @media (max-width: 1000px){
        padding: 2rem;
    }

    h2 {
        padding: 1rem 0;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom : 5rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork
