/*import React from 'react';

const ContentSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Heading 
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 font-antipasto-pro">The time is now</h1>
        <p className="text-gray-500 mt-1 font-century-gothic">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>

      {/* First Row 
      <div className="flex  flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-50 to-white rounded-lg px-5 h-[300px]">
        {/* Image 
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg"
            alt="Pioneer"
            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
          />
        </div>
        {/* Text 
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold text-black font-antipasto-pro">Be a Pioneer</h2>
          <h3 className="text-lg text-black mt-1 font-century-gothic">Join the digital revolution</h3>
          <p className="text-gray-800 mt-2 font-century-gothic text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Second Row 
      <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-gradient-to-r from-white to-cyan-50 rounded-lg px-5 h-[300px]">
        {/* Image *
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2015/08/01/21/11/euro-870761_1280.jpg"
            alt="Smart Finance"
            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
          />
        </div>
        {/* Text *
        <div className="md:w-1/2 md:pr-8 flex flex-col items-end">
          <h2 className="text-3xl font-bold text-black font-antipasto-pro">Be smart</h2>
          <h3 className="text-lg text-gray-600 mt-1">Empower your finances</h3>
          <p className="text-gray-800 mt-2 font-century-gothic text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Third Row *
      <div className="flex  flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-50 to-white rounded-lg px-5 h-[300px] mb-28">
        {/* Image *
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1507835661088-ac1e84fe645f?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pioneer"
            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
          />
        </div>
        {/* Text *
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold text-black font-antipasto-pro">Be free</h2>
          <h3 className="text-lg text-gray-600 mt-1">Without border, connected and free</h3>
          <p className="text-gray-800 mt-2 font-century-gothic text-xs">
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;*/

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ContentSection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Select each section for animation
    sectionRefs.current.forEach((section, index) => {
      const elements = section.querySelectorAll('div, img, h2, h3, p');
      
      // GSAP animation with stagger
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },  // Starting animation state
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1, // Stagger animation for each element
          scrollTrigger: {
            trigger: section,  // Trigger animation when this section is in view
            start: 'top 80%',  // When the top of the section reaches 80% of the viewport
            toggleActions: 'play none none reset',  // Play when entering, reset when leaving
            scrub: false,
            markers: false,  // Set to true if you want to visualize the trigger points
          },
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Heading */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 font-montserrat">The time is now</h1>
        <p className="text-gray-500 mt-1 font-semibold font-century-gothic">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
        </p>
      </div>

      {/* First Row */}
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-50 to-white rounded-lg px-5 py-4"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        {/* Image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg"
            alt="Advanced technology representing innovation in the digital finance sector"
            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
          />
        </div>
        {/* Text */}
        <div className="md:pl-16 flex flex-col justify-center w-full md:w-2/3">
          <div className="md:w-11/12 lg:pl-32">
            <h2 className="text-3xl font-bold text-black font-montserrat">Be Pioneer</h2>
            <h3 className="text-lg text-black mt-1 font-century-gothic">Join the digital revolution</h3>
            <p className="text-gray-800 mt-2 font-century-gothic text-xs">
            North Star Metrics offers a unique opportunity for pioneers in the emerging digital economy of tomorrow by purchasing and trading cryptocurrencies, making it a leading candidate in the digital economy of the future.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div
        className="flex flex-col md:flex-row-reverse items-center justify-between bg-gradient-to-r from-cyan-50 to-white rounded-lg px-5 py-4 mt-4"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        {/* Image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2015/08/01/21/11/euro-870761_1280.jpg"
            alt="Currency and financial graphs symbolizing smart investment decisions"
            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
          />
        </div>
        {/* Text */}
        <div className="md:pl-16 flex flex-col items-end w-full md:w-2/3">
          <div className="md:w-11/12 lg:pr-32">
            <h2 className="text-3xl font-bold text-black font-antipasto-pro lg:text-left">Be Smart</h2>
            <h3 className="text-lg text-black mt-1 font-century-gothic lg:text-left">Join the digital revolution</h3>
            <p className="text-gray-800 mt-2 font-century-gothic text-xs lg:text-left">
            Utilize the best platform for buying and trading cryptocurrencies to make informed decisions and ensure success in the cryptocurrency market. This will help make educated judgments and informed decisions, ultimately leading to success in the cryptocurrency market.
            </p>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-cyan-50 to-white rounded-lg px-5 py-4 mt-4"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        {/* Image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1507835661088-ac1e84fe645f?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="Person using a digital device representing financial freedom and connectivity"
            className="rounded-lg shadow-lg w-full h-[250px] object-cover"
          />
        </div>
        {/* Text */}
        <div className="md:pl-16 flex flex-col justify-center w-full md:w-2/3">
          <div className="md:w-11/12 lg:pl-32">
            <h2 className="text-3xl font-bold text-black font-montserrat">Be Free</h2>
            <h3 className="text-lg text-black mt-1 font-century-gothic">Without border, connected and free</h3>
            <p className="text-gray-800 mt-2 font-century-gothic text-xs">
            Secure cryptocurrency purchases are crucial for achieving financial independence, as they help monitor your financial future and ultimately lead to financial stability. Therefore, it is essential to make secure Bitcoin purchases to manage your financial destiny.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

