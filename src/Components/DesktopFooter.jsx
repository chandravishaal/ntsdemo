// Redesigned; responsive; working
import {
  FaLinkedinIn,
  FaInstagram,
  // FaDribbble,
  // FaWeight,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import PrimaryButton from "../Common/PrimaryButton";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { useEffect } from "react";



const DesktopFooter = () => {


  useEffect(() => {
    if (window.location.hash === '#newsletter') {
      const partnersSection = document.getElementById('newsletter');
      if (partnersSection) {
        partnersSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);


  return (
    <>

      <div id='newsletter' className="flex flex-col lg:flex-row items-center justify-between container font-century-gothic mx-auto my-20">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-lg text-gray-600 font-semibold">
            Interested to stay up-to-date with cryptocurrencies?
          </h1>
          <p className="text-sm">
            Get the latest crypto news, updates, and reports by subscribing to
            our free newsletter.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 rounded-xl border-2 placeholder:text-sm text-sm w-[15rem]"
          />
          <PrimaryButton title="Subscribe" />
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-gray-200"></div>

      <div className="">
        <Marquee
          gradient={true}
          gradientColor="black"
          loop={0}
          speed={60}
          pauseOnHover={true}
          style={{
            color: "white",
            padding: "4px",
            backgroundColor: "black",
            overflow: "hidden", // Add this
          }}
        >
          <h1>Hello</h1>
        </Marquee>


        <div className="mb-8 mt-8 font-century-gothic px-5">
          <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row gap-6 py-6 px-4 md:py-10 lg:px-0">
            {/* First flex container for the social section */}
            <div className="flex-[3] text-gray-500 font-semibold mb-6 md:mb-0">

              <div className="flex space-x-3 md:space-x-4 my-1 lg:mb-7 mb-5">
                <img
                  src="https://ntsmetrics.com/img/nsm-logo-blue.png"
                  className="w-32 mb-3"
                  alt=""
                />

                <div className="flex flex-auto items-center space-x-3">
                  <FaFacebookF className="text-lg transition-colors duration-300 lg:hover:text-primaryCyan md:text-xl" />
                  <FaXTwitter className="text-lg transition-colors duration-300 lg:hover:text-primaryCyan md:text-xl" />
                  <FaLinkedinIn className="text-lg transition-colors duration-300 lg:hover:text-primaryCyan md:text-xl" />
                  <FaInstagram className="text-lg transition-colors duration-300 lg:hover:text-primaryCyan md:text-xl" />
                </div>


              </div>
              <p className="text-sm transition-colors duration-300 -my-3 mb-2 lg:hover:text-primaryCyan">
                <FaLocationDot className="inline mr-2" />
                7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari,
                Kolkata - 700048
              </p>
              <p className="text-sm transition-colors mb-2 duration-500 lg:hover:text-primaryCyan">
                <IoCall className="inline mr-2" />
                +91 8981037010
              </p>
              <p className="text-sm transition-colors duration-500 lg:hover:text-primaryCyan">
                <MdEmail className="inline mr-2" />
                contact@ntsmetrics.com
              </p>
            </div>

            {/* 2nd flex for the rest*/}
            <div className="flex-[7] flex flex-col md:flex-row md:justify-between lg:gap-14 gap-7">
              {/* Our services section */}
              <div className="text-gray-500 font-semibold md:ml-52 md:w-4/12">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Exchange Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Ticker
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/features"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/roadmap"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Products section */}
              <div className="text-gray-500 font-semibold md:ml-5 md:w-4/12">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Products
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/crypto-converter"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Buy and Sell
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/OtcDesk"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      OTC Desk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Wallets
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources section */}
              <div className="text-gray-500 font-semibold md:ml-5 md:w-4/12">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/learn-crypto"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Learn Crypto
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/learn-crypto"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Crypto Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/learn-crypto"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/learn-crypto"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/learn-crypto"
                      className="transition-colors duration-300 lg:hover:text-primaryCyan text-sm">
                      Videos
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-gray-200"></div>



        {/* Footer bottom */}
        <div className="text-center font-semibold text-gray-500 p-2 mt-8 text-sm">
          &copy; 2024 NORTH STAR METRICS, All Rights Reserved.
        </div>
        <div className=" font-century-gothic container mx-auto text-center font-semi
          bold text-gray-500 p-2 px-5 my-2 text-sm">
          <Link to="/disclaimer" className="text-gray-500 font-semibold"><span className="lg:hover:text-primaryCyan">DISCLAIMER </span>: <span>Trading in cryptocurrencies is subject to market & legal risks. Prices in one country may differ from prices in other countries. North Star Metrics does not guarantee any returns. Use North Star Metrics&apso;s services at your own risk</span></Link>
        </div>
      </div>
    </>
  );
};

export default DesktopFooter;
