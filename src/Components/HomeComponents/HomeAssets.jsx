import { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { LuArrowDownRight } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

// Sample dynamic data based on currency and time period
const dataOptions = {
  EUR: {
    "24hr": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "€54,739.06",
        performance: "+0.38%",
        marketCap: "€1.08T",
        volume: "€1.84M",
        sparklineData: [
          5, 10, 15, 20, 18, 17, 16, 20, 22, 25, 28, 30, 32, 35, 33, 30, 28, 27,
          25, 24, 22, 20, 18, 15,
        ],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "€2,404.62",
        performance: "+2.12%",
        marketCap: "€288.74B",
        volume: "€5.31M",
        sparklineData: [
          8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
          44, 46, 48, 50, 52, 54,
        ],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "€0.53",
        performance: "-0.05%",
        marketCap: "€30.25B",
        volume: "€6.73K",
        sparklineData: [
          15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 9, 10, 11,
          12, 13, 14,
        ],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "€57.64",
        performance: "+1.26%",
        marketCap: "€4.31B",
        volume: "€69.6K",
        sparklineData: [
          5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
          24, 25, 26, 27, 28,
        ],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "€0.03",
        performance: "+0.25%",
        marketCap: "€10.8M",
        volume: "€233.81K",
        sparklineData: [
          5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          5,
        ],
        performanceColor: "green",
      },
    ],
    "7d": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "€55,200.00",
        performance: "+1.00%",
        marketCap: "€1.10T",
        volume: "€1.90M",
        sparklineData: [4, 12, 7, 18, 12, 16, 11],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "€2,500.00",
        performance: "+3.00%",
        marketCap: "€300.00B",
        volume: "€6.00M",
        sparklineData: [10, 14, 7, 13, 18, 22, 20],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "€0.55",
        performance: "-1.00%",
        marketCap: "€32.00B",
        volume: "€7.00K",
        sparklineData: [12, 8, 5, 4, 3, 2, 4],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "€60.00",
        performance: "+2.00%",
        marketCap: "€4.50B",
        volume: "€75.0K",
        sparklineData: [6, 8, 5, 10, 16, 14, 18],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "€0.04",
        performance: "+0.50%",
        marketCap: "€11.0M",
        volume: "€250.00K",
        sparklineData: [6, 5, 4, 6, 5, 6, 5],
        performanceColor: "green",
      },
    ],
    "1m": [
  {
    "name": "Bitcoin",
    "logo": "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
    "symbol": "BTC",
    "price": "€56,000.00",
    "performance": "+2.00%",
    "marketCap": "€1.12T",
    "volume": "€2.00M",
    "sparklineData": [10, 15, 12, 20, 18, 22, 20, 18, 15, 12, 10, 12, 14, 16, 18, 20, 22, 24, 22, 20, 18, 16, 14, 12, 10, 12, 14, 16, 18, 20],
    "performanceColor": "green"
  },
  {
    "name": "Ethereum",
    "logo": "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
    "symbol": "ETH",
    "price": "€2,600.00",
    "performance": "+4.00%",
    "marketCap": "€310.00B",
    "volume": "€7.00M",
    "sparklineData": [12, 18, 14, 20, 24, 30, 28, 26, 24, 22, 20, 22, 24, 26, 28, 30, 32, 34, 36, 34, 32, 30, 28, 26, 24, 22, 20, 22, 24, 26],
    "performanceColor": "green"
  },
  {
    "name": "Ripple",
    "logo": "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
    "symbol": "XRP",
    "price": "€0.58",
    "performance": "-1.50%",
    "marketCap": "€33.00B",
    "volume": "€8.00K",
    "sparklineData": [10, 7, 5, 4, 3, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6],
    "performanceColor": "red"
  },
  {
    "name": "Litecoin",
    "logo": "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
    "symbol": "LTC",
    "price": "€65.00",
    "performance": "+3.00%",
    "marketCap": "€4.80B",
    "volume": "€80.0K",
    "sparklineData": [8, 10, 7, 12, 18, 16, 20, 22, 24, 22, 20, 18, 16, 14, 12, 10, 8, 10, 12, 14, 16, 18, 20, 22, 24, 22, 20, 18, 16, 14],
    "performanceColor": "green"
  },
  {
    "name": "Polygon",
    "logo": "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
    "symbol": "MATIC",
    "price": "€0.05",
    "performance": "+1.00%",
    "marketCap": "€12.0M",
    "volume": "€300.00K",
    "sparklineData": [7, 6, 5, 6, 6, 7, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3],
    "performanceColor": "green"
  }
],

    "6m": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "€60,000.00",
        performance: "+5.00%",
        marketCap: "€1.20T",
        volume: "€2.50M",
        sparklineData: [20, 22, 25, 30, 32, 35, 40],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "€2,800.00",
        performance: "+6.00%",
        marketCap: "€340.00B",
        volume: "€8.00M",
        sparklineData: [15, 20, 25, 30, 35, 40, 45],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "€0.60",
        performance: "-2.00%",
        marketCap: "€35.00B",
        volume: "€9.00K",
        sparklineData: [8, 6, 5, 4, 3, 3, 4],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "€70.00",
        performance: "+4.00%",
        marketCap: "€5.00B",
        volume: "€90.0K",
        sparklineData: [10, 12, 10, 15, 20, 22, 25],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "€0.06",
        performance: "+2.00%",
        marketCap: "€13.0M",
        volume: "€350.00K",
        sparklineData: [8, 7, 6, 7, 7, 8, 7],
        performanceColor: "green",
      },
    ],
  },
  USD: {
    "24hr": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "$54,739.06",
        performance: "+0.38%",
        marketCap: "$1.08T",
        volume: "$1.84M",
        sparklineData: [5, 10, 5, 20, 8, 15, 10],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "$2,404.62",
        performance: "+2.12%",
        marketCap: "$288.74B",
        volume: "$5.31M",
        sparklineData: [8, 12, 8, 10, 15, 20, 18],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "$0.53",
        performance: "-0.05%",
        marketCap: "$30.25B",
        volume: "$6.73K",
        sparklineData: [15, 10, 8, 6, 4, 3, 5],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "$57.64",
        performance: "+1.26%",
        marketCap: "$4.31B",
        volume: "$69.6K",
        sparklineData: [5, 7, 3, 9, 14, 12, 15],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "$0.03",
        performance: "+0.25%",
        marketCap: "$10.8M",
        volume: "$233.81K",
        sparklineData: [5, 5, 5, 5, 5, 5, 5],
        performanceColor: "green",
      },
    ],
    "7d": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "$55,200.00",
        performance: "+1.00%",
        marketCap: "$1.10T",
        volume: "$1.90M",
        sparklineData: [4, 12, 7, 18, 12, 16, 11],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "$2,500.00",
        performance: "+3.00%",
        marketCap: "$300.00B",
        volume: "$6.00M",
        sparklineData: [10, 14, 7, 13, 18, 22, 20],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "$0.55",
        performance: "-1.00%",
        marketCap: "$32.00B",
        volume: "$7.00K",
        sparklineData: [12, 8, 5, 4, 3, 2, 4],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "$60.00",
        performance: "+2.00%",
        marketCap: "$4.50B",
        volume: "$75.0K",
        sparklineData: [6, 8, 5, 10, 16, 14, 18],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "$0.04",
        performance: "+0.50%",
        marketCap: "$11.0M",
        volume: "$250.00K",
        sparklineData: [6, 5, 4, 6, 5, 6, 5],
        performanceColor: "green",
      },
    ],
    "1m": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "$56,000.00",
        performance: "+2.00%",
        marketCap: "$1.12T",
        volume: "$2.00M",
        sparklineData: [10, 15, 12, 20, 18, 22, 20],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "$2,600.00",
        performance: "+4.00%",
        marketCap: "$310.00B",
        volume: "$7.00M",
        sparklineData: [12, 18, 14, 20, 24, 30, 28],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "$0.58",
        performance: "-1.50%",
        marketCap: "$33.00B",
        volume: "$8.00K",
        sparklineData: [10, 7, 5, 4, 3, 2, 3],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "$65.00",
        performance: "+3.00%",
        marketCap: "$4.80B",
        volume: "$80.0K",
        sparklineData: [8, 10, 7, 12, 18, 16, 20],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "$0.05",
        performance: "+1.00%",
        marketCap: "$12.0M",
        volume: "$300.00K",
        sparklineData: [7, 6, 5, 6, 6, 7, 6],
        performanceColor: "green",
      },
    ],
    "6m": [
      {
        name: "Bitcoin",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033",
        symbol: "BTC",
        price: "$60,000.00",
        performance: "+5.00%",
        marketCap: "$1.20T",
        volume: "$2.50M",
        sparklineData: [20, 22, 25, 30, 32, 35, 40],
        performanceColor: "green",
      },
      {
        name: "Ethereum",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033",
        symbol: "ETH",
        price: "$2,800.00",
        performance: "+6.00%",
        marketCap: "$340.00B",
        volume: "$8.00M",
        sparklineData: [15, 20, 25, 30, 35, 40, 45],
        performanceColor: "green",
      },
      {
        name: "Ripple",
        logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033",
        symbol: "XRP",
        price: "$0.60",
        performance: "-2.00%",
        marketCap: "$35.00B",
        volume: "$9.00K",
        sparklineData: [8, 6, 5, 4, 3, 3, 4],
        performanceColor: "red",
      },
      {
        name: "Litecoin",
        logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033",
        symbol: "LTC",
        price: "$70.00",
        performance: "+4.00%",
        marketCap: "$5.00B",
        volume: "$90.0K",
        sparklineData: [10, 12, 10, 15, 20, 22, 25],
        performanceColor: "green",
      },
      {
        name: "Polygon",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033",
        symbol: "MATIC",
        price: "$0.06",
        performance: "+2.00%",
        marketCap: "$13.0M",
        volume: "$350.00K",
        sparklineData: [8, 7, 6, 7, 7, 8, 7],
        performanceColor: "green",
      },
    ],
  },
};

