import React, { useEffect, useRef } from "react";
import "./Page404"; // Assuming you have the CSS styles in a separate file
import nsmlogo from '../assets/Images/Page404/nsmlogo.png'
import cosmos from '../assets/Images/Page404/cosmos.png'
import cryptocurrency from '../assets/Images/Page404/cryptocurrency.png'
import error from '../assets/Images/Page404/error.png'
import error404 from '../assets/Images/Page404/error404.png'
import ethereum from '../assets/Images/Page404/ethereum.png'
import litecoin from '../assets/Images/Page404/litecoin.png'
import xrp from '../assets/Images/Page404/xrp.png'
import ufo from '../assets/Images/Page404/ufo.png'

const Page404 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    let position = 0;
    let direction = 1;
    const speed = 0.5;

    const animate = () => {
      position += direction * speed;
      if (position > 50) {
        direction = -1;
      } else if (position < 0) {
        direction = 1;
      }
      image.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    const glitchImages = document.querySelectorAll(".animate-glitch");
    glitchImages.forEach((image) => {
      setInterval(() => {
        const randomTop = Math.random() * 10 - 5;
        const randomLeft = Math.random() * 10 - 5;
        image.style.transform = `translate(${randomLeft}px, ${randomTop}px) skew(${Math.random() * 2 - 1}deg)`;
      }, 200);
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="container relative max-w-screen-xl mx-auto p-4">
        
        {/* 404 Content */}
        <div className="text-start pl-0 pb-32">
          <h1 className="text-5xl font-semibold text-gray-800">Oops! <br />You've lost in space.</h1>
          <p className="text-black font-semibold text-xl mt-2">We can't seem to find the page you are looking for.</p>
          <div className="mt-2">
            <p className="text-gray-600 text-xl">Here are some useful links instead:</p>
            <div className="space-x-1 pr-24 ">
              <a href="#" className="text-gray-600 hover:underline text-xl">Learning Center |</a>
              <a href="#" className="text-gray-600 hover:underline text-xl">Support |</a>
              <a href="#" className="text-gray-600 hover:underline text-xl">Status |</a>
              <a href="#" className="text-gray-600 hover:underline text-xl">Search |</a>
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-xl">Not finding what you were looking for?<br /> Contact us at <a href="#" className="text-black font-semibold hover:underline">supportnsm@in</a></p>
          <div className="mt-4 mb-8">
            <a href="http://localhost:5173/" className="bg-transparent font-bold border-2 border-gray-500 text-black px-4 py-2 rounded-md hover:bg-cyan-100">Back to Home</a>
          </div>
        </div>

        {/* Floating Crypto Icons */}
        <div className="absolute bottom-28 right-32  mr-48">
          <img className="h-8 w-8 animate-glitch" src={ethereum} alt="Ethereum" />
        </div>
        <div className="absolute top-12 right-28 mb-64 mr-52">
          <img className="h-8 w-8 animate-glitch" src={xrp} alt="XRP" />
        </div>
        <div className="absolute bottom-64 right-12  mr-8">
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
            id="up-down-image"
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
