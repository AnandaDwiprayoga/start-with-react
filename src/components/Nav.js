import { motion } from 'framer-motion';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {

    const {pathname} = useLocation();
    
    return (
        <StyledNav>
           <Link to="/"><Logo>Capture</Logo></Link>
           <ul>
               <li>
                   <Link to="/">1. About Us</Link>
                   <Line 
                        transition={{duration: 0.75}}
                        initial={{width: 0}} 
                        animate={{width: pathname === '/' ? "50%" : "0"}}
                    />
                </li>
               <li>
                   <Link to="/OurWork">2. Our Work</Link>
                   <Line 
                        transition={{duration: 0.75}}
                        initial={{width: 0}} 
                        animate={{width: pathname === '/OurWork' ? "50%" : "0"}}
                    />
                </li>
               <li>
                   <Link to="/ContactUs">3. Contact Us</Link>
                   <Line 
                        transition={{duration: 0.75}}
                        initial={{width: 0}} 
                        animate={{width: pathname === '/ContactUs' ? "50%" : "0"}}
                    />
                </li>
           </ul> 
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 50;

    a {
        color:white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        padding-left: 4rem;
        position: relative;
    }

    @media (max-width: 1000px){
        flex-direction: column;
        padding: 1rem;

        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }

        li {
            padding: 0;
        }
    }
`;

const Logo = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;

    @media (max-width: 1000px){
        display: inline-block;
        margin: .5rem;
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0;
    position:absolute;
    bottom: -80%;
    left: 40%;

    @media (max-width: 1000px){
        left: 0;
    }
`;

export default Nav
