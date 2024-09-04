import React from 'react';

const Footprint = () => {
  return (
    <section className="py-10 bg-[#F6F9FC]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
        <p className="text-gray-700 font-century-gothic font-extrabold">
          Proudly serving the following countries
        </p>
      </div>

      <div
        className="relative h-[40rem] bg-center bg-cover container mx-auto"
        style={{ backgroundImage: "url('/src/assets/Images/OtcDesk/map.png')" }}
      >
        {/* Canada */}
        <div className="absolute -top-[5%] left-[7%] flex  items-center">
          <div className="relative ml-4 px-4 py-2  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">

            <div className="absolute right-2 -bottom-7  w-0 h-0 
                            border-t-[40px] border-t-white
                            border-l-[45px] border-l-transparent">
          <div id="location" className='w-10 h-10'>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>

           <div id="img" className='h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center p-0.5'>
            <img src="src/assets/Images/OtcDesk/section6_icon1.png"
             alt="Canada"
             className="w-8.5 h-8.5 rounded-full"/>
            </div> 

            <div id="location">

            </div>

             
            <div>
              <h4 className="font-semibold text-center">Canada</h4>
              <p className="text-gray-600">CAD Market Rate</p>
            </div>
          </div>
        </div>

        {/* United States */}
        <div className="absolute top-[30%] left-[25%] flex items-center">
          <div className="relative ml-4 p-4 bg-white rounded-full flex items-center shadow-lg border border-gray-300">
            <div className="absolute -left-4 -top-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-300"></div>
            <img src="path/to/us-flag.png" alt="United States" className="w-6 h-6 rounded-full mr-2" />
            <div>
              <h4 className="font-semibold">United States</h4>
              <p className="text-gray-600">USD Market Rate</p>
            </div>
          </div>
        </div>

        {/* UK */}
        <div className="absolute top-[15%] left-[60%] flex items-center">
          <div className="relative ml-4 p-4 bg-white rounded-full flex items-center shadow-lg border border-gray-300">
            <div className="absolute -left-4 -top-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-300"></div>
            <img src="path/to/uk-flag.png" alt="UK" className="w-6 h-6 rounded-full mr-2" />
            <div>
              <h4 className="font-semibold">UK</h4>
              <p className="text-gray-600">GBP Market Rate</p>
            </div>
          </div>
        </div>

        {/* Europe */}
        <div className="absolute top-[20%] left-[65%] flex items-center">
          <div className="relative ml-4 p-4 bg-white rounded-full flex items-center shadow-lg border border-gray-300">
            <div className="absolute -left-4 -top-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-300"></div>
            <img src="path/to/europe-flag.png" alt="Europe" className="w-6 h-6 rounded-full mr-2" />
            <div>
              <h4 className="font-semibold">Europe</h4>
              <p className="text-gray-600">EUR Market Rate</p>
            </div>
          </div>
        </div>

        {/* India */}
        <div className="absolute top-[50%] left-[70%] flex items-center">
          <div className="relative ml-4 p-4 bg-white rounded-full flex items-center shadow-lg border border-gray-300">
            <div className="absolute -left-4 -top-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-300"></div>
            <img src="path/to/india-flag.png" alt="India" className="w-6 h-6 rounded-full mr-2" />
            <div>
              <h4 className="font-semibold">India</h4>
              <p className="text-gray-600">INR Market Rate</p>
            </div>
          </div>
        </div>

        {/* Australia */}
        <div className="absolute top-[70%] left-[85%] flex items-center">
          <div className="relative ml-4 p-4 bg-white rounded-full flex items-center shadow-lg border border-gray-300">
            <div className="absolute -left-4 -top-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-300"></div>
            <img src="path/to/australia-flag.png" alt="Australia" className="w-6 h-6 rounded-full mr-2" />
            <div>
              <h4 className="font-semibold">Australia</h4>
              <p className="text-gray-600">AUD Market Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;
