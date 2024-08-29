import React from 'react';

const Culture = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center'>
      <div id='main' className="h-4/6 mx-auto container
      bg-gradient-to-b from-white to-cyan-50
        rounded-lg flex items-center justify-between overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left px-6 md:px-12">
          <h2 className="text-4xl font-antipasto-pro font-bold text-gray-800 ">
            Culture and employment at <br />
            <span className="text-cyan-400 text-5xl">North Star Metrics</span>
          </h2>
          <h3 className="text-2xl tracking-wide	 font-century-gothic text-black">Passionate about technology</h3>
          <p className="text-gray-500 pr-24 font-century-gothic">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/2 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
            See available vacancies
          </button>
        </div>
        
        {/* Right Section */}
        <div className="md:w-1/2 h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Company Culture"
            className="rounded-r-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Culture;
