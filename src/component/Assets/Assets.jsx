import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import wallet from "../../assets/svgs/wallet.svg";
import wallet2 from "../../assets/svgs/wallet2.svg";
import goldArrow from "../../assets/svgs/goldArrow.svg";
import drop from "../../assets/svgs/drop.svg";
import exchange from "../../assets/svgs/exchange.svg";
import note from "../../assets/svgs/book.svg";
import addressbook from "../../assets/svgs/addressbook.svg";
import btc from "../../assets/svgs/btc.svg";
import barcode from "../../assets/svgs/barcode.svg";
import copy from "../../assets/svgs/copy.svg";
import to from "../../assets/svgs/to.svg";

const AssetsNavButton = ({
  name,
  setAssetState,
  assetState,
  setComponent,
  component,
}) => {
  const [active, setActive] = useState();

  useEffect(() => {
    if (assetState === name) {
      setActive(true);
      setActive(true);
    } else setActive(false);
    return () => {
      if (assetState === name) {
        setActive(true);
        setActive(true);
      } else setActive(false);
    };
  }, [assetState, name]);

  const handleClick = () => {
    setAssetState(name);
    setComponent(component);
  };
  return (
    <button
      onClick={handleClick}
      className={`${active && "text-white"} flex items-center gap-3`}
    >
      <img
        className="min-w-[2em] w-[2em] "
        src={active ? wallet : wallet2}
        alt={name}
      />
      <p className="md-inline hidden ">{name}</p>
    </button>
  );
};

