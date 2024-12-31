import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard.js';
import Phones from './Pages/Phones';
import TV from './Pages/TV';
import Laptops from './Pages/Laptops';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/phones" element={<Phones/>} />
        <Route path="/tvs" element={<TV/>} />
        <Route path="/laptops" element={<Laptops/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
