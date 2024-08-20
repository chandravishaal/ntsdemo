import { useState, useEffect, useRef } from "react";
import CoinMarquees from "../Components/CoinMarquees";
import Explore from "../Components/Explore";
import HeroSection from "../Components/HeroSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import { FaArrowUp } from "react-icons/fa";
import { gsap } from "gsap";
import Feature from "../Components/Feature";
import Testimonial from "../Components/Testimonial";
import Started from "../Components/Started";

const Home = () => {
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
      gsap.to(
        buttonRef.current,
        { opacity: 0, y: 200, duration: 0.6, ease: "power2.in" }
      );
    }
  }, [showButton]);

  return (
    <>
      {showButton && (
        <div
          ref={buttonRef}
          className="bg-primaryCyan px-3 py-3 rounded-xl fixed z-50 bottom-10 right-10 text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </div>
      )}
      <CoinMarquees />
      <HeroSection />
      <Explore />
      <WhyChooseUs />
      <Feature/>
      <Testimonial/>
      <Started/>
    </>
  );
};

export default Home;
