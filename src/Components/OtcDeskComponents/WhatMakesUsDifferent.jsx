import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../index.css";
import Group from "../../assets/Images/OtcDesk/mid_img.png";
import aiicon from "../../assets/Images/OtcDesk/section4_icon1.png";
import reward from "../../assets/Images/OtcDesk/section4_icon2.png";
import risk from "../../assets/Images/OtcDesk/section4_icon3.png";
import payment from "../../assets/Images/OtcDesk/section4_icon4.png";
import onboarding from "../../assets/Images/OtcDesk/section4_icon5.png";
import beginners from "../../assets/Images/OtcDesk/section4_icon6.png";

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
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".centered-image",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="bg-white py-12 pb-32 px-10 sm:px-6 md:px-8 lg:px-0">
      {" "}
      {/* Add padding for small screens */}
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold w-[80%] mb-8 mx-auto text-center font-montserrat">
          What makes us Different
        </h2>
        <p className="mt-5 w-[75%] lg:w-1/2  mx-auto font-century-gothic">
        Innovative solutions, personalised experiences, and advanced tools for every crypto trader.
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
            <img
              src={aiicon}
              alt="AI-Powered Trading Insights"
              className="w-12 h-12 ml-8"
            />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">
                AI-Powered Trading Tips
              </h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">
                Smart Insights for Smarter Trading Decisions. Stay ahead of the
                crypto game by using AI
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate -mb-[10rem]">
            <img
              src={reward}
              alt="Reward programs"
              className="w-12 h-12 -ml-8 mr-20"
            />
            <div>
              <h3 className="text-lg font-semibold mr-14 font-century-gothic">
                Incentive & Honesty Programmes
              </h3>
              <p className="text-gray-500 text-sm w-64 mr-14 font-century-gothic">
                Earn your way to rewards with our exclusive loyalty program for
                you.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-row-reverse feature-item feature-item-animate">
            <img
              src={risk}
              alt="Risk management"
              className="w-12 h-12 ml-[8%]"
            />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">
                Advanced Risk Control Tools
              </h3>
              <p className="text-gray-500 text-sm w-64 ml-8 font-century-gothic">
                Safe with leading-edge risk management Protect your investments
                with best-in-class volatility protection
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[10rem] right-[1%] -translate-y-1/2 space-y-24 hidden lg:block right-column">
          <div className="flex items-center space-x-4 feature-item feature-item-animate">
            <img
              src={payment}
              alt="Localized Payment Methods"
              className="w-12 h-12 -ml-12"
            />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">
                Regional Payment Methods
              </h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">
                We offer convenient and secure local payment options in your
                currency for your convenience.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 feature-item feature-item-animate">
            <img
              src={onboarding}
              alt="Customized Onboarding Experience"
              className="w-12 h-12 ml-8"
            />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">
                Newbie and Pro Solutions
              </h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">
                We address the needs of newcomers and advanced traders.
                Solutions built for traders from all levels in the crypto
                platform.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 feature-item feature-item-animate">
            <img
              src={beginners}
              alt="Tailored for Beginners and Experts"
              className="w-12 h-12 -ml-12"
            />
            <div>
              <h3 className="text-lg font-semibold font-century-gothic">
                Tailored Training Process
              </h3>
              <p className="text-gray-500 text-sm w-64 font-century-gothic">
                {" "}
                A customised start tailored to your unique needs. We walk you
                step by step to ensure a seamless entry into the world of
                crypto.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Layout for Small Screens (below 1400px) */}
        <div className="features-container flex flex-col items-center gap-5 lg:hidden mt-8">
          <div className="feature-item flex items-center gap-6 feature-item-animate">
            <img
              src={aiicon}
              alt="AI-Powered Trading Insights"
              className="w-12 h-12"
            />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">
                AI-Powered Trading Tips
              </h3>
              <p className="text-gray-500 text-sm font-century-gothic">
                Smart Insights for Smarter Trading Decisions. Stay ahead of the
                crypto game by using AI.
              </p>
            </div>
          </div>

          <div className="feature-item flex items-center gap-6 feature-item-animate">
            <img src={reward} alt="Reward programs" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">
                Incentive and Honesty Programmes
              </h3>
              <p className="text-gray-500 text-sm font-century-gothic">
                Earn your way to rewards with our exclusive loyalty program for
                you.
              </p>
            </div>
          </div>

          <div className="feature-item flex items-center gap-6 feature-item-animate">
            <img src={risk} alt="Risk management" className="w-12 h-12" />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">
                Advanced Risk Controls Tools
              </h3>
              <p className="text-gray-500 text-sm font-century-gothic">
                Safe with leading-edge risk management Protect your investments
                with best-in-class volatility protection
              </p>
            </div>
          </div>

          <div className="feature-item flex items-center gap-6 feature-item-animate">
            <img
              src={payment}
              alt="Localized Payment Methods"
              className="w-12 h-12"
            />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">
                Regional Payment Methods
              </h3>
              <p className="text-gray-500 text-sm font-century-gothic">
                We offer convenient and secure local payment options in your
                currency for your convenience.
              </p>
            </div>
          </div>

          <div className="feature-item flex items-center gap-6 feature-item-animate">
            <img
              src={onboarding}
              alt="Customized Onboarding Experience"
              className="w-12 h-12"
            />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">
                Newbie and Pro Solutions
              </h3>
              <p className="text-gray-500 text-sm font-century-gothic">
                We address the needs of newcomers and advanced traders.
                Solutions built for traders from all levels in the crypto
                platform.
              </p>
            </div>
          </div>

          <div className="feature-item flex items-center gap-6 feature-item-animate">
            <img
              src={beginners}
              alt="Tailored for Beginners and Experts"
              className="w-12 h-12"
            />
            <div className="feature-text">
              <h3 className="text-lg font-semibold font-century-gothic">
                Tailored Training Process
              </h3>
              <p className="text-gray-500 text-sm font-century-gothic">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
