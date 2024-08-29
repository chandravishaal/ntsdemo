import React from 'react'

const EveryDay = () =>  {
    return (
      <section className="h-screen w-full flex items-center justify-center "
      style={{
        backgroundImage: "url('/src/assets/Images/ServicesImages/hero_bg1.png')",
      }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  ">
          
          {/* Left Section - Text and Menu */}
          <div className="flex flex-col justify-center items-start space-y-6 max-w-lg">
            <h1 className="text-4xl font-semibold text-primaryCyan">For Everyday Use</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut la.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="text-gray-800">Buy / Sell</li>
              <li className="text-gray-800">Earn</li>
              <li className="text-gray-800 font-semibold flex items-center">
                Payment Method <span className="ml-2">→</span>
              </li>
              <li className="text-gray-800">Academy</li>
              <li className="text-gray-800">Converter</li>
              <li className="text-gray-800">Wallet</li>
            </ul>
          </div>
  
          {/* Right Section - Phone Image and Icons */}
          <div className="relative mt-8 md:mt-0 md:ml-12 flex justify-center items-center">
            <div className="relative">
              {/* Phone Image */}
              <img
              src="/src/assets/Images/ServicesImages/hero_mobile.png"
              alt="Crypto Exchange App"
              className="w-96"
            />

          
              {/* <div id=' Icons' className="absolute -top-8 -right-8 bg-blue-100 p-3 rounded-full shadow-md">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Bitcoin Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="absolute top-10 -left-10 bg-blue-100 p-3 rounded-full shadow-md">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Tether Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="absolute -bottom-10 -left-8 bg-blue-100 p-3 rounded-full shadow-md">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Ethereum Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-100 p-3 rounded-full shadow-md">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Litecoin Icon"
                  className="w-8 h-8"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  };

export default EveryDay
