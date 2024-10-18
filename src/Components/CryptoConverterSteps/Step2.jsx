// import { useState } from "react";
// import { FaMobileAlt, FaUniversity } from "react-icons/fa";

// const Step2 = ({ nextStep ,cryptoAmount ,cryptoCurrency,selectedMethod,setSelectedMethod,setStep }) => {

//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//     if(method === "Mobile Money")
//     {
//       nextStep();
//     }
//     else{
//       setStep(7);
//     }
//   };

//   return (
//     <div className="container mx-auto  ">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
//         <h2 className="text-gray-500  text-center">Buying {cryptoAmount} {cryptoCurrency}</h2>
//         <div className="mt-12">

//         <h1 className="text-xl">How do you want to pay ?</h1>
//         <p className="text-gray-500  mt-2">
//           Select a payment method to see more information to proceed
//         </p>
//         </div>

//         <div
//           className={`mt-8 p-2 rounded-lg border  ${
//             selectedMethod === "Mobile Money" ? "border-cyan-500 border-2 " : "border-cyan-400"
//           } cursor-pointer flex items-center`}
//           onClick={() => handleSelect("Mobile Money")}
//         >
//           <FaMobileAlt className="text-2xl  ml-4 "  />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold">Mobile Money</h3>
//             <p className="text-gray-600 text-sm mt-2">You'll pay NGN in fees</p>
//             <p className="text-gray-500 text-sm">
//               Mobile Money transaction usually take a few minutes to clear
//             </p>
//           </div>
//         </div>

//         <div
//           className={`mt-8 p-2 rounded-lg border ${
//             selectedMethod === "Bank Transfer" ? "border-cyan-500 border-2 " : "border-cyan-400"
//           } cursor-pointer flex items-center`}
//           onClick={() => handleSelect("Bank Transfer")}
//         >
//           <FaUniversity className="text-2xl  ml-4" />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold">Bank Transfer</h3>
//             <p className="text-gray-600 text-sm mt-2">You'll pay NGN in fees</p>
//             <p className="text-gray-500 text-sm">
//               Bank Transfer usually takes 2-3 business days to clear
//             </p>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         <div className="flex justify-center items-center mt-24">
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

// export default Step2;



import { useState } from "react";
import { FaMobileAlt, FaUniversity } from "react-icons/fa";

const Step2 = ({ nextStep, cryptoAmount, cryptoCurrency, selectedMethod, setSelectedMethod, setStep }) => {

  const handleSelect = (method) => {
    setSelectedMethod(method);
    if(method === "Mobile Money") {
      nextStep();
    } else {
      setStep(7);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-gray-500 text-center text-lg sm:text-xl lg:text-2xl">Buying {cryptoAmount} {cryptoCurrency}</h2>
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <h1 className="text-lg sm:text-xl lg:text-2xl">How do you want to pay?</h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Select a payment method to see more information to proceed
          </p>
        </div>

        <div
          className={`mt-6 sm:mt-8 p-2 rounded-lg border ${
            selectedMethod === "Mobile Money" ? "border-cyan-500 border-2" : "border-cyan-400"
          } cursor-pointer flex items-center`}
          onClick={() => handleSelect("Mobile Money")}
        >
          <FaMobileAlt className="text-xl sm:text-2xl ml-2 sm:ml-4" />
          <div className="p-2 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold">Mobile Money</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">You'll pay NGN in fees</p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Mobile Money transaction usually take a few minutes to clear
            </p>
          </div>
        </div>

        <div
          className={`mt-4 sm:mt-6 p-2 rounded-lg border ${
            selectedMethod === "Bank Transfer" ? "border-cyan-500 border-2" : "border-cyan-400"
          } cursor-pointer flex items-center`}
          onClick={() => handleSelect("Bank Transfer")}
        >
          <FaUniversity className="text-xl sm:text-2xl ml-2 sm:ml-4" />
          <div className="p-2 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold">Bank Transfer</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">You'll pay NGN in fees</p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Bank Transfer usually takes 2-3 business days to clear
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center items-center mt-12 sm:mt-16 lg:mt-20">
          <img
            src="/src/assets/Images/payment/visa.png"
            alt="Visa"
            className="w-6 h-6 sm:w-7 sm:h-7 m-1 sm:m-2"
          />
          <img
            src="/src/assets/Images/payment/mastercard.png"
            alt="Mastercard"
            className="w-6 h-6 sm:w-7 sm:h-7 m-1 sm:m-2"
          />
          <img
            src="/src/assets/Images/payment/applePay.png"
            alt="Apple Pay"
            className="w-6 h-6 sm:w-7 sm:h-7 m-1 sm:m-2"
          />
          <img
            src="/src/assets/Images/payment/gPay.png"
            alt="Google Pay"
            className="w-6 h-6 sm:w-7 sm:h-7 m-1 sm:m-2"
          />
          <img
            src="/src/assets/Images/payment/bank.jpeg"
            alt="Bank Transfer"
            className="w-6 h-6 sm:w-7 sm:h-7 m-1 sm:m-2"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-4 text-xs sm:text-sm">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step2;
