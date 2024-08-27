import { useState } from "react";

const Step3 = ({ nextStep, cryptoAmount, cryptoCurrency ,fiatCurrency,fiatAmount,serviceFee,networkFee,selectedMethod,setStep}) => {


  const handleContinue = () => {
    nextStep();
  };

  const changePaymentMethod=()=>{
    setStep(2);
  }

  return (
    <div className="container mx-auto  ">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
        <h2 className="text-gray-500  text-center">
          Buying {cryptoAmount} {cryptoCurrency}
        </h2>


      <h2 className="text-lg font-semibold mb-4 mt-12">Order Summary</h2>

      <div className="w-full space-y-4 mb-6">
        <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
          <span className="text-gray-500">Amount to pay</span>
          <span className="font-semibold">{fiatCurrency} {fiatAmount}</span>
          {/* <span className="font-semibold">USD 50,000.00</span> */}
        </div>

        <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
          <span className="text-gray-500">Service Fee</span>
          <span className="font-semibold">USD {serviceFee}</span>
          {/* <span className="font-semibold">USD 10.00</span> */}
        </div>

        <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
          <span className="text-gray-500">Network Fee</span>
          <span className="font-semibold">USD {networkFee}</span>
        </div>

        <div className="flex justify-between items-center border-2 border-cyan-600 rounded-2xl p-3">
          <span className="text-gray-500">Payment Method</span>
          <span className="font-semibold">{selectedMethod}</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-1">
        Mobile Money transactions usually take a few minutes to clear
      </p>

      <a onClick={changePaymentMethod} className="mb-8 text-cyan-400 text-sm">
        Change Payment Method
      </a>

          <button
            type="submit"
            onClick={handleContinue}
            className="w-full py-2   text-xl mt-10 text-white bg-cyan-500 rounded-2xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Continue
          </button>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-12  ">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step3;
