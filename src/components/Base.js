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

const Base = ({ addBase, pie }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust', 'Whole grains'];

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pie.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pie.base && (
        <motion.div
          className='next'
          variants={nextVariants}
          // initial='hidden'
          // animate='visible'
          //no need to declare initial and animate because it follows the same pattern as this element's parent,
          //and framer-motion variants propagate to children
        >
          <Link to='/filling'>
            <motion.button variants={buttonVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
