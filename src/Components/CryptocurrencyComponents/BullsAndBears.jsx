import React from 'react';
import Bulls from "../../assets/Images/cryptocurrency/4th_sec_icon.png";
import Bears from "../../assets/Images/cryptocurrency/4th_sec_icon2.png";

const BullsAndBears = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bulls Say Card */}
        <div className="border-2 border-primaryCyan rounded-lg p-6">
          <div className="flex justify-between items-start">
            {/* Left Section - Thumbs Up Icon */}
            <div className="text-green-500 text-4xl sm:text-5xl md:text-6xl">
              <i className="ri-thumb-up-fill"></i>
            </div>

            {/* Right Section - Bulls Image */}
            <div className="w-28 h-28 sm:w-32 sm:h-12 md:w-36 md:h-12">
              <img src={Bulls} alt="Bulls in cryptocurrency market" className="object-contain" />
            </div>

            {/* Right Section - Bulls Image */}
            {/* <div className="w-36 h-12 ">
               <img src={Bulls} alt="Bulls logo" className="w-40 h-40 object-contain " />
            </div> */}

          </div>

          {/* Title and Content */}
          <div className="mt-4">
            <h2 className="text-2xl font-montserrat sm:text-3xl md:text-4xl font-bold text-primaryCyan mb-3">
              Bulls say
            </h2>
            <p className="text-lg font-montserrat sm:text-xl text-gray-600 mb-6">
              Published on February 5, 2024
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-900 mb-4 font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-900 mb-4 font-century-gothic">
              It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-900  font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {/* Bears Say Card */}
        <div className="border-2 border-primaryCyan rounded-lg p-6">
          <div className="flex justify-between items-start">
            {/* Left Section - Thumbs Down Icon */}
            <div className="text-red-500 text-4xl sm:text-5xl md:text-6xl">
            <i className="ri-thumb-up-fill"></i>
            </div>

            {/* Right Section - Bears Image */}
            <div className="w-28 h-28 sm:w-32 sm:h-12 md:w-36 md:h-12">
              <img src={Bears} alt="Bears in cryptocurrency market" className="object-contain" />
            </div>
          </div>

          {/* Title and Content */}
          <div className="mt-4">
            <h2 className="text-2xl font-montserrat sm:text-3xl md:text-4xl font-bold text-primaryCyan mb-3">
              Bears say
            </h2>
            <p className="text-lg sm:text-xl font-montserrat text-gray-600 mb-4">
              Published on February 5, 2024
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-900  font-century-gothic mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-900  font-century-gothic mb-4">
              It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="text-sm sm:text-base md:text-base text-gray-900  font-century-gothic ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BullsAndBears;
