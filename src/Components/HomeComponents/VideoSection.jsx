// import mobileBanner from '../../assets/Images/4th_section_mobile.png';
// import videoThumbnail from '../../assets/Video/sampleVideo2.mp4';

// const VideoSection = () => {
//   return (
//     <>
//       {/* Video Section */}
//       <div className="relative">
//         <video
//           src={videoThumbnail}
//           autoPlay
//           loop
//           muted
//           className="w-full h-[600px] object-cover opacity-95"
//         />
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>





//       <section className='videoSection-background '>
//         <div className="container mx-auto">
//           {/* Content Section */}
//           <div className="flex flex-col md:flex-row justify-between">
//             {/* Left Side: More Videos */}
//             <div className="w-full md:w-1/2  mt-[4%] ml-[4%]">
//               <h2 className="text-3xl font-bold mb-6">More Videos</h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <video src={videoThumbnail} alt="Video Thumbnail" className="w-1/4 rounded-lg" />
//                   <p className="text-sm">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <video src={videoThumbnail} alt="Video Thumbnail" className="w-1/4 rounded-lg" />
//                   <p className="text-sm">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                   </p>
//                 </div>

//                 {/* Buttons Section */}
//                 <div className="flex space-x-4 mt-8">
//                   <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
//                     Tradable
//                   </button>
//                   <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-900 duration-200 outline-none text-white bg-cyan-800 rounded-[100px] shadow-[0_4px_#0f172a]">
//                     Top Gainers
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side: Mobile Images */}
//             <div className=" mr-[4%] -mt-[11%] z-10">
//               <img data-aos="fade-up" data-aos-duration="2000" src={mobileBanner} alt="Mobile App" className="w-auto h-[610px] translate-x-20" />
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default VideoSection;


import mobileBanner from '../../assets/Images/4th_section_mobile.png';
import videoThumbnail from '../../assets/Video/sampleVideo2.mp4';

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
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <section className='videoSection-background'>
        <div className="container mx-auto">
          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Side: More Videos */}
            <div className="w-full md:w-1/2 mt-[4%] ml-[4%]">
              <h2 className="text-3xl font-bold mb-6">More Videos</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <video src={videoThumbnail} alt="Video Thumbnail" className="w-1/4 rounded-lg" />
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <video src={videoThumbnail} alt="Video Thumbnail" className="w-1/4 rounded-lg" />
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-4 mt-8">
                  <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
                    Tradable
                  </button>
                  <button className="lg:px-3 lg:py-2 px-3 py-2 text-md button text-center cursor-pointer md:w-1/5 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-900 duration-200 outline-none text-white bg-cyan-800 rounded-[100px] shadow-[0_4px_#0f172a]">
                    Top Gainers
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Mobile Image */}
            <div className="lg:mr-[4%] lg:-mt-[11%] z-10 mt-6 ">
              <img 
                data-aos="fade-up" 
                data-aos-duration="2000" 
                src={mobileBanner} 
                alt="Mobile App" 
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
