import { useEffect, useRef } from "react";
import "./Page404"; // Assuming you have the CSS styles in a separate file
import cosmos from '../assets/Images/Page404/cosmos.png'
import cryptocurrency from '../assets/Images/Page404/cryptocurrency.png'
import error from '../assets/Images/Page404/error.png'
import error404 from '../assets/Images/Page404/error404.png'
import ethereum from '../assets/Images/Page404/ethereum.png'
import litecoin from '../assets/Images/Page404/litecoin.png'
import xrp from '../assets/Images/Page404/xrp.png'
import ufo from '../assets/Images/Page404/ufo.png'
import { Link } from "react-router-dom";
import PrimaryButton from "../Common/PrimaryButton";

const Page404 = () => {
  const imageRef = useRef(null);
  const ufoRef = useRef(null); // Added reference for UFO

  useEffect(() => {
    const image = imageRef.current;
    let position = 0;
    let direction = 1;
    const speed = 0.3;

    const animate404 = () => {
      position += direction * speed;
      if (position > 50) {
        direction = -1;
      } else if (position < 0) {
        direction = 1;
      }
      image.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate404);
    };
    animate404();

    // Smooth up-down UFO movement
    const ufo = ufoRef.current;
    let ufoPosition = 0;
    let ufoDirection = 1;
    const ufoSpeed = 0.2;

    const animateUFO = () => {
      ufoPosition += ufoDirection * ufoSpeed;
      if (ufoPosition > 15) {
        ufoDirection = -1;
      } else if (ufoPosition < -15) {
        ufoDirection = 1;
      }
      ufo.style.transform = `translateY(${ufoPosition}px) rotate(45deg)`;
      requestAnimationFrame(animateUFO);
    };
    animateUFO();

    // Glitch effect for crypto images
    const glitchImages = document.querySelectorAll(".animate-glitch");
    glitchImages.forEach((image) => {
      setInterval(() => {
        const randomTop = Math.random() * 10 - 5;
        const randomLeft = Math.random() * 10 - 5;
        image.style.transition = 'transform 0.1s ease-in-out';
        image.style.transform = `translate(${randomLeft}px, ${randomTop}px) skew(${Math.random() * 2 - 1}deg)`;
      }, 200);
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="container relative max-w-screen-xl mx-auto p-4">
        
        {/* 404 Content */}
        <div className="text-start pl-0 pb-32">
          <h1 className="text-5xl font-semibold text-gray-800">Oops! <br />You&apos;ve lost in space.</h1>
          <p className="text-black font-semibold text-xl mt-2">We can&apos;t seem to find the page you are looking for.</p>
          <div className="mt-2">
            <p className="text-gray-600 text-xl">Here are some useful links instead:</p>
            <div className="space-x-1 pr-24 ">
              <Link to="/about" className="text-gray-600 hover:underline text-xl">About |</Link>
              <Link to="/services" className="text-gray-600 hover:underline text-xl">Service |</Link>
              <Link to="/feature" className="text-gray-600 hover:underline text-xl">Feature |</Link>
              <Link to="/careers" className="text-gray-600 hover:underline text-xl">Careers |</Link>
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-xl">Not finding what you were looking for?<br /> Contact us at <a href="#" className="text-black font-semibold hover:underline">support@ntsmetrics</a></p>
          <div className="mt-4 mb-8">
            <Link to="/">
            <PrimaryButton title="Back to Home" />
            </Link>
          </div>
        </div>

        {/* Floating Crypto Icons */}
        <div className="absolute bottom-28 right-32 mr-48">
          <img className="h-8 w-8 animate-glitch" src={ethereum} alt="Ethereum" />
        </div>
        <div className="absolute top-12 right-28 mb-64 mr-52">
          <img className="h-8 w-8 animate-glitch" src={xrp} alt="XRP" />
        </div>
        <div className="absolute bottom-64 right-12 mr-8">
          <img className="h-10 w-10 animate-glitch" src={cryptocurrency} alt="Cryptocurrency" />
        </div>
        <div className="absolute top-8 right-4 ml-20">
          <img className="h-8 w-8 animate-glitch" src={cosmos} alt="Cosmos" />
        </div>
        <div className="absolute bottom-28 right-0 mt-44 ml-20">
          <img className="h-8 w-8 animate-glitch" src={litecoin} alt="Litecoin" />
        </div>

        {/* UFO */}
        <div className="absolute top-4 right-12 mt-16">
          <img
            ref={ufoRef}
            className="h-24 w-28 transform rotate-45"
            src={ufo}
            alt="UFO"
          />
        </div>
        
        {/* ERROR 404 */}
        <div className="absolute bottom-16 mb-28 right-48">
          <img
            ref={imageRef}
            id="Move"
            className="h-28 w-32"
            src={error404}
            alt="Error 404"
          />
        </div>

        {/* Illustration */}
        <div className="absolute bottom-16 right-96 mr-8">
          <img className="h-80 w-80" src={error} alt="Error" />
        </div>
      </div>
    </div>
  );
};

export default Page404;
