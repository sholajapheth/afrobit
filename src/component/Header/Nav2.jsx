import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swap from "../../assets/svgs/swap.svg";
import spot from "../../assets/svgs/spot.svg";
import margin from "../../assets/svgs/margin.svg";
import LoginRegister from "./LoginRegister";

const Nav2 = (props) => {
  const [active, setActive] = useState("trade");
  const [display, setDisplay] = useState(false);

  const handleEarn = () => {
    setActive("earn");
    props.close();
  };

  return (
    <div className="flex flex-col items-center gap-5 py-4 font-[400] text-[16px] h-screen ">
      <div>
        <button
          onClick={() => {
            setActive("trade");
            setDisplay(true);
          }}
        >
          <div className="flex flex-col gap-[1px] items-center gap-3">
            <span>Trade</span>
            {active === "trade" && (
              <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
            )}
          </div>
        </button>
        {active === "trade" && display && (
          <div className="py-8 rounded bg-[#2C2C2C] top-[5rem] flex flex-col gap-8">
            <NavLink to={"trade/swap"}>
              <button
                onClick={() => {
                  setDisplay(false);
                  props.close();
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
            <NavLink to={"trade/spot"}>
              <button
                onClick={() => {
                  setDisplay(false);
                  props.close();
                }}
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
            <NavLink to={"trade/margin"}>
              <button
                onClick={() => {
                  setDisplay(false);
                  props.close();
                }}
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
        <button
          name="invest"
          onClick={() => {
            setActive("invest");
            props.close();
          }}
        >
          <div className="flex flex-col gap-[1px] items-center">
            <span>Invest</span>
            {active === "invest" && (
              <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
            )}
          </div>
        </button>
      </NavLink>
      <div>
        <LoginRegister />
      </div>
    </div>
  );
};

export default Nav2;
