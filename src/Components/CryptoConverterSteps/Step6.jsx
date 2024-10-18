// import { useState } from "react";
// import { FiClipboard } from "react-icons/fi";

// const Step6 = ({ nextStep, cryptoAmount, cryptoCurrency,fiatCurrency,fiatAmount,walletAddress,setWalletAddress }) => {

//   const handleOnChange = (e) => {
//     setWalletAddress(e.target.value);
//   };

//   return (
//     <div className="container mx-auto  ">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
//         <h2 className="text-gray-500  text-center">
//           Sending {cryptoAmount} {cryptoCurrency}
//         </h2>


//         <h2 className="text-xl font-semibold mb-4 mt-12">
//           Where do we send this {fiatAmount} {fiatCurrency} ?
//         </h2>
//         <p className="text-sm text-gray-500 mb-6 mr-[30%]">
//           Enter a wallet address from the{" "}
//           <span className="font-bold text-black">ERC-20 network</span> to avoid
//           permanent loss.
//         </p>

//         <div className="relative w-full mb-8">
//           <input
//             type="text"
//             placeholder="Wallet address"
//             value={walletAddress}
//             onChange={handleOnChange}
//             className="w-full border-2 border-cyan-400 rounded-xl py-3 px-4 text-gray-500 focus:outline-none"
//           />
//           <FiClipboard className="absolute right-4 top-3 text-xl text-gray-400" />
//         </div>

//         <button
//           type="submit"
//           // onClick={handleContinue}
//           className="w-full py-2   text-xl mt-[35%] text-white bg-cyan-500 rounded-2xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         >
//           Continue
//         </button>

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-12  ">
//           Powered by North Star Metrics
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step6;


import { useState } from "react";
import { FiClipboard } from "react-icons/fi";

const Step6 = ({ nextStep, cryptoAmount, cryptoCurrency, fiatCurrency, fiatAmount, walletAddress, setWalletAddress }) => {

  const handleOnChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleContinue = () => {
    nextStep();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-gray-500 text-center text-base sm:text-lg lg:text-xl">
          Sending {cryptoAmount} {cryptoCurrency}
        </h2>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 mt-6 sm:mt-8 lg:mt-10">
          Where do we send this {fiatAmount} {fiatCurrency}?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          Enter a wallet address from the{" "}
          <span className="font-bold text-black">ERC-20 network</span> to avoid
          permanent loss.
        </p>

        <div className="relative w-full mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Wallet address"
            value={walletAddress}
            onChange={handleOnChange}
            className="w-full border-2 border-cyan-400 rounded-xl py-2 sm:py-3 px-3 sm:px-4 text-gray-500 focus:outline-none text-sm sm:text-base"
          />
          <FiClipboard className="absolute right-3 sm:right-4 top-2 sm:top-3 text-lg sm:text-xl text-gray-400" />
        </div>

        <button
          type="submit"
          onClick={handleContinue}
          className="w-full py-2 sm:py-3 text-base sm:text-lg lg:text-xl mt-8 sm:mt-10 lg:mt-12 text-white bg-cyan-500 rounded-xl sm:rounded-2xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Continue
        </button>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-8 sm:mt-10 lg:mt-12 text-xs sm:text-sm">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step6;
