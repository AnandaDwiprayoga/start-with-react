import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';


const buttonVariants = {
  hover : {
    // keyframe, nilai array akana dijalankan 1 persatu
    scale : 1.1,
    textShadow: "0 0 8px white", 
    boxShadow: "0 0 8px black",
    transition : {
      //delay ketika menjalankan ulang animation
       duration: 0.3,
        //  attribute yoyo akan mengulang animation sesuai dengan value yoyo,
        // jika Infinity akan dijalankan terus menerus, bisa diganti dengan angka
       yoyo: Infinity
    }
  }
}

const containerVariants = {
  hidden : {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit : {
    x: '-100vw',
    transition : {
      ease : "easeInOut"
    }
  }
}
const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;