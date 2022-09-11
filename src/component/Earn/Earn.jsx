import React, { useState } from "react";
import { useTable } from "react-table";
import ethPocket from "../../assets/svgs/ethPocket.svg";
import eye from "../../assets/svgs/eye.svg";
import drop from "../../assets/svgs/drop.svg";
import greenArrow from "../../assets/svgs/greenArrow.svg";
import switcher from "../../assets/svgs/switch.svg";
import btc from "../../assets/svgs/btc.svg";
import moneyWings from "../../assets/svgs/moneyWings.svg";
import tri2 from "../../assets/svgs/tri2.svg";

const tableData = [
  {
    col1: "Fixed Earn - USDⓢ",
    col2: "5.5%",
    col3: "60Days",
  },
  {
    col1: "Fixed Earn - USDT",
    col2: "5.0%",
    col3: "20Days",
  },
  {
    col1: "Fixed Earn - ETH",
    col2: "4.2%",
    col3: "10Days",
  },
  {
    col1: "Fixed Earn - BTC",
    col2: "4.2%",
    col3: "10Days",
  },
  {
    col1: "Fixed Earn - SOL",
    col2: "4.5%",
    col3: "5Days",
  },
  {
    col1: "Fixed Earn - ADA",
    col2: "4.8%",
    col3: "10Days",
  },
];

