import { motion } from 'framer-motion';
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const FaqToggle = ({children, title}) => {

    const [ isShowAnswer, setIsShowAnswr ] = useState(false);
   
    return (
       <motion.div layout className="question" onClick={() => setIsShowAnswr(!isShowAnswer)}>
            <motion.h4 layout>{title}</motion.h4>
            {isShowAnswer && children }
            <Line />
       </motion.div>
    );
};

const Line = styled.div`
    background: white;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
`;

export default FaqToggle;
