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

const Toppings = ({ addTopping, pie }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className='toppings container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pie.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
