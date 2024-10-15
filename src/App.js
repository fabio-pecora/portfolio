import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';  // Assuming you're using React Router

function App() {
  return (
    <div>
      <Navbar />  {/* Place Navbar at the top, so it's always visible */}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
