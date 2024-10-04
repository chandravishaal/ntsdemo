{/*import mobileBanner from "../../assets/Images/4th_section_mobile.png";
import videoThumbnail from "../../assets/Video/sampleVideo2.mp4";
import PrimaryButton from "../../Common/PrimaryButton";
import SecondaryButton from "../../Common/SecondaryButton";

const VideoSection = () => {
  return (
    <>
      {/* Video Section *
      <div className="relative">
        <video
          src={videoThumbnail}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-[600px] object-cover opacity-95"
          aria-label="Background video"
          onError={(e) => console.error("Video failed to load", e)}
        >
          Your browser does not support the video tag.
        </video>
        {/* Overlay *
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      
    </>
  );
};

export default VideoSection;*/}

import mobileBanner from "../../assets/Images/4th_section_mobile.png";
import videoThumbnail from "../../assets/Video/sampleVideo2.mp4";
import PrimaryButton from "../../Common/PrimaryButton";
import SecondaryButton from "../../Common/SecondaryButton";
import React, { useState, useRef } from "react";

const videos = [
  {
    id: 1,
    title: "what is crytocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 2,
    title: "what is crytocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 3,
    title: "what is crytocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 4,
    title: "what is crytocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 5,
    title: "what is crytocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
];

const VideoSection = () => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
    {/*if (videoRef.current) {
      videoRef.current.pause();
    }*/}
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        src={videoThumbnail}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-[600px] object-cover opacity-95"
        aria-label="Background video"
        onError={(e) => console.error("Video failed to load", e)}
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-5 left-5 z-10 bg-white text-black p-3 rounded-lg shadow-lg transition-colors duration-300 hover:bg-gray-200"
      >
        Next
      </button>

      {hovered && (
        <div
          className="absolute top-16 left-[4rem] w-[50rem] p-4 rounded-lg shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {videos.map((video) => (
            <div key={video.id} className="flex items-center h-[4rem] bg-white text-black p-4 rounded-lg mb-2 shadow-md border-2 border-white  ">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-16 h-13 rounded-md mr-4"
              />
              <div className="flex-grow">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-blue-400">
                  {video.title}
                </a>
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-white text-black px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-gray-200"
              >
                Watch Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoSection;