import React from "react";

const OpenOrdersComp = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Order Time
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Trading Pair
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Transaction Type
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Direction
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Order Price
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Amount
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Progress
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Trigger Price
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Order status
            </th>
            <th className="text-left text-[#666666] bg-[#242424] md:p-5 md:px-8 p-2 px-2 ">
              Action
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
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">6</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">7</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">8</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">9</td>
            <td className="md:p-5 md:px-8 p-2 px-2  text-white">10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpenOrdersComp;
