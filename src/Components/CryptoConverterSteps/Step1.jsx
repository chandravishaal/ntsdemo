// import React, { useState } from "react";
// import { RiExchangeLine } from "react-icons/ri";
// import { MdExpandMore } from "react-icons/md";
// const Step1 = ({
//   nextStep,
//   cryptoCurrency,
//   setCryptoCurrency,
//   fiatCurrency,
//   setFiatCurrency,
//   cryptoAmount,
//   setCryptoAmount,
//   fiatAmount,
//   setFiatAmount,
// }) => {


//   // Dropdown visibility state
//   const [isCryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
//   const [isCryptoDropdownOpen2, setCryptoDropdownOpen2] = useState(false);
//   const [isFiatDropdownOpen, setFiatDropdownOpen] = useState(false);
//   const [isFiatDropdownOpen2, setFiatDropdownOpen2] = useState(false);

//   const cryptocurrencies = [
//     { name: "Bitcoin (BTC)", image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033", },
//     { name: "Ethereum (ETH)", image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033", },
//     { name: "Litecoin (LTC)", image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033", },
//     { name: "Tether (USDT)", image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=033", },
//     { name: "Matic Network (MATIC)", image: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033", },
//     { name: "XRP (XRP)", image: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033", },
//     { name: "Dogecoin (DOGE))", image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=033", },
//     { name: "Cardano (ADA))", image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=033", },
//     { name: "Solana (SOL))", image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=033", },
//     { name: "Bitcoin Cash (BCH))", image: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=033", },
//   ];

//   const fiatCurrencies = [
//     { name: "Tether (USDT)",image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=033"},
//     { name: "USD Dollar (USD)", image: "/path/to/usd-image.png" }, 
//     { name: "indian (INR)", image: "/path/to/usd-image.png" }, 
//     { name: "GBP", image: "/path/to/usd-image.png" }, 
//     { name: "AUD", image: "/path/to/usd-image.png" }, 
//     { name: "CAD", image: "/path/to/usd-image.png" }, 
//     { name: "EUR", image: "/path/to/usd-image.png" }, 
//   ];

//   const handleCryptoSelect = (name) => {
//     setCryptoCurrency(name);
//     setCryptoDropdownOpen(false); // Hide the dropdown after selection
//   };

//   const handleCryptoSelect2 = (name) => {
//     setCryptoCurrency(name);
//     setCryptoDropdownOpen2(false); // Hide the dropdown after selection
//   };

//   const handleFiatSelect = (name) => {
//     setFiatCurrency(name);
//     setFiatDropdownOpen(false); // Hide the dropdown after selection
//   };

//   const handleFiatSelect2 = (name) => {
//     setFiatCurrency(name);
//     setFiatDropdownOpen2(false); // Hide the dropdown after selection
//   };

//   const proceedToBuy =()=>{
//     nextStep();
//   }

//   return (
  

    
//     <div className="container mx-auto  ">
//       {/* Buy/Sell Buttons */}
//       <div className="flex justify-center mb-5 gap-20">
//         <button className="bg-[#00C6CF] text-white py-2 px-20 rounded-lg border-b-4 border-cyan-700 text-xl font-bold">
//           BUY
//         </button>
//         <button className="bg-sky-400 text-white text-xl font-bold py-2 px-20 rounded-lg border-b-4 border-sky-600">
//           SELL
//         </button>
//       </div>

//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
//         <div className=" sky-blue-blur-background  flex items-center justify-around p-2 my-10">
//           <div className="bg-white border-2 border-cyan-400 p-4 rounded-xl shadow-lg   ">
//             <img
//               src={
//                 cryptocurrencies.find(
//                   (crypto) => crypto.name === cryptoCurrency
//                 )?.image
//               }
//               alt="Bitcoin Icon"
//               className="w-16 h-16 p-2 border-2 border-cyan-400 rounded-xl "
//             />
//           </div>
//           <div className="bg-white border-2 border-cyan-400 p-4 rounded-xl  ">
//             <img
//               src={
//                 fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)
//                   ?.image
//               }
//               alt={
//                 fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)
//                   ?.name
//                   // name.match(/\(([^)]+)\)/)[1]
//               }
//               className="w-16 h-16 p-2 border-2 border-cyan-400 rounded-xl"
//             />
//           </div>
//         </div>

