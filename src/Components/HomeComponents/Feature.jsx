
import mobileImage1 from '/src/assets/Images/5th_section_mobile1.png';  
import mobileImage2 from '/src/assets/Images/5th_section_mobile2.png'; 

const FeatureComponent = () => {
  return (
    <section className='featureSection-background'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-y-8 ">
          
          {/* First Mobile Image and Content */}
          <div className="flex flex-col md:flex-row items-start lg:items-start relative w-full">
            <img data-aos="fade-left" data-aos-duration="2000" src={mobileImage1} alt="Mobile Feature 1" className="w-auto h-[700px] mx-auto md:-translate-x-[2rem]" />
            <div data-aos="fade-up" data-aos-duration="2000" className=' p-2 w-[70%] lg:-ml-5 relative z-10 md:mt-[15%] mx-auto md:text-left text-center -translate-x-[1rem]'>
              <h2 className="text-2xl font-bold text-primaryCyan mb-2">North Star Metrics</h2>
              <p className="text-gray-600 mb-4 text-xl">Buy or sell hundreds of cryptocurrencies</p>
              <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-auto lg:w-2/4 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
                Sign up
              </button>
            </div>
          </div>

          {/* Second Mobile Image and Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-end text-center lg:text-right lg:items-end  relative w-full">
            <div data-aos="fade-down" data-aos-duration="2000" className='w-[70%] pr-2  lg:-mr-8 relative z-10 mb-[25%] translate-x-[1rem] md:text-right text-center'>
              <h2 className="text-2xl font-bold text-primaryCyan mb-2">Advance</h2>
              <p className="text-gray-600 mb-4 text-xl ">Powerful tools, designed for the advanced trader</p>
              <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-auto lg:w-2/4 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
                Sign up
              </button>
            </div>
            <img data-aos="fade-right" data-aos-duration="2000" src={mobileImage2} alt="Mobile Feature 2" className="w-auto h-[750px] mx-auto md:ml-auto md:translate-x-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
