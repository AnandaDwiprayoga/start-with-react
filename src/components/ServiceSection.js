import React from 'react'
import home2 from "./../img/home2.png";
import clock from "./../img/clock.svg";
import diaphragm from "./../img/diaphragm.svg";
import money from "./../img/money.svg";
import teamwork from "./../img/teamwork.svg";
import styled from "styled-components";

import { About, Description, Image } from '../StyledComponent';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';


const ServiceSection = () => {
    const [ serviceTagElement, controls ] = useScroll();

    return (
        <Services ref={serviceTagElement} variants={scrollReveal} animate={controls} initial="hidden">
            <Description>
                <div className="description">
                    <h2>High <span>quality</span> services</h2>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <img src={clock} alt="clock"/>
                                <h3>Efficient</h3>
                            </div>
                            <p>lorem ipsum dolor sir amet</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={teamwork} alt="teamwork"/>
                                <h3>Efficient</h3>
                            </div>
                            <p>lorem ipsum dolor sir amet</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={diaphragm} alt="diaphragm"/>
                                <h3>Diaphragm</h3>
                            </div>
                            <p>lorem ipsum dolor sir amet</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={money} alt="money"/>
                                <h3>Money</h3>
                            </div>
                            <p>lorem ipsum dolor sir amet</p>
                        </Card>
                    </Cards>
                </div>
            </Description>
            <Image>
                <img src={home2} alt="home2"/>
            </Image>
        </Services>
    )
}

//mengcopy semua property yang ada pada styled component about
const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;

    @media (max-width: 1000px){
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;

    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background: white;
            color:black;
            padding: 1rem;
        }
    }

`;

export default ServiceSection
