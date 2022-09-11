import React from "react";
import { useTable } from "react-table";
import headerImage from "../../assets/images/btcHeaderImg.jpeg";
import coins from "../../assets/svgs/coins.svg";
import frameBtc from "../../assets/svgs/frameBtc.svg";
import tri2 from "../../assets/svgs/tri2.svg";
import btctousd from "../../assets/svgs/btctousd.svg";

const tableData = [
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },
  {
    col2: "248.90%",
    col3: "$22,000",
    col4: "07/27/2022",
    col5: "20cl",
  },

];

const Header = () => {
  return (
    <div className="bg-[#161616]  md:pl-[4rem] pl-[1rem]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <p className="md:text-[40px] text-[25px] font-[700]">Monetize Your Market</p>
          <div>
            <p>Invest BTC, ETH - Sell high and earn high yield.</p>
            <p>Invest USDⓢ, USDT - Buy low and earn high yield.</p>
          </div>
        </div>
        <img className="bg:inline hidden" src={headerImage} alt="" />
      </div>
      <div>
        <div className="flex gap-[5rem] text-[18px] mt-[2rem]">
          <div className="flex flex-col gap-[.2px] items-center">
            <span className="text-[#FAC55B] font-[700]">Popular</span>
            <span className="border-b-[2px]  border-[#FAC55B] w-[70px]"></span>
          </div>
          <span className="text-[#7C7C7C]">Customise</span>
        </div>
      </div>
    </div>
  );
};

const Middle = () => {
  return (
    <div className="md:px-[4rem] md:py-[2rem] p-[1rem]">
      <div className="flex flex-col gap-6">
        <div>
          <p>Investing</p>
          <img src={coins} alt="" />
        </div>
        <div>
          <p>Settlement pair</p>
          <img src={frameBtc} alt="" />
        </div>
        <div className="bg-[#F1D27F33] md:p-[2rem] p-[1rem]">
          <p className="font-[600] text-[22px]">
            Sell High and Earn High Yield
          </p>
          <p>
            Upon maturity, if the market price ≥ strike price, you will receive
            USDⓢ
          </p>
          <p>
            Upon maturity, if the market price strike price, you will receive
            BTC{" "}
          </p>
        </div>
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
            <span>Strike price</span>
            <img src={tri2} className="w-[10px]" alt="" />
          </div>
        ),
        accessor: "col4",
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

      {
        Header: (
          <div className="flex gap-2 items-center">
            <span>Maturity</span>
            <img src={tri2} className="w-[10px]" alt="" />
          </div>
        ),
        accessor: "col5",
      },
    ],
    []
  );

  const data = React.useMemo(
    () =>
      tableData.map((item) => ({
        col1: <img src={btctousd} alt="" />,
        col2: <span className="text-[#EDD78F] ">{item.col2}</span>,
        col3: <span className=" ">{item.col3}</span>,
        col4: <span className=" ">{item.col4}</span>,
        col5: (
          <div className="md:flex-row flex-col gap-2 flex md:items-center justify-between">
            <span>{item.col5}</span>

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
      <div className="flex flex-col gap-6 bg-[#161616] md:p-[4rem] p-[1rem] md:text-[14px] text-[12px] text-black md:h-screen  overflow-x-scroll ">
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
const Invest = () => {
  return (
    <div className="text-white">
      <Header />
      <Middle />
      <Bottom />
    </div>
  );
};

export default Invest;
