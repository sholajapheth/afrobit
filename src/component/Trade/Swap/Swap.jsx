import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import check from "../../../assets/svgs/check.svg";
import coinswap from "../../../assets/svgs/coinswap.svg";
import exchange from "../../../assets/svgs/exchange.svg";
// import greenDolls from "../../../assets/svgs/greenDolls.svg";
import btc from "../../../assets/svgs/btc.svg";
import eth from "../../../assets/images/eth.png";
import usdt from "../../../assets/images/usdt.png";
import bnb from "../../../assets/images/bnb.png";
import { useSelector } from "react-redux";
import { createSwapAction } from "../../../store/slices/createSwap";
import { useDispatch } from "react-redux";


const swap = createContext();

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

const Payment = () => {

  const {
    openModal,
    from,
    to,
    input,
    output,
    setOutput,
    convert,
    setTo,
    setFrom,
    setInput,
  } = useContext(swap);

  const data = [
    { name: "USDⓢ", value: "usdt", img: usdt },
    { name: "BTC", value: "btc", img: btc },
    { name: "ETH", value: "eth", img: eth },
    { name: "BNB", value: "bnb", img: bnb },
  ];



  return (
    <div className="flex flex-col  items-center bg-[#211F20] py-[5rem] text-[18px] ">
      <div className="lg:w-[45%] md:w-[70%] w-[90%] flex flex-col gap-6 ">
        <div className="flex flex-col gap-2 ">
          <div className="bg-[#2C2C2C] p-6 w-full rounded">
            <div className="flex flex-col gap-6 ">
              <span>Send</span>
              <div className="flex  items-center text-14 w-full">
                <div className="text-black font-[600]">
                  <select
                    onChange={(e) => {
                      setFrom(e.target.value);
                     
                    }}
                    value={from}
                    name="coins"
                    className="bg-transparent border-none "
                  >
                    {data.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 w-full">
                  <input
                    type="number"
                    value={input}
                    className="bg-transparent border w-full "
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <span className="text-[14px]">All</span>
                </div>
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
            <div className="flex  items-center text-14 w-full">
              <div className="text-black font-[600]">
                <select
                  onChange={(e) => {
                    setTo(e.target.value);
                    console.log("value: ", e.target.value);
                  }}
                  value={to}
                  name="coins"
                  className="bg-transparent border-none "
                >
                  {data.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <input
                value={output.toFixed(2)}
                type="number"
                className="bg-transparent border w-full "
                onChange={e=> setOutput(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
        className="border w-full"
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-[#EDD78F]  via-[#EDD78F] to-[#FDBF4A] rounded py-3 text-black"
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
};

const TableData = (props) => {
  return (
    <td className="md:p-5 md:px-8 p-2 px-2  text-white text-[14px]">
      {props.children}
    </td>
  );
};

const SwapHistory = () => {
  const [swap_history, setSwap_history] = useState([]);
  const [loading, setLoading] = useState(false);
  const login = useSelector((state) => state.login.loggedIn);

  const handle_swap_history = async () => {
    if (login) {
      try {
        let auth = JSON.parse(localStorage.getItem("token"));
        auth = auth.access_token;
        setLoading(true);
        const response = await axios.request({
          method: "GET",
          baseURL: "https://afrobit-api.herokuapp.com/api/",
          url: "/swap",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + auth,
          },
        });

        console.log("sh: ", response.data);
        setLoading(false);
        setSwap_history(response.data.items);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else alert("Please Login to view Swap history");
  };

  return (
    <div className="flex flex-col bg-[#161616] md:p-[5rem] p-[1rem] md:text-[18px] text-[14px] text-black md:h-screen  md:overflow-auto overflow-y-scroll ">
      <table className="w-full ">
        <thead>
          <tr className="p-5 ">
            <th className="text-left text-[#666666] bg-[#242424] md:p-3 md:px-6 p-2 px-2 ">
              Time
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-3 md:px-6 p-2 px-2 ">
              Pair
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-3 md:px-6 p-2 px-2 ">
              Send
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-3 md:px-6 p-2 px-2 ">
              Get
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-3 md:px-6 p-2 px-2 ">
              Rate
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-3 md:px-6 p-2 px-2 ">
              Status
            </th>
          </tr>
          {/* {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))} */}
        </thead>
        {loading ? (
          <div>Geting History....</div>
        ) : (
          <tbody>
            {swap_history !== null &&
              swap_history.map((item) => {
                const date1 = new Date(item.created_at);
                const date = date1.toLocaleString();

                return (
                  <tr>
                    <TableData>{date}</TableData>
                    <TableData>
                      <span className="text-[#EDD78F] flex gap-1 items-center">
                        <span>{item.from_currency} </span>
                        <img
                          className="max-w-[12px]"
                          src={exchange}
                          alt=""
                        />{" "}
                        <span>{item.to_currency}</span>
                      </span>
                    </TableData>
                    <TableData>
                      {Math.round(item.amount_send * 100) / 100}
                    </TableData>
                    <TableData>
                      {" "}
                      {Math.round(item.amount_get * 100) / 100}
                    </TableData>
                    <TableData>{item.rate} USDⓢ = 0.00004201 BTC </TableData>
                    <TableData>
                      <span
                        className={`p-3 rounded-full ${
                          item.status === "COMPLETED"
                            ? "bg-[#02c8a81a]  text-[#02C8A8]"
                            : "bg-red-500 text-red-300"
                        } `}
                      >
                        {item.status === "COMPLETED" ? "Completed" : "Pending"}
                      </span>
                    </TableData>
                  </tr>
                );
              })}
          </tbody>
        )}
      </table>

      <div className="flex items-center flex-col w-full py-[2em]">
        <button
          className="border py-[10px]  w-full text-white"
          onClick={handle_swap_history}
        >
          Get Swap History
        </button>
      </div>
    </div>
  );
};

const ReconfirmOrder = () => {
  const dispatch = useDispatch();
  const { closeModal, from, to, input, output } = useContext(swap);

  const createSwap = ()=>{
    console.log("create swap")
     dispatch(createSwapAction(from, to, input));
    // closeModal()
  }

  return (
    <div className="m-auto items-center bg-[#222222] md:w-[60%] w-[90%] p-10 my-[20rem] ">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex items-center justify-between">
          <span className="font-[700] text-[32px]">Reconfirm Order</span>
          <button onClick={closeModal} className="text-[30px]">
            ×
          </button>
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
            <span>
              {input} {from} ≈ {output} {to}
            </span>
            {/* <span className="text-[#707070]">1 BTC ≈ 22,936.59 USDⓢ</span> */}
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[#7e7e7e] font-[700]">Send</span>
          <span>
            <b>
              {input} {from}
            </b>
          </span>
        </div>
        <hr className="border-[#3D3D3D]" />
        <div className="flex justify-between">
          <span className="text-[#7e7e7e] font-[700]">Get</span>
          <span>
            <b>
              {output} {to}
            </b>
          </span>
        </div>

        <div className="flex flex-col items-end">
          <div className=" md:flex-row flex-col items-center font-[600] flex gap-4 md:text-[15px] text-[12px]">
            <button
              onClick={closeModal}
              className="rounded-[3rem] md:px-[2.5rem] md:py-[12px] px-[1rem] py-[5px] border-[#EDD78F] text-[#EDD78F] border"
            >
              Cancel
            </button>

            <button
              onClick={createSwap}
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
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  // const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
      )
      .then((res) => {
        setInfo(res.data[from]);
      });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  // useEffect(() => {
  //   setOptions(Object.keys(info));

  //   convert();
  // }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // // Function to switch between two currency
  // function flip() {
  //   var temp = from;
  //   setFrom(to);
  //   setTo(temp);
  // }

  return (
    <swap.Provider value={{ modal, openModal, closeModal, info, input, from, to, output, convert, setTo, setFrom, setInput }}>
      <div className="text-white">
        {modal && (
          <div className="absolute w-full  top-0 left-0 b backdrop-filter backdrop-blur-[3px] ">
            <ReconfirmOrder />
          </div>
        )}
        <Banner />
        <Payment />
        <SwapHistory />
      </div>
    </swap.Provider>
  );
};

export default Swap;
