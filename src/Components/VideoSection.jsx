import React from 'react';

const VideoSection = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Video Section */}
      <div className="relative">
        <video
          src="/src/assets/Video/sampleVideo1.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto "
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between  videoSection-background">
        {/* Left Side: More Videos */}
        <div className="w-full md:w-1/2  mt-[4%] ml-[4%]">
          <h2 className="text-3xl font-bold mb-6">More Videos</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <video src="/src/assets/Video/sampleVideo1.mp4" alt="Video Thumbnail" className="w-1/4 rounded-lg" />
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <video src="/src/assets/Video/sampleVideo1.mp4" alt="Video Thumbnail" className="w-1/4 rounded-lg" />
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex space-x-4 mt-8">
              <button className="bg-sky-400 text-white py-2 px-5 rounded-3xl">Tradable</button>
              <button className="bg-cyan-700 text-white py-2 px-5 rounded-3xl">Top Gainers</button>
            </div>
          </div>
        </div>

        {/* Right Side: Mobile Images */}
        <div className=" mr-[4%] -mt-[11%] z-10">
          <img src="/src/assets/Images/4th_section_mobile.png" alt="Mobile App" className="w-auto h-[610px]" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
