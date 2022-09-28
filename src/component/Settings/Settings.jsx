import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../../assets/svgs/profile.svg";
import write from "../../assets/svgs/write.svg";
import badge from "../../assets/svgs/badge.svg";
import yellowCard from "../../assets/svgs/yellowCard.svg";
import sheild from "../../assets/svgs/sheild.svg";
import sheild2 from "../../assets/svgs/sheild2.svg";
import details from "../../assets/svgs/details.svg";
import details2 from "../../assets/svgs/details2.svg";
import settings from "../../assets/svgs/settings.svg";
import settings2 from "../../assets/svgs/settings2.svg";
import reffer from "../../assets/svgs/reffer.svg";
import coupon from "../../assets/svgs/coupon2.svg";
import coupon2 from "../../assets/svgs/coupon.svg";
import bars from "../../assets/svgs/bars.svg";
import lock from "../../assets/svgs/lock.svg";
import email from "../../assets/svgs/email.svg";
import phone from "../../assets/svgs/phone.svg";
import password from "../../assets/svgs/password.svg";
import goldgoogle from "../../assets/svgs/goldgoogle.svg";
import goldSheild from "../../assets/svgs/goldSheild.svg";
import note from "../../assets/svgs/note.svg";
import identityVerification from "../../assets/svgs/identityVerification.svg";
import verifyAddress from "../../assets/svgs/verifyAddress.svg";
import usddrop from "../../assets/svgs/usddrop.svg";
import timeZone from "../../assets/svgs/timeZone.svg";
import leverage from "../../assets/svgs/leverage.svg";
import usd from "../../assets/svgs/usd.svg";
import switcher from "../../assets/svgs/switcher.svg";
import drop from "../../assets/svgs/drop.svg";
import nextGold from "../../assets/svgs/nextGold.svg";

// this is the topmost component in the settings page

const Top = () => {
  return (
    <div className="bg-[#161616] md:px-[7rem] md:pt-[4rem] p-[1rem] text-white md:flex-row flex-col flex justify-between overflow-hidden">
      <div className="flex gap-5 ">
        <div className="bg-[#DFB154] h-[5rem] w-[5rem] rounded">
          <img src={profile} alt="" />
        </div>
        <div>
          <div className="flex items-center gap-2 px-">
            <p className="font-[600] text-[32px] ">whalefin.va15xphv</p>
            <img className="w-[18px]" src={write} alt="" />
          </div>
          <div className="flex items-center gap-6">
            <img src={badge} alt="" />
            <p>Individual verification</p>
          </div>
        </div>
      </div>
      <div className="md:w-[40%] relative -bottom-[2rem] bg-gradient-to-r from-[#32312D] to-[#504E4A] flex flex-col gap-4 items-center rounded-md p-10 pb-12">
        <img className="w-[5rem]" src={yellowCard} alt="" />
        <p className="font-[700]">AFROBIT CLUB</p>
        Join now to enjoy exclusive benefits
      </div>
    </div>
  );
};

// -----------////////////////////---------------
//  this is a button component to render each button in the settgins page navigation
// -----------////////////////////---------------
const SettingsNavButton = ({
  image_1,
  image_2,
  name,
  setSettingState,
  settingState,
  setComponent,
  component,
}) => {
  const [active, setActive] = useState();

  useEffect(() => {
    if (settingState === name) {
      setActive(true);
      setActive(true);
    } else setActive(false);
    return () => {
      if (settingState === name) {
        setActive(true);
        setActive(true);
      } else setActive(false);
    };
  }, [settingState, name]);

  const handleClick = () => {
    setSettingState(name);
    setComponent(component);
  };
  return (
    <button
      onClick={handleClick}
      className={`${active && "text-white"} flex items-center gap-3 `}
    >
      <img className="w-[2rem]" src={active ? image_2 : image_1} alt={name} />
      <p className="md:inline hidden text-left">{name}</p>
    </button>
  );
};

// this is the settings navigation component

