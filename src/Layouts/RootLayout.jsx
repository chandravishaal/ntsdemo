import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { gsap } from "gsap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";

const RootLayout = () => {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showButton && buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    } else if (!showButton && buttonRef.current) {
      gsap.to(buttonRef.current, { opacity: 0, y: 200, duration: 0.6, ease: "power2.in" });
    }
  }, [showButton]);

  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <div
          ref={buttonRef}
          className="shadow-lg rounded-xl fixed z-50 bottom-10 right-10 text-white cursor-pointer hidden lg:block"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="px-4 py-3 text-md button text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default RootLayout;
