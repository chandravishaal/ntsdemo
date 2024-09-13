import React from 'react';

const MetricsBytes = () => {
  return (
    <div id="metrics-bytes" className="container mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="text-start mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-century-gothic">North Star Metrics Bytes</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2 font-century-gothic">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {/* Card 1 */}
        <div className="bg-[#F6F6F7] shadow-md rounded-lg overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/07/20/52/bitcoin-3137984_1280.jpg"
            alt="Crypto icons"
            className="w-full h-52 sm:h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-semibold font-century-gothi">Lorem Ipsum is simply</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <button className="mt-4 bg-[#03CBD2] text-black font-century-gothic font-semibold px-4 py-2 text-sm md:text-base rounded-full">
              Read Full Story
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F6F6F7] shadow-md rounded-lg overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/27/13/22/bitcoin-4508501_1280.jpg"
            alt="Bitcoin hand"
            className="w-full h-52 sm:h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-semibold font-century-gothic">Lorem Ipsum is simply</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <button className="mt-4 bg-[#03CBD2] text-black font-century-gothic font-semibold px-4 py-2 text-sm md:text-base rounded-full">
              Read Full Story
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F6F6F7] shadow-md rounded-lg overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/06/12/40/cryptocurrency-6601591_1280.jpg"
            alt="Bitcoin Ethereum hands"
            className="w-full h-52 sm:h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-semibold font-century-gothic">Lorem Ipsum is simply</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <button className="mt-4 bg-[#03CBD2] text-black font-century-gothic font-semibold px-4 py-2 text-sm md:text-base rounded-full">
              Read Full Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsBytes;
