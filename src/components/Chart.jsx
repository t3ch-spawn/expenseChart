import React, { useRef, useState } from "react";
import chartData from "../data.json";

function Chart(props) {
  const [isExpShown, setIsExpShown] = useState(true);
  const barElements = chartData.map((bar) => {
    const totalExp = chartData.reduce((accum, curr) => {
      return accum + curr.amount;
    }, 0);

    const amount = Math.floor((bar.amount / totalExp) * 250);
    const highest = chartData.reduce(
      (accum, curr) => (curr.amount > accum ? curr.amount : accum),
      0
    );
    const hover = bar.amount === highest ? "highest-bar" : "normal-bar";
    let shown 
    const barStyles = {
      height: `${amount}%`,
      cursor: "pointer",
    };

    function handleShown(event) {   
    const priceTag = event.target.previousSibling
    priceTag.classList.toggle('shown')
    }

    return (
      <div
      
        key={bar.amount}
        className={` flex flex-col gap-2 justify-end w-[15%] items-center h-[180px]`}
      >
        {/* Expense on that day */}
        <div
          className={`${shown} flex justify-center items-center text-sm  bg-fontCol p-[5px] text-chartCard rounded-[4px] opacity-0 duration-200 h-0`}
        >
          ${bar.amount}
        </div>

        {/* Actual bar */}
        <div
          onMouseEnter={handleShown}
          onMouseLeave={handleShown}
          id={`${bar.id}`}
          className={`${hover} w-[90%] rounded-[4px] bg-bar`}
          style={barStyles}
        ></div>

        {/* Day of week */}
        <p className="text-lineCol text-sm">{bar.day}</p>
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center w-[100%]">
        <h1 className="text-fontCol text-2xl mt-6 font-bold self-start" >Spending Last 7-days</h1>
      <div className="flex gap-[2%] justify-center items-center w-[100%]">
      {barElements}
      </div>
      <hr className="h-[2px] bg-mainBg w-[100%] mt-5" />
    </div>
  );
}

export default Chart;
