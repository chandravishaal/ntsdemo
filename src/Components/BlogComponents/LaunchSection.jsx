import React from 'react';
import '../../index.css';
import rocket from '../../assets/Images/Blog/lst_sec_banner.png';
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';

const LaunchSection = () => {
  return (
    <div className="w-full py-[4%] bg-white px-[-30%]">
    <div className="container mx-auto px-2 lg:px-8  jost-uniquifier">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-10 sm:mb-12 lg:mb-16">
        Lorem Ipsum is simply dummy
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img
          src={rocket}
          className="w-full h-auto"
          alt="Rocket"
        />
      </div>

      {/* By Admin and Comments Section */}
      <div className="flex  items-center -mt-8 text-cyan-600">
        <span className="flex items-center -mr-[20%]">
                <img src={profile}  className="w-[70%] h-[70%] mr-[-30%] ml-[-20%] lg:mr-[-20%]" />
                By - Admin
              </span>
              <span className="flex items-center ml-[4%] lg:ml-[20%]">
                <img src={comments}  className="w-[70%] h-[70%] mr-[-25%] ml-[-20%] ]" />
                0 comments</span>
                <h4 className="lg:ml-[62%] w-[25%] text-black">6 days read </h4>
          
        </div>

      {/* Description Section */}
      <div className="mt-6 lg:mt-[-1%]">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-12 max-w-full lg:max-w-[900px]">
          Lorem Ipsum is simply dummy printing and typesetting industry.
        </h2>
        <p className="text-gray-700 text-base sm:text-lg text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br /><br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
     </div>
    </div>
  );
};

export default LaunchSection;
