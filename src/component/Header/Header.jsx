import React, { useState } from "react";
import logo from "../../assets/svgs/logo.svg";
import LoginRegister from "./LoginRegister";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Nav from "./Nav";
import Nav2 from "./Nav2";

const Header = () => {
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <div className="bg-[#211F20] px-[4rem] py-[1rem] flex items-center  text-white sticky top-0 w-full justify-between h-[6rem] z-[9999] ">
      {/* ----------logo-------------- */}
      <div>
        <img className="min-w-[3rem] " src={logo} alt="logo" />
      </div>
      {/* ----------Navigation-------------- */}
      <div className=" md:inline hidden ">
        <Nav />
      </div>
      {open && (
        <div className=" md:hidden absolute z-[9999] bg-[#211F20] w-full left-0 top-[85px] ">
          <Nav2  close={close} />
        </div>
      )}
      {/* ----------Navigation-------------- */}
      <div className="md:inline hidden">
        <LoginRegister />
      </div>
      {/* ----------Login Signup-------------- */}

      <div className="text-[1.5rem] md:hidden inline">
        {!open ? (
          <button onClick={show}>
            <GiHamburgerMenu />
          </button>
        ) : (
          <button onClick={close}>
            <AiOutlineClose />
          </button>
        )}
      </div>
      {/* <div className="flex items-center justify-between w-full">
      </div> */}
    </div>
  );
};

export default Header;
