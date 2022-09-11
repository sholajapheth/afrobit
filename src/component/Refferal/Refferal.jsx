import React from "react";
import { useTable } from "react-table";
import send from "../../assets/svgs/send.svg";
import line from "../../assets/svgs/line.svg";
import document from "../../assets/svgs/document.svg";
import gift from "../../assets/svgs/gift.svg";
import purse from "../../assets/svgs/purse.svg";
import avatarStar from "../../assets/svgs/avatarStar.svg";
import smallGroup from "../../assets/svgs/smallGroup.svg";
import goldArrow from "../../assets/svgs/goldArrow.svg";
import goldMsg from "../../assets/svgs/goldMsg.svg";
import goldDolls from "../../assets/svgs/goldDolls.svg";
import lvl1star from "../../assets/svgs/lvl1star.svg";
import giftbox from "../../assets/svgs/giftbox.svg";
import copy from "../../assets/svgs/copy.svg";
import barcode from "../../assets/svgs/barcode.svg";
import exchange from "../../assets/svgs/exchange.svg";
import note from "../../assets/svgs/book.svg";

const Top = () => {
  return (
    <div className="md:pl-[4rem] md:p-0 p-[1rem]  bg-[#f9c55a] flex justify-between items-center ">
      <div>
        <div>
          <p className="text-[25px] font-[500] ">
            Invite Friends to Get <span className="font-[700]">$8</span> and{" "}
            <span className="font-[700]">30%+</span> Cash Commision
          </p>
          <p>Get special welcome offer for friends</p>
        </div>
        <div className="flex w-auto justify-between">
          <img className="w-[3rem] md:w-auto " src={send} alt="" />
          <img className="hidden md:inline " src={line} alt="" />
          <img className="w-[3rem] md:w-auto " src={document} alt="" />
          <img className="hidden md:inline " src={line} alt="" />
          <img className="w-[3rem] md:w-auto " src={gift} alt="" />
        </div>
        <div className="flex gap-8">
          <div>
            <p className="font-[600]">1. Send Invites</p>
            <p className="text-[14px]">Share with friends via my link</p>
          </div>
          <div>
            <p className="font-[600]">2. Friends’ Tasks</p>
            <p className="text-[14px]">
              Deposit $50 & hold $50 total <br />
              net asset for a total of 10 days
            </p>
          </div>
          <div>
            <p className="font-[600]">3. Claim Rewards</p>
            <p className="text-[14px]">
              Earn $8 and unlimited referral <br /> commissions
            </p>
          </div>
        </div>
      </div>
      <div className="md:inline hidden">
        <img src={purse} alt="" />
      </div>
    </div>
  );
};

