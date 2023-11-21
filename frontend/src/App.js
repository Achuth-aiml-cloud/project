import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home';
import Home0 from './Home0';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path="/" element={<Home0/>}/>
        <Route path="/image-classification" element={<Home1/>} />
        <Route path="/handpose" element={<Home2/>}/>
        <Route path="/img-segmentation" element={<Home3/>} />
      </Routes>
    </div>
  );
}

export default App;
