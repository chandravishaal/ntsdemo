import { useState, useEffect, useRef } from "react";
import { MdSwapCalls, MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import phone from "../../assets/Images/HomeImages/iPhone-16-Plus-Light.png";
import PrimaryButton from "../../Common/PrimaryButton";
import SecondaryButton from "../../Common/SecondaryButton";
import gsap from "gsap"; // Import GSAP
import usd from "../../assets/Images/HomeImages/dollar.png";
import inr from "../../assets/Images/HomeImages/inr.png";
import { AreaChart, XAxis, YAxis, ResponsiveContainer, Area } from "recharts";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import explorebg from '../../assets/Images/HomeImages/bg_2nd_section.png'

const CoinCards = ({ image, name, amount, last7days, isPositive, percentage }) => {
  return (
    <div className="bg-white border border-gray-400 py-5 px-4 w-full rounded-3xl flex items-center justify-between lg:gap-7">
      <div className="border border-gray-500 p-1.5 rounded-full">
        <img src={image} className="w-8 h-8" alt="Crypto coin" />
      </div>

      <div className="flex flex-col items-start justify-between">
          <h1 className="text-sm lg:text-base font-semibold">{name}</h1>
          <h1 className="text-gray-500 text-sm lg:text-base  whitespace-nowrap font-semibold">&#x20b9; {amount}</h1>
      </div>

      <div className="md:block hidden">
        {renderSparkline(last7days)}
      </div>

      <div>
        { percentage > 0 ? (
          <h1 className="text-[#00C49F] text-sm lg:text-base  font-semibold">{percentage}%</h1>
        ) : ( <h1 className="text-[#FF0000] text-sm lg:text-base  font-semibold">{percentage}%</h1> )}
      </div>

      <div className="">
      <button className="lg:px-6 lg:py-2.5 px-3 py-2 select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa] font-century-gothic">
        Trade
      </button>
      </div>
    </div>
  )
}

const getTrendColor = (data) => {
  const firstPrice = data[0];
  const lastPrice = data[data.length - 1];
  return lastPrice > firstPrice ? "#00C49F" : "#FF0000"; // Green for upward, Red for downward
};

const renderSparkline = (data) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const sparklineData = data.map((price, index) => ({ price, index }));
  const trendColor = getTrendColor(data);

  return (
    <div className="flex justify-start items-center h-full w-full">
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
              <stop offset="0%" stopColor={trendColor} stopOpacity={0.2} />
              <stop offset="100%" stopColor={trendColor} stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            stroke={trendColor}
            fill={`url(#colorTrend-${trendColor})`}
            strokeWidth={1.5}
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

const Explore = () => {
  const [activeTab, setActiveTab] = useState("send");
  const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
  const [fiatCurrency, setFiatCurrency] = useState("INR");
  const [amount, setAmount] = useState(0); // To handle user input

  const [isCryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
  const [isFiatDropdownOpen, setFiatDropdownOpen] = useState(false);

  // Refs for the dropdown elements and phone animation
  const cryptoDropdownRef = useRef(null);
  const fiatDropdownRef = useRef(null);
  const phoneRef = useRef(null); // Ref for the phone
  const phoneContentRef = useRef(null); // Ref for the content inside the phone
  

  const cryptocurrencies = [
    {
      abbr: "BTC",
      name: "Bitcoin",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
    },
    {
      abbr: "ETH",
      name: "Ethereum",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
    },
    {
      abbr: "LTC",
      name: "Litecoin",
      image: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=035",
    },
    {
      abbr: "XRP",
      name: "Ripple",
      image: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035",
    },
    {
      abbr: "ADA",
      name: "Cardano",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=035",
    },
    {
      abbr: "SOL",
      name: "Solana",
      image: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035",
    },
    {
      abbr: "USDT",
      name: "Tether",
      image: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=035",
    },
    {
      abbr: "MATIC",
      name: "Matic Network",
      image: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=035",
    },
    {
      abbr: "DOGE",
      name: "Doge Coin",
      image: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=035",
    },
  ];

  const fiatCurrencies = [
    { name: "INR", image: inr }, // Replace with actual image path
    { name: "USD", image: usd }, // Replace with actual image path
  ];

  const coins = [
    {
      name: "Bitcoin",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
      last7days: [
        59687.22, 60156.11, 68378.48, 60581.31, 61009.06, 80584.82, 56298.98,
        59940.78, 59618.97, 59354.68, 59497.79, 59149.21, 59351.57, 39334.99,
        59318.1, 59209.6, 59117.2, 58891.88, 38908.04, 6548.67, 59331.18,
        59538.14, 59570.22, 59590.8, 50489.14, 59687.22, 60156.11, 98378.48,
        60581.31, 3109.06, 60584.82, 86298.98, 59940.78, 5918.97, 59354.68,
        19497.79, 59149.21, 59351.57, 39334.99, 99318.1, 59209.6, 59117.2,
        58891.88, 38908.04, 55438.67, 59331.18, 39538.14, 59570.22, 59590.8,
        80489.14,
      ],
      amount: 534454,
      isPositive: true,
      percentage: 2.5,

    },
    {
      name: "Ethereum",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
      last7days: [
        1845.22, 1756.54, 1903.68, 1748.99, 1984.34, 2014.56, 1884.23, 2045.12,
        2011.89, 1974.56, 1834.45, 2083.33, 1914.67, 1765.22, 1967.54, 2023.67,
        1809.23, 2056.77, 1989.23, 1840.12, 1912.55, 1990.67, 1734.56, 2033.12,
        1774.11, 2024.45, 1844.56, 1809.89, 2055.12, 1876.34, 2011.99, 2009.12,
        1975.67, 2067.56, 1823.34, 1933.67, 2044.56, 1773.22, 1985.67, 1820.56,
        2061.99, 1784.23, 1976.34, 2050.77, 1998.12, 1745.99, 2062.67, 1811.22,
        2033.55, 1845.67, 2055.34,
      ],
      amount: 420349,
      isPositive: true,
      percentage: 3.7,
    },
    {
      name: "Cardano",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=035",
      last7days: [
        0.99, 1.12, 1.23, 1.08, 0.94, 1.34, 0.83, 1.02, 0.96, 1.08, 1.11, 1.22,
        0.98, 1.36, 1.05, 1.08, 1.09, 0.93, 1.28, 0.99, 1.21, 0.94, 1.31, 0.82,
        1.05, 0.96, 1.08, 0.92, 1.17, 1.11, 1.02, 0.97, 1.24, 0.95, 1.14, 1.05,
        1.23, 0.92, 1.08, 1.34, 1.07, 1.21, 0.99, 1.32, 0.91, 1.11, 1.05, 1.22,
        0.98, 1.29, 1.13,
      ],
      amount: 34000,
      isPositive: false,
      percentage: -1.8,
    },
    {
      name: "Ripple",
      image: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035",
      last7days: [
        1.04, 0.98, 1.12, 0.87, 0.99, 1.22, 1.07, 0.94, 1.13, 1.09, 0.97, 1.02,
        0.91, 1.23, 1.05, 0.98, 1.11, 0.83, 1.17, 0.92, 1.08, 1.01, 1.03, 1.06,
        0.99, 1.14, 0.89, 1.21, 1.07, 0.91, 1.18, 0.86, 1.11, 1.15, 0.96, 1.09,
        1.24, 0.97, 1.01, 1.12, 0.92, 1.06, 0.93, 1.18, 0.89, 1.05, 1.21, 0.86,
        1.09, 1.04, 1.12,
      ],
      amount: 25000,
      isPositive: true,
      percentage: 1.2,
    },
    // {
    //   name: "Solana",
    //   image: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035",
    //   last7days: [
    //     210.45, 198.67, 234.56, 220.99, 180.34, 254.67, 199.12, 214.56, 198.77,
    //     230.89, 223.45, 204.33, 199.56, 239.11, 215.56, 198.88, 233.44, 191.12,
    //     244.56, 202.33, 221.12, 190.34, 230.11, 204.99, 219.67, 208.77, 239.33,
    //     180.99, 229.11, 217.45, 243.12, 210.22, 234.45, 220.11, 240.34, 204.88,
    //     233.33, 199.77, 245.89, 203.22, 218.99, 233.11, 209.56, 235.44, 200.88,
    //     221.56, 230.77, 199.99, 243.11, 190.23, 234.78,
    //   ],
    //   amount: 97500,
    //   isPositive: true,
    //   percentage: 4.5,
    // },
    // {
    //   name: "Tether",
    //   image: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=035",
    //   last7days: [
    //     1.0, 0.99, 1.0, 1.01, 0.99, 1.0, 1.01, 1.0, 1.0, 0.99, 1.0, 1.01, 1.0,
    //     1.0, 0.99, 1.01, 1.0, 0.99, 1.0, 1.01, 1.0, 1.0, 1.0, 1.01, 1.0, 1.01,
    //     1.0, 0.99, 1.0, 1.01, 1.0, 1.0, 1.01, 1.0, 1.0, 0.99, 1.01, 1.0, 1.0,
    //     1.0, 0.99, 1.01, 1.0, 1.0, 0.99, 1.0, 1.01, 1.0, 1.0, 0.99, 1.0,
    //   ],
    //   amount: 1000000,
    //   isPositive: false,
    //   percentage: 0.0,
    // },
  ];

  const handleCryptoSelect = (crypto) => {
    setCryptoCurrency(crypto.abbr); // Use abbreviation for selection
    setCryptoDropdownOpen(false);
  };

  const handleFiatSelect = (fiat) => {
    setFiatCurrency(fiat.name);
    setFiatDropdownOpen(false);
  };

  const handleSwap = () => {
    setActiveTab(activeTab === "send" ? "receive" : "send");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      // Regex to allow only numbers and a decimal
      setAmount(value);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cryptoDropdownRef.current &&
        !cryptoDropdownRef.current.contains(event.target)
      ) {
        setCryptoDropdownOpen(false);
      }
      if (
        fiatDropdownRef.current &&
        !fiatDropdownRef.current.contains(event.target)
      ) {
        setFiatDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GSAP animations

  useEffect(() => {
    // Animate phone from bottom with ScrollTrigger
    gsap.fromTo(
      phoneRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top 80%', // Trigger the animation when the top of the phone reaches 80% of the viewport
          toggleActions: 'play none none reverse', // Play on scroll, reverse when scrolled up
        },
      }
    );

    // Animate content inside the phone with ScrollTrigger
    gsap.fromTo(
      phoneContentRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phoneContentRef.current,
          start: 'top 90%', // Trigger the animation when the top of the phone reaches 80% of the viewport
          toggleActions: 'play none none reverse', // Play on scroll, reverse when scrolled up
        },
      }
    );
  }, []);

  return (
    <section className="py-20 container mx-auto px-5">
      <div className="flex flex-col items-center gap-2 mb-5 lg:mb-16 px-5 lg:px-0">
        <h1 className="text-3xl lg:4xl font-century-gothic text-center font-semibold">
          Explore Crypto
        </h1>
        <p className="text-lg text-gray-500 font-century-gothic text-center">
          Simply and securely buy, sell and manage hundreds of cryptocurrencies
        </p>
      </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 justify-between container w-full mx-auto">
          {/* Left-side content */}
          <div className="flex-1 flex flex-col gap-7 w-full items-center lg:mb-20 mb-8">
            <div className="flex items-center gap-5 mb-5 mt-7">
              <PrimaryButton title="Exchange" />
              <SecondaryButton title="Top Gainers" />
            </div>

            {coins.map((crypto) => (
              <CoinCards key={crypto.name} {...crypto} />
            ))}
          </div>

          {/* Phone image and content inside the phone */}
          <div className="flex-1">
            <div className="exploreSection-background h-[500px] overflow-y-hidden rounded-3xl p-10 w-full">
              <div className="relative flex justify-center" ref={phoneRef}>
                {/* Wrapper for the phone and its content */}
                <div className="relative w-72">
                  {/* Content inside the phone */}
                  <div
                    className="absolute inset-0 flex flex-col gap-3 top-14 items-center"
                    ref={phoneContentRef}
                  >
                    {/* Swap Button */}
                    <div className="absolute top-[5.1rem] rounded-full bg-white p-1 left-[8rem]">
                      <div className="bg-gradient-to-t from-[#0499be] to-[#09667d] p-1 rounded-full">
                        <button
                          onClick={handleSwap}
                          className="text-white cursor-pointer px-1 py-1 flex items-center justify-center"
                        >
                          <MdSwapCalls />
                        </button>
                      </div>
                    </div>

                    {/* Conditional rendering to swap between Send and Receive */}
                    <div
                      className={`bg-gradient-to-t from-[#0499be] to-[#09667d] select-none ${
                        activeTab === "send" ? "order-0" : "order-1"
                      } font-century-gothic text-white flex flex-col gap-4 p-5 w-5/6 border rounded-2xl`}
                    >
                      <h1 className="font-bold text-xs">
                        {activeTab === "send" ? "FROM" : "TO"}
                      </h1>
                      <div className="flex items-center justify-between">
                        <div className="relative w-48" ref={cryptoDropdownRef}>
                          <div
                            className="rounded-lg cursor-pointer flex items-center gap-2"
                            onClick={() =>
                              setCryptoDropdownOpen(!isCryptoDropdownOpen)
                            }
                          >
                            {/* <div className="p-1 bg-white rounded-full"> */}
                            <img
                              src={
                                cryptocurrencies.find(
                                  (crypto) => crypto.abbr === cryptoCurrency
                                )?.image
                              }
                              alt="Crypto Icon"
                              className="w-6 h-6 inline-block"
                            />
                            {/* </div> */}
                            <h1 className="text-sm whitespace-nowrap font-semibold">
                              {cryptoCurrency}
                            </h1>
                            <MdExpandMore className="text-white" />
                          </div>

                          {/* Animated Dropdown for Crypto */}
                          <AnimatePresence>
                            {isCryptoDropdownOpen && (
                              <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute dropdown-menu left-0 top-full overflow-y-auto h-[250px] mt-2 w-[200px] bg-white text-black border border-gray-200 rounded-lg shadow-lg z-10"
                              >
                                {cryptocurrencies.map((crypto) => (
                                  <li
                                    key={crypto.abbr}
                                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                    onClick={() => handleCryptoSelect(crypto)}
                                  >
                                    <img
                                      src={crypto.image}
                                      alt={`${crypto.name} Icon`}
                                      className="w-6 h-6 inline-block mr-2"
                                    />
                                    {crypto.name}
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                        <input
                          type="tel"
                          className="bg-transparent text-sm w-[100px] outline-none text-right"
                          value={amount} // Two-way binding
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Receive Card */}
                    <div
                      className={`bg-gradient-to-t from-[#0499be] to-[#09667d] select-none ${
                        activeTab === "send" ? "order-1" : "order-0"
                      } font-century-gothic text-white flex flex-col gap-4 p-5 w-5/6 border rounded-2xl`}
                    >
                      <h1 className="font-bold text-xs">
                        {activeTab === "send" ? "TO" : "FROM"}
                      </h1>
                      <div className="flex items-center justify-between">
                        <div className="relative w-48" ref={fiatDropdownRef}>
                          <div
                            className="rounded-lg cursor-pointer flex items-center gap-2"
                            onClick={() =>
                              setFiatDropdownOpen(!isFiatDropdownOpen)
                            }
                          >
                            <img
                              src={
                                fiatCurrencies.find(
                                  (fiat) => fiat.name === fiatCurrency
                                )?.image
                              }
                              alt="Fiat Icon"
                              className="w-6 h-6 inline-block"
                            />
                            <h1 className="text-sm whitespace-nowrap font-semibold">
                              {fiatCurrency}
                            </h1>
                            <MdExpandMore className="text-white" />
                          </div>

                          {/* Animated Dropdown for Fiat */}
                          <AnimatePresence>
                            {isFiatDropdownOpen && (
                              <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="absolute left-0 top-full mt-2 w-[200px] bg-white text-black border border-gray-200 rounded-lg shadow-lg z-10"
                              >
                                {fiatCurrencies.map((fiat) => (
                                  <li
                                    key={fiat.name}
                                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                    onClick={() => handleFiatSelect(fiat)}
                                  >
                                    <img
                                      src={fiat.image}
                                      alt={`${fiat.name} Icon`}
                                      className="w-8 h-8 inline-block"
                                    />
                                    {fiat.name}
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                        <input
                          type="tel"
                          className="bg-transparent text-sm w-[100px] outline-none text-right"
                          value={amount} // Two-way binding for fiat amount
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Rate and Exchange Button */}
                    <div className="bg-gradient-to-t from-[#0499be] to-[#09667d] w-5/6 order-2 text-sm rounded-xl flex items-center justify-between px-5 py-2 text-white">
                      <h1 className="font-century-gothic">Rate</h1>
                      <h1>1ETH = 0.063 BTC</h1>
                    </div>
                    <Link to="/exchange" className="order-3">
                      <PrimaryButton title="Swap" />
                    </Link>
                  </div>
                  {/* Phone image */}
                  <img src={phone} className="w-full select-none" alt="iPhone" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Explore;
