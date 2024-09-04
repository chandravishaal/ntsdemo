import React from 'react'

const Countries = () =>  {
    return (
      <section className="h-[15rem] container mx-auto bg-gradient-to-r  from-[#002651] to-[#3BB9E3] text-white py-12 mt-10 mb-64">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Supported Countries */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">170+</h3>
            <p className="mt-2 text-lg">Supported countries</p>
            <div className="flex mt-4 space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">EMEA</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">APAC</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">LATAM</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">...</span>
              </div>
            </div>
          </div>
  
          {/* Fiat Currencies */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="mt-2 text-lg">Fiat currencies</p>
            <div className="flex mt-4 space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">$</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">€</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">£</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">...</span>
              </div>
            </div>
          </div>
  
          {/* Fiat Payment Channels */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="mt-2 text-lg">Fiat payment channels</p>
            <div className="flex mt-4 space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="path/to/visa-icon.png" alt="Visa" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="path/to/apple-pay-icon.png" alt="Apple Pay" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="path/to/bank-transfer-icon.png" alt="Bank Transfer" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">...</span>
              </div>
            </div>
          </div>
  
          {/* Cryptocurrencies Supported */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="mt-2 text-lg">Cryptocurrencies supported</p>
            <div className="flex mt-4 space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="path/to/bitcoin-icon.png" alt="Bitcoin" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="path/to/ethereum-icon.png" alt="Ethereum" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="path/to/tether-icon.png" alt="Tether" className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-semibold">...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
 
export default Countries
