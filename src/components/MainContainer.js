import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  const [stocksBought, setStocksBought] = useState([])
  const [sortBy, setSortBy] = useState("id")
  const [selectedFilter, setSelectedFilter] = useState("All")

  useEffect(()=> {
    fetch(`http://localhost:3001/stocks`)
    .then(resp => {
      if(!resp.ok) {
        throw new Error(`Error retrieving stocks.`)
      } return resp.json()
    })
    .then(stockData => setStockList(stockData))
    .catch(error => console.error("Error: ", error))
  }, [])

  const handleBuyStock = (stock) => {
    setStocksBought((prevStocks) => [...prevStocks, stock])
    setStockList((prevStockList) => prevStockList.filter((item) => item.id !== stock.id)
    )
  }

  const handleSellStock = (stock) => {
    setStocksBought((prevStocks) => prevStocks.filter((item) => item.id !== stock.id))
    setStockList((prevStockList) => [...prevStockList, stock])
  }

  const handleCategoryChange = (e) => {
    setSortBy(e.target.value)
  }

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value)
  }

  const filteredStocks = stockList.filter((stock) => {
    if(selectedFilter === "All") return true
    return stock.type === selectedFilter
  })

  const sortedFilteredStockList = [...filteredStocks].sort((a, b) => {
    if (sortBy === "id") {
      return a.id - b.id
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "price") {
      return b.price - a.price
    } return 0
  })

  return (
    <div>
      <SearchBar onCategoryChange={handleCategoryChange} onFilterchange={handleFilterChange} sortBy={sortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={sortedFilteredStockList} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocksBought={stocksBought} onSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
