import React, { useEffect } from "react";
import { gsap } from "gsap";
import '../../index.css';
import blogImage1 from '../../assets/Images/Blog/blogImage1.png'; 
import blogImage2 from '../../assets/Images/Blog/blogImage2.png'; 
import blogImage3 from '../../assets/Images/Blog/blogImage3.png'; 
import blogImage4 from '../../assets/Images/Blog/blogImage4.png';

const BlogFeatureSection = () => {
  useEffect(() => {
    // GSAP animation
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power1.out" } });
    
    tl.from(".blog-item", { y: 50, opacity: 0, stagger: 0.2 });
    tl.from(".text-section", { y: 50, opacity: 0 }, "<");

  }, []);

  return (
    <div className="w-full py-16 bg-white px-8">
      <div className="container mx-auto flex flex-col lg:flex-row">

        {/* Left Side Section */}
        <div className="w-full lg:w-[45%] lg:pr-[3%] mt-12 lg:mt-24 ml-[5%] text-section">
          <h1 className="text-3xl xl:text-4xl font-semibold mb-6 text-gray-800 ">
            Lorem Ipsum is simply dummy printing and typesetting industry.
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-cyan-500 text-white px-[12%] xl:px-[16%] py-[3%] rounded-lg text-lg">
            View More
          </button>
        </div>

        {/* Right Side Blog Grid */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 gap-[2%] lg:gap-[3%] mb-[-4%] mt-[15%] lg:mt-[14%] lg:mr-[-5%]">
          
          {/* Blog Item 1 */}
          <div className="relative blog-item">
            <img 
              src={blogImage3}  
              className="w-full h-auto mb-[14%] ml-[2%] max-w-[89%] lg:max-w-[90%] lg:h-[82%] lg:w-[95%] lg:mt-[%] lg:ml-[0.7%] rounded-lg" 
              alt="Blog Image 1"
            />
          </div>

          {/* Blog Item 2 */}
          <div className="relative blog-item">
            <img 
              src={blogImage4} 
              className="w-full h-auto max-w-[66%] h-[110%] ml-[-12%] mt-[-25%] rounded-lg" 
              alt="Blog Image 2"
            />
          </div>

          {/* Blog Item 3 */}
          <div className="relative blog-item">
            <img 
              src={blogImage2} 
              className="w-full h-auto max-w-[66%] h-[105%] mt-[-16%] rounded-lg" 
              alt="Blog Image 3"
            />
          </div>

          {/* Blog Item 4 */}
          <div className="relative blog-item">
            <img 
              src={blogImage1} 
              className="w-full h-auto max-w-[115%] w-[92%] h-[75%] mt-[-16%] ml-[-38%] rounded-lg" 
              alt="Blog Image 4"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureSection;
