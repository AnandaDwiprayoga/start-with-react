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
  }
};

const nextVariants = {
  hidden : {
    x: '-100vw'
  },
  show : {
    x: 0,
    transition: {type: "spring", stiffness: 120}
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


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              // originX agar ketika di scale posisi list tidak geser ke kiri
              whileHover={{scale: 1.3, color: '#f8e112', originX: 0}}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
          // jika nama poroperty untuk intial dan animate sama dengan parentnya yang memiliki motion
          // tidak dituliskan attribute initial dan animate tidak apa apa
          initial="hidden"
          animate="show"
        > 
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover" >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;