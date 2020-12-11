import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      className="home container"
      animate={{marginTop: 200, opacity: 0.2, rotateZ: 180}}>
      <motion.h2 
          animate={{
            fontSize : "50px",
            color: '#ff2994',
            // x positif geser kanan, y positif geser bawah
            x : 100, y:-100
          }}
        >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          animate={{
            scale: 1.5
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;