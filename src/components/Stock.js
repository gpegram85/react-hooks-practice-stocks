import React, { useState } from "react";

function Stock({ stock, onBuyStock, onSellStock, isBought }) {

  const {name, price} = stock


  const buyStock = () => {
    onBuyStock(stock) 
  }

  const sellStock = () => {
    onSellStock(stock)
  }

  return (
    <div>
      <div className="card" >
        <div className="card-body" onClick={isBought ? sellStock : buyStock}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
