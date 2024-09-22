import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../../Common/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const Culture = () => {
  const leftSectionRef = useRef(null); // Ref for left section (text only)
  const rightSectionRef = useRef(null); // Ref for right section (image)
  const buttonRef = useRef(null); // Ref for the button

  useEffect(() => {
    const leftElements = [...leftSectionRef.current.children].filter(
      (child) => child !== buttonRef.current
    ); // Exclude the button from left section animation

    // Animation for the left section (excluding the button)
    gsap.fromTo(
      leftElements,
      {
        opacity: 0,
        x: -60, // Coming from the left
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftSectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset", // Restart animation when it enters the viewport
        },
      }
    );

    // Separate animation for the button
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        scale: 0, // Slightly smaller button initially
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      }
    );

    // Animation for the right section (image fade-in from the right)
    gsap.fromTo(
      rightSectionRef.current,
      {
        opacity: 0,
        x: 50, // Coming from the right
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightSectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset",
        },
      }
    );
  }, []);

  return (
    <div className="h-[40rem] w-full flex items-center justify-between">
      <div
        id="main"
        className="md:h-4/6 mx-auto container bg-gradient-to-b from-white to-cyan-50 md:bg-gradient-to-b md:from-white md:to-cyan-50 rounded-lg flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden"
      >
        {/* Left Section */}
        <div
          ref={leftSectionRef} // Reference for the left section
          className="w-full md:w-1/2 space-y-5 text-center md:text-left px-6 md:px-4 md:h-[100%] mt-5 pb-10 md:pb-0"
        >
          <h2 className="text-3xl md:text-4xl font-antipasto-pro font-bold text-gray-800">
            Culture and employment at <br />
            <span className="text-cyan-400 text-4xl md:text-5xl">
              North Star Metrics
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl tracking-wide font-century-gothic text-black">
            Passionate about technology
          </h3>
          <p className="text-gray-500 font-century-gothic mb-20">
            At North Star Metrics, Our team is dedicated to revolutionising
            crypto buying and selling, seeking talented individuals to join our
            dynamic, innovative work environment.
          </p>
          {/* Button */}
          <div ref={buttonRef} className="mt-32">
            <button className="lg:px-6 lg:py-2.5 px-6 py-3 min-w-[90px] max-w-auto text-md select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa] font-century-gothic">
              See Available Vacancies
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={rightSectionRef} // Reference for the right section
          className="w-full md:w-1/2 h-full px-5 md:h-[100%]"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Company Culture"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Culture;
