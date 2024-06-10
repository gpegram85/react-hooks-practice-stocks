import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocksBought, onSellStock }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksBought.map((stock, index) => (
        <Stock stock={stock} key={index} onSellStock={onSellStock} isBought={true} />))}
    </div>
  );
}

export default PortfolioContainer;
