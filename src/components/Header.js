import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <motion.svg
            className='pie-svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            variants={svgVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.path
              fill='none'
              d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
              variants={pathVariants}
            />
            <motion.path
              fill='none'
              d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z'
              variants={pathVariants}
            />
          </motion.svg>
        </div>
      </Link>
      <motion.div
        className='title'
        initial={{
          y: -250,
        }}
        animate={{
          y: -10,
        }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        //type: 'spring' is the default (bounces a little bit),
        //type: 'tween' is a more uniform movement;
        //stiffness: 500 produces more bouncing in 'spring' type
      >
        <h1>Make-A-Pie</h1>
        <motion.div
          className='bar'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, originX: 0 }}
          transition={{ delay: 1.3, duration: 2 }}
        ></motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
