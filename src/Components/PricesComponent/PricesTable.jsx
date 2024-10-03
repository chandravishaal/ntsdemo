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
    last7Days: [2624.4769228944, 2615.1250638228, 2622.59502825109, 2625.87384268626, 2603.25510165437, 2596.20571829867, 2576.48934428339, 2583.96511822561, 2572.66800703552, 2579.69294727623, 2579.90179147906, 2569.55771212529, 2585.2074714844, 2570.31438469695, 2593.96982872012, 2597.80092588904, 2599.6743964398, 2597.44043733009, 2618.96194447727, 2615.23026298138, 2628.87468236878, 2614.4618600002, 2618.56677951101, 2623.84103685176, 2628.54544188816, 2630.76086611734, 2619.04685970718, 2618.92740811001, 2646.66860580813, 2654.64138470568, 2628.9766747654, 2654.26126373809, 2649.86901151999, 2630.99541273207, 2639.12304412838, 2631.71000738224, 2635.80868665369, 2637.99926465777, 2626.86465432924, 2616.58063400255, 2636.99040569772, 2645.0983831706, 2647.64305356399, 2658.46047253738, 2662.50984904726, 2666.52382751495, 2659.97779705988, 2645.48319248759, 2651.33728870788, 2657.50823557438, 2658.85021809214, 2687.48655747261, 2691.39301395085, 2710.19708133042, 2700.85511405467, 2699.28856578805, 2697.50600114219, 2693.82483043187, 2692.8866084099, 2705.41787203707, 2695.15463541862, 2694.80292062529, 2691.80526901343, 2700.66165361899, 2688.06507989299, 2693.42684001614, 2681.92621055184, 2679.42135561977, 2672.14329885496, 2666.90617603285, 2668.20591460107, 2674.00335546731, 2670.85998971346, 2656.52102626519, 2666.02982470906, 2672.65345204062, 2669.77423658506, 2663.39353336219, 2676.39592602689, 2674.33432628924, 2677.0888019087, 2674.89935279151, 2668.00223788947, 2675.6386088837, 2674.68061018262, 2670.7673577659, 2672.63414879314, 2672.72121669982, 2673.18263315827, 2669.2403733656, 2665.64319977318, 2650.05520850592, 2638.61277347975, 2644.19754361634, 2645.66459504246, 2645.08457787012, 2652.28422608583, 2647.09100353997, 2654.87303017382, 2650.94364998014, 2663.8623754499, 2666.82391975463, 2660.20691333015, 2662.6999138232, 2665.62993780251, 2660.03509218766, 2663.8571925549, 2652.19496644098, 2656.35893083989, 2646.15741357159, 2614.09024407404, 2607.77149771774, 2625.56949174129, 2626.83458184472, 2636.02523138157, 2628.25363942689, 2633.57020106747, 2640.3995046369, 2609.30607784967, 2603.80114485234, 2629.0090889735, 2631.50615046237, 2619.5560417913, 2615.46518003759, 2603.30863349649, 2602.44962322192, 2605.69175899828, 2587.05150146809, 2595.60832818438, 2611.12988506979, 2609.54555639434, 2591.97309433587, 2600.74506973769, 2619.5759504729, 2613.45004760193, 2616.49749351418, 2627.77849449487, 2637.77087288658, 2639.22459479319, 2645.46199403179, 2646.78550094226, 2643.26753616428, 2634.10837351656, 2636.54723071012, 2626.91362985175, 2621.71710041719, 2583.57301036874, 2547.41728159765, 2525.28584313717, 2495.56346497052, 2504.45723159435, 2498.38946820164, 2486.68600373441, 2449.38614378846, 2458.59393693969, 2451.64891608201, 2446.09348389, 2460.42940188988, 2480.38856120828, 2496.35635877285, 2490.24362428143, 2487.4142319574, 2478.09120553976, 2485.46699480984, 2477.36919795926, 2475.60652458882, 2453.46781509184, 2449.54088463145],
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
          <i className="ri-sparkling-2-fill"></i>
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
                      <div className="flex items-center justify-between">
                        {/* <img
                          src={crypto.imageUrl}
                          alt={crypto.symbol}
                          className="w-8 h-8 mr-4"
                        /> */}
                        {/* {crypto.imageUrl} */}
                        <span>
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
