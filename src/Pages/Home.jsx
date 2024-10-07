import { useEffect } from "react";
import CoinMarquees from "../Components/HomeComponents/CoinMarquees";
import Explore from "../Components/HomeComponents/Explore";
import HeroSection from "../Components/HomeComponents/HeroSection";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs";
import Feature from "../Components/HomeComponents/Feature";
import Testimonial from "../Components/HomeComponents/Testimonial";
import Started from "../Components/Started";
import Blog from "../Components/HomeComponents/Blog";
import CryptoFreedomSection from "../Components/HomeComponents/CryptoFreedomSection";
import VideoSection from "../Components/HomeComponents/VideoSection";
import CryptoTable from "../Components/HomeComponents/CryptoTable";
import Hero2 from "../Components/HomeComponents/Hero2";

const Home = () => {
  
  // Save scroll position before page unload
  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  // Restore scroll position on page load
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
    // Optionally, clear the saved position after restoring
    localStorage.removeItem('scrollPosition');
  }, []);

  return (
    <>
      <CoinMarquees />
      {/* <HeroSection /> */}
      {/* <Hero2 /> */}
      <Explore />
      <WhyChooseUs />
      <CryptoTable />
      <VideoSection />
      <Feature />
      <Started />
      <Testimonial />
      <Blog />
      <CryptoFreedomSection />
    </>
  );
};

export default Home;
