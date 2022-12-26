import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoList from "./CryptoList";

import "./App.css";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="crypto-app">
      <div className="crypto-nav">
        <div className="search">
          <h1 className="app-title">Cryptocurrency Price Tracker</h1>
          <form action="">
            <input
              type="text"
              className="crypto-input"
              name=""
              id=""
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className="grid-container">
        {filteredCoins.map((coin) => {
          return (
            <CryptoList
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
