import mobileBanner from "../../assets/Images/4th_section_mobile.png";
import videoThumbnail from "../../assets/Video/sampleVideo2.mp4";
import PrimaryButton from "../../Common/PrimaryButton";
import SecondaryButton from "../../Common/SecondaryButton";

const VideoSection = () => {
  return (
    <>
      {/* Video Section */}
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      
    </>
  );
};

export default VideoSection;
