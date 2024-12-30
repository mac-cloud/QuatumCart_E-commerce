import React from 'react';
import './Static/Styles.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './ProductManagement/Categories';
import PhonesDetails from './Items/PhonesDetails';
import TVDetails from './Items/TVDetails';
import ComputerDetails from './Items/ComputerDetails';
import AudioDetails from './Items/AudioDetails';
import CameraDetails from './Items/CameraDetails';
import SmarthomeDetails from './Items/SmarthomeDetails';
import WearableDetails from './Items/WearableDetails';
import CablesDetails from './Items/CablesDetails';
import Cable from './Items/Cable';
import BulbsDetails from './Items/BulbsDetails';
//import ProductVariant from './ProductManagement/ProductVariant.js';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Categories />} />
        <Route path="/phones" element={<PhonesDetails />} />
        <Route path="/televions" element={<TVDetails />} />
        <Route path="/computer" element={<ComputerDetails />} />
        <Route path="/audio" element={< AudioDetails/> } />
        <Route path="/camera" element={< CameraDetails/>} />
        <Route path="/smart" element={<SmarthomeDetails/>} />
        <Route path="/wearables" element={< WearableDetails/>} />
        <Route path="/cables" element={< CablesDetails/>} />
        <Route path="/cable" element={<Cable/>} />
        <Route path="/bulbs" element={<BulbsDetails/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
