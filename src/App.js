import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';  
import About from './components/About'; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   {/* Use the imported Home component */}
        <Route path="/about" element={<About />} /> {/* Use the imported About component */}
      </Routes>
    </div>
  );
}

export default App;
