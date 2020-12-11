import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const containerVariants = {
  hidden : {
    opacity: 0,
    x: '100vw'
  },
  show : {
    opacity: 1,
    x: 0,
    transition: { 
      type: "spring", 
      // mass berarti panjang pantulan
      mass: 0.4,
      // kecepatan spring
      damping: 8,
      // when digunakan untuk kapan animation dijalankan
      when: "beforeChildren",
      // gap between child component delay
      staggerChildren: 0.4
    }
  },
  exit : {
    x: '-100vw',
    transition : {
      ease : "easeInOut"
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0
  },
  show : {
    opacity: 1
  }
}



const Order = ({ pizza }) => {

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    > 
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;