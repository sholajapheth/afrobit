import React from 'react'
import { Routes, Route } from "react-router-dom";
import Assets from '../Assets/Assets';
import Earn from '../Earn/Earn';
import Invest from '../Invest/Invest';
import Login from '../Login/Login';
import Refferal from '../Refferal/Refferal';
import Register from '../Register/Register';
import Settings from '../Settings/Settings';
import Trade from '../Trade/Trade';

const Body = () => {
  return (
    <div className="bg-[#363636]  h-auto">
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="refferal" element={<Refferal />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="earn" element={<Earn />} />
        <Route path="invest" element={<Invest />} />
        <Route path="assets" element={<Assets />} />
        <Route path="trade/*" element={<Trade />} />
      </Routes>
    </div>
  );
}

export default Body