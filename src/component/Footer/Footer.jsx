import React from "react";
import logo from "../../assets/svgs/logo.svg";
import apple2 from "../../assets/svgs/apple2.svg";

const productData = [
  { name: "Trade" },
  { name: "Earn" },
  { name: "Invest" },
  { name: "APIs" },
  { name: "Loans" },
  { name: "Execution" },
  { name: "API Documentation" },
  { name: "Affiliate" },
  { name: "Referral" },
  { name: "Ambassador" },
];
const supportData = [
  { name: "Help Center" },
  { name: "Trading Fees" },
  { name: "Contact Us" },
];
const legalData = [
  { name: "Privacy Policy" },
  { name: "Terms of Service" },
  { name: "Wallet of Agreement" },
  { name: "Execution Agreement" },
  { name: "Earn Agreement" },
  { name: "Dual CurrencyAgreement" },
  { name: "Loan Agreement" },
  { name: "Referral Agreement" },
  { name: "Cookie Settings" },
  { name: "Privacy Preferences" },
  { name: "Learn More" },
];

const Footer = () => {
  return (
    <div className="bg-black p-[2rem] text-white w-full md:flex  ">
      <div className="md:w-[50%] w-[90%]  flex flex-col  gap-8">
        <img className="w-[5rem]" src={logo} alt="logo" />
        <div className="flex flex-col gap-5">
          <span className="text-[#999999] font-[400] text-[17px]">
            Mobile App
          </span>

          <button
            className="flex gap-2 items-center px-5 py-3 rounded-md font-[700] w-[10rem]
          bg-gradient-to-r from-[#EDD78F] text-black via-[#EDD78F] to-[#FDBF4A] "
          >
            <img src={apple2} alt="apple" />
            <div className="flex flex-col items-start ">
              <p className="text-[8px] font-[700] -mb-1">Dowload from</p>
              <p>App Store</p>
            </div>
          </button>
        </div>
      </div>
      <div className=" flex justify-between md:w-[50%] w-[90%] ">
        <div className=" md:flex  md:justify-between md:w-[50%] w-[90%] ">
          <div className="flex flex-col gap-4 md:mb-0 mb-[2rem]">
            <span className="text-[#999999]">Product</span>
            <div>
              {productData.map((data, index) => (
                <p className="pb-[5px]" key={index}>
                  {data.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#999999]">Support</span>
            <div>
              {supportData.map((data, index) => (
                <p className="pb-[5px]" key={index}>
                  {data.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#999999]">Legal</span>
          <div>
            {legalData.map((data, index) => (
              <p className="pb-[5px]" key={index}>
                {data.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
