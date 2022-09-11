import React from "react";
import eyes from "../../assets/svgs/eyes.svg";

const Register = () => {
  return (
    <div className="flex flex-col items-center  ">
      <div
        className="md:w-[80%] w-[100%] rounded-bl-full rounded-br-full bg-gradient-to-r from-[#EDD78F] via-[#EDD78F] to-[#FDBF4A]
      py-[2.2rem]"
      >
        <div className="flex flex-col items-center text-[#666666] ">
          <div className="bg-[#211F20] p-6 rounded flex flex-col items-center gap-4 md:w-[70%] lg:w-[40%] w-[90%]">
            <div className="flex gap-6 w-full">
              <div className="flex flex-col gap-[.5px] items-center">
                <span className="text-[#FAC55B] ">Email</span>
                <span className="border-b-[2px]  border-[#FAC55B] w-[25px]"></span>
              </div>
              <span>Phone</span>
            </div>
            <div className="text-[14px] w-full">
              <form className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Your email</label>
                  <input
                    className="bg-[#363636] h-[49px] rounded"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="code">Verification code</label>
                  <div className="flex gap-1 ">
                    <input
                      className="bg-[#363636] h-[49px] rounded w-[82%]"
                      type="text"
                      name="code"
                    />
                    <button className="h-[49px] bg-[#363636] w-[18%] rounded">
                      Send
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="password">Your password</label>
                  <div className="flex justify-between items-center w-full bg-[#363636] h-[49px]  rounded w-full">
                    <input
                      className="h-[49px] bg-[#363636] w-full border-none"
                      type="password"
                      name="password"
                    />
                    <i className="relative mr-3">
                      <img src={eyes} alt="eyes" />
                    </i>
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="password">Confirm password</label>
                  <div className="flex justify-between items-center w-full bg-[#363636] h-[49px]  rounded w-full">
                    <input
                      className="h-[49px] bg-[#363636] w-full border-none"
                      type="password"
                      name="password"
                    />
                    <i className="relative mr-3 ">
                      <img src={eyes} alt="eyes" />
                    </i>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="referrer">Referrer ID (optional) </label>
                  <input
                    className="bg-[#363636] h-[49px] rounded"
                    type="text"
                    name="referrer"
                  />
                </div>

                <button
                  className="bg-gradient-to-r from-[#EDD78F] via-[#EDD78F] to-[#FDBF4A] text-black py-[10px] rounded-md font-[600] text-[16px] w-full"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-3 text-[12px]">
              <div className="flex gap-2">
                <input
                  className="bg-red-100 text-black focus:black border-[#EDD78F] mt-1"
                  type="checkbox"
                />
                <p>
                  I have read, understood, and agree to be bound by the
                  <span className="text-[#EDD78F]">
                    <u>Terms of Service</u>
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  className="bg-red-100 text-black focus:black border-[#EDD78F] mt-1"
                  type="checkbox"
                />
                <p>
                  I acknowledge that I have read and understood the{" "}
                  <span className="text-[#EDD78F]">
                    <u>Privacy Policy</u>
                  </span>
                  , and I agree to the processing of my personal data for the
                  purpose of "To Register you as a new customer" accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