const HomeAssets = () => {
  const [currency, setCurrency] = useState("EUR");
  const [period, setPeriod] = useState("24hr");
  const [data, setData] = useState(dataOptions[currency][period]);

  useEffect(() => {
    setData(dataOptions[currency][period]);
  }, [currency, period]);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const getLimit = (period) => {
    switch (period) {
      case "24hr":
        return 24;
      case "7d":
        return 7;
      case "1m":
        return 30;
      case "6m":
        return 60;
      default:
        return 24;
    }
  };

  return (
    <section className="container mx-auto my-10 mb-20">
      <div className="p-4">
        <div className="bg-white rounded-3xl asset-shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-semibold">Assets</h2>
            <div className="flex items-center gap-3">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="bg-white outline-none rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer px-2 py-1 border-2 border-gray-300"
              >
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select>
              <select
                value={period}
                onChange={handlePeriodChange}
                className="bg-white outline-none rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer px-2 py-1 border-2 border-gray-300"
              >
                <option value="24hr">24hr</option>
                <option value="7d">7d</option>
                <option value="1m">1M</option>
                <option value="6m">6M</option>
              </select>
            </div>
          </div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-left text-lg py-4 px-6">Name</th>
                <th className="text-left text-lg py-4 px-6">Price</th>
                <th className="text-left text-lg py-4 px-6">Performance</th>
                <th className="text-left text-lg py-4 px-6">Market Cap</th>
                <th className="text-left text-lg py-4 px-6">Volume</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src={item.logo}
                          className="w-7 h-7"
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-gray-500 text-sm">
                          {item.symbol}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">{item.price}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold flex items-center ${
                          item.performanceColor === "green"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {item.performanceColor === "green" ? (
                          <>
                            <FiArrowUpRight className="mr-1" size={16} />
                            <span className="text-sm">{item.performance}</span>
                          </>
                        ) : (
                          <>
                            <LuArrowDownRight className="mr-1" size={16} />
                            <span className="text-sm">{item.performance}</span>
                          </>
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">{item.marketCap}</td>
                  <td className="py-4 px-6">{item.volume}</td>
                  <td className="py-4 px-6">
                    <div className="rounded-lg overflow-hidden w-full">
                      <Sparklines
                        key={`${item.symbol}-${period}`} // Unique key for each sparkline chart
                        data={item.sparklineData}
                        svgWidth={100}
                        svgHeight={30}
                        width={100}
                        height={30}
                        margin={5}
                        limit={getLimit(period)}
                      >
                        <SparklinesLine
                          color={item.performanceColor}
                          style={{
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            transition: "stroke 0.5s ease-in-out",
                          }}
                        />
                        <SparklinesSpots
                          style={{
                            fill: item.performanceColor,
                            stroke: item.performanceColor,
                            strokeWidth: 1,
                          }}
                        />
                      </Sparklines>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button className="px-4 py-2 text-md button text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-10">
            <button className="px-4 py-2 text-md flex items-center gap-2 button text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
              See All{" "}
              <span className="animate-arrow">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAssets;
