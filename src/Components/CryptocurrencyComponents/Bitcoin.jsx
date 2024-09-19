import React from 'react';
import graph from "../../assets/Images/cryptocurrency/graph.png";

const Bitcoin = () => {
  return (
    <div className="bitcoin-container container mx-auto p-4">
      {/* Top Section with Breadcrumb and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        {/* Breadcrumb */}
        <div className="breadcrumb text-sm text-gray-400">
          <span>
            <i className="ri-home-3-line text-blue-400"></i> Home / Prices / Bitcoin (BTC) Price
          </span>
        </div>

        {/* Search Box */}
        <div className="search-box mt-4 md:mt-0">
          <input
            type="text"
            placeholder="🔍 Search for other currencies"
            className="border rounded-full px-4 py-2 text-sm w-full md:w-72"
          />
        </div>
      </div>

      {/* Bitcoin Header */}
      <div className="bitcoin-header flex items-center mt-4">
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" // Replace with your logo source
          alt="Bitcoin Logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="text-xl md:text-2xl font-bold ml-2 font-century-gothic">
          Bitcoin <span className="text-orange-500">BTC</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="content-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 mt-6">
        {/* Chart and Price Section */}
        <div className="chart-price-section p-6 bg-white rounded-lg shadow-md">
          {/* Timeframe Buttons with Space Between */}
          <div className="flex justify-between mb-4">
            <button className="bg-gray-100 px-2 py-1 rounded text-gray-500">1H</button>
            <button className="bg-gray-100 px-2 py-1 rounded text-gray-500">1D</button>
            <button className="bg-gray-100 px-2 py-1 rounded text-gray-500">1W</button>
            <button className="bg-gray-100 px-2 py-1 rounded text-gray-500">1M</button>
            <button className="bg-gray-100 px-2 py-1 rounded text-gray-500">1Y</button>
            <button className="bg-gray-100 px-2 py-1 rounded text-gray-500">ALL</button>
          </div>

          {/* Price Details */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold">BTC Price</h2>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl md:text-3xl font-bold">₹4,713,211.44</h2>
            <p className="text-red-500 mt-2">₹49,069.55 (-1.03%)</p>
          </div>

          {/* Placeholder for the chart */}
          <div className="mt-6 h-48 md:h-64 bg-gray-100">
            <img src={graph} alt="Bitcoin Price Chart" className="object-cover h-full w-full" />
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            <span>4:40 PM</span>
            <span>12:10 AM</span>
            <span>7:40 AM</span>
            <span>3:10 PM</span>
          </div>
        </div>

        {/* Buy/Sell/Convert Section */}
        <div className="transaction-section bg-[#F5F8FF] p-6 rounded-lg shadow-md md:w-[80%] ">
          {/* Tabs for Buy, Sell, Convert */}
          <div className="flex bg-gray-200 w-fit rounded-full overflow-hidden">
            <button className="bg-black text-white px-4 py-2 font-century-gothic font-semibold rounded-full">Buy</button>
            <button className="text-gray-500 px-4 py-2 font-century-gothic font-semibold">Sell</button>
            <button className="text-gray-500 px-4 py-2 font-century-gothic font-semibold">Convert</button>
          </div>

          {/* Displayed Amount */}
          <div className="mt-10">
            <h2 className="text-6xl md:text-8xl font-bold">0 <span className="text-gray-600">INR</span></h2>
            <p className="text-sm text-blue-900 font-eras-bold font-semibold mt-2 ml-4">^ 0 BTC</p>
          </div>

          {/* Buy Bitcoin Section */}
          <div className="flex justify-between items-center mt-10">
            <div className="flex items-center space-x-2">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                alt="Bitcoin Logo"
                className="w-6 h-6"
              />
              <span className="text-base md:text-lg font-bold font-century-gothic">
                Buy <br />
                <span className="text-gray-500 text-sm md:text-base">Bitcoin (BTC)</span>
              </span>
            </div>
            <span className="font-bold text-base md:text-lg font-century-gothic">
              ₹4,702,421.61
              <br />
              <span className="text-gray-500 text-sm md:text-base font-century-gothic">price</span>
            </span>
          </div>

          {/* Payment Method */}
          <div className="flex justify-between items-start mt-6">
            <div>
              <span className="text-lg font-bold font-century-gothic">Pay with</span>
              <br />
              <span className="text-gray-500 text-sm md:text-base font-century-gothic">Cash (INR)</span>
            </div>
            <div>
              <span>&gt;</span>
            </div>
          </div>

          {/* Buy Button */}
          <button className="bg-[#0DCBF8] text-white w-full py-4 mt-10 rounded-2xl text-base md:text-lg font-bold font-century-gothic">
            Buy Bitcoin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bitcoin;
