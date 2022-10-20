import React, {useState} from "react";
import Chart from "react-apexcharts";
import { useTable } from "react-table";
import exchange from "../../../assets/svgs/exchange.svg";
import play from "../../../assets/svgs/play.svg";
import play2 from "../../../assets/svgs/play2.svg";
import star from "../../../assets/svgs/star.svg";
import bin from "../../../assets/svgs/bin.svg";
import write from "../../../assets/svgs/write.svg";
import drop2 from "../../../assets/svgs/drop.svg";
import switcher from "../../../assets/svgs/switcher.svg";
import greenDolls from "../../../assets/svgs/greenDolls.svg";
import btc from "../../../assets/svgs/btc.svg";
import slider from "../../../assets/svgs/slider.svg";
import book from "../../../assets/svgs/book.svg";
import { create_margin_order_action } from "../../../store/slices/createMarginOrder";
import { useDispatch } from "react-redux";

const Order = () => {
    const [orderPrice, setOrderPrice] = useState();
    const [amount, setAmount] = useState();
    const dispatch = useDispatch();

   const handleMarginOrder = () => {
     console.log("Spot order");
     const data = {
       direction: "BUY",
       price: orderPrice,
       quantity: amount,
       strategy: "FOK",
       type: "LIMIT",
       symbol: "BTC_USDT",
     };
     dispatch(create_margin_order_action(data));
   };


  return (
    <div>
      <div className="flex justify-between text-white mb-[1rem]">
        <span className="text-14px] font-[600] ">Place an order</span>
        <div className="flex items-center gap-2">
          <span className="font-[400] text-[12px]">RFO</span>
          <img className="max-w-[30px]" src={switcher} alt="" />
        </div>
      </div>
      <div className="flex w-full ">
        <div className="bg-[#02c8a81a] border-b-[5px] text-center border-[#02C8A8] w-[50%] flex flex-col py-5 text-[#02C8A8]">
          <span className="font-[600] text-[22px]">22,297.01</span>
          <span>Ask</span>
        </div>
        <div className="border-b-[5px] text-center border-[#FF618A] w-[50%] flex flex-col py-5 text-[#FF618A]">
          <span className="font-[600] text-[22px]">22,297.01</span>
          <span>Bid</span>
        </div>
      </div>
      <div className="text-[#666666] text-[12px] border-b border-[#666666] flex justify-between items-center py-5">
        <div className="flex gap-8">
          <span className="text-white">Limit</span>
          <span>Market</span>
          <div className=" flex items-center gap-1">
            <span>Spot-limit</span>
            <img className="max-w-[10px]" src={drop2} alt="" />
          </div>
        </div>
        <div className=" flex items-center gap-1">
          <span>BTC</span>
          <img className="max-w-[10px]" src={drop2} alt="" />
        </div>
      </div>

      <div>
        <div className="text-[#666666] text-[12px] flex  items-center w-full my-[1.5rem]">
          <p className="w-[20%]">Order price</p>
          <div className="bg-[#363636] rounded flex gap-1 items-center w-full pl-[12px] pr-[5px]">
            <img src={greenDolls} alt="" />
            <input
              className="bg-[#363636] w-full border-none h-[4rem]"
              type="text"
              placeholder="Enter order price"
              value={orderPrice}
              onChange={(e) => setOrderPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="text-[#666666] text-[12px] flex  items-center w-full my-[1.5rem]">
          <p className="w-[20%]">Amount</p>
          <div className="flex gap-1 items-center w-full">
            <div className="bg-[#363636] rounded flex gap-1 items-center w-full pl-[12px]">
              <img src={btc} alt="" />
              <input
                className="bg-[#363636] w-full border-none h-[4rem] text-[12px]"
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <img src={exchange} alt="" />
            <div className="bg-[#363636] rounded flex gap-1 items-center w-full pl-[12px]">
              <img src={greenDolls} alt="" />
              <input
                className="bg-[#363636] w-full border-none h-[4rem] text-[12px]"
                type="text"
                placeholder="Enter order price"
              />
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-[20%]"></div>
          <div className="w-[80%] py-[1rem]">
            <span className="text-white ">
              Avbl.: <span className="text-[#f6cb6c]">USDⓢ</span>
            </span>
            <img className="w-full pt-[10px]" src={slider} alt="" />
          </div>
        </div>
        <p className="text-right text-[14px] text-white font-[500]">
          Spot tradig fee: <span className="text-[#f6cb6c]">0.05%</span>
        </p>

        <button
          className="bg-gradient-to-r from-[#EDD78F] via-[#EDD78F] my-[15px] to-[#FDBF4A] text-black py-[10px] rounded-md font-[600] text-[16px] w-full"
          type="submit"
          onClick={handleMarginOrder}
        >
          Buy

        </button>
      </div>
    </div>
  );
};

const Trend = () => {
  return (
    <div className=" text-[#858585] flex flex-col gap-6">
      <div className=" text-[14px] flex gap-9">
        <span>Trend</span>
        <span>15m</span>
        <span>1h</span>
        <span>4h</span>
        <span className="text-[#EDD78F]">1D</span>
        <div className=" flex items-center gap-1">
          <span>5m</span>
          <img className="max-w-[10px]" src={drop2} alt="" />
        </div>
      </div>
      <div className="text-[12px] flex gap-8 overflow-auto scrollbar-hide md:scrollbar-default">
        <span>07/21/2022 21:00</span>
        <span>O:22,639.21</span>
        <span>H:23,760.87</span>
        <span>L:22,634.45</span>
        <span>C:23,287.4</span>
        <span className="text-[#02C8A8]">+648.19 (+2.86%)</span>
      </div>
    </div>
  );
};

const Coin = () => {
  return (
    <div className="md:flex-row flex-col md:items-start items-center flex md:gap-10 gap-5items-center my-[2rem]">
      <div className="flex gap-10 items-center">
        <div className="flex gap-1 items-center">
          <span className="font-[500] text-[24px] text-white">BTC / USD ⓢ</span>
          <img className="max-w-[1.2rem]" src={drop2} alt="" />
        </div>
        <span className="text-[#FF618A] text-[20px]">22,257.00</span>
      </div>
      <div className=" flex gap-10">
        <div className="flex flex-col ">
          <span className="text-[14px] text-[#858585]">24h Change</span>
          <span className="text-[#FF618A] text-[16px]">-1.74%</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-[14px] text-[#858585]">24h High</span>
          <span className="text-white text-[16px]">-1.74%</span>
        </div>
        <div className="flex flex-col ">
          <span className="text-[14px] text-[#858585]">24h Low</span>
          <span className="text-white text-[16px]">-1.74%</span>
        </div>
      </div>
    </div>
  );
};

const SpotToMargin = () => {
  return (
    <div className="my-[1rem] flex gap-10 ">
      <div className="flex gap-2 items-center">
        <span className="font-[700] md:text-[28px] text-[18px] text-[#fac55b]">
          Margin
        </span>
        <img
          className="max-w-[1rem] md:w-[1rem] w-[.7rem]"
          src={exchange}
          alt=""
        />{" "}
        <span className="font-[400] md:text-[28px] text-[18px] text-[#7c7c7c]">
          Spot
        </span>
      </div>
      <div className="flex gap-4 w-full overflow-auto scrollbar-hide md:scrollbar-default ">
        <div className="flex gap-1 items-center ">
          <div className="bg-[#242424] h-full flex  px-[5px] ">
            <img className="max-w-[10px]" src={play} alt="" />
          </div>
          <div className=" flex gap-3 h-full">
            <div className="h-full bg-[#2F2F2F] px-5 py-3 flex flex-col gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <img src={star} alt="" />{" "}
                <span className="font-[500] text-[14px] text-white">
                  BTC / <span className="text-[#9F9F9F]">USD ⓢ</span>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#FF618A] text-[12px]">22,257.50</span>
                <span className="text-[#FF618A] text-[12px]">-1.98%</span>
              </div>
            </div>
            <div className="h-full bg-[#1A1A1A] px-5 py-3  flex flex-col gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <img src={star} alt="" />
                <span className="font-[500] text-[14px] text-white">
                  ETH / <span className="text-[#9F9F9F]">USD ⓢ</span>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#FF618A] text-[12px]">22,257.50</span>
                <span className="text-[#FF618A] text-[12px]">-1.98%</span>
              </div>
            </div>
            <div className="h-full bg-[#1A1A1A] px-5 py-3  flex flex-col gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <img src={star} alt="" />{" "}
                <span className="font-[500] text-[14px] text-white">
                  BTC / <span className="text-[#9F9F9F]">USD ⓢ</span>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#FF618A] text-[12px]">22,257.50</span>
                <span className="text-[#FF618A] text-[12px]">-1.98%</span>
              </div>
            </div>
          </div>
          <div className="bg-[#2F2F2F] h-full flex  px-[6px]">
            <img className="max-w-[10px]" src={play2} alt="" />
          </div>
        </div>
        <div className="flex gap-3">
          <img className="max-w-[1.5rem]" src={bin} alt="" />
          <img className="max-w-[1.5rem]" src={write} alt="" />
        </div>
      </div>
    </div>
  );
};

const CandleStick = () => {
  const data = {
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591],
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592],
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34],
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86],
          },
          {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01],
          },
          {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25],
          },
          {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99],
          },
          {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81],
          },
          {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96],
          },
          {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39],
          },
          {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27],
          },
          {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55],
          },
          {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02],
          },
          {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01],
          },
          {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06],
          },
          {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89],
          },
          {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5],
          },
          {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86],
          },
          {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07],
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606],
          },
        ],
      },
    ],
    options: {
      theme: {
        mode: "dark",
      },
      chart: {
        type: "candlestick",
        height: 350,
      },

      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        color: "#FF618A",
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  return (
    <div className=" overflow-auto scrollbar-hide   ">
      <Chart
        options={data.options}
        series={data.series}
        type="candlestick"
        height={500}
      />
    </div>
  );
};

