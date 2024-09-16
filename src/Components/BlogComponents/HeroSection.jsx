import React from 'react';
import '../../index.css';
import left from '../../assets/Images/Blog/leftimage.png';
import right from '../../assets/Images/Blog/rightimage.png';

const HeroSection = () => {
  return (
    <div className="bg-white py-4 jost-uniquifier">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0">
        {/* Left Column with Image */}
        <img
          className="relative z-8 w-full h-full -ml-[156px] -mt-3 object-cover rounded"
          src={left}
          alt="Left Visual"
        />

        {/* Right Column with Text */}
        <div className="flex flex-col mt-6 md:mt-0 md:mr-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:-ml-20">
            Our Blogs
          </h1>
          <p className="text-xl md:text-3xl font-semibold mb-4 md:mb-6 md:-ml-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-4 md:mr-72 md:-ml-20">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="relative mt-6 md:mt-0">
            {/* Peach-colored background behind the image */}
            <div
              className="absolute  -ml-[232px] -mb-[55px] lg:-inset-[-60px] "style={{ backgroundColor: '#F3D6B3' }}
            ></div>

            {/* Right Image */}
            <img
              className="relative z-8 w-full md:w-[400px] object-cover ml-0 md:ml-[350px] -mt-[30px] md:-mt-[90px] rounded"
              src={right}
              alt="Blog Visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
