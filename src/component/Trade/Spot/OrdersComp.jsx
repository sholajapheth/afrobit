import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const OrdersComp = () => {
  const [loading, setLoading] = useState(false);
  const [ordersComp, setOrdersComp] = useState([]);
  const login = useSelector((state) => state.login.loggedIn);

  const handle_history = async () => {
    if (login) {
      try {
        let auth = JSON.parse(localStorage.getItem("token"));
        auth = auth.access_token;
        // setLoading(true);
        const response = await axios.request({
          method: "GET",
          baseURL: "https://afrobit-api.herokuapp.com/api/",
          url: "trade/orders",
          data: {
            id: 2,
            category: "spot",
          },
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + auth,
          },
        });

        // console.log("sh: ", response.data);
        // setLoading(false);
        setOrdersComp(response.data.items);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else alert("Please Login to view Swap history");
  };

  useEffect(() => {
    handle_history();
  }, []);

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Type
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Order ID
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Symbol
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              From
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              To
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">1</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">2</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">3</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">4</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersComp;
