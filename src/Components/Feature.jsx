import React from 'react';
import mobileImage1 from '/src/assets/Images/5th_section_mobile1.png';  
import mobileImage2 from '/src/assets/Images/5th_section_mobile2.png'; 

const FeatureComponent = () => {
  return (
    <div className="container mx-auto py-16 px-4 ">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 ">
        
        {/* First Mobile Image and Content */}
        <div className="flex flex-row items-start lg:items-start  relative">
          <img src={mobileImage1} alt="Mobile Feature 1" className="w-auto h-[700px] " />
          <div className=' p-2 w-[70%] lg:-ml-5 relative z-10 mt-[25%]'>

            <h2 className="text-2xl font-semibold text-teal-400 mb-2">North Star Metrics</h2>
            <p className="text-gray-600 mb-4 text-xl">Buy or sell hundreds of cryptocurrencies</p>
            <button className="bg-teal-400 text-white py-2 px-4 rounded-lg">Sign up</button>
          </div>
        </div>

        {/* Second Mobile Image and Content */}
        <div className="flex flex-row items-center justify-end text-center lg:text-right lg:items-end  relative">
          <div className=' pr-2  lg:-mr-8 relative z-10 mb-[25%] '>
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">Advance</h2>
            <p className="text-gray-600 mb-4 text-xl ">Powerful tools, designed for the advanced trader</p>
            <button className="bg-teal-400 text-white py-2 px-4 rounded-lg">Sign up</button>
          </div>
          <img src={mobileImage2} alt="Mobile Feature 2" className="w-auto h-[750px] ml-auto " />
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
