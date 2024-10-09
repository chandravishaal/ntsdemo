
import React, { useState, useRef } from "react";
import videoThumbnail from "../../assets/Video/sampleVideo2.mp4";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";


const videos = [
  {
    id: 1,
    title: "what is cryptocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 2,
    title: "what is cryptocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 3,
    title: "what is cryptocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 4,
    title: "what is cryptocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
  {
    id: 5,
    title: "what is cryptocurrency",
    thumbnail: "https://images.unsplash.com/photo-1726231160459-308206afb13c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://youtu.be/1YyAzVmP9xQ",
  },
];

const VideoSection = () => {
  const [hovered, setHovered] = useState(false);
  const [showList, setShowList] = useState(false);
  const videoRef = useRef(null);

  // Handle hover over the video
  const handleMouseEnterVideo = () => {
    setHovered(true);
  };

  // Handle hover leave the video
  const handleMouseLeaveVideo = () => {
    setHovered(false);
    setShowList(false); // Hide the list if not hovering over "Next" button or list
  };

  // Handle hover over the "Next" button
  const handleMouseEnterNext = () => {
    setShowList(true); // Show the list when hovering over the "Next" button
  };

  // Handle mouse leaving the button and list area
  const handleMouseLeaveNext = () => {
    setShowList(false);
  };

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={handleMouseEnterVideo}
      onMouseLeave={handleMouseLeaveVideo}
    >
      <div className="relative">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoThumbnail}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-[600px] object-cover group opacity-95"
          aria-label="Background video"
          onError={(e) => console.error("Video failed to load", e)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Button in the middle of the video */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-century-gothic mb-5">Check out our latest contents</h1>
          <a href="https://www.youtube.com/@ntsmetrics" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black px-8 py-3 border border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-full flex items-center font-semibold text-xl">
              Watch more <FaArrowRightLong className="ml-2 text-xl" />
            </button>
          </a>
        </div>


      </div>
    </div>

  );
};

export default VideoSection;
