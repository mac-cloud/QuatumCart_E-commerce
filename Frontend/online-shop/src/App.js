import React from 'react';
import { CartProvider } from "./GlobalContext/CartContext";
import './Static/Styles.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './SecurityFeatures/UserContext';
import HomePage from './ProductManagement/HomePage';
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
import OfficeDetails from './Items/OfficeDetails';
import ServiceOffered from './Items/ServicesOffered';
import WholesaleDetails from './Items/WholesaleDetails';
import SigninPage from './SecurityFeatures/SigninPage';
import SignupPage from './SecurityFeatures/SignupPage';
import ContactPage from './CustomerSupport/ContactPage';
import HomeAppliances from './Items/HomeAppliances';
import PaymentIntergration from './PaymentGateway/PaymentIntegration';
import PercelTracker from './DeliverySystem/PercelTracker';
//import ProductVariant from './ProductManagement/ProductVariant.js';
function App() {
  return (
 <CartProvider> 
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
        <Route path="/office" element={<OfficeDetails/>} />
        <Route path="/services" element={<ServiceOffered/>} />
        <Route path="/wholesale" element={<WholesaleDetails/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/appliances" element={< HomeAppliances/>} />
        <Route path="/mpesapayment/:item_id" element={< PaymentIntergration/>} />
        <Route path="track" element={< PercelTracker />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  </CartProvider>  
  );
}

export default App;
