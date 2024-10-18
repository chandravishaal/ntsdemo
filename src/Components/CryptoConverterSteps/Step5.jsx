// import { useState } from "react";

// const Step3 = ({ nextStep, cryptoAmount, cryptoCurrency ,fiatCurrency,fiatAmount,serviceFee,networkFee,selectedMethod,setStep}) => {


//   const handleContinue = () => {
//     nextStep();
//   };

//   const changePaymentMethod=()=>{
//     setStep(2);
//   }

//   return (
//     <div className="container mx-auto  ">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
//         <h2 className="text-gray-500  text-center">
//           Buying {cryptoAmount} {cryptoCurrency}
//         </h2>


//       <h2 className="text-lg font-semibold mb-4 mt-12">Order Summary</h2>

//       <div className="w-full space-y-4 mb-6">
//         <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
//           <span className="text-gray-500">Amount to pay</span>
//           <span className="font-semibold">{fiatCurrency} {fiatAmount}</span>
//           {/* <span className="font-semibold">USD 50,000.00</span> */}
//         </div>

//         <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
//           <span className="text-gray-500">Service Fee</span>
//           <span className="font-semibold">USD {serviceFee}</span>
//           {/* <span className="font-semibold">USD 10.00</span> */}
//         </div>

//         <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
//           <span className="text-gray-500">Network Fee</span>
//           <span className="font-semibold">USD {networkFee}</span>
//         </div>

//         <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
//           <span className="text-gray-500">Payment Method</span>
//           <span className="font-semibold">{selectedMethod}</span>
//         </div>
//       </div>

//       <p className="text-sm text-gray-500 mb-1">
//         Mobile Money transactions usually take a few minutes to clear
//       </p>

//       <a onClick={changePaymentMethod} className="mb-8 text-cyan-400 text-sm">
//         Change Payment Method
//       </a>

//           <button
//             type="submit"
//             onClick={handleContinue}
//             className="w-full py-2   text-xl mt-10 text-white bg-cyan-500 rounded-2xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           >
//             Continue
//           </button>

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-12  ">
//           Powered by North Star Metrics
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step3;



import { useState } from "react";

const Step5 = ({ nextStep, cryptoAmount, cryptoCurrency, fiatCurrency, fiatAmount, serviceFee, networkFee, selectedMethod, setStep }) => {

  const handleContinue = () => {
    nextStep();
  };

  const changePaymentMethod = () => {
    setStep(2);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-gray-500 text-center text-base sm:text-lg lg:text-xl">
          Buying {cryptoAmount} {cryptoCurrency}
        </h2>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 mt-8 sm:mt-10 lg:mt-12">Order Summary</h2>

        <div className="w-full space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <div className="flex justify-between items-center border-2 border-cyan-600 rounded-xl sm:rounded-2xl p-2 sm:p-3">
            <span className="text-gray-500 text-sm sm:text-base">Amount to pay</span>
            <span className="font-semibold text-sm sm:text-base">{fiatCurrency} {fiatAmount}</span>
          </div>

          <div className="flex justify-between items-center border-2 border-cyan-600 rounded-xl sm:rounded-2xl p-2 sm:p-3">
            <span className="text-gray-500 text-sm sm:text-base">Service Fee</span>
            <span className="font-semibold text-sm sm:text-base">USD {serviceFee}</span>
          </div>

          <div className="flex justify-between items-center border-2 border-cyan-600 rounded-xl sm:rounded-2xl p-2 sm:p-3">
            <span className="text-gray-500 text-sm sm:text-base">Network Fee</span>
            <span className="font-semibold text-sm sm:text-base">USD {networkFee}</span>
          </div>

          <div className="flex justify-between items-center border-2 border-cyan-600 rounded-xl sm:rounded-2xl p-2 sm:p-3">
            <span className="text-gray-500 text-sm sm:text-base">Payment Method</span>
            <span className="font-semibold text-sm sm:text-base">{selectedMethod}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mb-1">
          Mobile Money transactions usually take a few minutes to clear
        </p>

        <a onClick={changePaymentMethod} className="mb-6 sm:mb-8 text-cyan-400 text-xs sm:text-sm cursor-pointer">
          Change Payment Method
        </a>

        <button
          type="submit"
          onClick={handleContinue}
          className="w-full py-2 text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 lg:mt-10 text-white bg-cyan-500 rounded-xl sm:rounded-2xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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

export default Step5;
