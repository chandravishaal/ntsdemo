import React from 'react';
import bitcoinImage from "../../assets/Images/cryptocurrency/2nd_section_img.png";

const BitcoinMarketData = () => {
  return (
    <>
      <div className='bg-cyan-50'>
        <div className="container mx-auto px-2 py-20">
          {/* Market Data Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold font-montserrat">
              Market data for <span className="text-orange-500">Bitcoin</span>
            </h2>
          </div>

          {/* 4 Column Market Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Price */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Price</h3>
              <p className="mt-1 md:mt-4 font-century-gothic ">50,499.10€</p>
              {/* Horizontal line for mobile/tablet screens */}
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
            {/* Price Change (24H) */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700 ">Price change (24H)</h3>
              <p className="mt-1 md:mt-4 font-century-gothic text-red-500">-1.20%</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
            {/* Price Change (7D) */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Price change (7D)</h3>
              <p className="mt-1 md:mt-4 font-century-gothic text-red-500">-6.07%</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
            {/* Market Capitalization */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Market capitalization</h3>
              <p className="mt-1 md:mt-4 font-century-gothic">990,729,093,099.70€</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
            {/* Volume (24H) */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Volume (24H)</h3>
              <p className="mt-1 md:mt-4 font-century-gothic">173,496,189,601.98€</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div >
            {/* Max Supply */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Max supply</h3>
              <p className="mt-1 md:mt-4 font-century-gothic">21,000,000 BTC</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
            {/* Total Supply */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Total supply</h3>
              <p className="mt-1 md:mt-4 font-century-gothic">21,000,000 BTC</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
            {/* Diluted Market Cap */}
            <div className='box'>
              <h3 className="text-2xl font-semibold sm:text-2xl font-century-gothic text-gray-700">Diluted market cap</h3>
              <p className="mt-1 md:mt-4 font-century-gothic">1,053,416,984,771.79€</p>
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
          </div>
        </div>
      </div>

      {/* About Bitcoin Section */}
      <div className='banner'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center container mx-auto px-4 py-8">
          {/* Bitcoin Image */}
          <div className="flex justify-center p-4 sm:p-10">
            <img
              src={bitcoinImage}
               alt="Bitcoin Cryptocurrency"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          {/* About Bitcoin Text */}
          <div className="p-4">
            <h3 className="text-xl sm:text-3xl font-bold font-century-gothic mb-9 ">
              About <span className="text-orange-500">Bitcoin</span>
            </h3>
            <p className="text-gray-600 text-sm sm:text-base font-century-gothic">
              A bitcoin (in lowercase) is the name given to a unit of the Bitcoin cryptocurrency and whose representation is: 1 BTC. A bitcoin is a divisible unit, in fact, each bitcoin can be divided to eight decimal places, which allows you to handle each bitcoin in very small fractions, as required. These smaller bitcoin units are called "satoshis" and you can manage them also to send and receive bitcoin payments, because when you reach 100,000,000 satoshis, you get the equivalent of 1 BTC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BitcoinMarketData;
