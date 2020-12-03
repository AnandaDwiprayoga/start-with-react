import { motion } from 'framer-motion';
import styled from 'styled-components';

// styled components
const About = styled(motion.div)`
    min-height : 90vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 5rem;
    color: white;

    @media (max-width: 1000px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;   
    }
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2{
        font-weight: lighter;
    }

    @media (max-width: 1000px){
        padding: 0;

        button {
            margin: 2rem 0 5rem 0;
        }
    }
`; 

const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;


export {
    About,
    Description,
    Image,
    Hide
}