const SettingsNav = ({ settingState, setSettingState, setComponent }) => {
  const navigate = useNavigate();
  return (
    <div className="flex md:px-[3rem] px-[1rem] py-[4rem]   ">
      <div className="text-[#A7A7A7] font-[500] flex flex-col gap-[2rem] ">
        <SettingsNavButton
          setSettingState={setSettingState}
          setComponent={setComponent}
          settingState={settingState}
          component={<AccountSettings />}
          name="Account Settings"
          image_1={sheild2}
          image_2={sheild}
        />
        <SettingsNavButton
          name="Identity Verification"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<IdentityVerification />}
          image_1={details}
          image_2={details2}
        />
        <SettingsNavButton
          name="Global Settings"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<GlobalSettings />}
          image_1={settings}
          image_2={settings2}
        />

        {/* <SettingsNavButton
          name="Refferal"
          // settingState={settingState}
          // setComponent={setComponent}
          // setSettingState={setSettingState}
          // component={<Refferal />}
          image_1={reffer}
          image_2={reffer}
        /> */}
        <NavLink to={"refferal"}>
          <button
            onclick={() => {
              navigate("/refferal");
            }}
            className={`flex items-center gap-3`}
          >
            <img className="w-[2rem]" src={reffer} alt="Refferal" />
            <p className="md:inline hidden">Refferal</p>
          </button>
        </NavLink>

        <SettingsNavButton
          name="Coupon"
          settingState={settingState}
          setComponent={setComponent}
          setSettingState={setSettingState}
          component={<Coupon />}
          image_1={coupon2}
          image_2={coupon}
        />
      </div>
    </div>
  );
};

// this is the account settings component

const AccountSettings = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex md:gap-6 gap-4">
          <img className="md:w-[2rem] w-[1.3rem]" src={lock} alt="" />
          <div>
            <p className="md:text-[22px] text-[18px] ">Security Settings</p>
            <p className="md:text-[16px] text-[14px]">
              Security Level: <span className="text-[#FF618A]   ">Low</span>
            </p>
          </div>
        </div>
        <img className="md:inline hidden" src={bars} alt="" />
      </div>

      <div className="md:flex-row flex-col flex md:items-center justify-between w-full">
        <div className="flex md:gap-6 gap-4">
          <img className="md:w-[2rem] w-[1.3rem]" src={email} alt="" />
          <div>
            <p className="md:text-[22px] text-[18px] ">Email</p>
            <p className="md:text-[16px] text-[14px]">
              Use your email address to log in or retrieve password.
            </p>
          </div>
        </div>
        <p>ja**ng@outlook.com</p>
      </div>

      <div className="md:flex-row flex-col gap-4 flex md:items-center justify-between w-full">
        <div className="flex md:gap-6 gap-4">
          <img className="md:w-[2rem] w-[1.3rem]" src={phone} alt="" />
          <div>
            <p className="md:text-[22px] text-[18px]">Phone</p>
            <p className="md:text-[16px] text-[14px]">
              Use your mobile phone number to log in or retrieve your password.
            </p>
          </div>
        </div>
        <button className="rounded-md w-[9rem] py-2  text-[#EDD78F] border border-[#EDD78F]">
          Bind
        </button>
      </div>

      <div className="md:flex-row flex-col flex gap-4 md:items-center justify-between w-full">
        <div className="flex md:gap-6 gap-4">
          <img className="md:w-[2rem] w-[1.3rem]" src={password} alt="" />
          <div>
            <p className="md:text-[22px] text-[18px] ">Password</p>
            <p className="md:text-[16px] text-[14px]">
              Please safeguard your password.
            </p>
          </div>
        </div>
        <button className="rounded-md w-[9rem] py-2  text-[#EDD78F] border border-[#EDD78F]">
          Reset
        </button>
      </div>

      <div className="md:flex-row flex-col flex gap-4 md:items-center justify-between w-full">
        <div className="flex md:gap-6 gap-4">
          <img className="md:w-[2rem] w-[1.3rem]" src={goldgoogle} alt="" />
          <div>
            <p className="md:text-[22px] text-[18px]">Google Authenticator</p>
            <p className="md:text-[16px] text-[14px]">
              Google Authenticator will be used for login, transfers and
              modification of security settings.
            </p>
          </div>
        </div>
        <button className="rounded-md w-[9rem] py-2  text-[#EDD78F] border border-[#EDD78F]">
          Enable
        </button>
      </div>
    </div>
  );
};