//         {/* Conversion Section */}
//         <div className="flex justify-between items-center rounded-lg mb-8 ">
//           <div className="relative w-48 ">
//             <div
//               className="border-2 border-cyan-400 rounded-lg p-2 text-center cursor-pointer bg-white flex items-center justify-between"
//               onClick={() => setCryptoDropdownOpen(!isCryptoDropdownOpen)}
//             >
//               <img
//                 src={
//                   cryptocurrencies.find(
//                     (crypto) => crypto.name === cryptoCurrency
//                   )?.image
//                 }
//                 alt="Crypto Icon"
//                 className="w-6 h-6 inline-block mr-2"
//               />
//               {cryptoCurrency}
//               <MdExpandMore className="text-cyan-400 text-2xl" />
//             </div>
//             {isCryptoDropdownOpen && (
//               <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                 {cryptocurrencies.map((crypto) => (
//                   <li
//                     key={crypto.name}
//                     className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
//                     onClick={() => handleCryptoSelect(crypto.name)}
//                   >
//                     <img
//                       src={crypto.image}
//                       alt={`${crypto.name} Icon`}
//                       className="w-6 h-6 inline-block mr-2"
//                     />
//                     {crypto.name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <button className="bg-white p-2 rounded-lg border-2 border-cyan-400 shadow-lg">
//             <RiExchangeLine className="text-3xl" />
//           </button>

//           <div className="relative w-48">
//             <div
//               className="border-2 border-cyan-400 rounded-lg p-2 text-center cursor-pointer bg-white flex items-center justify-between"
//               onClick={() => setFiatDropdownOpen(!isFiatDropdownOpen)}
//             >
//               <img
//                 src={
//                   fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)
//                     ?.image
//                 }
                
//                 alt="Fiat Icon"
//                 className="w-6 h-6 inline-block mr-2"
//               />
//               {fiatCurrency}
//               <MdExpandMore className="text-cyan-400 text-2xl" />
//             </div>
//             {isFiatDropdownOpen && (
//               <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                 {fiatCurrencies.map((fiat) => (
//                   <li
//                     key={fiat.name}
//                     className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
//                     onClick={() => handleFiatSelect(fiat.name)}
//                   >
//                     <img
//                       src={fiat.image}
//                       alt={`${fiat.name} Icon`}
//                       className="w-6 h-6 inline-block mr-2"
//                     />
//                     {fiat.name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Input Fields */}
//         <div className="mb-6  ">
//           <label className="block text-gray-700 ">
//             Select Cryptocurrency:
//           </label>
//           <div className="flex  rounded-full z-10 mt-2">
//             <input
//               type="number"
//               value={cryptoAmount}
//               onChange={(e) => setCryptoAmount(e.target.value)}
//               className="w-full border-2 border-cyan-400 rounded-l-lg  p-2"
//               placeholder=""
//             />
//             <div className="relative w-64">
//             <div
//               className="border-2 border-cyan-400 border-l-0 rounded-r-lg p-2 text-center cursor-pointer bg-white flex items-center justify-between"
//               onClick={() => setCryptoDropdownOpen2(!isCryptoDropdownOpen2)}
//             >
//               <img
//                 src={
//                   cryptocurrencies.find(
//                     (crypto) => crypto.name === cryptoCurrency
//                   )?.image
//                 }
//                 alt="Crypto Icon"
//                 className="w-6 h-6 inline-block mr-2"
//               />
//               {cryptoCurrency}
//               <MdExpandMore className="text-cyan-400 text-2xl" />
              
//             </div>
//             {isCryptoDropdownOpen2 && (
//               <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                 {cryptocurrencies.map((crypto) => (
//                   <li
//                     key={crypto.name}
//                     className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
//                     onClick={() => handleCryptoSelect2(crypto.name)}
//                   >
//                     <img
//                       src={crypto.image}
//                       alt={`${crypto.name} Icon`}
//                       className="w-6 h-6 inline-block mr-2"
//                     />
//                     {crypto.name}
                    
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           </div>
//         </div>

