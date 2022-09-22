import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swap from "../../assets/svgs/swap.svg";
import spot from "../../assets/svgs/spot.svg";
import margin from "../../assets/svgs/margin.svg";
// import traditional from "../../assets/svgs/traditional.svg";

const Nav = () => {
  const [active, setActive] = useState("trade");
  const [display, setDisplay] = useState(false);

  const handleEarn = () => {
    setActive("earn");
  };
 

  return (
    <div className="flex md:gap-10 gap-3 font-[400] md:text-[18px] text-[14px] items-center">
      <div>
        <button
          onClick={() => {
            setActive("trade");
            setDisplay(true);
            
          }}
        
        >
          <div className="flex flex-col gap-[1px] items-center">
            <span>Trade</span>
            {active === "trade" && (
              <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
            )}
          </div>
        </button>
        {active === "trade" && display && (
          <div className="py-8 rounded bg-[#2C2C2C] absolute top-[5rem] flex flex-col gap-8">
            <NavLink to={"/"}>
              <button
                onClick={() =>{
                  setDisplay(false)
                }}
                className="px-8 flex gap-4 items-center hover:bg-[#211F20] text-left w-full"
              >
                <img src={swap} alt="" />
                <div className="flex flex-col ">
                  <span className="font-[600] text-[18px]">Swap</span>
                  <span className="font-[300] text-[16px] text-[#B8B8B8]">
                    Quick Swap with 0 Fees
                  </span>
                </div>
              </button>
            </NavLink>
            <NavLink to={"/spot"}>
              <button
                onClick={() => setDisplay(false)}
                className="px-8 flex gap-4 items-center hover:bg-[#211F20] text-left w-full"
              >
                <img src={spot} alt="spot" />
                <div className="flex flex-col ">
                  <span className="font-[600] text-[18px]">Spot</span>
                  <span className="font-[300] text-[16px] text-[#B8B8B8]">
                    Trade popular coins at the best price
                  </span>
                </div>
              </button>
            </NavLink>
            <NavLink to={"/margin"}>
              <button
                onClick={() => setDisplay(false)}
                className="px-8 flex gap-4 items-center hover:bg-[#211F20] text-left w-full"
              >
                <img src={margin} alt="margin" />
                <div className="flex flex-col ">
                  <span className="font-[600] text-[18px]">Margin</span>
                  <span className="font-[300] text-[16px] text-[#B8B8B8]">
                    5x cross, settle any time
                  </span>
                </div>
              </button>
            </NavLink>
            {/* <NavLink to={"trade/traditional"}>
              <button
                onClick={() => setDisplay(false)}
                className="px-8 flex gap-4 items-center hover:bg-[#211F20] text-left w-full"
              >
                <img src={traditional} alt="margin" />
                <div className="flex flex-col ">
                  <span className="font-[600] text-[18px]">Traditional</span>
                  <span className="font-[300] text-[16px] text-[#B8B8B8]">
                    Quotes on tap & quick order placing
                  </span>
                </div>
              </button>
            </NavLink> */}
          </div>
        )}
      </div>

      <NavLink to={"earn"}>
        <button name="trade" onClick={handleEarn}>
          <div className="flex flex-col gap-[1px] items-center">
            <span>Earn</span>
            {active === "earn" && (
              <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
            )}
          </div>
        </button>
      </NavLink>

      <NavLink to={"invest"}>
        <button name="invest" onClick={()=> setActive("invest")}>
          <div className="flex flex-col gap-[1px] items-center">
            <span>Invest</span>
            {active === "invest" && (
              <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
            )}
          </div>
        </button>
      </NavLink>

     
    </div>
  );
};

export default Nav;
