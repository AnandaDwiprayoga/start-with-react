import { AnimateSharedLayout } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import { scrollReveal } from '../animation';
import { About } from '../StyledComponent';
import FaqToggle from './FaqToggle';
import { useScroll } from './useScroll';

const FaqSection = () => {

    const [ element, controls ] = useScroll();

    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Querstions <span>FAQ</span></h2>
            {/* animated shared layout detect layout change */}
            <AnimateSharedLayout>
                <FaqToggle title="How Do I Start">
                    <div className="answer">
                        <p>Lorem ipsum dolor sir amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus qui recusandae numquam consequatur pariatur ea, reprehenderit molestias officiis aut?</p>
                    </div>
                </FaqToggle>
                <FaqToggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sir amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus qui recusandae numquam consequatur pariatur ea, reprehenderit molestias officiis aut?</p>
                    </div>
                </FaqToggle>
                <FaqToggle title="What your service">
                    <div className="answer">
                        <p>Lorem ipsum dolor sir amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus qui recusandae numquam consequatur pariatur ea, reprehenderit molestias officiis aut?</p>
                    </div>
                </FaqToggle>
                <FaqToggle title="Price per service">
                    <div className="answer">
                        <p>Lorem ipsum dolor sir amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus qui recusandae numquam consequatur pariatur ea, reprehenderit molestias officiis aut?</p>
                    </div>
                </FaqToggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display:block;
    span {
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }

    .answer {
        padding : 2rem 0;

        p {
            padding: 1rem 0;
        }
    }
`;


export default FaqSection
