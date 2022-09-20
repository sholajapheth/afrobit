import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/slices/login";
import google from "../../assets/svgs/google.svg";
import facebook from "../../assets/svgs/facebook.svg";
import apple from "../../assets/svgs/apple.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    dispatch(loginAction(data));
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className="md:w-[80%] w-[100%] h-screen rounded-bl-full rounded-br-full bg-gradient-to-r from-[#EDD78F] via-[#EDD78F] to-[#FDBF4A]
      py-[2.2rem]"
      >
        <div className="flex flex-col items-center text-[#666666] ">
          <div className="bg-[#211F20] p-6 rounded-xl flex flex-col items-center gap-4 md:w-[35%] w-[70%]">
            <div className="flex gap-6 w-full">
              <div className="flex flex-col gap-[.5px] items-center">
                <span className="text-[#FAC55B] ">Email</span>
                <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
              </div>
              <span>Phone</span>
            </div>
            <div className="text-[14px] w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Your email</label>
                  <input
                    className="bg-[#363636] h-[49px] rounded-xl"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password">Your password</label>
                  <input
                    className="bg-[#363636] h-[49px] rounded-xl"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="text-right text-[#F9C65C]">
                    <u>Forgot Password?</u>
                  </span>
                </div>

                <button
                  className="bg-gradient-to-r from-[#EDD78F] via-[#EDD78F] to-[#FDBF4A] text-black py-[10px] rounded-md font-[600] text-[16px] w-full"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-8 items-center mb-[2.5rem]">
              <div className="flex gap-2 items-center">
                <span className="border-b-[2px]  border-[#424242] w-[59px]"></span>
                or login with
                <span className="border-b-[2px]  border-[#424242] w-[59px]"></span>
              </div>

              <div className="flex gap-4">
                <img src={google} alt="google" />
                <img src={facebook} alt="facebook" />
                <img src={apple} alt="apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
