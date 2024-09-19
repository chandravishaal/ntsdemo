import React, { useState } from 'react';

const InfoTooltip = ({ text }) => (
  <div className="relative group inline-block ml-1">
    <span className="text-black text-lg hover:text-black-600">
      <i className="ri-error-warning-fill"></i>
    </span>
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
      {text}
    </div>
  </div>
);

const MarketStatsDropdown = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: <h4 className='text-lg md:text-3xl pl-7 font-montserrat'>Market stats</h4>,
      content: (
        <div className="flex flex-wrap justify-center p-4 md:p-10">
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              MARKET CAP
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">₹91.0T</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              VOLUME (24H)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">₹1.8T</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              CIRCULATING SUPPLY
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">19.8M BTC</p>
          </div>
                     
            <div className="w-full md:w-1/3 p-7">
             <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">TYPICAL HOLD TIME
             <span className='text-black font-light'>
             <InfoTooltip text="demo text" />
             </span> 
             </span>
             <p className="text-base md:text-lg  font-century-gothic text-center">101 days</p>
             </div>

                        <div className="w-full md:w-1/3 p-7">
             <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">POPULARITY
             <span className='text-black font-light'>
             <InfoTooltip text="demo text" />
            </span> 
             </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">#1</p>
           </div>
                  
                      <div className="w-full md:w-1/3 p-7">
             <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">ALL TIME HIGH
             <span className='text-black font-light'>
             <InfoTooltip text="demo text" />
            </span> 
             </span>
             <p className="text-base md:text-lg  font-century-gothic text-center">₹6.2M</p>
           </div>

        </div>
      ),
    },
    {
      title: <h4 className='text-lg md:text-3xl pl-7 font-montserrat'>Market performance</h4>,
      content: (
        <div className="flex flex-wrap justify-center p-4 md:p-10">
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              PRICE CHANGE (1H)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">+0.28%</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              PRICE CHANGE (1D)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">+2.48%</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              PRICE CHANGE (1W)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">+1.61%</p>
          </div>



       <div className="w-full md:w-1/3 p-7">
             <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">PRICE CHANGE (2W)
             <span className='text-black  font-light'>
             <InfoTooltip text="demo text" />
            </span> 
             </span>
             <p className="text-base md:text-lg  font-century-gothic text-center">-1.24%</p>
           </div>
           <div className="w-full md:w-1/3 p-7">
             <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">PRICE CHANGE (1M)
             <span className='text-black  font-light'>
             <InfoTooltip text="demo text" />
            </span> 
             </span>
             <p className="text-base md:text-lg  font-century-gothic text-center">-1.17%</p>
           </div>
           <div className="w-full md:w-1/3 p-7">
             <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">PRICE CHANGE (1Y)
             <span className='text-black  font-light'>
             <InfoTooltip text="demo text" />
            </span> 
             </span>
             <p className="text-base md:text-lg  font-century-gothic text-center">+122.6%</p>
       </div>
       




          
        </div>
      ),
    },

    {
      title: <h4 className='text-lg md:text-3xl pl-7 font-montserrat'>Market benchmarks</h4>,
      content: (
        <div className="flex flex-wrap justify-center p-4 md:p-10">
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
            PERFORMANCE (1Y)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">+125.7%</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
            VS. MARKET (1Y)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">+11.84%</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
              VS. ETH (1Y)
              <InfoTooltip text="demo text" />
            </span>
            <p className="text-base md:text-lg  font-century-gothic text-center">+52.49%</p>
          </div>
        </div>
      ),
    },
    
    
    // {
    //   title: <h4 className='text-lg md:text-3xl pl-7 font-century-gothic'>Market benchmarks</h4>,
    //   content: (
    //     <div className="flex justify-evenly p-4 md:py-10 ">
    //       <div className="w-full  md:w-1/4 p-5">
            
    //         <span className="text-2xl  font-century-gothic text-cyan-400 block text-center ">
    //           PERFORMANCE (1Y)
    //           <InfoTooltip text="demo text" />
    //         </span>
    //         <p className="text-base md:text-lg  font-century-gothic text-center">+125.7%</p>
    //       </div>
    //       <div className="w-full md:w-1/4 p-5">
    //         <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
    //           VS. MARKET (1Y)
    //           <InfoTooltip text="demo text" />
    //         </span>
    //         <p className="text-base md:text-lg  font-century-gothic text-center">+11.84%</p>
    //       </div>
    //       <div className="w-full md:w-1/4 p-5">
    //         <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
    //           VS. ETH (1Y)
    //           <InfoTooltip text="demo text" />
    //         </span>
    //         <p className="text-base md:text-lg  font-century-gothic text-center">+52.49%</p>
    //       </div>
    //       <div className="w-full md:w-1/4 p-5">
    //         <span className="text-2xl  font-century-gothic text-cyan-400 block text-center">
    //           VS. ETH (1Y)
    //           <InfoTooltip text="demo text" />
    //         </span>
    //         <p className="text-base md:text-lg  font-century-gothic text-center">+52.49%</p>
    //       </div>
    //     </div>
    //   ),
    // },


  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">Market Overview</h2>
      <div className="border border-black ">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-black">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-4 py-4 bg-white flex justify-between items-center ${
                activeIndex === index ? 'bg-gray-100' : ''
              }`}
            >
              <span className="text-gray-800 font-medium">{item.title}</span>
              <i
                className={`ri-arrow-up-wide-fill text-gray-500 transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              ></i>
            </button>
            {activeIndex === index && (
              // <div className="px-4 py-4">
              <div className="px-4 py-3 bg-white border-t-2  border-black text-gray-700 flex justify-around">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketStatsDropdown;
