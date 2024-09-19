import mobileBanner from '../../assets/Images/4th_section_mobile.png';
import videoThumbnail from '../../assets/Video/sampleVideo2.mp4';
import PrimaryButton from '../../Common/PrimaryButton';
import SecondaryButton from '../../Common/SecondaryButton';

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
          className="w-full h-[600px] object-cover opacity-95"
          aria-label="Background video"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <section className='videoSection-background'>
        <div className="container mx-auto">
          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Side: More Videos */}
            <div className="w-full md:w-1/2 mt-[4%] ml-[4%]">
              <h2 className="text-3xl font-bold mb-6 font-montserrat ">More Videos</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <iframe
                    src="https://www.youtube.com/embed/1YyAzVmP9xQ"
                    title="Video Thumbnail"
                    className="w-32 h-20 rounded-lg" // Fixed width and height
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="text-sm font-century-gothic">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                <iframe
                    src="https://www.youtube.com/embed/1YyAzVmP9xQ"
                    title="Video Thumbnail"
                    className="w-32 h-20 rounded-lg" // Fixed width and height
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="text-sm font-century-gothic">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-4 mt-8">
                  <PrimaryButton title="Watch More" />
                </div>
              </div>
            </div>

            {/* Right Side: Mobile Image */}
            <div className="lg:mr-[4%] lg:-mt-[11%] z-10 mt-6 ">
              <img
                data-aos="fade-up"
                alt="Mobile application showcasing the features"
                data-aos-duration="2000"
                src={mobileBanner}
                //alt="Mobile App" 
                className="w-full lg:w-auto h-auto lg:h-[610px] lg:translate-x-20"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
