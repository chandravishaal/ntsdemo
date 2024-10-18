
// import { useState } from "react";

// const Step7 = ({ nextStep, cryptoAmount, cryptoCurrency,fiatCurrency,fiatAmount ,depositDetails }) => {


//       const handleDeposit = () => {
//         // Handle the deposit confirmation here
//         console.log("Deposit confirmed!");
//         nextStep();
//       };

//   return (
//     <div className="container mx-auto  ">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
        
        
// <h2 className="text-center font-medium text-gray-700 mb-4">
//         Make your deposit to our bank account
//       </h2>

//       <div className="bg-gray-100 text-center py-6 rounded-xl text-3xl font-bold text-gray-900 mb-6">
//         {depositDetails.amount}
//       </div>

//       <div className="space-y-4">
//         <div className="flex justify-between border p-3 rounded-xl border-cyan-300">
//           <span className="text-gray-500">Bank Name</span>
//           <span className="text-gray-900">{depositDetails.bankName}</span>
//         </div>
//         <div className="flex justify-between border p-3 rounded-xl border-cyan-300">
//           <span className="text-gray-500">Account number</span>
//           <span className="text-gray-900">{depositDetails.accountNumber}</span>
//         </div>
//         <div className="flex justify-between border p-3 rounded-xl border-cyan-300">
//           <span className="text-gray-500">Account Name</span>
//           <span className="text-gray-900">{depositDetails.accountName}</span>
//         </div>
//         <div className="flex justify-between border p-3 rounded-xl border-cyan-300">
//           <span className="text-gray-500">Reference Code</span>
//           <span className="text-gray-900">{depositDetails.referenceCode}</span>
//         </div>
//         <div className="flex justify-between border p-3 rounded-xl border-cyan-300">
//           <span className="text-gray-500">Clearing time</span>
//           <span className="text-gray-900">{depositDetails.clearingTime}</span>
//         </div>
//       </div>

//       <button
//         onClick={handleDeposit}
//         className="w-full py-3 mt-12 text-white text-xl bg-cyan-500 rounded-xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//       >
//         I've made my deposit
//       </button>
      

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-12  ">
//           Powered by North Star Metrics
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step7;



import { useState } from "react";

const Step7 = ({ nextStep, cryptoAmount, cryptoCurrency, fiatCurrency, fiatAmount, depositDetails }) => {
  const handleDeposit = () => {
    // Handle the deposit confirmation here
    console.log("Deposit confirmed!");
    nextStep();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-center font-medium text-gray-700 mb-4 text-base sm:text-lg lg:text-xl">
          Make your deposit to our bank account
        </h2>

        <div className="bg-gray-100 text-center py-4 sm:py-6 rounded-xl text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
          {depositDetails.amount}
        </div>

        <div className="space-y-3 sm:space-y-4">
          {[
            { label: "Bank Name", value: depositDetails.bankName },
            { label: "Account number", value: depositDetails.accountNumber },
            { label: "Account Name", value: depositDetails.accountName },
            { label: "Reference Code", value: depositDetails.referenceCode },
            { label: "Clearing time", value: depositDetails.clearingTime },
          ].map((item, index) => (
            <div key={index} className="flex justify-between border p-2 sm:p-3 rounded-xl border-cyan-300">
              <span className="text-gray-500 text-sm sm:text-base">{item.label}</span>
              <span className="text-gray-900 text-sm sm:text-base">{item.value}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleDeposit}
          className="w-full py-2 sm:py-3 mt-8 sm:mt-12 text-white text-base sm:text-lg lg:text-xl bg-cyan-500 rounded-xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          I've made my deposit
        </button>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-8 sm:mt-12 text-xs sm:text-sm">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step7;
