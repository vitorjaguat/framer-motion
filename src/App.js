import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Type from './components/Type';
import Base from './components/Base';
import Filling from './components/Filling';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation(); //this will change whenever the route changes
  const [pie, setPie] = useState({ type: '', base: '', filling: [] });
  const [showModal, setShowModal] = useState(false);

  const addType = (type) => {
    setPie({ ...pie, type });
  };

  const addBase = (base) => {
    setPie({ ...pie, base });
  };

  const addFilling = (filling) => {
    let newFilling;
    if (!pie.filling.includes(filling)) {
      newFilling = [...pie.filling, filling];
    } else {
      newFilling = pie.filling.filter((item) => item !== filling);
    }
    setPie({ ...pie, filling: newFilling });
  };

  const resetPie = () => {
    setPie({
      base: '',
      filling: [],
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
          <Route path='/filling'>
            <Filling addFilling={addFilling} pie={pie} />
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
