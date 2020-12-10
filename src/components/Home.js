import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';


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

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ delay: 1.5, duration: 1.5 }}
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
    </motion.div>
  )
}

export default Home;