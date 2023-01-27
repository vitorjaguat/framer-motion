import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Type from './components/Type';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation(); //this will change whenever the route changes
  const [pie, setPie] = useState({ type: '', base: '', toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addType = (type) => {
    setPie({ ...pie, type });
  };

  const addBase = (base) => {
    setPie({ ...pie, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pie.toppings.includes(topping)) {
      newToppings = [...pie.toppings, topping];
    } else {
      newToppings = pie.toppings.filter((item) => item !== topping);
    }
    setPie({ ...pie, toppings: newToppings });
  };

  const resetPie = () => {
    setPie({
      base: '',
      toppings: [],
    });
  };

  return (
    <>
      <Header />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        resetPie={resetPie}
      />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path='/type'>
            <Type addType={addType} pie={pie} />
          </Route>
          <Route path='/base'>
            <Base addBase={addBase} pie={pie} />
          </Route>
          <Route path='/toppings'>
            <Toppings addTopping={addTopping} pie={pie} />
          </Route>
          <Route path='/order'>
            <Order pie={pie} setShowModal={setShowModal} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
