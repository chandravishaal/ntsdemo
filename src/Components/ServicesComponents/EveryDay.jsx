import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phoneImage from "../../assets/Images/ServicesImages/service_mbl.png"; // Default image
import imageBuySell from "../../assets/Images/ServicesImages/testSlider/img1.avif"; // Add related images
import imageEarn from "../../assets/Images/ServicesImages/testSlider/img2.avif";
import imagePaymentMethod from "../../assets/Images/ServicesImages/testSlider/img3.avif";
import imageAcademy from "../../assets/Images/ServicesImages/testSlider/img4.avif";
import imageConverter from "../../assets/Images/ServicesImages/testSlider/img5.avif";
import imageWallet from "../../assets/Images/ServicesImages/testSlider/img6.avif";

gsap.registerPlugin(ScrollTrigger);

const EveryDay = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);
  const imageRef = useRef(null);

  // State to track the current image
  const [currentImage, setCurrentImage] = useState();

  // GSAP animation for text and image
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements with a stagger effect
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 150 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
            once: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP animation for the image when it changes
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 40 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }
    );
  }, [currentImage]);

  return (
    <section
      ref={sectionRef}
      className="Everyday-bg w-full flex items-center justify-center bg-cover bg-center py-8 md:py-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Section - Text and Menu */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6 max-w-lg text-center md:text-left">
          <h1
            ref={(el) => (textRef.current[0] = el)}
            className="text-3xl md:text-5xl font-montserrat font-semibold text-primaryCyan mt-0"
          >
            For Everyday Use
          </h1>
          <p
            ref={(el) => (textRef.current[1] = el)}
            className="text-gray-800 text-sm md:text-lg font-century-gothic"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut la.
          </p>
          <ul
            ref={(el) => (textRef.current[2] = el)}
            className="space-y-2 md:space-y-3 text-xl md:text-2xl"
          >
            <li
              className="text-gray-800 font-century-gothic cursor-pointer transition-transform transform hover:scale-125 hover:font-bold  duration-500 ease-in-out"
              onMouseEnter={() => setCurrentImage(imageEarn)}
            >
              Buy / Sell
            </li>
            <li
              className="text-gray-800 font-century-gothic cursor-pointer transition-transform transform hover:scale-125 hover:font-bold  duration-500 ease-in-out"
              onMouseEnter={() => setCurrentImage(imagePaymentMethod)}
            >
              Earn
            </li>
            <li
              className="text-gray-800 font-century-gothic cursor-pointer transition-transform transform hover:scale-125 hover:font-bold  duration-500 ease-in-out"
              onMouseEnter={() => setCurrentImage(imageAcademy)}
            >
              Payment Method
            </li>
            <li
              className="text-gray-800 font-century-gothic cursor-pointer transition-transform transform hover:scale-125 hover:font-bold  duration-500 ease-in-out"
              onMouseEnter={() => setCurrentImage(imageConverter)}
            >
              Academy
            </li>
            <li
              className="text-gray-800 font-century-gothic cursor-pointer transition-transform transform hover:scale-125 hover:font-bold  duration-500 ease-in-out"
              onMouseEnter={() => setCurrentImage(imageWallet)}
            >
              Converter
            </li>

            <li
              className="text-gray-800 font-century-gothic cursor-pointer transition-transform transform hover:scale-125 hover:font-bold duration-500 ease-in-out"
              onMouseEnter={() => setCurrentImage(imageBuySell)}
            >
              Wallet
            </li>
          </ul>
        </div>

        {/* Right Section - Phone Image */}
        <div className="relative mt-8 md:mt-0 flex justify-center items-center">
          <div className="relative p-4 md:p-8 w-56 sm:w-72 md:w-[30rem] lg:w-[30rem]">
            {/* Phone Image */}
            <img
              src={phoneImage}
              alt="Phone Frame"
              className="w-full h-auto" 
            />

            {/* Absolute Image (currentImage) */}
            <img
              ref={imageRef}
              src={currentImage} 
              alt="Crypto Exchange App"
              className="absolute w-[50%] h-auto top-[22%] left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryDay;