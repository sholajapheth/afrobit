import React from 'react'
import { Routes, Route } from "react-router-dom";
import Swap from './Swap/Swap';
import Spot from './Spot/Spot';
import Margin from './Margin/Margin';
// import Traditional from './Traditional/Traditional';

const Trade = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Swap/>} />
            <Route path={"spot"} element={<Spot/>} />
            <Route path={"margin"} element={<Margin/>} />
            {/* <Route path={"traditional"} element={<Traditional/>} /> */}
        </Routes>
    </div>
  )
}

export default Trade