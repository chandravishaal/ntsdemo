import { useState } from "react";
import { MdSwapCalls, MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import phone from "../../assets/Images/HomeImages/iPhone-16-Plus-Light.png";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("send");
  const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
  const [fiatCurrency, setFiatCurrency] = useState("INR");

  const [isCryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
  const [isFiatDropdownOpen, setFiatDropdownOpen] = useState(false);

  const cryptocurrencies = [
    { name: "BTC", image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033" },
    { name: "ETH", image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033" },
    { name: "LTC", image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033" },
  ];

  const fiatCurrencies = [
    { name: "INR", image: "/path/to/inr-image.png" },
    { name: "USD Dollar (USD)", image: "/path/to/usd-image.png" },
  ];

  const handleCryptoSelect = (crypto) => {
    setCryptoCurrency(crypto.name);
    setCryptoDropdownOpen(false);
  };

  const handleFiatSelect = (fiat) => {
    setFiatCurrency(fiat.name);
    setFiatDropdownOpen(false);
  };

  const handleSwap = () => {
    setActiveTab(activeTab === "send" ? "receive" : "send");
  };

  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto">
        {/* Left-side content */}
        <div className="flex-1">{/* Your content here */}</div>

        {/* Phone image and content inside the phone */}
        <div className="flex-1">
          <div className="bg-gray-500 h-[500px] overflow-y-hidden rounded-3xl p-10 w-full">
            <div className="relative flex justify-center">
              {/* Wrapper for the phone and its content */}
              <div className="relative w-72">
                {/* Content inside the phone */}
                <div className="absolute inset-0 flex flex-col gap-3 top-14 items-center">
                  {/* Swap Button */}
                  <div className="absolute top-[5.6rem] rounded-full bg-white p-1 left-[8rem]">
                    <div className="bg-blue-500 p-1 rounded-full">
                      <button
                        onClick={handleSwap}
                        className="text-white cursor-pointer px-1 py-1 flex items-center justify-center"
                      >
                        <MdSwapCalls />
                      </button>
                    </div>
                  </div>

                  {/* Conditional rendering to swap between Send and Receive */}
                  <div className={`bg-blue-500 select-none ${activeTab === 'send' ? 'order-0' : 'order-1'} font-century-gothic text-white flex flex-col gap-4 p-5 w-5/6 border rounded-2xl`}>
                    <h1 className="font-bold text-xs">Send</h1>
                    <div className="flex items-center justify-between">
                      <div className="relative w-48">
                        <div
                          className="rounded-lg cursor-pointer flex items-center justify-between"
                          onClick={() => setCryptoDropdownOpen(!isCryptoDropdownOpen)}
                        >
                          <div className="p-1 bg-white rounded-full">
                            <img
                              src={cryptocurrencies.find(crypto => crypto.name === cryptoCurrency)?.image}
                              alt="Crypto Icon"
                              className="w-6 h-6 inline-block"
                            />
                          </div>
                          <h1 className="text-sm whitespace-nowrap">
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
                              className="absolute left-0 top-full mt-2 w-[200px] bg-white text-black border border-gray-200 rounded-lg shadow-lg z-10"
                            >
                              {cryptocurrencies.map((crypto) => (
                                <li
                                  key={crypto.name}
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
                        className="bg-transparent w-[100px] outline-none text-right"
                        value={0}
                      />
                    </div>
                  </div>

                  {/* Receive Card */}
                  <div className={`bg-blue-500 select-none ${activeTab === 'send' ? 'order-1' : 'order-0'} font-century-gothic text-white flex flex-col gap-4 p-5 w-5/6 border rounded-2xl`}>
                    <h1 className="font-bold text-xs">Receive</h1>
                    <div className="flex items-center justify-between">
                      <div className="relative w-48">
                        <div
                          className="border-2 border-cyan-400 rounded-lg flex items-center justify-between"
                          onClick={() => setFiatDropdownOpen(!isFiatDropdownOpen)}
                        >
                          <img
                            src={fiatCurrencies.find(fiat => fiat.name === fiatCurrency)?.image}
                            alt="Fiat Icon"
                            className="w-6 h-6 inline-block mr-2"
                          />
                          {fiatCurrency}
                          <MdExpandMore className="text-white" />
                        </div>

                        {/* Animated Dropdown for Fiat */}
                        <AnimatePresence>
                          {isFiatDropdownOpen && (
                            <motion.ul
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 top-full mt-2 w-full bg-white text-black border border-gray-200 rounded-lg shadow-lg z-10"
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
                                    className="w-6 h-6 inline-block mr-2"
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
                        className="bg-transparent w-[100px] outline-none text-right"
                        value={0}
                      />
                    </div>
                  </div>

                  {/* Rate and Exchange Button */}
                  <div className="bg-blue-500 w-5/6 order-2 text-sm rounded-xl flex items-center justify-between px-5 py-2 text-white">
                    <h1>Rate</h1>
                    <h1>1ETH = 0.063 BTC</h1>
                  </div>
                  <button className="bg-primaryCyan order-3 py-2 px-5 text-sm font-bold rounded-xl">
                    Exchange
                  </button>
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
