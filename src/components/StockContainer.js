import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ stockList = [], onBuyStock }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((stock) => (
        <Stock stock={stock} key={stock.id} onBuyStock={onBuyStock} isBought={false} />)
    )}
    </div>
  );
}

export default StockContainer;
