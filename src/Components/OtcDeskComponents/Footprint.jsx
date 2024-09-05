import React from 'react';

const Footprint = () => {
  return (
    <section className="h-[61rem] py-10 bg-[#F6F9FC]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
        <p className="text-gray-700 font-medium font-antipasto-pro text-4xl mt-2">
          Proudly serving the following countries
        </p>
      </div>

      <div
        className="relative h-[50rem] bg-center bg-cover container mx-auto"
        style={{ backgroundImage: "url('/src/assets/Images/OtcDesk/map.png')" }}
      >
        {/* Canada */}
        <div className="absolute -top-[2%] left-[0.1%] flex  items-center">
        <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7  w-0 h-0 
                            border-t-[35px] border-t-white
                            border-l-[45px] border-l-transparent">
          <div id="location" className='w-5 h-5'>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>
           <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center '>
            <img src="src/assets/Images/OtcDesk/section6_icon1.png"
             alt="Canada"
             className="w-8 h-8 rounded-full"/>
            </div>              
            <div>
            <h4 className="font-bold font-century-gothic text-sm text-center">Canada</h4>
            <p className="text-gray-600 font-century-gothic text-sm"  >CAD Market Rate</p>
            </div>
          </div>
        </div>

       

        {/* United States */}
        <div className="absolute top-[16.4%] left-[15.2%] flex items-center">
        <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7  w-0 h-0 
                            border-t-[35px] border-t-white
                            border-l-[45px] border-l-transparent">
          <div id="location" className='w-5 h-5'>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>
           <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
            <img src="src/assets/Images/OtcDesk/section6_icon2.png"
             alt="Canada"
             className="w-7 h-7 rounded-full"/>
            </div>              
            <div>
              <h4 className="font-bold font-century-gothic text-sm text-center">United States</h4>
              <p className="text-gray-600 font-century-gothic text-sm">USD Market Rate</p>
            </div>
          </div>
        </div>

        {/* UK */}
        <div className="absolute top-[9%] left-[38%] flex items-center">
        <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7  w-0 h-0 
                            border-t-[35px] border-t-white
                            border-l-[45px] border-l-transparent">
          <div id="location" className='w-5 h-5'>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>
           <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
            <img src="src/assets/Images/OtcDesk/section6_icon3.png"
             alt="Canada"
             className="w-7 h-7 rounded-full"/>
            </div>              
            <div>
              <h4 className="font-bold font-century-gothic text-sm text-center">UK</h4>
              <p className="text-gray-600 font-century-gothic text-sm">GBP Markett Rate</p>
            </div>
          </div>
        </div>

        {/* Europe */}
        <div className="absolute top-[8.9%] left-[56.2%] flex items-center">
        <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
            <div className="absolute left-2 -bottom-7  w-0 h-0 
                            border-t-[35px] border-t-white
                            border-l-[45px] border-l-transparent -rotate-90">
          <div id="location" className=' rotate-90 absolute bottom-7 right-10  w-5 h-5 '>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>
            
           <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
            <img src="src/assets/Images/OtcDesk/section6_icon4.png"
             alt="Canada"
             className="w-7 h-7 rounded-full"/>
            </div>              
            <div>
              <h4 className="font-bold font-century-gothic text-sm text-center">Europe</h4>
              <p className="text-gray-600 font-century-gothic text-sm">EUR Markett Rate</p>
            </div>
          </div>
        </div>

       

        {/* India */}
        <div className="absolute top-[24.4%] left-[64.2%] flex items-center">
        <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7  w-0 h-0 
                            border-t-[35px] border-t-white
                            border-l-[45px] border-l-transparent">
          <div id="location" className='w-5 h-5'>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>
           <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
            <img src="src/assets/Images/OtcDesk/section6_icon5.png"
             alt="Canada"
             className="w-7 h-7 rounded-full"/>
            </div>              
            <div>
            <h4 className="font-bold font-century-gothic text-sm text-center">India</h4>
            <p className="text-gray-600 font-century-gothic text-sm">INR Market Rate</p>
            </div>
          </div>
        </div>

       

        {/* Australia */}
        <div className="absolute top-[55%] left-[80%] flex items-center">
        <div className="relative ml-4 px-2 py-1  bg-white rounded-3xl flex flex-col items-center  shadow-lg border border-gray-300">
            <div className="absolute right-2 -bottom-7  w-0 h-0 
                            border-t-[35px] border-t-white
                            border-l-[45px] border-l-transparent">
          <div id="location" className='w-5 h-5'>
          <img src="src/assets/Images/OtcDesk/section6_location_icon.png" alt="" />
          </div>
            </div>
           <div id="img" className='h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center p-0.5'>
            <img src="src/assets/Images/OtcDesk/section6_icon6.png"
             alt="Canada"
             className="w-7 h-7 rounded-full"/>
            </div>              
            <div>
            <h4 className="font-bold font-century-gothic text-sm text-center">Australia</h4>
            <p className="text-gray-600 font-century-gothic text-sm">AUD Market Rate</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footprint;
