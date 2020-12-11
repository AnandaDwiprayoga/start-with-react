import { motion, useCycle } from 'framer-motion'
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
    },
    animationTwo : {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}
const Loader = () => {
    // useCycle digunakan untuk mentogle animation
    // animation untuk array animasinya, cycleANimation untuk toogle menjalankan animationnya
    const [ animation, cycleAnimation ] = useCycle("animationOne", "animationTwo");

    return (
        <>
            <motion.div 
                className="loader"
                variants={loaderVariants}
                animate={animation}>      
            </motion.div>
            <div onClick={() => cycleAnimation()}>CycleAnimation</div>
        </>
    )
}

export default Loader
