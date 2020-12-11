import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const backdropVariants = {
    show: {opacity: 1},
    hidden: {opacity: 0}
}

const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    show: {
        y: "200px",
        opacity: 1,
        transition: {
            delay: 0.5
        }
    },
}

const Modal = ({showModal,setShowModal}) => {
    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div 
                    className="backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    >
                    <motion.div variants={modalVariants} className="modal">
                        <p>Want to make another pizza ?</p>
                        <Link to="/">
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
