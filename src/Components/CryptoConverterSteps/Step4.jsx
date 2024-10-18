
// // const Step4 = ({ nextStep, cryptoAmount, cryptoCurrency ,otp,setOtp,userEmail}) => {

// //   const handleChange = (element, index) => {
// //     if (isNaN(element.value)) return;

// //     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

// //     // Focus on the next input field if a value is entered
// //     if (element.nextSibling && element.value) {
// //       element.nextSibling.focus();
// //     }
// //   };

// //   const handleContinue =()=>{
// //     nextStep();
// //   }

// //   return (
// //     <div className="container mx-auto  ">
// //       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
// //         <h2 className="text-gray-500  text-center">
// //           Buying {cryptoAmount} {cryptoCurrency}
// //         </h2>

// //         <p className="mb-2 mt-16 text-xl">We've sent you a six-digit code</p>
// //         <p className="mb-6 text-sm text-gray-500 mr-[20%]">
// //           Check your email{" "}
// //           <span className="font-bold text-black">{userEmail}</span> for the OTP.
// //           It could also be in your spam folder.
// //         </p>

// //         <div className="flex justify-start space-x-2 mb-8">
// //           {otp.map((data, index) => (
// //             <input
// //               className="w-12 h-12 border-2 border-cyan-400 rounded-2xl text-center text-xl focus:outline-none"
// //               type="text"
// //               name="otp"
// //               maxLength="1"
// //               key={index}
// //               value={data}
// //               onChange={(e) => handleChange(e.target, index)}
// //               onFocus={(e) => e.target.select()}
// //             />
// //           ))}
// //         </div>
        
// //         <div className="mt-[30%]">

// //         <div className="text-center">
// //           <a href="#" className=" text-cyan-400  ">
// //             I have not received my code
// //           </a>
// //         </div>

// //         <button
// //           type="submit"
// //           onClick={handleContinue}
// //           className="w-full py-2  text-xl mt-1 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
// //           >
// //           Continue
// //         </button>
// //         </div>

// //         {/* Footer Text */}
// //         <div className="text-center text-gray-500 mt-12  ">
// //           Powered by North Star Metrics
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Step4;


// const Step4 = ({ nextStep, cryptoAmount, cryptoCurrency, otp, setOtp, userEmail }) => {

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//     // Focus on the next input field if a value is entered
//     if (element.nextSibling && element.value) {
//       element.nextSibling.focus();
//     }
//   };

//   const handleContinue = () => {
//     nextStep();
//   }

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
//         <h2 className="text-gray-500 text-center text-lg sm:text-xl lg:text-2xl">
//           Buying {cryptoAmount} {cryptoCurrency}
//         </h2>

//         <p className="mb-2 mt-8 sm:mt-12 lg:mt-16 text-lg sm:text-xl lg:text-2xl">We've sent you a six-digit code</p>
//         <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-500">
//           Check your email{" "}
//           <span className="font-bold text-black">{userEmail}</span> for the OTP.
//           It could also be in your spam folder.
//         </p>

//         <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3 mb-6 sm:mb-8">
//           {otp.map((data, index) => (
//             <input
//               className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-cyan-400 rounded-xl sm:rounded-2xl text-center text-lg sm:text-xl focus:outline-none"
//               type="text"
//               name="otp"
//               maxLength="1"
//               key={index}
//               value={data}
//               onChange={(e) => handleChange(e.target, index)}
//               onFocus={(e) => e.target.select()}
//             />
//           ))}
//         </div>
        
//         <div className="mt-12 sm:mt-16 lg:mt-20">
//           <div className="text-center mb-4">
//             <a href="#" className="text-cyan-400 text-sm sm:text-base">
//               I have not received my code
//             </a>
//           </div>

//           <button
//             type="submit"
//             onClick={handleContinue}
//             className="w-full py-2 sm:py-3 text-lg sm:text-xl text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           >
//             Continue
//           </button>
//         </div>

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-8 sm:mt-10 lg:mt-12 text-xs sm:text-sm">
//           Powered by North Star Metrics
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step4;



// const Step4 = ({ nextStep, cryptoAmount, cryptoCurrency ,otp,setOtp,userEmail}) => {

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;

//     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

//     // Focus on the next input field if a value is entered
//     if (element.nextSibling && element.value) {
//       element.nextSibling.focus();
//     }
//   };

//   const handleContinue =()=>{
//     nextStep();
//   }

//   return (
//     <div className="container mx-auto  ">
//       <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
//         <h2 className="text-gray-500  text-center">
//           Buying {cryptoAmount} {cryptoCurrency}
//         </h2>

//         <p className="mb-2 mt-16 text-xl">We've sent you a six-digit code</p>
//         <p className="mb-6 text-sm text-gray-500 mr-[20%]">
//           Check your email{" "}
//           <span className="font-bold text-black">{userEmail}</span> for the OTP.
//           It could also be in your spam folder.
//         </p>

//         <div className="flex justify-start space-x-2 mb-8">
//           {otp.map((data, index) => (
//             <input
//               className="w-12 h-12 border-2 border-cyan-400 rounded-2xl text-center text-xl focus:outline-none"
//               type="text"
//               name="otp"
//               maxLength="1"
//               key={index}
//               value={data}
//               onChange={(e) => handleChange(e.target, index)}
//               onFocus={(e) => e.target.select()}
//             />
//           ))}
//         </div>
        
//         <div className="mt-[30%]">

//         <div className="text-center">
//           <a href="#" className=" text-cyan-400  ">
//             I have not received my code
//           </a>
//         </div>

//         <button
//           type="submit"
//           onClick={handleContinue}
//           className="w-full py-2  text-xl mt-1 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           >
//           Continue
//         </button>
//         </div>

//         {/* Footer Text */}
//         <div className="text-center text-gray-500 mt-12  ">
//           Powered by North Star Metrics
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step4;


const Step4 = ({ nextStep, cryptoAmount, cryptoCurrency, otp, setOtp, userEmail }) => {

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next input field if a value is entered
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleContinue = () => {
    nextStep();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500 mx-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-gray-500 text-center text-base sm:text-lg lg:text-xl">
          Buying {cryptoAmount} {cryptoCurrency}
        </h2>

        <p className="mb-2 mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl lg:text-2xl">We've sent you a six-digit code</p>
        <p className="mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base text-gray-500">
          Check your email{" "}
          <span className="font-bold text-black">{userEmail}</span> for the OTP.
          It could also be in your spam folder.
        </p>

        <div className="flex justify-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
          {otp.map((data, index) => (
            <input
              className="w-8 h-10 sm:w-10 sm:h-12 lg:w-12 lg:h-14 border-2 border-cyan-400 rounded-lg sm:rounded-xl text-center text-base sm:text-lg lg:text-xl focus:outline-none"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="text-center mb-4">
            <a href="#" className="text-cyan-400 text-xs sm:text-sm lg:text-base">
              I have not received my code
            </a>
          </div>

          <button
            type="submit"
            onClick={handleContinue}
            className="w-full py-2 sm:py-3 text-base sm:text-lg lg:text-xl text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Continue
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-6 sm:mt-8 lg:mt-10 text-xs sm:text-sm">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step4;
