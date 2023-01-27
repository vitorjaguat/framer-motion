import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Welcome to Make-A-Pie</h2>
      <Link to='/type'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Create Your Pie
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
