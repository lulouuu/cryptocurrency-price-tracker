import React from "react";

import "./CryptoList.css";

const CryptoList = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="crypto-symbol">{symbol}</p>
        </div>
        <div className="crypto-data">
          <div className="inner-crypto">
            <p className="crypto-title-desc">Current Price:</p>
            <p className="crypto-description">₱ {price.toLocaleString()}</p>
          </div>
          <div className="inner-crypto">
            <p className="crypto-title-desc">Total Volume:</p>
            <p className="crypto-description">₱ {volume.toLocaleString()}</p>
          </div>

          {priceChange < 0 ? (
            <div className="inner-crypto">
              <p className="crypto-title-desc">Price Change Percentage:</p>
              <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
            </div>
          ) : (
            <div className="inner-crypto">
              <p className="crypto-title-desc">Price Change Percentage:</p>
              <p className="crypto-percent green">+{priceChange.toFixed(2)}%</p>
            </div>
          )}
          <div className="inner-crypto">
            <p className="crypto-title-desc">Market Cap:</p>
            <p className="crypto-description">₱ {marketcap.toLocaleString()}</p>
          </div>
          <div className="inner-crypto"></div>
          <div className="inner-crypto"></div>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
