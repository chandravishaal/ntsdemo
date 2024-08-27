
const Step4 = ({ nextStep, cryptoAmount, cryptoCurrency ,otp,setOtp,userEmail}) => {

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next input field if a value is entered
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleContinue =()=>{
    nextStep();
  }

  return (
    <div className="container mx-auto  ">
      <div className="bg-white shadow-xl shadow-slate-950 rounded-2xl p-10 border-2 border-cyan-500 mx-[20%] ">
        <h2 className="text-gray-500  text-center">
          Buying {cryptoAmount} {cryptoCurrency}
        </h2>

        <p className="mb-2 mt-16 text-xl">We've sent you a six-digit code</p>
        <p className="mb-6 text-sm text-gray-500 mr-[20%]">
          Check your email{" "}
          <span className="font-bold text-black">{userEmail}</span> for the OTP.
          It could also be in your spam folder.
        </p>

        <div className="flex justify-start space-x-2 mb-8">
          {otp.map((data, index) => (
            <input
              className="w-12 h-12 border-2 border-cyan-400 rounded-2xl text-center text-xl focus:outline-none"
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
        
        <div className="mt-[30%]">

        <div className="text-center">
          <a href="#" className=" text-cyan-400  ">
            I have not received my code
          </a>
        </div>

        <button
          type="submit"
          onClick={handleContinue}
          className="w-full py-2  text-xl mt-1 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
          Continue
        </button>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-500 mt-12  ">
          Powered by North Star Metrics
        </div>
      </div>
    </div>
  );
};

export default Step4;
