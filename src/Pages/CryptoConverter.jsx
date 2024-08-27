// CryptoConverter.js (Parent Component)
import React, { useState } from "react";
import Step1 from "../Components/CryptoConverterSteps/Step1";
import Step2 from "../Components/CryptoConverterSteps/Step2";
import Step3 from "../Components/CryptoConverterSteps/Step3";
import Step4 from "../Components/CryptoConverterSteps/Step4";
import Step5 from "../Components/CryptoConverterSteps/Step5";
import Step6 from "../Components/CryptoConverterSteps/Step6";
import Step7 from "../Components/CryptoConverterSteps/Step7";
import Step8 from "../Components/CryptoConverterSteps/Step8";

const CryptoConverter = () => {
  //  State management
  // step1
  const [cryptoCurrency, setCryptoCurrency] = useState("Bitcoin (BTC)");
  const [fiatCurrency, setFiatCurrency] = useState("Tether (USDT)");
  const [cryptoAmount, setCryptoAmount] = useState();
  const [fiatAmount, setFiatAmount] = useState();

  // step 2 payment method
  const [selectedMethod, setSelectedMethod] = useState(null);

  // step3
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // step 4
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const userEmail = formData.email;

  // step 5 mobile order summary
  const serviceFee = 10.0;
  const networkFee = 0.0;

  // step 6
  const [walletAddress, setWalletAddress] = useState('');

  // step 7
  const [depositDetails] = useState({
    amount: "USD 50,000.00",
    bankName: "Bank of India",
    accountNumber: "123....8100",
    accountName: "Yellow Card Financial",
    referenceCode: "918876825591",
    clearingTime: "24---48hrs"
  });

  // step 8
  const [userName] = useState("Manash");

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);

  const setStep = (i) => setCurrentStep(i);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            cryptoCurrency={cryptoCurrency}
            setCryptoCurrency={setCryptoCurrency}
            fiatCurrency={fiatCurrency}
            setFiatCurrency={setFiatCurrency}
            cryptoAmount={cryptoAmount}
            setCryptoAmount={setCryptoAmount}
            fiatAmount={fiatAmount}
            setFiatAmount={setFiatAmount}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            cryptoCurrency={cryptoCurrency}
            cryptoAmount={cryptoAmount}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            setStep={setStep}
          />
        );

      case 3:
        return (
          <Step3
            nextStep={nextStep}
            cryptoCurrency={cryptoCurrency}
            cryptoAmount={cryptoAmount}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 4:
        return (
          <Step4
            nextStep={nextStep}
            cryptoAmount={cryptoAmount}
            cryptoCurrency={cryptoCurrency}
            otp={otp}
            setOtp={setOtp}
            userEmail={userEmail}
          />
        );

      case 5:
        return (
          <Step5
            nextStep={nextStep}
            cryptoAmount={cryptoAmount}
            cryptoCurrency={cryptoCurrency}
            fiatCurrency={fiatCurrency}
            fiatAmount={fiatAmount}
            serviceFee={serviceFee}
            networkFee={networkFee}
            selectedMethod={selectedMethod}
            setStep={setStep}
          />
        );

      case 6:
        return (
          <Step6
            nextStep={nextStep}
            fiatCurrency={fiatCurrency}
            fiatAmount={fiatAmount}
            walletAddress={walletAddress}
            setWalletAddress={setWalletAddress}
          />
        );

      case 7:
        return <Step7 nextStep={nextStep}
        depositDetails={depositDetails}
        />;

      case 8:
        return <Step8 userName={userName}/>;

      default:
        return <Step1 nextStep={nextStep} />;
    }
  };

  return (
    <div className="form-bg min-h-screen py-12 border-b-[25px] border-cyan-400">
      <div className="container max-w-5xl mx-auto p-6 ">{renderStep()}</div>
    </div>

    // <div className="bg-[#f4f8ff] min-h-screen py-12">
    //   <div className="container max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
    //     {renderStep()}
    //   </div>
    // </div>
  );
};

export default CryptoConverter;
