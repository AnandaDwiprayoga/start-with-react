import { motion } from 'framer-motion';
import React from 'react';

const svgVaraints = {
  hidden: {rotate: -100},
  show: {
    rotate: 0,
    transition: {duration: 1}
  }
}
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}
const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg variants={svgVaraints} initial="hidden" animate="show" className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        // type spring untuk efek bouncing, dan attribute stiffness bisa diatur ketika 
        // menggunakan type spring, stiffness berfungsi untuk tingkat pantulan (nilai default :100)
        transition={{ delay: 0.2, type : "spring" , stiffness: 120}}
        >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;