const OpenOrders = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: "",
        col6: "",
        col7: "",
        col8: "",
        col9: "",
        col10: "",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Order Time",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Trading Pair",
        accessor: "col2",
      },
      {
        Header: (
          <div className="flex gap-1 items-center">
            <span>Transaction Type</span>
            <img className="max-h-[5px] w-[18px]" src={drop2} alt="" />
          </div>
        ),
        accessor: "col3",
      },
      {
        Header: (
          <div className="flex gap-1 items-center">
            <span>Direction</span>
            <img className="max-h-[5px] w-[18px]" src={drop2} alt="" />
          </div>
        ),
        accessor: "col4",
      },
      {
        Header: "Order Price",
        accessor: "col5",
      },
      {
        Header: "Amount",
        accessor: "col6",
      },
      {
        Header: "Progress",
        accessor: "col7",
      },
      {
        Header: "Trigger Price",
        accessor: "col8",
      },
      {
        Header: "Order status",
        accessor: "col9",
      },
      {
        Header: <span className="font-[500] text-[#FAC55B]">Cancel All</span>,
        accessor: "col10",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="text-[#7C7C7C] flex flex-col gap-8">
      <div className="flex items-center justify-between px-[10px]">
        <div className="font-[500] text-[20px] flex gap-[25px] items-center">
          <div className="flex flex-col gap-[.5px] items-center font-[700] ">
            <span className="text-[#FAC55B] ">Open Orders(0)</span>
            <span className="border-b-[3px]  border-[#FAC55B] w-[60px]"></span>
          </div>
          <span>Orders</span>
          <span>Transaction Records</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[15px]">Hide other trading pairs</span>
          <input
            className="bg-[#454545] text-black focus:black border-[#EDD78F] mt-1"
            type="checkbox"
          />
        </div>
      </div>

      <div className="flex flex-col md:text-[12px] text-[10px] text-black md:h-screen  md:overflow-auto overflow-y-scroll ">
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

      <div className="flex flex-col m-auto">
        <div>
          <img src={book} alt="" />
          <span>No data</span>
        </div>
      </div>
    </div>
  );
};


const Margin = () => {
  return (
    <div className="">
      <div className="bg-[#211F20] md:p-[4rem] p-[1rem] md:flex-row flex-col flex md:gap-8 gap-4">
        <div className="border-r border-[#3C3C3C] md:w-[65%] w-[100%]">
          <div className="border-b border-[#3C3C3C] pb-[1rem] mb-[2rem]">
            <SpotToMargin />
          </div>
          <div className="border-b border-[#3C3C3C]  mb-[2rem]">
            <Coin />
          </div>
          <div className="border-b border-[#3C3C3C] pb-[1rem] mb-[2rem]">
            <Trend />
          </div>
          <CandleStick />
        </div>
        <div className="md:w-[35%] w-[100%]">
          <Order />
        </div>
      </div>
      <div className="bg-[#161616] md:p-[4rem] p-[1rem]">
        <OpenOrders />
      </div>
    </div>
  );
};

export default Margin;
