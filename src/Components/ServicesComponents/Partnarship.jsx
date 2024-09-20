import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import left from '../../assets/Images/ServicesImages/last_section_img.png';
import PrimaryButton from '../../Common/PrimaryButton';

const Partnarship = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate left section (image) from the bottom (y-axis)
    gsap.from("#image img", {
      y: 100, // animate from 100px down
      opacity: 0, // start with 0 opacity
      duration: 1.5, // animation duration
      scrollTrigger: {
        trigger: ".Partnarship-bg", // trigger animation when the section comes into view
        start: "top 80%", // start the animation when top of section is 80% down the viewport
        end: "bottom 100%", // animation ends when bottom of section reaches bottom of viewport
        toggleActions: "play none none reset", // play the animation when it enters, and reset when it leaves
        once: false // ensure the animation plays every time you scroll back to this section
      }
    });

    // Animate right section (text and button) from the right (x-axis)
    gsap.from("#text > *", {
      x: 100, // animate from 100px to the text
      opacity: 0, // start with 0 opacity
      duration: 1.2,
      delay:0.7 ,
      // stagger: 0.2,
      scrollTrigger: {
        trigger: ".Partnarship-bg",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reset",
        once: false
      }
    });

  }, []);

  return (
    <section className="Partnarship-bg h-auto w-full flex items-center justify-center bg-cover bg-center py-12 md:py-20">
      <div id="main" className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-4 h-full">

        {/* Left Section - Image */}
        <div id="left" className="w-full md:w-1/2 h-full flex items-center justify-center mb-8 md:mb-0">
          <div id="image" className="w-64 sm:w-80 md:w-[30rem] lg:w-[35rem]">
            <img src={left} alt="Partnership Program Illustration" className="w-full h-auto" />
          </div>
        </div>

        {/* text Section - Content */}
        <div id="text" className="w-full md:w-1/2 h-full space-y-6 md:space-y-4 text-center md:text-left flex flex-col justify-start md:justify-center items-center md:items-start px-4 md:px-9">
          <div id="heading">
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-cyan-400">
              Partnership Program
              <br />

            </h2>
            <h3 className="text-gray-800 font-montserrat text-xl md:text-3xl font-bold mt-3">
              Get in touch with the top cryptocurrency experts, and together, let&apos;s do amazing things.
            </h3>
          </div>

          <div id="heading2">
            <p id='subHeding' className="text-sm md:text-lg font-century-gothic md:max-w-lg">
            Join our partnership program and expand your business with the best trading platform.
            </p>
          </div>

          <div id="button">
            <PrimaryButton title="Know More" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partnarship;
