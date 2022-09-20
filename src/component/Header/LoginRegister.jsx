import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/slices/login";

const LoginRegister = () => {


  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logoutAction());
   
  };

  return (
    <div className="md:flex-row flex-col items-center flex gap-4 md:text-[15px] text-[12px]">
      {useSelector((state) => state.login.loggedIn) ? (
        <button
          onClick={Logout}
          className="rounded-[3rem] md:px-[2.5rem] md:py-[8px] px-[1rem] py-[3px] border-[#EDD78F] text-[#EDD78F] border"
        >
          Logout
        </button>
      ) : (
        <div>
          <NavLink to={"login"}>
            <button className="rounded-[3rem] md:px-[2.5rem] md:py-[8px] px-[1rem] py-[3px] border-[#EDD78F] text-[#EDD78F] border">
              Login
            </button>
          </NavLink>
          <NavLink to={"register"}>
            <button className="rounded-[3rem] md:px-[2.5rem] md:py-[8px] px-[1rem] py-[3px]  bg-gradient-to-r from-[#EDD78F] text-black via-[#EDD78F] to-[#FDBF4A]  shadow-lg shadow-[#EDD78F]/90 ">
              Register
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
