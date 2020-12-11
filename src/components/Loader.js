import { motion } from 'framer-motion'
import React from 'react'


const loaderVariants = {
    animationOne : {
        // keyframe
        x: [-20, 20],
        y: [0, -30],
        transition: {
            //transition khusus x 
            x : {
                yoyo : Infinity,
                duration: 0.5
            },
            // transition khusus y
            y: {
                yoyo : Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}
const Loader = () => {
    return (
        <>
            <motion.div 
             className="loader"
             variants={loaderVariants}
             animate="animationOne">

            </motion.div>
        </>
    )
}

export default Loader