const Top = () => {
  return (
    <div className=" md:p-[4rem] p-[1rem] bg-[#161616] flex md:flex-row flex-col gap-6 items-center md:justify-between text-white">
      <div className="md:w-[60%]">
        <p className="font-[700] md:text-[40px] text-[30px] ">
          Earn Up to 7.5% on Your Digital Assets
        </p>
        <p className="font-[400] text-[14px]">
          Flexible tenor from 1 - 365 days, Redeem Anytime
        </p>
      </div>

      <div className="flex items-end md:w-[35%]">
        <div className=" relative   -mr-[1.5rem] ">
          <img className="w-[12rem]" src={ethPocket} alt="" />
        </div>

        <div className=" relative rounded-tr-[4rem] rounded-bl-[4rem] p-[2rem] bg-white/10 backdrop-blur-lg w-full h-[12rem] text-[12px] text-[#858585]">
          <div className="mb-[1rem]">
            <div className="flex items-center gap-1">
              <span>Earn balance(USD)</span>
              <img src={eye} alt="" />
            </div>
            <span className="text-[1.3rem] text-white font-[400]">
              ≈ 0<span className="text-[1rem] ">.00</span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span>Yesterdays Returns (USD)</span>
              <img src={eye} alt="" />
            </div>
            <span className="text-[1.3rem] text-white font-[400]">
              ≈ 0<span className="text-[1rem] ">.00</span>
            </span>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-[#02c8a8] flex gap-1 items-center  ">
              <img src={greenArrow} alt="" />
              <p> My Earn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Middle = () => {
  return (
    <div className="md:px-[4rem] py-[2rem] p-[1rem] flex items-center gap-5 text-white">
      <img className="w-[150px]" src={moneyWings} alt="" />
      <div>
        <p className="font-[700] md:text-[43px] text-[30px]">Flexible Earn</p>
        <p className="text-[16px] font-[400] ">
          Instant interest accural upon deposit
        </p>
      </div>
    </div>
  );
};

const Bottom = ({ setModal }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: (
          <div className="flex gap-2 items-center">
            <span>APR</span>
            <img src={tri2} className="w-[10px]" alt="" />
          </div>
        ),
        accessor: "col2",
      },
      {
        Header: (
          <div className="flex gap-2 items-center">
            <span>Tenor</span>
            <img src={tri2} className="w-[10px]" alt="" />
          </div>
        ),
        accessor: "col3",
      },
    ],
    []
  );

  const data = React.useMemo(
    () =>
      tableData.map((item) => ({
        col1: item.col1,
        col2: <span className="text-[#EDD78F] ">{item.col2}</span>,
        col3: (
          <div className="flex items-center justify-between">
            <span>{item.col3}</span>

            <button
              onClick={() => setModal(true)}
              className="rounded-full px-6 py-2  text-[#EDD78F] border border-[#EDD78F]"
            >
              Suscribe
            </button>
          </div>
        ),
      })),
    [setModal]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="">
      <div className="flex flex-col gap-6 bg-[#161616] md:p-[4rem] p-[1rem] md:text-[14px] text-[12px] text-black md:h-screen  md:overflow-auto overflow-y-scroll ">
        <div className="flex gap-[5rem] text-[18px] ">
          <div className="flex flex-col gap-[.2px] items-center">
            <span className="text-[#FAC55B] font-[700]">Fixed Tenor</span>
            <span className="border-b-[2px]  border-[#FAC55B] w-[70px]"></span>
          </div>
          <span className="text-[#7C7C7C]">Customise</span>
        </div>

        {/* --------------- */}
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
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="md:p-4 md:px-8 p-2 px-2  text-white"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ReconfirmOrder = (props) => {
  return (
    <div className="m-auto text-white  items-center bg-[#222222] md:w-[60%] w-[90%] p-10 my-[20rem] ">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex items-center justify-between">
          <span className="font-[700] text-[32px]">Fixed Earn -BTC</span>
          <button onClick={props.closeModal} className="text-[30px]">
            ×
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="font-[700] text-[18px] flex items-center justify-between">
            <p className="text-[#7E7E7E]">Tenor</p>
            <p>60Days</p>
          </div>
          <div className="font-[700] text-[18px] flex items-center justify-between">
            <p className="text-[#7E7E7E]">Maturity</p>
            <p>10/04/2022 16:00:00</p>
          </div>
          <div className="font-[700] text-[18px] flex items-center justify-between">
            <p className="text-[#7E7E7E]">APR</p>
            <p>5.50%</p>
          </div>
          <div className="font-[700] text-[18px] flex items-start justify-between">
            <p className="text-[#7E7E7E]">Subscription amount</p>
            <div className="w-[40%]">
              <div className=" bg-[#2C2C2C] text-[#363636] flex gap-1 items-center rounded py-2 px-4">
                <img src={btc} alt="" />
                <input
                  className="bg-[#2C2C2C] w-full border-none text-[10px] font-[400] "
                  type="text"
                  placeholder="Minimum 0.000001 BTC"
                />
                <p className="text-[#FAC55B]">Max</p>
              </div>
              <p className="text-[10px] font-[400] ">
                Available Balance:{" "}
                <span className="text-[#F6CB6C]">BTC 11.46659</span>
              </p>
            </div>
          </div>
          <div className="font-[700] text-[18px] flex items-start justify-between">
            <p className="text-[#7E7E7E]">Coupon</p>
            <div className="w-[40%]">
              <div className=" bg-[#2C2C2C] text-[#363636] flex gap-1 items-center rounded py-2 px-4">
                <input
                  className="bg-[#2C2C2C] w-full border-none text-[10px] font-[400] "
                  type="text"
                  placeholder="1 coupon(S) available"
                />
                <img src={drop} alt="" />
              </div>
            </div>
          </div>

          <div className="font-[400] text-[16px] flex items-center justify-between ">
            <p className="text-[#7E7E7E]">Returns settlement currency</p>
            <div className="flex gap-4">
              <span className="rounded border-[#FAC55B] py-3 px-7 bg-[#2C2C2C]">
                BTC
              </span>
              <span className="rounded border-[#FAC55B] py-3 px-7 bg-[#2C2C2C]">
                30d
              </span>
              <span className="rounded border-[#FAC55B] py-3 px-7 bg-[#2C2C2C]">
                90d
              </span>
            </div>
          </div>

          <div className="bg-[#F1D27F33] p-6 flex items-center justify-between">
            <div>
              <p className="font-[600] text-[22px]">Auto Renewal</p>
              <p>Automatically save your preferences to earn more</p>
            </div>
            <img src={switcher} alt="" />
          </div>
          <div className="font-[700] text-[18px] flex items-center justify-between">
            <p className="text-[#7E7E7E]">Expected returns</p>
            <p>0BTC</p>
          </div>
          <div className="flex item-center gap-1">
            <input
              className="bg-red-100 text-black focus:black border-[#EDD78F]  mt-1"
              type="checkbox"
            />
            <span>
              I have read, understood, and hereby agree to be bound by the
              <span className="text-[#FAC55B] font-[700]">
                AfroBit Earn Product Agreement
              </span>
              .
            </span>
          </div>
        </div>

        {/* ------------------ */}
        <div className="flex flex-col items-end">
          <div className=" md:flex-row flex-col items-center font-[600] flex gap-4 md:text-[15px] text-[12px]">
            <button
              onClick={props.closeModal}
              className="rounded-[3rem] md:px-[2.5rem] md:py-[12px] px-[1rem] py-[5px] border-[#EDD78F] text-[#EDD78F] border"
            >
              Cancel
            </button>

            <button
              onClick={props.closeModal}
              className="rounded-[3rem] md:px-[2.5rem] md:py-[12px] px-[1rem] py-[5px]  bg-gradient-to-r from-[#EDD78F] text-black via-[#EDD78F] to-[#FDBF4A]  shadow-lg shadow-[#EDD78F]/90 "
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Earn = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <div>
      {modal && (
        <div className="z-[999] absolute w-full top-0 bottom-0 backdrop-filter backdrop-blur-[3px] ">
          <ReconfirmOrder closeModal={closeModal} openModal={openModal} />
        </div>
      )}
      <Top />
      <Middle />
      <Bottom setModal={setModal} />
    </div>
  );
};

export default Earn;
