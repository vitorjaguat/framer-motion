import React, { useEffect, useState } from 'react';
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
      // mass: 0.4, //lower mass = spring lasts less
      // damping: 8, //lower dumping = spring lasts more
      when: 'beforeChildren',
      staggerChildren: 0.3, //gap between parent and children's motions
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pie, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 4000);
  }, [setShowModal]);

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2 exit={{ y: -1000 }}>Thank you for your order</h2>

      <motion.p variants={childVariants}>
        You ordered a {pie.base} pie with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pie.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
