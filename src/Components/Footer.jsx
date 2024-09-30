// Redesigned; responsive; working
import { FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble, FaWeight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import PrimaryButton from "../Common/PrimaryButton";

const Footer = () => {
  return (
    <>
      <div className="">
        <Marquee gradient={true} gradientColor="black" loop={0} speed={60} pauseOnHover={true}
          style={{ color: 'white', padding: '4px', backgroundColor: 'black' }}>
          <h1>Hello</h1>
        </Marquee>

        <div className="mb-14 mt-10 font-century-gothic">
          <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row gap-6 py-6 px-4 md:py-10 lg:px-0">

            {/* First flex container for the social section */}
            <div className="flex-[3] text-gray-500 font-semibold mb-6 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Social</h2>
              <div className="flex space-x-3 md:space-x-4 my-3 lg:mb-10 mb-5">
                <FaTwitter className="text-lg transition-colors duration-300 hover:text-black md:text-xl" />
                <FaLinkedinIn className="text-lg transition-colors duration-300 hover:text-black md:text-xl" />
                <FaInstagram className="text-lg transition-colors duration-300 hover:text-black md:text-xl" />
              </div>
              <p className="text-sm transition-colors duration-300 mb-2 hover:text-black">
                <FaLocationDot className="inline mr-2" />
                7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari, Kolkata - 700048
              </p>
              <p className="text-sm transition-colors mb-2 duration-500 hover:text-black">
                <IoCall className="inline mr-2" />
                +91 8981037010
              </p>
              <p className="text-sm transition-colors duration-500 hover:text-black">
                <MdEmail className="inline mr-2" />
                contact@ntsmetrics.com
              </p>
            </div>

            {/* 2nd flex for the rest*/}
            <div className="flex-[7] flex flex-col md:flex-row md:justify-between lg:gap-14 gap-7">
              {/* Our services section */}
              <div className="text-gray-500 font-semibold md:ml-52 md:w-4/12">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Services</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="transition-colors duration-300 hover:text-black text-sm">Exchange Services</Link></li>
                  <li><Link to="/" className="transition-colors duration-300 hover:text-black text-sm">Ticker</Link></li>
                  <li><Link to="/blogs" className="transition-colors duration-300 hover:text-black text-sm">Blog</Link></li>
                  <li><Link to="/features" className="transition-colors duration-300 hover:text-black text-sm">Features</Link></li>
                  <li><Link to="/roadmap" className="transition-colors duration-300 hover:text-black text-sm">Roadmap</Link></li>
                </ul>
              </div>

              {/* Products section */}
              <div className="text-gray-500 font-semibold md:ml-5 md:w-4/12">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Products</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="transition-colors duration-300 hover:text-black text-sm">About Us</Link></li>
                  <li><Link to="/contact" className="transition-colors duration-300 hover:text-black text-sm">Contact Us</Link></li>
                  <li><Link to="/" className="transition-colors duration-300 hover:text-black text-sm">AML & KYC</Link></li>
                  <li><Link to="/terms" className="transition-colors duration-300 hover:text-black text-sm">Terms</Link></li>
                  <li><Link to="/privacy-policy" className="transition-colors duration-300 hover:text-black text-sm">Privacy Policy</Link></li>
                </ul>
              </div>

              {/* Resources section */}
              <div className="text-gray-500 font-semibold md:ml-5 md:w-4/12">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="transition-colors duration-300 hover:text-black text-sm">About Us</Link></li>
                  <li><Link to="/contact" className="transition-colors duration-300 hover:text-black text-sm">Contact Us</Link></li>
                  <li><Link to="/" className="transition-colors duration-300 hover:text-black text-sm">AML & KYC</Link></li>
                  <li><Link to="/terms" className="transition-colors duration-300 hover:text-black text-sm">Terms & Condition</Link></li>
                  <li><Link to="/privacy-policy" className="transition-colors duration-300 hover:text-black text-sm">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-gray-200"></div>

        <div className="flex items-center justify-between container font-century-gothic mx-auto my-10">
            <div className="flex flex-col items-start gap-2">
                <h1 className="text-lg text-gray-600 font-semibold">Interested to stay up-to-date with cryptocurrencies?</h1>
                <p className="text-sm">Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
            </div>

            <div className="flex items-center gap-5">
              <input type="text" placeholder="Enter your email address" className="p-2 rounded-2xl border-2 placeholder:text-sm text-sm w-[15rem]" />
              <PrimaryButton title="Subscribe" />
            </div>  
        </div>

        <div className="w-full h-[0.5px] bg-gray-200"></div>


        {/* Footer bottom */}
        <div className="text-center font-semibold text-gray-500 p-2 my-8 text-sm">
          &copy; 2024 NORTH STAR METRICS, All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;







//for refernce
// const Footer = () => {
//   return (
//     <>
//     <div className="bg-secondaryGray">
//     <Marquee gradient={true} gradientColor="black" loop={0} speed={60} pauseOnHover={true} style={{ color: 'white', backgroundColor: 'black' }}>
//         Subscribe to our newsletter ● FAQ's - Your Questions Answered! ● Check Our ICO Calendar for Upcoming Events ● Explore NSM Logo - Your Gateway to Crypto ● Trade with Us - Buy & Sell 70+ Cryptocurrencies! ● Discover Products and Services at NSM! ● Learn More About Cryptocurrency Today! ● Buy and Sell Cryptocurrency 24/7 ● Get Started with North Star Metrics Now! ● Your Trusted Crypto Platform - North Star Metrics ● Enjoy Safe & Secure Transactions! ● Instant Order Processing - Trade Efficiently ● Volatility Protection Tools Available ● Stay Ahead: Market Cap Insights and Trends ● Join Over 10 Million Transactions!
//       </Marquee>

//       <div className="bg-secondaryGray my-14  ">
//         <div className="container mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 py-6 px-4 md:py-10 md:px-6">


//           {/* Social sec */}
//           <div className="text-gray-500 font-semibold">
//             <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Social</h2>
//             <div className="flex space-x-3 md:space-x-4 my-3 mb-2">
//               <FaTwitter className="text-lg transition-colors duration-300 hover:text-black md:text-xl" />
//               <FaLinkedinIn className="text-lg md:text-xltransition-colors duration-300 hover:text-black md:text-xl" />
//               <FaInstagram className="text-lg md:text-xltransition-colors duration-300 hover:text-black md:text-xl" />
//               <FaDribbble className="text-lg md:text-xltransition-colors duration-300 hover:text-black md:text-xl" />
//             </div>
//             <p className="text-sm transition-colors duration-300 hover:text-black">
//               <FaLocationDot className="inline mr-2" />
//               7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari, Kolkata - 700048
//             </p>
//             <p className="text-sm transition-colors duration-500 hover:text-black">
//               <IoCall className="inline mr-2" />
//               +91 8981037010
//             </p>
//             <p className="text-sm transition-colors duration-500 hover:text-black">
//               <MdEmail className="inline mr-2" />
//               contact@ntsmetrics.com
//             </p>
//           </div>

//           {/* Our services sec */}
//           <div className="text-gray-500 font-semibold mt-6 md:mt-0">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Our Services</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Exchange Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Ticker
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/blogs" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/features" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/roadmap" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Roadmap
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* products section */}
//           <div className="text-gray-500 font-semibold mt-6 md:mt-0">

//             <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Products</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   AML & KYC
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Terms & Condition
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/privacy-policy" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* quick links sec*/}
//           <div className="text-gray-500 font-semibold mt-6 md:mt-0">

//             <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Quick Links</h3>
//             <ul className="space-y-1">
//               <li>
//                 <Link to="/about" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   AML & KYC
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Terms & Condition
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/privacy-policy" className="transition-colors duration-300 hover:text-black text-sm md:text-base">
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>


