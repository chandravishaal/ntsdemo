
import mobileImage1 from '/src/assets/Images/5th_section_mobile1.png';  
import mobileImage2 from '/src/assets/Images/5th_section_mobile2.png'; 

const FeatureComponent = () => {
  return (
    <section className='featureSection-background'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 ">
          
          {/* First Mobile Image and Content */}
          <div className="flex flex-row items-start lg:items-start relative">
            <img src={mobileImage1} alt="Mobile Feature 1" className="w-auto h-[700px] -translate-x-[2rem]" />
            <div className=' p-2 w-[70%] lg:-ml-5 relative z-10 mt-[25%] -translate-x-[1rem]'>

              <h2 className="text-2xl font-bold text-primaryCyan mb-2">North Star Metrics</h2>
              <p className="text-gray-600 mb-4 text-xl">Buy or sell hundreds of cryptocurrencies</p>
              <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:w-1/2 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
                Sign up
              </button>
            </div>
          </div>

          {/* Second Mobile Image and Content */}
          <div className="flex flex-row items-center justify-end text-center lg:text-right lg:items-end  relative">
            <div className=' pr-2  lg:-mr-8 relative z-10 mb-[25%] translate-x-[1rem]'>
              <h2 className="text-2xl font-bold text-primaryCyan mb-2">Advance</h2>
              <p className="text-gray-600 mb-4 text-xl ">Powerful tools, designed for the advanced trader</p>
              <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:w-1/2 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
                Sign up
              </button>
            </div>
            <img src={mobileImage2} alt="Mobile Feature 2" className="w-auto h-[750px] ml-auto translate-x-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
