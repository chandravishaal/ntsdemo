import { useState, useEffect, useRef } from "react";
import { CiStar } from "react-icons/ci";
import { FaBitcoin } from "react-icons/fa";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdInformationCircleOutline,
} from "react-icons/io";

import { AreaChart, XAxis, YAxis, ResponsiveContainer, Area } from "recharts";

const coinsData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$26,456",
    change1h: "+0.2",
    change24h: "+1.5",
    change7d: "+3.2",
    volume24h: "$56,152,770,174",
    marketCap: "$1,200,820,521,596",
    last7Days: [2624.4769228944, 2615.1250638228, 2622.59502825109, 2625.87384268626, 2603.25510165437, 2596.20571829867, 2576.48934428339],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,628",
    change1h: "-0.1",
    change24h: "+2.0",
    change7d: "+2.8",
    volume24h: "$13,000,000,000",
    marketCap: "$195,000,000,000",
    last7Days: [
      38908.0423348246, 55438.6723613281, 59331.1845224982, 39538.1462243421,
      59570.2233876041, 59590.8082851419, 80489.1412515743,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    change1h: "0",
    change24h: "0",
    change7d: "0",
    volume24h: "$45,000,000,000",
    marketCap: "$83,000,000,000",
    last7Days: [
      1.00031674568652, 0.999736510594259, 1.00029145074692, 0.999770946589079,
      0.999995265492827, 0.99961451915559, 1.00019831003854,
    ],
    tradable: false,
    imageUrl: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=035",
  },
  {
    id: 4,
    name: "BNB",
    symbol: "BNB",
    price: "$215",
    change1h: "+0.3",
    change24h: "-1.4",
    change7d: "+0.5",
    volume24h: "$1,500,000,000",
    marketCap: "$35,000,000,000",
    last7Days: [
      127.720257701867, 128.290095778509, 129.679857466921, 130.289844963856,
      129.45096167501, 129.621782506332, 129.420855818323,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035",
  },
  {
    id: 5,
    name: "USD Coin",
    symbol: "USDC",
    price: "$1.00",
    change1h: "0",
    change24h: "0",
    change7d: "0",
    volume24h: "$2,000,000,000",
    marketCap: "$26,000,000,000",
    last7Days: [
      131.63631396803, 131.197997741069, 131.226253495503, 131.90091919034,
      132.721320182427, 129.796793569778, 132.090659881067,
    ],
    tradable: false,
    imageUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=035",
  },
  {
    id: 6,
    name: "XRP",
    symbol: "XRP",
    price: "$0.50",
    change1h: "+0.1",
    change24h: "+1.1",
    change7d: "+0.5",
    volume24h: "$1,000,000,000",
    marketCap: "$27,000,000,000",
    last7Days: [
      131.868690996356, 131.406073109754, 131.422755753194, 130.503741862272,
      130.158388886709, 130.229108345137, 130.762189788839,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035",
  },
  {
    id: 7,
    name: "Solana",
    symbol: "SOL",
    price: "$21.87",
    change1h: "+0.4",
    change24h: "+6.7",
    change7d: "+5.5",
    volume24h: "$1,200,000,000",
    marketCap: "$8,000,000,000",
    last7Days: [
      505.087589301272, 504.327479664511, 504.132777123887, 507.378773140066,
      518.363182025524, 517.119612244575, 518.240972149799,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035",
  },
  {
    id: 8,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.26",
    change1h: "-0.1",
    change24h: "-2.3",
    change7d: "+1.0",
    volume24h: "$400,000,000",
    marketCap: "$9,000,000,000",
    last7Days: [
      518.240972149799, 519.074189559037, 525.30627826203, 520.9476287069,
      519.12121695603, 515.795309485881, 516.222918292247,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=035",
  },
  {
    id: 9,
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.06",
    change1h: "+0.2",
    change24h: "+0.4",
    change7d: "-0.1",
    volume24h: "$500,000,000",
    marketCap: "$8,000,000,000",
    last7Days: [
      554.930497785736, 553.531768443783, 548.273488875948, 543.2857858125,
      542.82579111884, 545.629257111657, 547.057815084345,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=035",
  },
  {
    id: 10,
    name: "Polkadot",
    symbol: "DOT",
    price: "$4.12",
    change1h: "+0.3",
    change24h: "-0.8",
    change7d: "+2.2",
    volume24h: "$300,000,000",
    marketCap: "$4,700,000,000",
    last7Days: [
      553.684491175257, 554.43014861385, 553.93169651804, 554.081690386533,
      554.204747981798, 554.124116094172, 554.06663997359,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=035",
  },
  {
    id: 11,
    name: "Shiba Inu",
    symbol: "SHIB",
    price: "$0.000008",
    change1h: "+0.4",
    change24h: "+3.5",
    change7d: "+2.0",
    volume24h: "$600,000,000",
    marketCap: "$5,000,000,000",
    last7Days: [
      38908.0423348246, 55438.6723613281, 59331.1845224982, 39538.1462243421,
      59570.2233876041, 59590.8082851419, 50489.1412515743,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=035",
  },
  {
    id: 12,
    name: "Litecoin",
    symbol: "LTC",
    price: "$65.87",
    change1h: "+0.6",
    change24h: "+1.2",
    change7d: "+1.5",
    volume24h: "$600,000,000",
    marketCap: "$4,500,000,000",
    last7Days: [
      59687.2287362136, 60156.1158868683, 68378.4871619503, 60581.3181829642,
      61009.0632411036, 60584.8239788565, 56298.9850093879,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=035",
  },
  {
    id: 13,
    name: "Chainlink",
    symbol: "LINK",
    price: "$7.45",
    change1h: "-0.2",
    change24h: "+4.8",
    change7d: "+3.0",
    volume24h: "$500,000,000",
    marketCap: "$3,300,000,000",
    last7Days: [
      0.998471164264762, 0.998175158005473, 1.00515461209256, 1.00069825099503,
      1.00006936679544, 1.00021553392484, 1.00070375819718,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=035",
  },
  {
    id: 14,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$15.34",
    change1h: "+0.5",
    change24h: "+2.1",
    change7d: "+3.5",
    volume24h: "$300,000,000",
    marketCap: "$5,000,000,000",
    last7Days: [
      135.510075634636, 134.328715315593, 135.51209248287, 136.122037317203,
      136.561898110799, 136.326655233202, 135.422145929149,
    ],
    tradable: true,
    imageUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=035",
  },
];

// Tooltip component
const InfoTooltip = ({ text }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleTooltip = () => {
    setIsTooltipVisible((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <span
        className="text-black-500 font-bold cursor-pointer hover:text-black-700"
        onMouseEnter={!isMobile ? () => setIsTooltipVisible(true) : null}
        onMouseLeave={!isMobile ? () => setIsTooltipVisible(false) : null}
        onClick={isMobile ? handleToggleTooltip : null}
      >
        <IoMdInformationCircleOutline />
      </span>
      {isTooltipVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded shadow-lg transition-opacity duration-200 z-10 sm:w-48 md:left-auto md:right-0 md:-translate-x-0">
          <div className="whitespace-normal text-center">{text}</div>
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
  const [selectedRows, setSelectedRows] = useState(50);
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
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (isModalOpen) {
      scrollPositionRef.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isModalOpen]);
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const relevantColumns = Object.keys(visibleColumns).filter((column) =>
    ["last7Days", "change1h"].includes(column)
  );

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
      <div className="flex justify-end items-center h-full w-full">
        <ResponsiveContainer width={120} height={60}>
          <AreaChart data={sparklineData}>
            <defs>
              <linearGradient
                id={`colorTrend-${trendColor}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={trendColor} stopOpacity={0.1} />
                <stop offset="100%" stopColor={trendColor} stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="price"
              stroke={trendColor}
              fill={`url(#colorTrend-${trendColor})`}
              strokeWidth={0.6}
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

  const handleResetChanges = () => {
    setVisibleColumns({
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
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-20 mb-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-montserrat  font-bold">
          Explore Crypto Prices
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4">
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
          <span> Customize</span>
        </button>
      </div>

      <div className="responsiveTable">
        <div className="min-w-full bg-white rounded-lg overflow-y-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-xl text-sm">
              <tr className="items-center">
                <th className="px-2 py-2 border-b text-xs text-right">#</th>
                {visibleColumns.name && (
                  <th className="px-8 text-xs py-2 border-b text-left font-montserrat ">
                    Coin
                  </th>
                )}
                {visibleColumns.price && (
                  <th className="px-4 text-xs py-2 border-b text-right font-montserrat pr-0">
                    Price
                  </th>
                )}
                {visibleColumns.change1h && (
                  <th className="group px-4 py-2 pr-0 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat">
                    <span className="flex text-xs items-center gap-1 justify-end flex-row">
                      <span
                        className={`transition-opacity opacity-0 group-hover:opacity-100`}
                        onClick={() => sortData("change1h")}
                      >
                        {sortDirection.change1h === "asc" ? (
                          <IoMdArrowDropup />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </span>
                      1h
                      <InfoTooltip text="The percentage of change in the value compared to 1 hour ago." />
                    </span>
                  </th>
                )}
                {visibleColumns.change24h && (
                  <th className="group px-4 py-2 pr-0 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat">
                    <span className="flex text-xs items-center gap-1 justify-end flex-row">
                      <span
                        className="transition-opacity opacity-0 group-hover:opacity-100"
                        onClick={() => sortData("change24h")}
                      >
                        {sortDirection.change24h === "asc" ? (
                          <IoMdArrowDropup />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </span>
                      24h
                      <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
                    </span>
                  </th>
                )}
                {visibleColumns.change7d && (
                  <th className="group px-4 py-2 pr-0 border-b text-center whitespace-nowrap lg:whitespace-normal font-montserrat">
                    <span className="flex text-xs gap-1 items-center justify-end flex-row">
                      <span
                        className="transition-opacity opacity-0 group-hover:opacity-100"
                        onClick={() => sortData("change7d")}
                      >
                        {sortDirection.change7d === "asc" ? (
                          <IoMdArrowDropup />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </span>
                      7d
                      <InfoTooltip text="The percentage of change in the value compared to 7 days ago." />
                    </span>
                  </th>
                )}
                {visibleColumns.volume24h && (
                  <th className="group px-2 py-2 pr-0 border-b text-center whitespace-nowrap lg:whitespace-normal cursor-pointer">
                    <span className="flex text-xs gap-1 items-center justify-end flex-row">
                      <span
                        className="transition-opacity opacity-0 group-hover:opacity-100"
                        onClick={() => sortData("volume24h")}
                      >
                        {sortDirection.volume24h === "asc" ? (
                          <IoMdArrowDropup />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </span>
                      24 Volume
                      <InfoTooltip text="The total value of the currency that has been traded in the last 24 hours." />
                    </span>
                  </th>
                )}
                {visibleColumns.marketCap && (
                  <th className="group py-2 cursor-pointer whitespace-nowrap lg:whitespace-normal border-b justify-end">
                    <span className="flex text-xs items-center gap-1 justify-end flex-row">
                      <span
                        className="transition-opacity opacity-0 group-hover:opacity-100"
                        onClick={() => sortData("marketCap")}
                      >
                        {sortDirection.marketCap === "asc" ? (
                          <IoMdArrowDropup />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </span>
                      Market Cap
                      <InfoTooltip text="The total value of the number of coins in circulation multiplied by the current market price of a single coin." />
                    </span>
                  </th>
                )}

                {visibleColumns.last7Days && (
                  <th className="px-4 py-2 pr-0 w-full flex items-center gap-1 text-xs border-b justify-end whitespace-nowrap lg:whitespace-normal">
                    <div className="flex items-center gap-2">
                      {" "}
                      {/* Added gap here */}
                      <span className="text-xs">Last 7 Days</span>
                      <InfoTooltip text="This shows a sparkline graph of the last 7 days of the currency's value." />
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((crypto, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="px-2 py-4 border-b text-right">
                    <div className="flex justify-end items-center pl-2">
                      <CiStar />
                      <span className="text-xs">
                        &nbsp;{index + 1}
                      </span>
                    </div>
                  </td>
                  {visibleColumns.name && (
                    <td className=" px-8 py-4 border-b text-start w-[200px]">
                      <div className="flex items-center w-[200px] justify-between">
                        <span className="flex items-center gap-2">
                        <img
                          src={crypto.imageUrl}
                          alt={crypto.symbol}
                          className="w-5 h-5"
                        />
                          <span className="font-semibold text-sm">{crypto.name}</span>{" "}
                          <span className="text-xs text-gray-600">{crypto.symbol}</span>
                        </span>
                        {crypto.tradable && (
                          <span className="cursor-pointer px-1.5 text-xs font-medium text-inline border border-green-500 text-primary-500 rounded-md text-center text-green-500 mr-1">
                            Buy
                          </span>
                        )}
                      </div>
                    </td>
                  )}
                  {visibleColumns.price && (
                    <td className="px-4 pr-0 py-4 border-b text-sm text-right">
                      {crypto.price.toLocaleString("en-US")}
                    </td>
                  )}
                  {visibleColumns.change1h && (
                    <td
                      className={`border-b text-sm text-right px-8 py-4 pr-0 ${
                        crypto.change1h < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <div className="flex font-semibold justify-end items-center">
                        {crypto.change1h < 0 && <IoMdArrowDropdown />}
                        {crypto.change1h > 0 && <IoMdArrowDropup />}
                        {Math.abs(crypto.change1h)}%
                      </div>
                    </td>
                  )}
                  {visibleColumns.change24h && (
                    <td
                      className={`border-b text-sm text-right px-8 py-4 pr-0 ${
                        crypto.change24h < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <div className="flex justify-end font-semibold items-center">
                        {crypto.change24h < 0 && <IoMdArrowDropdown />}
                        {crypto.change24h > 0 && <IoMdArrowDropup />}
                        {Math.abs(crypto.change24h)}%
                      </div>
                    </td>
                  )}
                  {visibleColumns.change7d && (
                    <td
                      className={`border-b text-sm text-right px-8 py-4 pr-0 ${
                        crypto.change7d < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      <div className="flex justify-end font-semibold items-center">
                        {crypto.change7d < 0 && <IoMdArrowDropdown />}
                        {crypto.change7d > 0 && <IoMdArrowDropup />}
                        {Math.abs(crypto.change7d)}%
                      </div>
                    </td>
                  )}
                  {visibleColumns.volume24h && (
                    <td className="border-b text-sm text-right px-4 py-4 pr-0">
                      {crypto.volume24h}
                    </td>
                  )}
                  {visibleColumns.marketCap && (
                    <td className="border-b text-sm text-right px-4 py-4 pr-0">
                      {crypto.marketCap}
                    </td>
                  )}
                  {visibleColumns.last7Days && (
                    <td className="border-b text-right px-4 py-4 pr-0">
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 relative" ref={modalRef}>
            <h2 className="text-xl font-semibold mb-4 mt-4">
              Select Columns to Display
            </h2>
            <div className="flex flex-col items-center mt-2 space-y-4">
              {relevantColumns.map((column) => (
                <label
                  className="flex items-center justify-between w-full"
                  key={column}
                >
                  <span className="text-sm text-gray-700 mr-6">{column}</span>{" "}
                  {/* Adjusted margin */}
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={visibleColumns[column]}
                      onChange={() => handleColumnVisibilityChange(column)}
                      className="sr-only" // Hide the checkbox
                    />
                    {/* Toggle background */}
                    <div
                      className={`w-12 h-6 rounded-full shadow-inner transition-colors duration-300 ${
                        visibleColumns[column]
                          ? "bg-primaryCyan"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    {/* Toggle switch circle */}
                    <div
                      className={`absolute top-0.5 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                        visibleColumns[column] ? "translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mb-4 mt-6">
              <h3 className="text-sm font-semibold text-gray-700">Rows</h3>
              <div className="mt-2 flex space-x-2">
                {[50, 100, 300].map((row) => (
                  <button
                    key={row}
                    className={`px-4 py-2 flex-1 text-sm text-center ${
                      selectedRows === row
                        ? "bg-cyan-50 text-primaryCyan"
                        : "text-gray-700 hover:bg-gray-100"
                    } rounded-md`}
                    onClick={() => setSelectedRows(row)}
                  >
                    {row}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleResetChanges}
                className="bg-gray-100 py-2 px-4 rounded-md mr-2"
              >
                Reset
              </button>
              <button
                onClick={handleApplyChanges}
                className="bg-primaryCyan text-white py-2 px-4 rounded-md"
              >
                Apply
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceTable;
