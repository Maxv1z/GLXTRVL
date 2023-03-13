import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from "./routes/Home"
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import Contact from './routes/Contact';

import AnimatedCursor from './Cursor.js'

function App() {
  return (
    <>
      <AnimatedCursor />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
