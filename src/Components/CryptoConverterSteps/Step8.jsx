// import { useState } from "react";

// const Step8 = ({userName}) => {

//   const handleGoToAccount = () => {
//     console.log("Navigating to account...");
//   };

//   return (
//     <div className="container mx-auto  ">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] text-center ">
//         <h2 className="text-gray-500 font-medium mb-4 ">Order sent!</h2>

//         <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4">
//           Thank you for your time, {userName}!
//         </h3>

//         <p className="text-gray-600 mb-4 mx-10">
//           We'll let you know when we receive the deposit from your bank so you
//           can continue. This takes about 2 business days.
//         </p>

//         <p className="text-gray-600 mb-8 mx-10">
//           If you've still not made your deposit, check your email for our bank
//           details.
//         </p>

//         <button
//           onClick={handleGoToAccount}
//           className="w-full py-3 mt-[40%] text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         >
//           Go to my account
//         </button>

       

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-12  ">
//           Powered by North Star Metrics
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step8;

import { useState } from "react";

const Step8 = ({userName}) => {

  const handleGoToAccount = () => {
    console.log("Navigating to account...");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl text-center">
        <h2 className="text-gray-500 font-medium mb-4 text-base sm:text-lg lg:text-xl">Order sent!</h2>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 mt-2 sm:mt-4">
          Thank you for your time, {userName}!
        </h3>

        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          We'll let you know when we receive the deposit from your bank so you
          can continue. This takes about 2 business days.
        </p>

        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          If you've still not made your deposit, check your email for our bank
          details.
        </p>

        <button
          onClick={handleGoToAccount}
          className="w-full py-2 sm:py-3 mt-8 sm:mt-12 lg:mt-16 text-white bg-cyan-500 rounded-lg text-base sm:text-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Go to my account
        </button>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-8 sm:mt-10 lg:mt-12 text-xs sm:text-sm">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step8;
