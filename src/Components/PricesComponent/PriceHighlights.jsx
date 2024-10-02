import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const largestGainers = [
  { name: "Giko Cat", price: 4.89, change: +6.6 },
  { name: "mfercoin", price: 0.02495, change: +4.7 },
  { name: "Joe Coin", price: 0.02462, change: +2.4 },
];

const Trending = [
  { name: "Crypto Tiger", price: 5.67, change: -3.2 },
  { name: "DogeCoin", price: 0.015, change: +6.8 },
  { name: "MoonShot", price: 0.32, change: -1.5 },
];

const PriceHighlights = () => {
  const [visible, setVisible] = useState(false);
  // const [visibleHighlights, setVisibleHighlights] = useState(false);

  const handleVisible = () => {
    setVisible((visible) => !visible);
  };
  return (
    <div className="container mx-auto mt-20 mb-10">
      <div className="flex justify-between w-full items-center mb-4">
        <h1 className="text-3xl font-montserrat font-bold">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="flex flex-col items-center mt-2 space-y-4">
          <label className="flex flex-row items-center">
            <span className="text-xl font-montserrat px-3"> Highlights</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={visible}
                onChange={handleVisible}
                className="sr-only" // Hide the checkbox
              />
              {/* Toggle background */}
              <div
                className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-300 ${
                  visible ? "bg-primaryCyan" : "bg-gray-300"
                }`}
              ></div>
              {/* Toggle switch circle */}
              <div
                className={`absolute top-0.5 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  visible ? "translate-x-6" : ""
                }`}
              >
                {visible ? (
                  <i className="ri-check-fill text-primaryCyan"></i>
                ) : (
                  <i className="ri-close-fill text-gray-300"></i>
                )}
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="">
        <p className="text-gray-500 mt-2">
          The global cryptocurrency market cap today is $2.36 Trillion, a{" "}
          <span className="text-red-500">▼ 0.7%</span> change in the last 24
          hours.
          <Link href="/" className="text-primaryCyan ml-1">
            Read more
          </Link>
        </p>
      </div>
      {visible && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col bg-white rounded-lg justify-between h-full">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex-1">
              <h2 className="text-2xl font-bold">$2,355,691,950,187</h2>
              <p className="text-gray-500">
                Market Cap <span className="text-red-500">▼ 1.9%</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm flex-1">
              <h2 className="text-2xl font-bold">$102,645,474,117</h2>
              <p className="text-gray-500">24h Trading Volume</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">
                <i className="ri-fire-fill text-orange-600"></i> Trending{" "}
              </h2>
              <Link className="hover:text-primaryCyan">
                View more <i className="ri-arrow-right-s-line"></i>
              </Link>
            </div>
            <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
              {Trending.map((coin) => (
                <div className="flex justify-between" key={coin.name}>
                  <p>{coin.name}</p>
                  <p className={`flex mr-1`}>
                    <span>${coin.price.toFixed(2)}</span>
                    {coin.change >= 0 ? (
                      <div
                        className={`text-green-500 flex items-center justify-center`}
                      >
                        <IoMdArrowDropup />
                        {coin.change}%
                      </div>
                    ) : (
                      <div
                        className={`text-red-500 flex items-center justify-center`}
                      >
                        <IoMdArrowDropdown />
                        {Math.abs(coin.change)}%
                      </div>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">
                <i className="ri-rocket-fill text-primaryCyan"></i> Largest
                Gainers{" "}
              </h2>
              <Link className="hover:text-primaryCyan">
                View more <i className="ri-arrow-right-s-line"></i>
              </Link>
            </div>
            <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
              {largestGainers.map((coin) => (
                <div className="flex justify-between" key={coin.name}>
                  <p>{coin.name}</p>
                  <p className={`flex mr-1`}>
                    <span>${coin.price.toFixed(2)}</span>
                    {coin.change >= 0 ? (
                      <div className={`text-green-500 flex items-center`}>
                        <IoMdArrowDropup />
                        {coin.change}%
                      </div>
                    ) : (
                      <div className={`text-red-500 flex items-center`}>
                        <IoMdArrowDropdown />
                        {Math.abs(coin.change)}%
                      </div>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceHighlights;