const Commision = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Currency",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Label",
        accessor: "col2",
      },
      {
        Header: "Adress",
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
    <div className=" text-white">
      <div className="flex justify-between">
        <div className="flex gap-[2rem] text-[18px] ">
          <div className="flex flex-col gap-[.2px] items-center">
            <span className="text-[#FAC55B] font-[700]">Address Book</span>
            <span className="border-b-[4px]  border-[#FAC55B] w-[70px]"></span>
          </div>
          <span className="text-[#7C7C7C]">Bank Account</span>
        </div>

        <div className="flex gap-1">
          <div>
            <img src={addressbook} alt="" />
          </div>
          <p className="break-normal">Add Address book</p>
        </div>
      </div>

      <div className="mt-[2rem]">
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

// ----------------------------------------
const Commision2 = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Currency",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Total Balance",
        accessor: "col2",
      },
      {
        Header: "Avbl",
        accessor: "col3",
      },
      {
        Header: "Flexible rate",
        accessor: "col4",
      },
      {
        Header: "Action",
        accessor: "col5",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        col1: (
          <div className="flex gap-1">
            <img src={btc} alt="" />
            <span>BTC</span>
          </div>
        ),
        col2: "11.46600236 ≈ 2,095,172.54",
        col3: "1,006.12784383",
        col4: "1.37%",
        col5: (
          <div className="flex gap-6 text-[#EDD78F]">
            <button className="px-[1.5rem] border rounded border-[#EDD78F] py-[.2rem]">
              Depost
            </button>
            <button className="px-[1.5rem] border rounded border-[#EDD78F] py-[.2rem]">
              Withraw
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, prepareRow, rows, headerGroups } =
    useTable({ columns, data });

  return (
    <div className=" text-white mb-[4rem]">
      <div className="mt-[2rem]">
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

// ------------------------------------------------------
const Commision3 = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Creation Time",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Currency",
        accessor: "col2",
      },
      {
        Header: "Amount",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
      },
      {
        Header: "Details",
        accessor: "col5",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        col1: (
          <div className="flex gap-1">
            <img src={btc} alt="" />
            <span>BTC</span>
          </div>
        ),
        col2: "11.46600236 ≈ 2,095,172.54",
        col3: "1,006.12784383",
        col4: "1.37%",
        col5: (
          <div className="flex gap-6 text-[#EDD78F]">
            <button className="px-[1.5rem] border rounded border-[#EDD78F] py-[.2rem]">
              Depost
            </button>
            <button className="px-[1.5rem] border rounded border-[#EDD78F] py-[.2rem]">
              Withraw
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, headerGroups } = useTable({ columns, data });

  return (
    <div className=" text-white my-[4rem] text-[12px]">
      <p className="font-[700] mb-[.5rem]">Deposit History</p>
      <hr />
      <div className="flex gap-4  text-[#707070] mt-[1rem]">
        <button className="px-[1.5rem] border border-[#707070] py-[.3rem] rounded">
          Crypto deposit
        </button>
        <button className="px-[1.5rem] border border-[#707070] py-[.3rem] rounded">
          Bank Transfer
        </button>
        <button className="px-[1.5rem] border border-[#707070] py-[.3rem] rounded">
          Crypto Transfer
        </button>

        <button className="bg-[#363636] flex items-center gap-3 px-[.3rem] border border-[#707070] py-[.3rem] rounded">
          <span>Select Date</span>
          <img src={to} alt="" />
          <span>End Date</span>
        </button>

        <select
          name=""
          id=""
          className=" bg-[#363636] border border-[#707070]  rounded"
        >
          <option value="">All</option>
        </select>
      </div>
      <div className="mt-[2rem]">
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
          {/* <tbody {...getTableBodyProps()}>
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
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

// -----------------------------------------------

const Commision4 = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Creation Time",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Currency",
        accessor: "col2",
      },
      {
        Header: "Amount",
        accessor: "col3",
      },
      {
        Header: "Status",
        accessor: "col4",
      },
      {
        Header: "Details",
        accessor: "col5",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        col1: (
          <div className="flex gap-1">
            <img src={btc} alt="" />
            <span>BTC</span>
          </div>
        ),
        col2: "11.46600236 ≈ 2,095,172.54",
        col3: "1,006.12784383",
        col4: "1.37%",
        col5: (
          <div className="flex gap-6 text-[#EDD78F]">
            <button className="px-[1.5rem] border rounded border-[#EDD78F] py-[.2rem]">
              Depost
            </button>
            <button className="px-[1.5rem] border rounded border-[#EDD78F] py-[.2rem]">
              Withraw
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, headerGroups } = useTable({ columns, data });

  return (
    <div className=" text-white my-[4rem]">
      <p className="font-[700] mb-[.5rem]">Transfer History</p>
      <hr />
      <div className="flex gap-4  text-[#707070] mt-[1rem]">
        <button className="px-[1.5rem] border border-[#707070] py-[.3rem] rounded">
          WhaleFin Internal Transfer
        </button>
        <button className="px-[1.5rem] border border-[#707070] py-[.3rem] rounded">
          Address Transfer
        </button>
        <button className="px-[1.5rem] border border-[#707070] py-[.3rem] rounded">
          Bank Transfer
        </button>

        <button className="bg-[#363636] flex items-center gap-3 px-[.3rem] border border-[#707070] py-[.3rem] rounded">
          <span>Select Date</span>
          <img src={to} alt="" />
          <span>End Date</span>
        </button>
        <button className=" bg-[#363636] flex items-center gap-8 px-[.3rem] border border-[#707070] py-[.3rem] rounded">
          <span>Select Currency</span>
          <img src={drop} alt="" />
        </button>
      </div>
      <div className="mt-[2rem]">
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
      </div>
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="flex flex-col gap-[2rem]  ">
      <div className="flex gap-[8rem]">
        <div>
          <p className="text-[#858585] text-[12px]">Net assets (USD)</p>
          <p className="font-[500] text-[20px] md:text-[28px]">
            ≈ 2,095,172.54
          </p>
        </div>
        <div>
          <p className="text-[#858585] text-[12px]">Available (USD)</p>
          <p className="font-[500] text-[20px] md:text-[28px]">
            ≈ 2,095,172.54
          </p>
        </div>
      </div>
      <div className="flex gap-[2rem] text-[14px] ">
        <div className="flex flex-col gap-[.2px] items-center">
          <span className="text-[#FAC55B] font-[700]">Balance Details</span>
          <span className="border-b-[4px]  border-[#FAC55B] w-[70px]"></span>
        </div>
        <span className="text-[#7C7C7C]">Leveraged Positions</span>
        <span className="text-[#7C7C7C]">Fixed Earns</span>
        <span className="text-[#7C7C7C]">Locked-in Execution</span>
        <span className="text-[#7C7C7C]">Dual Currency Position</span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex md:flex-row flex-col md:justify-between md:items-end">
          <div>
            <p className="text-[#858585] text-[12px]">Available (USD)</p>
            <p className="font-[500] text-[20px] md:text-[28px]">
              ≈ 2,095,172.54
            </p>
          </div>
          <div className="flex gap-[1rem]">
            <button className="rounded border border-[#EDD78F] text-[#EDD78F] py-[.5rem]  px-[.5rem]">
              Balance Details
            </button>
            <button className="rounded text-black bg-[#EDD78F] font-[500]  py-[.5rem] px-[.5rem]">
              Balance Details
            </button>
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="rounded bg-[#2C2C2C] flex -tems-center px-[10px]">
            <select className="rounded bg-[#2C2C2C] " name="" id="">
              <option value="">All</option>
              <option value="">BTC</option>
            </select>
          </div>
          <div className="flex gap-1 items-center">
            <p>Hide Balance</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
      <Commision2 />
      <Commision />
    </div>
  );
};

const Deposit = () => {
  return (
    <div className="w-full">
      <div className="md:flex-row flex-col flex  gap-8 w-full">
        <div className="flex flex-col gap-6 md:w-[50%] w-[90%]">
          <div className="flex gap-[2rem] text-[18px] ">
            <div className="flex flex-col gap-[.2px] items-center">
              <span className="text-[#FAC55B] font-[700]">Crypto</span>
              <span className="border-b-[4px]  border-[#FAC55B] w-[70px]"></span>
            </div>
            <span className="text-[#7C7C7C]">Crypto Purchase</span>
            <span className="text-[#7C7C7C]">Fiat</span>
          </div>
          <div>
            <label htmlFor="currency">Select Currency</label>
            <div>
              <select
                className="w-full rounded bg-[#2C2C2C] "
                name="currency"
                id=""
              >
                <option value="">BTC</option>
                <option value="">ETH</option>
                <option value="">USDT</option>
                <option value="">USDC</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="currency">Protocol</label>
            <div>
              <select
                className="w-full rounded bg-[#2C2C2C] "
                name="currency"
                id=""
              >
                <option value="">BTC</option>
                <option value="">ETH</option>
                <option value="">USDT</option>
                <option value="">USDC</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="currency">Address</label>
            <div className="flex md:flex-row flex-col md: justify-between items-center gap-2 ">
              <p className="bg-[#363636] border-none text-[12px]">
                1KZmoXHWmhuaY17Gj9CLxQaXBDnAyzsGrw
              </p>
              <div className="flex items-center gap-2">
                <img src={barcode} alt="" />
                <img src={copy} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C2C] rounded-tr-[4rem] rounded-bl-[4rem] p-[2rem] flex flex-col gap-4  md:w-[50%] w-[90%]">
          <p className="font-[700]">Note</p>
          <p>
            * Please deposit only BTC to this address. Deposit of any other
            assets to this address may not be refunded.
          </p>
          <p>
            * Depositing to the above BTC address requires 1 network
            confirmation(s).
          </p>
          <p>
            * Minimum amount per deposit: 0.0001 BTC. Deposit less than this
            amount will neither be credited nor refunded.
          </p>
          <p>
            * Transfers from other WhaleFin accounts to this address are free of
            charge.
          </p>
        </div>
      </div>
      <Commision3 />
      <div className="w-full flex flex-col items-center mt-[7rem]">
        <div className="">
          <img src={note} alt="" />
          <p>No data</p>
        </div>
      </div>
    </div>
  );
};

const Widthdraw = () => {
  return (
    <div className="w-full">
      <div className="md:flex-row flex-col flex  gap-8 w-full">
        <div className="flex flex-col gap-6 md:w-[50%] w-[90%]">
          <div className="flex gap-[2rem] text-[18px] ">
            <div className="flex flex-col gap-[.2px] items-center">
              <span className="text-[#FAC55B] font-[700]">Crypto</span>
              <span className="border-b-[4px]  border-[#FAC55B] w-[70px]"></span>
            </div>
            <span className="text-[#7C7C7C]">Fiat</span>
          </div>
          <div>
            <label htmlFor="currency">Select Currency</label>
            <div className="flex  justify-between items-center bg-[#363636] rounded px-[5px] ">
              <div className="flex gap-1 items-center">
                <img src={btc} alt="" /> <span>BTC</span>
              </div>
              <input type="text" className="bg-[#363636] border-none" />
              <img src={drop} alt="" />
            </div>
          </div>
          <div>
            <label htmlFor="currency">Protocol</label>
            <div className="flex  justify-between items-center bg-[#363636] rounded px-[5px] ">
              <span>BTC</span>

              <input type="text" className="bg-[#363636] border-none" />
              <img src={drop} alt="" />
            </div>
          </div>

          <div>
            <label htmlFor="currency">Address</label>
            <div className="flex gap-2 items-center  ">
              <input
                placeholder="Enter withdraw address"
                type="text"
                className="bg-[#363636] border-none rounded px-[5px]  w-[70%]"
              />
              <button className="w-[30%] px-[1.5rem] py-[.5rem] rounded bg-[#EDD78F] text-black font-[600]">
                Select Address
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="currency">Note</label>
            <input
              placeholder="Add note (E.g wallets, exchange etc)"
              type="text"
              className="bg-[#363636] border-none rounded px-[5px]  "
            />
          </div>
          <div>
            <label htmlFor="currency">Amount</label>
            <div className="flex  justify-between items-center bg-[#363636] rounded px-[5px] ">
              <input type="text" className="bg-[#363636] border-none" />
              <span>
                BTC | <span className="text-[#EDD78F]">Max</span>
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#EDD78F]">
                Withdrawalable amount: 11.46600236 BTC
              </p>
              <div className="flex justify-between">
                <span className="text-[#666666]">Fees</span>
                <span>WhaleFin</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666]">Arrival Amount</span>
                <span>0 BTC</span>
              </div>

              <div className="flex font-[700] text-[18px]">
                <button className="bg-[#EDD78F] px-[2rem] py-[.8rem] text-black rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2C2C2C] rounded-tr-[4rem] rounded-bl-[4rem] p-[2rem] flex flex-col gap-4  md:w-[50%] w-[90%]">
          <p className="font-[700]">Note</p>
          <p>* Please carefully review the transfer details.</p>
          <p>
            * To ensure the safety of your assets, your transfer request will be
            reviewed. The transfer will be completed within{" "}
            <span className="text-[#EDD78F]">24 hours</span>.
          </p>
          <p className="text-[#EDD78F]">
            * Withdrawals will be prohibited if there is any negative balance in
            the wallet.
          </p>
          <p>* Transfers to other WhaleFin accounts are free of charge.</p>
        </div>
      </div>
      <Commision4 />
      <div className="w-full flex flex-col items-center mt-[7rem]">
        <div className="">
          <img src={note} alt="" />
          <p>No data</p>
        </div>
      </div>
    </div>
  );
};

const AssetsNav = ({ setAssetState, setComponent, assetState }) => {
  return (
    <div className="flex md:px-[3rem] px-[1rem] py-[4rem]  ">
      <div className="text-[#A7A7A7] font-[500] flex flex-col gap-[2rem] ">
        <AssetsNavButton
          setComponent={setComponent}
          setAssetState={setAssetState}
          assetState={assetState}
          name={"Wallet"}
          component={<Wallet />}
        />
        <AssetsNavButton
          setComponent={setComponent}
          setAssetState={setAssetState}
          assetState={assetState}
          name={"Deposit"}
          component={<Deposit />}
        />
        <AssetsNavButton
          setComponent={setComponent}
          setAssetState={setAssetState}
          assetState={assetState}
          name={"Widthdraw"}
          component={<Widthdraw />}
        />
      </div>
    </div>
  );
};

const Displayarea = (props) => {
  return (
    <div className="md:px-[3rem] px-[1em] py-[2rem] w-full border-l overflow-x-scroll ">
      <div className="text-white flex flex-col gap-5">
        <div
          className={`${
            props.assetState !== "Wallet" && "hidden"
          } flex items-center justify-between`}
        >
          <p className="font-[400] md:text-[32px] text-[20px]">Assets</p>
          <div className="flex gap-1">
            <p className="text-[#EDD78F] text-[12px]">Details</p>
            <img src={goldArrow} alt="" />
          </div>
        </div>
        {props.component}
      </div>
    </div>
  );
};

const Assets = () => {
  const [assetState, setAssetState] = useState("Wallet");
  const [component, setComponent] = useState(<Wallet />);
  return (
    <div className="text-white bg-[#211F20] flex items-start">
      <AssetsNav
        assetState={assetState}
        setAssetState={setAssetState}
        setComponent={setComponent}
      />
      <Displayarea assetState={assetState} component={component} />
    </div>
  );
};

export default Assets;
