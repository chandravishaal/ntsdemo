import React from "react";
import '../../index.css';
import blogMainImg from '../../assets/Images/Blog/blogMain.png'; 
import blogImg1 from '../../assets/Images/Blog/blogImg1.png'; 
import blogImg2 from '../../assets/Images/Blog/blogImg2.png';
import blogImg3 from '../../assets/Images/Blog/blogImg3.png'; 
import profilePic from '../../assets/Images/Blog/profilePic.png'; 
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';

const BlogListSection = () => {
  return (
    <div className="w-full bg-cyan-50 jost-uniquifier py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-left mb-10 sm:mb-14 font-montserrat">
          Our Latest Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Main Blog Left Section */}
          <div className="w-full lg:w-[600px] lg:pr-8 mb-10 lg:mb-0">
            <img 
              src={blogMainImg} 
              alt="Main Blog" 
              className="w-full h-auto rounded-lg mb-[-2%]"
            />
            <div className="flex items-center text-cyan-600 text-base sm:text-lg mb-[-4%] ">
              <span className="flex items-center mr-[-10%]">
                <img src={profile} className="w-14 h-14 lg:w-24 lg:h-24 -mr-[15%]" />
                By - Admin
              </span>
              <span className="flex items-center ml-[2%]">
                <img src={comments} className="w-14 h-14 lg:w-24 lg:h-24 -mr-6" />
                0 comments
              </span>
              <h4 className="ml-auto text-black">6 minute read</h4>
            </div>

            <div className="flex items-center mt-[5%] mb-[4%]">
              <img 
                src={profilePic} 
                alt="Amit Chakraborty" 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-bold text-lg">Amit Chakraborty</h4>
                <p className="text-cyan-600 text-sm sm:text-base">Crypto Trader</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 font-montserrat">
              What is Lorem Ipsum?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6 text-justify font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...
            </p>
            <a href="#readmore" className="text-cyan-600 font-semibold inline-block font-century-gothic">
              Read More...
            </a>
          </div>

          {/* Blog List Right Section */}
          <div className="w-full lg:w-[50%] mr-[1%] text-justify">
            {/* Blog Item 1 */}
            <div className="flex items-start mb-8">
              <img 
                src={blogImg1} 
                alt="Blog 1" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4" 
              />
              <div>
                <h4 className="font-bold text-sm sm:text-lg mb-2 font-montserrat">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black">4 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 2 */}
            <div className="flex items-start mb-8">
              <img 
                src={blogImg2} 
                alt="Blog 2" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4" 
              />
              <div>
                <h4 className="font-bold text-sm sm:text-lg mb-2 font-montserrat">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black">4 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 3 */}
            <div className="flex items-start mb-8">
              <img 
                src={blogImg3} 
                alt="Blog 3" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%]] object-cover rounded-lg mr-4" 
              />
              <div>
                <h4 className="font-bold text-sm sm:text-lg mb-2 font-montserrat">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black">4 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 4 */}
            <div className="flex items-start mb-8">
              <img 
                src={blogImg1} 
                alt="Blog 4" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4" 
              />
              <div>
                <h4 className="font-bold text-sm sm:text-lg mb-2 font-montserrat">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black">4 minute read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListSection;