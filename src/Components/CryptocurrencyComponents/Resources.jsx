import React, { useState } from 'react';

const Resources = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item open by default

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if the same index is clicked
    } else {
      setActiveIndex(index); // Set clicked index as active
    }
  };

  const accordionData = [
    {
      title: 'What is Bitcoin?',
     content: "Bitcoin (BTC) is a decentralized cryptocurrency that was first described in a 2008 whitepaper by an individual or group of individuals using the alias Satoshi Nakamoto. Officially launched in January 2009, Bitcoin is a peer-to-peer online currency that allows transactions to happen directly between equal and independent network participants without the need for any intermediary. Bitcoin is digital money that cannot be inflated or manipulated by any individual, company, government, or central bank. Bitcoin is recognized as one of the initial cryptocurrencies to come into use and has inspired the development of thousands of competing projects. There will only ever be 21 million BTC. Bitcoin is highly divisible, with its smallest unit, 0.00000001 BTC, called a satoshi or sat. As Bitcoin's value has risen, its easy divisibility has become a key attribute."
},
    {
      title: 'How does Bitcoin work?',
      content: "Bitcoin (BTC) is a decentralized cryptocurrency that was first described in a 2008 whitepaper by an individual or group of individuals using the alias Satoshi Nakamoto..."
    },
    {
      title: 'What are the potential use cases for Bitcoin?',
      content: "Bitcoin (BTC) is a decentralized cryptocurrency that was first described in a 2008 whitepaper by an individual or group of individuals using the alias Satoshi Nakamoto..."
    },
    {
      title: 'What is the history of Bitcoin?',
      content: "Bitcoin (BTC) is a decentralized cryptocurrency that was first described in a 2008 whitepaper by an individual or group of individuals using the alias Satoshi Nakamoto..."
    },
    {
      title: 'How can I buy Bitcoin?',
      content: "Bitcoin (BTC) is a decentralized cryptocurrency that was first described in a 2008 whitepaper by an individual or group of individuals using the alias Satoshi Nakamoto..."
    },
    {
      title: 'What is Bitcoin mining?',
      content: "Bitcoin (BTC) is a decentralized cryptocurrency that was first described in a 2008 whitepaper by an individual or group of individuals using the alias Satoshi Nakamoto..."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-montserrat">Resources</h2>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
        <button className="bg-[#03CBD2] text-black px-4 py-2 rounded-full flex items-center space-x-2">
          <i className="ri-newspaper-fill"></i>
          <span className='font-bold font-century-gothic'>Whitepaper</span>
        </button>
        <button className="bg-[#03CBD2] text-black px-4 py-2 rounded-full flex items-center space-x-2">
          <i className="ri-global-fill"></i>
          <span className='font-bold font-century-gothic'>Official website</span>
        </button>
      </div>

      {/* Accordion Section */}
      <div className="border border-cyan-200">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-cyan-200 overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-4 py-3 sm:py-4 bg-cyan-50 flex justify-between items-center ${
                activeIndex === index ? 'border-blue-600' : 'border-gray-300'
              }`}
            >
              <span className="text-black font-century-gothic text-xl font-semibold">{item.title}</span>
              <i
                className={`ri-arrow-up-wide-fill text-gray-500 transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              ></i>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 sm:py-4 bg-white border-t-2 border-cyan-200 text-gray-700 font-century-gothic">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;



