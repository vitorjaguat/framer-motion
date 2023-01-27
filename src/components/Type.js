import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.7,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px #fff',
    boxShadow: '0px 0px 8px #fff',
    transition: {
      duration: 0.25,
      yoyo: 10, //repeat 10 times (10 keyframes) the animation
      //yoyo: Infinity //repeats indefinitely
    },
  },
};

const Type = ({ addType, pie }) => {
  const types = ['Salty', 'Sweet'];

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Salty or Sweet?</h3>
      <ul>
        {types.map((type) => {
          let spanClass = pie.type === type ? 'active' : '';
          return (
            <motion.li
              key={type}
              onClick={() => addType(type)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{type}</span>
            </motion.li>
          );
        })}
      </ul>

      {pie.type && (
        <motion.div
          className='next'
          variants={nextVariants}
          // initial='hidden'
          // animate='visible'
          //no need to declare initial and animate because it follows the same pattern as this element's parent,
          //and framer-motion variants propagate to children
        >
          <Link to='/base'>
            <motion.button variants={buttonVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Type;
