import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden : {
    opacity: 0,
    x: '100vw'
  },
  show : {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120}
  },
  exit : {
    x: '-100vw',
    transition : {
      ease : "easeInOut"
    }
  }
};

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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            // originX agar ketika di scale posisi list tidak geser ke kiri
              whileHover={{scale: 1.3, color: '#f8e112', originX: 0}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;