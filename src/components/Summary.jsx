import React from "react";

function Summary(props) {
  return (
    <div className="flex justify-between items-center py-8 sm:flex-col sm:items-start sm:gap-4">
      <div className="balance">
        <p className="text-sm text-lineCol">Total this month</p>
        <h3 className="text-3xl mt-1 text-fontCol font-bold">$478.33</h3>
      </div>
      <div className="flex flex-col items-end sm:items-start">
        <p className=" text-fontCol font-bold">+2.4%</p>
        <p className=" text-sm text-lineCol">from last month</p>
      </div>
    </div>
  );
}

export default Summary;
