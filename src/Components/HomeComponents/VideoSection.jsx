
import React, { useState, useRef } from "react";
import videoThumbnail from "../../assets/Video/sampleVideo2.mp4";
import { MdOutlineArrowOutward } from "react-icons/md";


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

        {/* 'Next' Button */}
        {hovered && (
          <button
            onMouseEnter={handleMouseEnterNext}
            onMouseLeave={handleMouseLeaveNext}
            className="absolute top-5 left-5 z-10 bg-white flex items-center gap-2 transition-all duration-300 hover:bg-transparent border border-white hover:text-white text-black p-3 rounded-lg shadow-lg opacity-100"
          >
            Next <span><MdOutlineArrowOutward /></span>
          </button>
        )}

        {/* Video List */}
        {showList && (
          <div
            className="absolute top-16 left-[4rem] w-[50rem] p-4 rounded-lg shadow-lg"
            onMouseEnter={handleMouseEnterNext}
            onMouseLeave={handleMouseLeaveNext}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex items-center h-[4rem] bg-white text-black p-4 rounded-lg mb-2 shadow-md border-2 border-white"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-16 h-13 rounded-md mr-4"
                />
                <div className="flex-grow">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-lg hover:text-blue-400"
                  >
                    {video.title}
                  </a>
                </div>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-gray-200"
                >
                  Watch Now
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
