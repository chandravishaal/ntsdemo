//original code
// import footerImage from "/src/assets/Images/contact_img.png"; // Assuming the image is in the public folder
// import footerImage from "../assets/Images/Indian_girl_footer_section.png";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       <section className="footer-background">
//         <footer className="container mx-auto max-w-[1200px] relative z-20 mt-24">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="py-20 pt-20 w-full text-black px-6 ">
//               <div className="flex flex-col md:flex-row justify-between text-1xl pr-10">
//                 <div className="w-full md:w-1/3 mb-8 md:mb-0">
//                   <h3 className="font-bold mb-4">Get In Touch</h3>
//                   <p className="mt-2">
//                     <FaLocationDot className="inline mr-2" />
//                     7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari,
//                     Kolkata - 700048
//                   </p>
//                   <p className="mt-2">
//                     <IoCall className="inline mr-2" />
//                     +91 8981037010
//                   </p>
//                   <p className="mt-2">
//                     <MdEmail className="inline mr-2" />
//                     contact@ntsmatrics.com
//                   </p>
//                 </div>

//                 <div className="w-full md:w-1/3 mb-8 md:mb-0">
//                   <h3 className="font-bold mb-4">Our Services</h3>
//                   <ul>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/">Cryptocurrency Exchange Services</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/">Cryptocurrency Ticker</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/blogs">Blog</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/features">Features</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/roadmap">Roadmap</Link>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="w-full md:w-1/3">
//                   <h3 className="font-bold mb-4">Quick Links</h3>
//                   <ul>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/about">About Us</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/contact">Contact Us</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/">AML & KYC</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/terms">Terms & Condition</Link>
//                     </li>
//                     <li>
//                       <IoIosArrowForward className="inline mr-2" />
//                       <Link to="/pricy&policy">Privacy Policy</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </section>

//       <section className="bg-black">
//         <div className="container mx-auto text-white text-center p-2">
//           &copy;2024 NORTH STAR METRICS, All Right Reserved.
//         </div>
//       </section>
//     </>
//   );
// };

// export default Footer;





// Redesigned; responsive; working
import { FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <Marquee gradient={true} gradientColor="black" loop={0} speed={60} pauseOnHover={true} style={{ color: 'white', backgroundColor: 'black' }}>
        Subscribe to our newsletter ● FAQ's - Your Questions Answered! ● Check Our ICO Calendar for Upcoming Events ● Explore NSM Logo - Your Gateway to Crypto ● Trade with Us - Buy & Sell 70+ Cryptocurrencies! ● Discover Products and Services at NSM! ● Learn More About Cryptocurrency Today! ● Buy and Sell Cryptocurrency 24/7 ● Get Started with North Star Metrics Now! ● Your Trusted Crypto Platform - North Star Metrics ● Enjoy Safe & Secure Transactions! ● Instant Order Processing - Trade Efficiently ● Volatility Protection Tools Available ● Stay Ahead: Market Cap Insights and Trends ● Join Over 10 Million Transactions!
      </Marquee>

      <div className="bg-[#F9FAFB] my-14  ">
        <div className="container mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 py-6 px-4 md:py-10 md:px-6">


          {/* Social sec */}
          <div className="text-gray-500 font-semibold">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Social</h2>
            <div className="flex space-x-3 md:space-x-4 my-3 mb-2">
              <FaTwitter className="text-lg transition-colors duration-300 hover:text-black md:text-xl" />
              <FaLinkedinIn className="text-lg md:text-xltransition-colors duration-300 hover:text-black md:text-xl" />
              <FaInstagram className="text-lg md:text-xltransition-colors duration-300 hover:text-black md:text-xl" />
              <FaDribbble className="text-lg md:text-xltransition-colors duration-300 hover:text-black md:text-xl" />
            </div>
            <p className="text-sm transition-colors duration-300 hover:text-black">
              <FaLocationDot className="inline mr-2" />
              7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari, Kolkata - 700048
            </p>
            <p className="text-sm transition-colors duration-500 hover:text-black">
              <IoCall className="inline mr-2" />
              +91 8981037010
            </p>
            <p className="text-sm transition-colors duration-500 hover:text-black">
              <MdEmail className="inline mr-2" />
              contact@ntsmetrics.com
            </p>
          </div>

          {/* Our services sec */}
          <div className="text-gray-500 font-semibold mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Our Services</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Exchange Services
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Ticker
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/features" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* products section */}
          <div className="text-gray-500 font-semibold mt-6 md:mt-0">

            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Products</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  AML & KYC
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* quick links sec*/}
          <div className="text-gray-500 font-semibold mt-6 md:mt-0">

            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  AML & KYC
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="text-center font-semibold text-gray-500 p-2 my-8 text-sm">
        &copy; 2024 NORTH STAR METRICS, All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
