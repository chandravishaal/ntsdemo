import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../index.css';
import Group from '../../assets/Images/OtcDesk/mid_img.png'; 
import aiicon from '../../assets/Images/OtcDesk/section4_icon1.png'; 
import reward from '../../assets/Images/OtcDesk/section4_icon2.png';  
import risk from '../../assets/Images/OtcDesk/section4_icon3.png';  
import payment from '../../assets/Images/OtcDesk/section4_icon4.png';  
import onboarding from '../../assets/Images/OtcDesk/section4_icon5.png';  
import beginners from '../../assets/Images/OtcDesk/section4_icon6.png'; 

gsap.registerPlugin(ScrollTrigger);

const WhatMakesUsDifferent = () => {
  useEffect(() => {
    // GSAP Animations for feature items
    gsap.from(".feature-item-animate", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".features-container",
        start: "top 99%", // When 80% of the section is visible in the viewport
        end: "bottom 20%", // Animation ends when 20% of the section is visible
        toggleActions: "play none none reset", // Plays animation when entering, reverses when leaving
      },
    });

    // GSAP Animation for the centered image
    gsap.from(".centered-image-animate", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".centered-image",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="bg-white py-12 pb-20 px-10 sm:px-6 md:px-8 lg:px-0"> {/* Add padding for small screens */}
      

      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold jost-uniquifier w-[80%] mb-8 mx-auto text-center font-montserrat">What makes us Different</h2>
        <p className="mt-5 w-[75%] lg:w-1/2 jost-uniquifier mx-auto font-century-gothic">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative jost-uniquifier container mx-auto mt-24">
        {/* Centered Image */}
        <img
          src={Group}
          alt="Group difference"
          className="centered-image centered-image-animate mx-auto w-auto lg:w-1/3"
        />

        {/* Features for screen size greater than 1400px */}
        <div className="absolute top-1/2 left-[1%] -translate-y-1/2 space-y-24 text-right hidden lg:block left-column">
          <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate">
            <img src={aiicon} alt="AI-Powered Trading Insights" className="w-12 h-12 ml-8" />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">AI-Powered Trading Insights</h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate">
            <img src={reward} alt="Reward programs" className="w-12 h-12 -ml-8 mr-20" />
            <div>
              <h3 className="text-lg font-semibold mr-14 font-century-gothic">Reward and Loyalty Programs</h3>
              <p className="text-gray-500 text-sm w-64 mr-14 font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate">
            <img src={risk} alt="Risk management" className="w-12 h-12 ml-[8%]" />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">Advanced Risk Management Tools </h3>
              <p className="text-gray-500 text-sm w-64 ml-8 font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-[1%] -translate-y-1/2 space-y-24 hidden lg:block right-column">
          <div className="flex items-center space-x-4 feature-item feature-item-animate">
            <img src={payment} alt="Localized Payment Methods" className="w-12 h-12 -ml-12" />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">Localized Payment Methods</h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 feature-item feature-item-animate">
            <img src={onboarding} alt="Customized Onboarding Experience" className="w-12 h-12 ml-8" />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">Customized Onboarding Experience</h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 feature-item feature-item-animate">
            <img src={beginners} alt="Tailored for Beginners and Experts" className="w-12 h-12 -ml-12" />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">Tailored for Beginners and Experts</h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>

        {/* Responsive Layout for Small Screens (below 1400px) */}
        <div className="features-container lg:hidden mt-8">
          <div className="feature-item feature-item-animate">
            <img src={aiicon} alt="AI-Powered Trading Insights" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">AI-Powered Trading Insights</h3>
              <p className="text-gray-500 text-sm font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="feature-item feature-item-animate">
            <img src={reward} alt="Reward programs" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">Reward and Loyalty Programs</h3>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="feature-item feature-item-animate">
            <img src={risk} alt="Risk management" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">Advanced Risk Management Tools</h3>
              <p className="text-gray-500 text-sm font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="feature-item feature-item-animate">
            <img src={payment} alt="Localized Payment Methods" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">Localized Payment Methods</h3>
              <p className="text-gray-500 text-sm font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="feature-item feature-item-animate">
            <img src={onboarding} alt="Customized Onboarding Experience" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">Customized Onboarding Experience</h3>
              <p className="text-gray-500 text-sm font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="feature-item feature-item-animate">
            <img src={beginners} alt="Tailored for Beginners and Experts" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">Tailored for Beginners and Experts</h3>
              <p className="text-gray-500 text-sm font-century-gothic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