//         <div className=" mb-6">
//           <label className="block text-gray-700 mb-2">
//             Select Fiat Currency:
//           </label>
//           <div className="flex">
//             <input
//               type="number"
//               value={fiatAmount}
//               onChange={(e) => setFiatAmount(e.target.value)}
//               className="w-full border-2  border-cyan-400  rounded-l-lg p-2 "
//               placeholder=""
//             />
//             <div className="relative w-64 ">
//               <div
//                 className="border-2  rounded-r-lg border-cyan-400 border-l-0 p-2 text-center cursor-pointer bg-white flex items-center justify-between"
//                 onClick={() => setFiatDropdownOpen2(!isFiatDropdownOpen2)}
//               >
//                 <img
//                   src={
//                     fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)
//                       ?.image
//                   }
//                   alt="Fiat Icon"
//                   className="w-6 h-6 inline-block mr-2"
//                 />
//                 {fiatCurrency}
//                 <MdExpandMore className="text-cyan-400 text-2xl" />
//               </div>
//               {isFiatDropdownOpen2 && (
//                 <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                   {fiatCurrencies.map((fiat) => (
//                     <li
//                       key={fiat.name}
//                       className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
//                       onClick={() => handleFiatSelect2(fiat.name)}
//                     >
//                       <img
//                         src={fiat.image}
//                         alt={`${fiat.name} Icon`}
//                         className="w-6 h-6 inline-block mr-2"
//                       />
//                       {fiat.name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Proceed Button */}
//         <button onClick={proceedToBuy} className="w-full bg-[#00C6CF] text-white py-3 rounded-lg">
//           Proceed to Buy
//         </button>

//         {/* Payment Methods */}
//         <div className="flex justify-center items-center mt-10">
//           <img
//             src="/src/assets/Images/payment/visa.png"
//             alt="Visa"
//             className="w-7 h-7 mx-2"
//           />
//           <img
//             src="/src/assets/Images/payment/mastercard.png"
//             alt="Mastercard"
//             className="w-7 h-7 mx-2"
//           />
//           <img
//             src="/src/assets/Images/payment/applePay.png"
//             alt="Apple Pay"
//             className="w-7 h-7 mx-2"
//           />
//           <img
//             src="/src/assets/Images/payment/gPay.png"
//             alt="Google Pay"
//             className="w-7 h-7 mx-2"
//           />
//           <img
//             src="/src/assets/Images/payment/bank.jpeg"
//             alt="Bank Transfer"
//             className="w-7 h-7 mx-2"
//           />
//         </div>

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-4">
//           Powered by North Star Metrics
//         </div>
//       </div>


      
//     </div>


//   );
// };

// export default Step1;



import React, { useState } from "react";
import { RiExchangeLine } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";