const IdentityVerification = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <div>
          <img src={goldSheild} alt="" />
        </div>
        <div className="text-[20px] text-center">
          <p className="text-[#EDD78F] font-[600]">Verification successful!</p>
          <p className="text-[#707070] font-[400]">
            Your identity information has been verified
          </p>
        </div>
        <div className="md:w-[30rem] w-[15rem] rounded-md bg-[#F1D27F33] flex flex-col items-center py-[2rem]">
          <div>
            <div className=" flex flex-col gap-5  p-5 w-full">
              <div className="flex gap-5 items-center">
                <img src={note} alt="" />
                <p className="text-[#FAC55B]">Identity information</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src={identityVerification} alt="" />
                <p className="text-[#FAC55B]">Verify identity</p>
              </div>
              <div className="flex gap-5 items-center">
                <img src={verifyAddress} alt="" />
                <p className="text-[#FAC55B]">Verify Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TradeSetting = (props) => {
  return (
    <div className="md:flex gap-3 md:items-center justify-between my-[1rem] ">
      <div>
        <p className="text-[18px] font-[600]">{props.head}</p>
        <p className="text-[14px] ">{props.tagline}</p>
      </div>
      <img className="" src={props.image} alt="" />
    </div>
  );
};
const GlobalSettings = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[18px] font-[600]">Default Currency</p>
          <p className="text-[14px] ">
            When enabled, your asset valuation and returns will be displayed in
            the default currency.
          </p>
        </div>
        <img src={usddrop} alt="" />
      </div>
      <div className="mt-[1.5rem]">
        <p className="text-[30px] font-[500]">Trade Settings</p>

        <TradeSetting
          head="Settlement Time Zone"
          tagline="Set up settlement time zone of Position and Funding fee."
          image={timeZone}
        />
        <TradeSetting head="Trading Leverage" image={leverage} />
        <TradeSetting
          head="Default Currency "
          tagline="Your assets, total margin, and line of credit will be displayed in the default currency."
          image={usd}
        />
        <TradeSetting
          head="Auto Convert "
          tagline={
            <span>
              When enabled, unrealized P&L in your position will be displayed in
              default currency, and realized <br />
              P&L will be converted into the default currency for settlement.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Double-click Order "
          tagline={
            <span>
              When enabled, a double click on the buy or sell price will
              immediately place a Market Order with the <br />
              default order amount.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Collateralize Earn Assets"
          tagline={
            <span>
              When enabled, Fixed Earn assets are used as collateral for Margin
              trading. When enabled, "Settle <br />
              Earn assets" will also be enabled.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Settle Earn Assets"
          tagline={
            <span>
              When enabled, if the Available Balance in your Wallet is
              insufficient for liquidation, your Fixed Earn <br />
              assets will be liquidated.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Negative Balance Protection"
          tagline={
            <span>
              When enabled, if there are negative balances in your assets due to
              settlements, the assets with
              <br /> positive balances will cover the negative balance according
              to the settlement rules.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Auto Settle"
          tagline={
            <span>
              When enabled, all your open positions will be automatically
              settled before the settlement time <br />
              (04:00).
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Email Notifications"
          tagline={
            <span>
              Turn off to stop receiving Spot/Margin trading email notifications
              (risk notices and funding fee <br /> settlements will not be
              affected).
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Reconfirm Order"
          tagline={
            <span>
              When enabled, you will be asked to reconfirm when you place a
              Spot/Margin order.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Portfolio Stop-loss"
          tagline={
            <span>
              Set the maximum unrealized loss allowed for all positions. When
              unrealized loss reaches the stop-
              <br />
              loss level, all positions will be closed and settled in the
              default currency.
            </span>
          }
          image={switcher}
        />
        <TradeSetting
          head="Portfolio Take-profit"
          tagline={
            <span>
              Set the maximum unrealized profit allowed for all positions. When
              profits reach the take-profit level, all positions will be closed
              and settled in the default currency.
            </span>
          }
          image={switcher}
        />
      </div>

      <div className="mt-[1.5rem]">
        <p className="text-[30px] font-[500]">Loan Settings</p>

        <TradeSetting
          head="Auto Margin Top-up"
          tagline={
            <span>
              When LTV ≥ Margin LTV, your Available Balance in the Wallet will
              be used for collateral top-up to <br />
              avoid liquidation. You can choose from different top-up plans.
            </span>
          }
          image={timeZone}
        />

        <TradeSetting
          head="Auto Redeem Excess Collateral"
          tagline={
            <span>
              When LTV Excess collateral redeemable level and available
              redemption amount is above 1,000 <br />
              USD, your collateral will be redeemed automatically.
            </span>
          }
          image={switcher}
        />
      </div>
    </div>
  );
};

const Coupon = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="md:flex-row flex-col flex items-center gap-3 ">
          <div className=" flex gap-2 items-center bg-[#363636] rounded  px-2">
            <input
              className="bg-[#363636] border-none "
              type="text"
              placeholder="Type"
            />
            <img src={drop} alt="" />
          </div>
          <div className=" flex gap-2 items-center bg-[#363636] rounded  px-2">
            <input
              className="bg-[#363636] border-none "
              type="text"
              placeholder="Effective"
            />
            <img src={drop} alt="" />
          </div>
          <div className=" flex gap-2 items-center bg-[#363636] rounded px-2 ">
            <input
              className="bg-[#363636] border-none "
              type="text"
              placeholder="Order By"
            />
            <img src={drop} alt="" />
          </div>
        </div>
        <span>
          Enjoy exclusive WhaleFin Earn rewards;
          <span className="text-[#EDD78F] font-[500]">
            {" "}
            Learn how to redeem
          </span>
        </span>
        <div className="md:flex-row flex-col flex gap-4 w-full ">
          <div className="bg-[#2F2F2F] rounded-md md:gap-4 gap-0 md:flex-row flex-col flex  ">
            <div className="rounded-md bg-[#f3cd71] flex   ">
              <div className="text-[20px] w-[180px] md:h-auto  font-[500] text-center w-full text-black">
                <span className="">
                  100 <br />
                  USDⓢ
                </span>
              </div>
            </div>
            <div className=" flex gap-[2rem] items-center ">
              <div className="ml-[10px]">
                <p className="text-[18px]">VIP Cash Coupon</p>
                <p className="text-[12px]">Valid until 08/15/2022</p>
              </div>
              <div className="flex flex-col gap-[4rem] items-end w-full p-3">
                <button className="text-[#02C8A8] bg-[#02C8A81A] w-[72px] h-[27px] rounded ">
                  Use
                </button>
                <div className="flex items-center gap-1">
                  <span>Coupon Rules </span>
                  <img src={nextGold} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2F2F2F] rounded-md  md:flex-row flex-col flex gap-4 w-full  ">
            <div className="rounded-md bg-[#b8b8b8] flex  items-center  ">
              <span className="text-[20px] font-[500] w-[180px] text-center w-full text-black">
                200%
              </span>
            </div>
            <div className=" flex gap-[2rem] items-center ">
              <div className="ml-[10px]">
                <p className="text-[18px]">VIP Exclusive Coupon</p>
                <p className="text-[12px]">Valid until 08/15/2022</p>
              </div>
              <div className="flex flex-col gap-[4rem] items-end w-full p-3">
                <button className="text-[#02C8A8] bg-[#02C8A81A] w-[72px] h-[27px] rounded ">
                  Use
                </button>
                <div className="flex items-center gap-1">
                  <span>Coupon Rules </span>
                  <img src={nextGold} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsDisplayarea = (props) => {
  return (
    <div className="md:px-[3rem] px-[1rem] md:py-[4rem] py-[1rem] w-[75%] border-l">
      <div className="text-white flex flex-col gap-5">
        <p className="font-[400] md:text-[32px] text-[20px] font-[400]">
          {props.settingState}{" "}
        </p>
        {props.component}
      </div>
    </div>
  );
};

const Middle = () => {
  const [settingState, setSettingState] = useState("Account Settings");
  const [component, setComponent] = useState(<AccountSettings />);

  return (
    <div className="bg-[#211F20] flex items-start">
      <SettingsNav
        settingState={settingState}
        setSettingState={setSettingState}
        setComponent={setComponent}
      />
      <SettingsDisplayarea
        component={component}
        settingState={settingState}
        setSettingState={setSettingState}
      />
    </div>
  );
};
const Settings = () => {
  return (
    <div>
      <Top />
      <Middle />
    </div>
  );
};

export default Settings;
