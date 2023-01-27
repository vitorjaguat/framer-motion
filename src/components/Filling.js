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

const Filling = ({ addFilling, pie }) => {
  let fillingSalty = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];
  let fillingSweet = [
    'apple',
    'banana',
    'cinammon',
    'blueberry',
    'cranberry',
    'chocolate',
    'vanilla cream',
    'yogurt',
    'pistachio',
    'walnuts',
  ];

  console.log(pie.type);

  return (
    <motion.div
      className='filling container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 3: Choose Filling (1-3)</h3>
      {pie.type === 'Salty' && (
        <ul>
          {fillingSalty.map((filling) => {
            let spanClass = pie.filling.includes(filling) ? 'active' : '';
            return (
              <motion.li
                key={filling}
                onClick={() => addFilling(filling)}
                whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className={spanClass}>{filling}</span>
              </motion.li>
            );
          })}
        </ul>
      )}
      {pie.type === 'Sweet' && (
        <ul>
          {fillingSweet.map((filling) => {
            let spanClass = pie.filling.includes(filling) ? 'active' : '';
            return (
              <motion.li
                key={filling}
                onClick={() => addFilling(filling)}
                whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className={spanClass}>{filling}</span>
              </motion.li>
            );
          })}
        </ul>
      )}

      <Link to='/order'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Filling;
