import React, { useState } from "react";
import { useTable } from "react-table";
import check from "../../../assets/svgs/check.svg";
import coinswap from "../../../assets/svgs/coinswap.svg";
import exchange from "../../../assets/svgs/exchange.svg";
import greenDolls from "../../../assets/svgs/greenDolls.svg";
import btc from "../../../assets/svgs/btc.svg";
import drop from "../../../assets/svgs/drop.svg";

const Check = (props) => (
  <div className="flex gap-2">
    <img className="max-w-[1rem]" src={check} alt="" />
    <span>{props.text}</span>
  </div>
);

const Banner = () => (
  <div className="md:px-[3rem] px-[1rem] bg-[#161616] flex items-center justify-between w-full md:p-0 py-[2rem]">
    <div className="flex flex-col gap-4 ">
      <span className="font-[700] lg:text-[43px] md:text-[35px] text-[25px]">
        Swap From As Low As $5
      </span>
      <div className="md:flex-row flex flex-col md:gap-4 gap-2">
        <Check text="Low Slipage" />
        <Check text="No service fee" />
        <Check text="One-click Swap between any two coins" />
      </div>
    </div>
    <img className="md:inline hidden" src={coinswap} alt="" />
  </div>
);

const Payment = (props) => (
  <div className="flex flex-col  items-center bg-[#211F20] py-[5rem] text-[18px] ">
    <div className="lg:w-[45%] md:w-[70%] w-[90%] flex flex-col gap-6 ">
      <div className="flex flex-col gap-2 ">
        <div className="bg-[#2C2C2C] p-6 w-full rounded">
          <div className="flex flex-col gap-6 ">
            <span>Send</span>
            <div className="flex justify-between">
              <div className="flex gap-5 pr-5 border-r border-[#3C3C3C]">
                <img src={greenDolls} alt="greenDolls" />
                <span>USDⓢ</span>
                <img src={drop} alt="drop" />
              </div>
              <span className="text-[#FAC55A]">All</span>
            </div>
          </div>
        </div>
        <div className="text-[14px]">
          <span>Available</span> <span className="text-[#FAC55A]">0USDⓢ</span>
        </div>
      </div>
      <hr className="border-[#3C3C3C]" />
      <div className="bg-[#2C2C2C] p-6 w-full rounded">
        <div className="flex flex-col gap-6 ">
          <span>Get</span>
          <div className="flex justify-between">
            <div className="flex gap-5 pr-5 border-r border-[#3C3C3C]">
              <img src={btc} alt="greenDolls" />
              <span>USDⓢ</span>
              <img src={drop} alt="drop" />
            </div>
            <span className="text-[#FAC55A]">All</span>
          </div>
        </div>
      </div>
      <button
        onClick={props.openModal}
        className="bg-gradient-to-r from-[#EDD78F] text-black via-[#EDD78F] to-[#FDBF4A] rounded py-3 text-black"
      >
        Continue
      </button>
      <div className="text-[12px] text-center">
        <span>1USDⓢ =0.0000438BTC 1BTC=22,813.14USDⓢ</span>{" "}
        <span className="text-[#FDC04C]">3s</span>
      </div>
    </div>
  </div>
);

const SwapHistory = () => {
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
        col4: "0.021009 BTC",
        col5: "1 USDⓢ = 0.00004201 BTC	",
        col6: (
          <span className="p-3 rounded-full bg-[#02c8a81a] text-[#02C8A8] ">
            Completed
          </span>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Time",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Pair",
        accessor: "col2",
      },
      {
        Header: "Send",
        accessor: "col3",
      },
      {
        Header: "Get",
        accessor: "col4",
      },
      {
        Header: "Rate",
        accessor: "col5",
      },
      {
        Header: "Status",
        accessor: "col6",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="flex flex-col bg-[#161616] md:p-[5rem] p-[1rem] md:text-[18px] text-[14px] text-black md:h-screen  md:overflow-auto overflow-y-scroll ">
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
                      className="md:p-5 md:px-8 p-2 px-2  text-white"
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
  );
};

const ReconfirmOrder = (props) => {
  
  return (
    <div className="m-auto items-center bg-[#222222] md:w-[60%] w-[90%] p-10 my-[20rem] ">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex items-center justify-between">
          <span className="font-[700] text-[32px]">Reconfirm Order</span>
          <button className="text-[30px]">×</button>
        </div>
        <div className="p-10 bg-[#2F2F2F] text-[20px]">
          <span className="text-[#848484]">
            if the order price is worse than the quote and the difference is
            more than{" "}
            <span className="text-white">
              <b> 0.5%</b>
            </span>
            , the order will be automatically canceled.
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#7e7e7e] font-[700]">Quote</span>
          <div className="flex flex-col gap-1">
            <span>1 USDⓢ ≈ 0.00004359 BTC</span>
            <span className="text-[#707070]">1 BTC ≈ 22,936.59 USDⓢ</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[#7e7e7e] font-[700]">Send</span>
          <span>
            <b>50 USDⓢ</b>
          </span>
        </div>
        <hr className="border-[#3D3D3D]" />
        <div className="flex justify-between">
          <span className="text-[#7e7e7e] font-[700]">Get</span>
          <span>
            <b>50 USDⓢ</b>
          </span>
        </div>

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

const Swap = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <div className="text-white">
      {modal && (
        <div className="absolute w-full  top-0 left-0 b backdrop-filter backdrop-blur-[3px] ">
          <ReconfirmOrder closeModal={closeModal} openModal={openModal} />
        </div>
      )}
      <Banner />
      <Payment closeModal={closeModal} openModal={openModal} />
      <SwapHistory />
    </div>
  );
};

export default Swap;
