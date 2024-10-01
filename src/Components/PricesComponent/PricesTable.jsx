import { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const coinsData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$26,456",
    change1h: "+0.2",
    change24h: "+1.5",
    change7d: "+3.2",
    volume24h: "$25B",
    marketCap: "$502B",
    last7Days: [
      59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642,
      61009.0632411036, 60584.8239788565, 56298.9850093879,
    ],
    tradable: true,
    imageUrl: <FaBitcoin />,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,628",
    change1h: "-0.1",
    change24h: "+2.0",
    change7d: "+2.8",
    volume24h: "$13B",
    marketCap: "$195B",
    last7Days: [
      38908.0423348246, 55438.6723613281, 59331.1845224982, 39538.1462243421,
      59570.2233876041, 59590.8082851419, 80489.1412515743,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/eth/64",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    change1h: "0",
    change24h: "0",
    change7d: "0",
    volume24h: "$45B",
    marketCap: "$83B",
    last7Days: [
      1.00031674568652, 0.999736510594259, 1.00029145074692, 0.999770946589079,
      0.999995265492827, 0.99961451915559, 1.00019831003854,
    ],
    tradable: false,
    imageUrl: "https://cryptoicons.org/api/icon/usdt/64",
  },
  {
    id: 4,
    name: "BNB",
    symbol: "BNB",
    price: "$215",
    change1h: "+0.3",
    change24h: "-1.4",
    change7d: "+0.5",
    volume24h: "$1.5B",
    marketCap: "$35B",
    last7Days: [
      127.720257701867, 128.290095778509, 129.679857466921, 130.289844963856,
      129.45096167501, 129.621782506332, 129.420855818323,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/bnb/64",
  },
  {
    id: 5,
    name: "USD Coin",
    symbol: "USDC",
    price: "$1.00",
    change1h: "0",
    change24h: "0",
    change7d: "0",
    volume24h: "$2B",
    marketCap: "$26B",
    last7Days: [
      131.63631396803, 131.197997741069, 131.226253495503, 131.90091919034,
      132.721320182427, 129.796793569778, 132.090659881067,
    ],
    tradable: false,
    imageUrl: "https://cryptoicons.org/api/icon/usdc/64",
  },
  {
    id: 6,
    name: "XRP",
    symbol: "XRP",
    price: "$0.50",
    change1h: "+0.1",
    change24h: "+1.1",
    change7d: "+0.5",
    volume24h: "$1B",
    marketCap: "$27B",
    last7Days: [
      131.868690996356, 131.406073109754, 131.422755753194, 130.503741862272,
      130.158388886709, 130.229108345137, 130.762189788839,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/xrp/64",
  },
  {
    id: 7,
    name: "Solana",
    symbol: "SOL",
    price: "$21.87",
    change1h: "+0.4",
    change24h: "+6.7",
    change7d: "+5.5",
    volume24h: "$1.2B",
    marketCap: "$8B",
    last7Days: [
      505.087589301272, 504.327479664511, 504.132777123887, 507.378773140066,
      518.363182025524, 517.119612244575, 518.240972149799,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/sol/64",
  },
  {
    id: 8,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.26",
    change1h: "-0.1",
    change24h: "-2.3",
    change7d: "+1.0",
    volume24h: "$400M",
    marketCap: "$9B",
    last7Days: [
      518.240972149799, 519.074189559037, 525.30627826203, 520.9476287069,
      519.12121695603, 515.795309485881, 516.222918292247,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/ada/64",
  },
  {
    id: 9,
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.06",
    change1h: "+0.2",
    change24h: "+0.4",
    change7d: "-0.1",
    volume24h: "$500M",
    marketCap: "$8B",
    last7Days: [
      554.930497785736, 553.531768443783, 548.273488875948, 543.2857858125,
      542.82579111884, 545.629257111657, 547.057815084345,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/doge/64",
  },
  {
    id: 10,
    name: "Polkadot",
    symbol: "DOT",
    price: "$4.12",
    change1h: "+0.3",
    change24h: "-0.8",
    change7d: "+2.2",
    volume24h: "$300M",
    marketCap: "$4.7B",
    last7Days: [
      553.684491175257, 554.43014861385, 553.93169651804, 554.081690386533,
      554.204747981798, 554.124116094172, 554.06663997359,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/dot/64",
  },
  {
    id: 11,
    name: "Shiba Inu",
    symbol: "SHIB",
    price: "$0.000008",
    change1h: "+0.4",
    change24h: "+3.5",
    change7d: "+2.0",
    volume24h: "$600M",
    marketCap: "$5B",
    last7Days: [
      38908.0423348246, 55438.6723613281, 59331.1845224982, 39538.1462243421,
      59570.2233876041, 59590.8082851419, 50489.1412515743,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/shib/64",
  },
  {
    id: 12,
    name: "Litecoin",
    symbol: "LTC",
    price: "$65.87",
    change1h: "+0.6",
    change24h: "+1.2",
    change7d: "+1.5",
    volume24h: "$600M",
    marketCap: "$4.5B",
    last7Days: [
      59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642,
      61009.0632411036, 60584.8239788565, 56298.9850093879,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/ltc/64",
  },
  {
    id: 13,
    name: "Chainlink",
    symbol: "LINK",
    price: "$7.45",
    change1h: "-0.2",
    change24h: "+4.8",
    change7d: "+3.0",
    volume24h: "$500M",
    marketCap: "$3.3B",
    last7Days: [
      0.998471164264762, 0.998175158005473, 1.00515461209256, 1.00069825099503,
      1.00006936679544, 1.00021553392484, 1.00070375819718,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/link/64",
  },
  {
    id: 14,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$15.34",
    change1h: "+0.5",
    change24h: "+2.1",
    change7d: "+3.5",
    volume24h: "$300M",
    marketCap: "$5B",
    last7Days: [
      135.510075634636, 134.328715315593, 135.51209248287, 136.122037317203,
      136.561898110799, 136.326655233202, 135.422145929149,
    ],
    tradable: true,
    imageUrl: "https://cryptoicons.org/api/icon/avax/64",
  },
];

// Tooltip component
const InfoTooltip = ({ text }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
    return (
      <div className="relative inline-block">
        <span
          className="text-black-500 font-bold cursor-pointer hover:text-black-700"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          <IoMdInformationCircleOutline />
        </span>
        {isTooltipVisible && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded transition-opacity duration-200 z-10">
            {text}
          </div>
        )}
      </div>
    );
  };

const PriceTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState([...coinsData]);
  const [sortDirection, setSortDirection] = useState({
    marketCap: null,
    change1h: null,
    change24h: null,
    change7d: null,
    volume24h: null,
  });
  const [notFound, setNotFound] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
    symbol: true,
    price: true,
    change1h: true,
    change24h: true,
    change7d: true,
    volume24h: true,
    marketCap: true,
    last7Days: true,
    tradable: true,
    imageUrl: true,
  });

  useEffect(() => {
    const filteredData = coinsData.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setNotFound(filteredData.length === 0);
    setSortedData(filteredData);
  }, [searchTerm]);

  const sortData = (column) => {
    const direction = sortDirection[column] === "asc" ? "desc" : "asc";

    const sorted = [...sortedData].sort((a, b) => {
      const aValue = parseFloat(a[column].replace(/[%,$]/g, "")); // Remove % and $ for proper comparison
      const bValue = parseFloat(b[column].replace(/[%,$]/g, ""));
      return direction === "asc" ? aValue - bValue : bValue - aValue;
    });

    setSortedData(sorted);
    setSortDirection((prev) => ({ ...prev, [column]: direction }));
  };

  const getTrendColor = (data) => {
    const firstPrice = data[0];
    const lastPrice = data[data.length - 1];
    return lastPrice > firstPrice ? "#00C49F" : "#FF0000"; // Green for upward, Red for downward
  };

  // Function to render the sparkline graph with a shaded area and color-specific shadow
  const renderSparkline = (data) => {
    if (!data || data.length === 0) {
      return <div>No data available</div>;
    }

    const sparklineData = data.map((price, index) => ({ price, index }));
    const trendColor = getTrendColor(data);

    return (
      <div className="flex justify-center items-center h-full">
        <ResponsiveContainer width={180} height={60}>
          <AreaChart data={sparklineData}>
            <defs>
              <linearGradient
                id={`colorTrend-${trendColor}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={trendColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={trendColor} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="price"
              stroke={trendColor}
              fill={`url(#colorTrend-${trendColor})`}
              strokeWidth={2}
              dot={false}
            />
            <XAxis hide />
            <YAxis hide />
            {/* <Tooltip /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleColumnVisibilityChange = (column) => {
    setVisibleColumns((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  const handleApplyChanges = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-20 mb-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-montserrat  font-bold px-5">
          Top Cryptocurrency Prices and Market Cap
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4 px-3">
        <input
          type="text"
          className="w-1/2 bg-gray-100 border-gray-300 py-2 px-6 rounded-md hover:bg-gray-300 mr-4 font-montserrat"
          placeholder="Search Cryptocurrency"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleOpenModal}
          className="bg-gray-100 border-gray-300 py-2 px-6 rounded-md hover:bg-gray-300 mr-4 font-montserrat"
        >
          <i className="ri-sparkling-2-fill"></i>
          <span> Customize</span>
        </button>
      </div>

      <div className="responsiveTable">
        <div className="min-w-full bg-white border rounded-lg shadow-xl overflow-y-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-xl text-sm">
              <tr>
                <th className="px-8 py-2 border-b text-center">#</th>
                {visibleColumns.name && (
                  <th className="px-8 py-2 border-b text-left font-montserrat ">
                    Coin
                  </th>
                )}
                {visibleColumns.price && (
                  <th className="px-4 py-2 border-b text-center font-montserrat ">
                    Price
                  </th>
                )}
                {visibleColumns.change1h && (
                  <th
                    className="group px-4 py-2 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat"
                    onClick={() => sortData("change1h")}
                  >
                    <span className="flex items-center justify-center flex-row">
                      <span
                        className={`mr-1 transition-opacity opacity-0 group-hover:opacity-100`}
                      >
                        {sortDirection.change1h === "asc" ? (
                          <i className="ri-arrow-up-s-fill"></i>
                        ) : (
                          <i className="ri-arrow-down-s-fill"></i>
                        )}
                      </span>
                      1h
                      <InfoTooltip text="The percentage of change in the value compared to 1 hour ago."/>
                    </span>
                  </th>
                )}
                {visibleColumns.change24h && (
                  <th className="group px-4 py-2 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat">
                    <span
                      className="flex items-center justify-center flex-row"
                      onClick={() => sortData("change24h")}
                    >
                      <span className="mr-1 transition-opacity opacity-0 group-hover:opacity-100">
                        {sortDirection.change24h === "asc" ? (
                          <i className="ri-arrow-up-s-fill"></i>
                        ) : (
                          <i className="ri-arrow-down-s-fill"></i>
                        )}
                      </span>
                      24h
                      <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
                    </span>
                  </th>
                )}
                {visibleColumns.change7d && (
                  <th
                    className="group px-4 py-2 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat"
                    onClick={() => sortData("change7d")}
                  >
                    <span className="flex items-center justify-center flex-row">
                      <span className="mr-1 transition-opacity opacity-0 group-hover:opacity-100">
                        {sortDirection.change7d === "asc" ? (
                          <i className="ri-arrow-up-s-fill"></i>
                        ) : (
                          <i className="ri-arrow-down-s-fill"></i>
                        )}
                      </span>
                      7d
                      <InfoTooltip text="The percentage of change in the value compared to 7 days ago." />
                    </span>
                  </th>
                )}
                {visibleColumns.volume24h && (
                  <th
                    className="group px-2 py-2 border-b text-center f whitespace-nowrap lg:whitespace-normal cursor-pointer"
                    onClick={() => sortData("volume24h")}
                  >
                    <span className="flex items-center justify-center flex-row">
                      <span className="mr-1 transition-opacity opacity-0 group-hover:opacity-100">
                        {sortDirection.volume24h === "asc" ? (
                          <i className="ri-arrow-up-s-fill"></i>
                        ) : (
                          <i className="ri-arrow-down-s-fill"></i>
                        )}
                      </span>
                      Volume (24h)
                      <InfoTooltip text="The total value of the currency that has been traded in the last 24 hours." />
                    </span>
                  </th>
                )}
                {visibleColumns.marketCap && (
                  <th
                    className="group py-2 cursor-pointer whitespace-nowrap lg:whitespace-normal border-b justify-center"
                    onClick={() => sortData("marketCap")}
                  >
                    <span className="flex items-center justify-center flex-row">
                      <span className="mr-1 transition-opacity opacity-0 group-hover:opacity-100">
                        {sortDirection.marketCap === "asc" ? (
                          <i className="ri-arrow-up-s-fill"></i>
                        ) : (
                          <i className="ri-arrow-down-s-fill"></i>
                        )}
                      </span>
                      Market Cap
                      <InfoTooltip text="The total value of the number of coins in circulation multiplied by the current market price of a single coin." />
                    </span>
                  </th>
                )}

                {visibleColumns.last7Days && (
                  <th className="px-4 border-b text-center font-montserrat whitespace-nowrap lg:whitespace-normal ">
                    Last 7 Days
                    <InfoTooltip text="This shows a sparkline graph of the last 7 days of the currency's value." />
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((crypto, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className=" px-8 py-4 border-b text-center">
                    {index + 1}
                  </td>
                  {visibleColumns.name && (
                    <td className=" px-8 py-4 border-b text-start">
                      <div className="flex items-center justify-stretch">
                        {/* <img
                          src={crypto.imageUrl}
                          alt={crypto.symbol}
                          className="w-8 h-8 mr-4"
                        /> */}
                        {/* {crypto.imageUrl} */}
                        <span>
                          {crypto.name} ({crypto.symbol})
                        </span>
                      </div>
                    </td>
                  )}
                  {visibleColumns.price && (
                    <td className="px-4 py-4 border-b text-center">
                      {crypto.price.toLocaleString("en-US")}
                    </td>
                  )}
                  {visibleColumns.change1h && (
                    <td
                      className={`border-b text-center px-8 py-4 ${
                        crypto.change1h < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        {crypto.change1h < 0 && (
                          <span className="mr-1">
                            <i className="ri-arrow-down-s-fill"></i>
                          </span>
                        )}
                        {crypto.change1h > 0 && (
                          <span className="mr-1">
                            <i className="ri-arrow-up-s-fill"></i>
                          </span>
                        )}
                        {Math.abs(crypto.change1h)}%
                      </div>
                    </td>
                  )}
                  {visibleColumns.change24h && (
                    <td
                      className={`border-b text-center px-8 py-4 ${
                        crypto.change24h < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        {crypto.change24h < 0 && (
                          <span className="inline-block mr-1">
                            <i className="ri-arrow-down-s-fill"></i>
                          </span>
                        )}
                        {crypto.change24h > 0 && (
                          <span className="inline-block mr-1">
                            <i className="ri-arrow-up-s-fill"></i>
                          </span>
                        )}
                        {Math.abs(crypto.change24h)}%
                      </div>
                    </td>
                  )}
                  {visibleColumns.change7d && (
                    <td
                      className={`border-b text-center px-8 py-4 ${
                        crypto.change7d < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        {crypto.change7d < 0 && (
                          <span className="inline-block mr-1">
                            <i className="ri-arrow-down-s-fill"></i>
                          </span>
                        )}
                        {crypto.change7d > 0 && (
                          <span className="inline-block mr-1">
                            <i className="ri-arrow-up-s-fill"></i>
                          </span>
                        )}
                        {Math.abs(crypto.change7d)}%
                      </div>
                    </td>
                  )}
                  {visibleColumns.volume24h && (
                    <td className="border-b text-center px-4 py-4">
                      {crypto.volume24h}
                    </td>
                  )}
                  {visibleColumns.marketCap && (
                    <td className="border-b text-center px-4 py-4">
                      {crypto.marketCap}
                    </td>
                  )}
                  {visibleColumns.last7Days && (
                    <td className="border-b center px-4 py-4">
                      {renderSparkline(crypto.last7Days)}
                    </td>
                  )}
                </tr>
              ))}
              {notFound && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center font-century-gothic font-semibold mt-10 py-4"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
