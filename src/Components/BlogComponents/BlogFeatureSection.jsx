import React from "react";
import '../../index.css';
import blogImage1 from '../../assets/Images/Blog/blogImage1.png'; 
import blogImage2 from '../../assets/Images/Blog/blogImage2.png'; 
import blogImage3 from '../../assets/Images/Blog/blogImage3.png'; 
import blogImage4 from '../../assets/Images/Blog/blogImage4.png';

const BlogFeatureSection = () => {
  return (
    <div className="w-full py-16 bg-white px-8">
      <div className="container mx-auto flex justify-between">
        
        {/* Left Side Section */}
        <div className="w-[600px] pr-18 jost-uniquifier mt-24">
          <h1 className="text-4xl font-semibold  mb-6 text-gray-800">
            Lorem Ipsum is simply dummy printing and typesetting industry.
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-cyan-500 text-white px-16 py-3 rounded-lg text-lg">
            View More
          </button>
        </div>

        {/* Right Side Blog Grid */}
        <div className="w-1/2 grid grid-cols-2 gap-6 mr-14">
          
          {/* Blog Item 1 */}
          <div className="relative">
            <img 
              src={blogImage3}  
              className="w-[320px] h-48 ml-[180px] mt-7 rounded-lg" 
            />
            {/* <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">Lorem Ipsum is simply dummy text of the printing</h4>
              <p className="text-sm mt-2">March 16, 2024</p>
            </div> */}
          </div>
          
          {/* Blog Item 2 */}
          <div className="relative">
            <img 
              src={blogImage4} 
              className="w-[200px] h-[250px] -mt-8  ml-[160px] rounded-lg" 
            />
            {/*<div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">Lorem Ipsum is simply dummy text of the printing</h4>
              <p className="text-sm mt-2">March 16, 2024</p>
            </div>*/}
          </div>

          {/* Blog Item 3 */}
          <div className="relative">
            <img 
              src={blogImage2} 
              className="w-[200px] h-[250px] ml-[180px] -mt-[20px] rounded-lg" 
            />
            {/*<div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">Lorem Ipsum is simply dummy text of the printing</h4>
              <p className="text-sm mt-2">March 16, 2024</p>
            </div>*/}
          </div>

          {/* Blog Item 4 */}
          <div className="relative">
            <img 
              src={blogImage1} 
              className="w-[320px] h-48 ml-[82px] -mt-[22px] rounded-lg" 
            />
            {/*<div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">Lorem Ipsum is simply dummy text of the printing</h4>
              <p className="text-sm mt-2">March 16, 2024</p>
            </div>*/}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureSection;