const Step1 = ({
  nextStep,
  cryptoCurrency,
  setCryptoCurrency,
  fiatCurrency,
  setFiatCurrency,
  cryptoAmount,
  setCryptoAmount,
  fiatAmount,
  setFiatAmount,
}) => {
  // Dropdown visibility state
  const [isCryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
  const [isCryptoDropdownOpen2, setCryptoDropdownOpen2] = useState(false);
  const [isFiatDropdownOpen, setFiatDropdownOpen] = useState(false);
  const [isFiatDropdownOpen2, setFiatDropdownOpen2] = useState(false);

  const cryptocurrencies = [
    { name: "Bitcoin (BTC)", image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=033", },
    { name: "Ethereum (ETH)", image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=033", },
    { name: "Litecoin (LTC)", image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=033", },
    { name: "Tether (USDT)", image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=033", },
    { name: "Matic Network (MATIC)", image: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=033", },
    { name: "XRP (XRP)", image: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=033", },
    { name: "Dogecoin (DOGE)", image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=033", },
    { name: "Cardano (ADA)", image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=033", },
    { name: "Solana (SOL)", image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=033", },
    { name: "Bitcoin Cash (BCH)", image: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=033", },
  ];

  const fiatCurrencies = [
    { name: "Tether (USDT)", image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=033"},
    { name: "USD Dollar (USD)", image: "/path/to/usd-image.png" }, 
    { name: "Indian Rupee (INR)", image: "/path/to/inr-image.png" }, 
    { name: "British Pound (GBP)", image: "/path/to/gbp-image.png" }, 
    { name: "Australian Dollar (AUD)", image: "/path/to/aud-image.png" }, 
    { name: "Canadian Dollar (CAD)", image: "/path/to/cad-image.png" }, 
    { name: "Euro (EUR)", image: "/path/to/eur-image.png" }, 
  ];

  const handleCryptoSelect = (name) => {
    setCryptoCurrency(name);
    setCryptoDropdownOpen(false);
  };

  const handleCryptoSelect2 = (name) => {
    setCryptoCurrency(name);
    setCryptoDropdownOpen2(false);
  };

  const handleFiatSelect = (name) => {
    setFiatCurrency(name);
    setFiatDropdownOpen(false);
  };

  const handleFiatSelect2 = (name) => {
    setFiatCurrency(name);
    setFiatDropdownOpen2(false);
  };

  const proceedToBuy = () => {
    nextStep();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Buy/Sell Buttons */}
      <div className="flex justify-center mb-5 gap-4 sm:gap-20">
        <button className="bg-[#00C6CF] text-white py-2 px-8 sm:px-20 rounded-lg border-b-4 border-cyan-700 text-lg sm:text-xl font-bold">
          BUY
        </button>
        <button className="bg-sky-400 text-white text-lg sm:text-xl font-bold py-2 px-8 sm:px-20 rounded-lg border-b-4 border-sky-600">
          SELL
        </button>
      </div>

      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-4 sm:p-10 border-2 border-cyan-500 mx-auto max-w-3xl">
        <div className="sky-blue-blur-background flex items-center justify-around p-2 my-6 sm:my-10">
          <div className="bg-white border-2 border-cyan-400 p-2 sm:p-4 rounded-xl shadow-lg">
            <img
              src={cryptocurrencies.find((crypto) => crypto.name === cryptoCurrency)?.image}
              alt="Crypto Icon"
              className="w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 border-2 border-cyan-400 rounded-xl"
            />
          </div>
          <div className="bg-white border-2 border-cyan-400 p-2 sm:p-4 rounded-xl">
            <img
              src={fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)?.image}
              alt={fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)?.name}
              className="w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 border-2 border-cyan-400 rounded-xl"
            />
          </div>
        </div>

        {/* Conversion Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center rounded-lg mb-8">
          <div className="relative w-full sm:w-48 mb-4 sm:mb-0">
            <div
              className="border-2 border-cyan-400 rounded-lg p-2 text-center cursor-pointer bg-white flex items-center justify-between"
              onClick={() => setCryptoDropdownOpen(!isCryptoDropdownOpen)}
            >
              <img
                src={cryptocurrencies.find((crypto) => crypto.name === cryptoCurrency)?.image}
                alt="Crypto Icon"
                className="w-6 h-6 inline-block mr-2"
              />
              <span className="truncate">{cryptoCurrency}</span>
              <MdExpandMore className="text-cyan-400 text-2xl" />
            </div>
            {isCryptoDropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {cryptocurrencies.map((crypto) => (
                  <li
                    key={crypto.name}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleCryptoSelect(crypto.name)}
                  >
                    <img
                      src={crypto.image}
                      alt={`${crypto.name} Icon`}
                      className="w-6 h-6 inline-block mr-2"
                    />
                    <span className="truncate">{crypto.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-white p-2 rounded-lg border-2 border-cyan-400 shadow-lg my-4 sm:my-0">
            <RiExchangeLine className="text-3xl" />
          </button>

          <div className="relative w-full sm:w-48">
            <div
              className="border-2 border-cyan-400 rounded-lg p-2 text-center cursor-pointer bg-white flex items-center justify-between"
              onClick={() => setFiatDropdownOpen(!isFiatDropdownOpen)}
            >
              <img
                src={fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)?.image}
                alt="Fiat Icon"
                className="w-6 h-6 inline-block mr-2"
              />
              <span className="truncate">{fiatCurrency}</span>
              <MdExpandMore className="text-cyan-400 text-2xl" />
            </div>
            {isFiatDropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {fiatCurrencies.map((fiat) => (
                  <li
                    key={fiat.name}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleFiatSelect(fiat.name)}
                  >
                    <img
                      src={fiat.image}
                      alt={`${fiat.name} Icon`}
                      className="w-6 h-6 inline-block mr-2"
                    />
                    <span className="truncate">{fiat.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Input Fields */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Select Cryptocurrency:
          </label>
          <div className="flex flex-col sm:flex-row rounded-lg z-10 mt-2">
            <input
              type="number"
              value={cryptoAmount}
              onChange={(e) => setCryptoAmount(e.target.value)}
              className="w-full border-2 border-cyan-400 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none p-2 mb-2 sm:mb-0"
              placeholder=""
            />
            <div className="relative w-full sm:w-64">
              <div
                className="border-2 border-cyan-400 sm:border-l-0 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none p-2 text-center cursor-pointer bg-white flex items-center justify-between"
                onClick={() => setCryptoDropdownOpen2(!isCryptoDropdownOpen2)}
              >
                <img
                  src={cryptocurrencies.find((crypto) => crypto.name === cryptoCurrency)?.image}
                  alt="Crypto Icon"
                  className="w-6 h-6 inline-block mr-2"
                />
                <span className="truncate">{cryptoCurrency}</span>
                <MdExpandMore className="text-cyan-400 text-2xl" />
              </div>
              {isCryptoDropdownOpen2 && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {cryptocurrencies.map((crypto) => (
                    <li
                      key={crypto.name}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleCryptoSelect2(crypto.name)}
                    >
                      <img
                        src={crypto.image}
                        alt={`${crypto.name} Icon`}
                        className="w-6 h-6 inline-block mr-2"
                      />
                      <span className="truncate">{crypto.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Select Fiat Currency:
          </label>
          <div className="flex flex-col sm:flex-row">
            <input
              type="number"
              value={fiatAmount}
              onChange={(e) => setFiatAmount(e.target.value)}
              className="w-full border-2 border-cyan-400 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none p-2 mb-2 sm:mb-0"
              placeholder=""
            />
            <div className="relative w-full sm:w-64">
              <div
                className="border-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none border-cyan-400 sm:border-l-0 p-2 text-center cursor-pointer bg-white flex items-center justify-between"
                onClick={() => setFiatDropdownOpen2(!isFiatDropdownOpen2)}
              >
                <img
                  src={fiatCurrencies.find((fiat) => fiat.name === fiatCurrency)?.image}
                  alt="Fiat Icon"
                  className="w-6 h-6 inline-block mr-2"
                />
                <span className="truncate">{fiatCurrency}</span>
                <MdExpandMore className="text-cyan-400 text-2xl" />
              </div>
              {isFiatDropdownOpen2 && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {fiatCurrencies.map((fiat) => (
                    <li
                      key={fiat.name}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleFiatSelect2(fiat.name)}
                    >
                      <img
                        src={fiat.image}
                        alt={`${fiat.name} Icon`}
                        className="w-6 h-6 inline-block mr-2"
                      />
                      <span className="truncate">{fiat.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <button onClick={proceedToBuy} className="w-full bg-[#00C6CF] text-white py-3 rounded-lg">
          Proceed to Buy
        </button>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
          <img
            src="/src/assets/Images/payment/visa.png"
            alt="Visa"
            className="w-auto h-7 "
          />
          <img
            src="/src/assets/Images/payment/mastercard.png"
            alt="Mastercard"
            className="w-auto h-7 m-2"
          />
          <img
            src="/src/assets/Images/payment/applePay.png"
            alt="Apple Pay"
            className="w-auto h-10 m-2"
          />
          <img
            src="/src/assets/Images/payment/gPay.png"
            alt="Google Pay"
            className="w-auto h-7 m-2"
          />
          <img
            src="/src/assets/Images/payment/bank.png"
            alt="Bank Transfer"
            className="w-auto h-7 m-2"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-4">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step1;