const Invitation = () => {
  return (
    <div className="text-white md:px-[4rem] md:pt-[4rem] pt-[1rem] px-[1rem] md:flex-row flex-col flex w-full">
      <div className="md:w-[70%] flex flex-col gap-[2rem]">
        <p className="text-[28px] font-[600]">My Invitation</p>
        <div className=" flex flex-col gap-8 bg-[#161616] p-[2rem] w-full">
          <div className=" flex w-full">
            <img src={avatarStar} alt="" />
            <div>
              <div className="flex md:flex-row flex-col md:gap-[5rem] gap-4">
                <p>whalefin.va15xphv</p>
                <div className="md:flex-row flex-col flex md:items-center gap-2 ">
                  <img src={smallGroup} alt="" />
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] text-[#DFB154]">More</span>
                    <img src={goldArrow} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex ">
                  <p>Level 1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[2rem]">
            <div>
              <span className="text-[11px]">Total commissions (USD)</span>
              <p className="font-[500] text-[28px]">≈ 0.00</p>
            </div>
            <div>
              <span className="text-[11px]">Qualified/Total referral(s)</span>
              <p className="font-[500] text-[28px]">
                0<span className="text-[20px]">/0</span>
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="flex gap-4 items-start p-[1rem] rounded bg-[#272727]">
              <img src={goldMsg} alt="" />
              <div>
                <p className="text-[10px]">Subscription rewards (USD)</p>
                <p className="text-[18px]">
                  ≈ 0.00{" "}
                  <span className="text-[#02C8A8] text-[12px]">+0.00</span>
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-[1rem] rounded bg-[#272727]">
              <img src={goldDolls} alt="" />
              <div>
                <p className="text-[10px]">Trade rewards (USD)</p>
                <p className="text-[18px]">
                  ≈ 0.00{" "}
                  <span className="text-[#02C8A8] text-[12px]">+0.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1C1C] rounded-tr-[4rem] p-[2rem] flex flex-col gap-8">
        <div className="flex gap-2 items-center text-[20px] font-[500]">
          <img src={lvl1star} alt="" />
          <p>Level 1</p>
        </div>
        <div className="text-[12px] flex gap-4">
          <div className="bg-[#333333] h-[125px] rounded p-[1rem]">
            <p>1 eligigble refferal</p>
            <p className="text-[25px] font-[600]">$ 8</p>
          </div>
          <div className="bg-[#333333]  h-[125px] rounded p-[1rem]">
            <p>Up to 3-tier commission</p>
            <div className="flex gap-1 items-center">
              <span className="text-[#DFB154]">reward</span>
              <img src={goldArrow} alt="" />
            </div>
            <p className="text-[25px] font-[600]">$ 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Invite = () => {
  return (
    <div className=" text-white bg-[#EDD78F40] md:px-[4rem] px-[1rem] md:py-[2rem] py-[1rem] md:flex-row gap-4 flex-col flex justify-between items-center">
      <img src={giftbox} alt="" />
      <div className="flex flex-col gap-8">
        <div>
          <p>Invite code</p>
          <div className="flex gap-4 items-center">
            <p className="text-[22px] font-[500]">c5Ckbo</p>
            <img src={copy} alt="" />
          </div>
        </div>
        <div>
          <p>Invite link</p>
          <div className="flex gap-4 items-center">
            <p className="md:text-[22px] md:font-[500]">
              https://wfalpha-h5.ambergro..
            </p>
            <img src={copy} alt="" />
            <img src={barcode} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="email">Invite by Email</label>
          <div className="text-[14px] flex md:flex-row flex-col gap-2">
            <input
              className="w-[300px]"
              type="email"
              name="email"
              placeholder="Please enter friend's email"
            />
            <button className="text-black md:h-auto h-[3rem] rounded bg-[#fbc252] px-[1rem] font-[500]  ">
              Invite Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Commision = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Registered at",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Friend account",
        accessor: "col2",
      },
      {
        Header: "Friend status",
        accessor: "col3",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        col1: "07/31/2022 09:03:13",
        col2: (
          <span className="text-[#EDD78F] flex gap-1 items-center">
            <span>USDⓢ </span>
            <img className="max-w-[12px]" src={exchange} alt="" />{" "}
            <span>BTC</span>
          </span>
        ),
        col3: "500 USDⓢ",
      },
    ],
    []
  );

  const { getTableProps, headerGroups } = useTable({ columns, data });

  return (
    <div className="md:p-[4rem] p-[1rem] text-white overflow-x-scroll">
      <p className="text-[22px] font-[600] mb-[2rem]">My Commissions</p>

      <div className="flex gap-4 mb-[2rem]">
        <button className=" rounded border border-[#FAC460] px-[1rem] text-[#FAC460] py-[.3rem] ">
          Pending Verification(0)
        </button>
        <button className=" rounded border border-[#858585] px-[1rem] text-[#858585] py-[.3rem] ">
          Pending Deposit(0)
        </button>
        <button className=" rounded border border-[#858585] px-[1rem] text-[#858585] py-[.3rem] ">
          Pending(0)
        </button>
        <button className=" rounded border border-[#858585] px-[1rem] text-[#858585] py-[.3rem] ">
          Completed(0)
        </button>
      </div>
      <div>
        <table {...getTableProps()} className="w-full ">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="p-5 ">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 "
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        </table>

        <div className="w-full flex flex-col items-center mt-[7rem]">
          <div className="">
            <img src={note} alt="" />
            <p>No data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Refferal = () => {
  return (
    <div>
      <Top />
      <Invitation />
      <Invite />
      <Commision />
    </div>
  );
};

export default Refferal;
