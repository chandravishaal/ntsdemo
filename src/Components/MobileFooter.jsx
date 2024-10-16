import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import PrimaryButton from "../Common/PrimaryButton";

const AccordionItem = ({ title, children, isExpanded, toggleAccordion }) => {
  return (
    <div className="border-gray-200 w-full font-century-gothic">
      <button
        className="w-full text-left py-4 text-base font-semibold flex justify-between items-start"
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        >
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 rounded-lg bg-secondaryGray"
          >
            <div className="py-3 text-lg flex flex-col items-start">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileFooter = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null); // Keep track of the expanded accordion

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <>
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
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        <h1>Hello</h1>
      </Marquee>

      <div className="flex flex-col items-start px-5">
        <Link to="/">
          <img
            src="https://ntsmetrics.com/img/nsm-logo-blue.png"
            className="w-32 mb-5"
            alt="NorthStar Metrics logo"
          />
        </Link>

        {/* Contact Info */}
        <div className="mb-10">
          <p className="text-sm transition-colors duration-300 mb-2 hover:text-black mt-4">
            <FaLocationDot className="inline mr-2" />
            7th Floor, Yamuna Building, 86, Golaghata Rd, Dakshindari, Kolkata -
            700048
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

        {/* Accordion Sections */}
        <AccordionItem
          title="Services"
          isExpanded={expandedAccordion === 0}
          toggleAccordion={() => toggleAccordion(0)}
        >
          <Link to="/service1" className="py-2 text-sm">
          Exchange Services
          </Link>
          <Link to="/service2" className="py-2 text-sm">
          Ticker
          </Link>
          <Link to="/service3" className="py-2 text-sm">
          Features
          </Link>
          <Link to="/service3" className="py-2 text-sm">
          Roadmap
          </Link>
        </AccordionItem>

        <AccordionItem
          title="Product"
          isExpanded={expandedAccordion === 1}
          toggleAccordion={() => toggleAccordion(1)}
        >
          <Link to="/crypto-converter" className="py-2 text-sm">
          Buy and Sell
          </Link>
          <Link to="/OtcDesk" className="py-2 text-sm">
          OTC Desk
          </Link>
          <Link to="/" className="py-2 text-sm">
          Wallets
          </Link>
        </AccordionItem>

        <AccordionItem
          title="Resources"
          isExpanded={expandedAccordion === 2}
          toggleAccordion={() => toggleAccordion(2)}
        >
          <Link to="/learn-crypto" className="py-2 text-sm">
          Learn Crypto
          </Link>
          <Link to="/learn-crypto" className="py-2 text-sm">
          Crypto Policy
          </Link>
          <Link to="/blogs" className="py-2 text-sm">
          Blogs
          </Link>
          <Link to="/learn-crypto" className="py-2 text-sm">
          Newsletter
          </Link><Link to="/learn-crypto" className="py-2 text-sm">
          Events
          </Link><Link to="/learn-crypto" className="py-2 text-sm">
          Videos
          </Link>
        </AccordionItem>

        <div className="w-full h-[0.5px] bg-gray-200 mt-5"></div>

        <div className="flex flex-col items-start justify-between container w-full gap-3 font-century-gothic mx-auto my-4">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-lg text-gray-600 font-semibold">
              Interested to stay up-to-date with cryptocurrencies?
            </h1>
            <p className="text-sm">
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-xl border-2 w-full placeholder:text-base text-base"
            />
            <button className="lg:px-6 lg:py-2.5 px-6 py-3 w-full text-md select-none button whitespace-nowrap text-center cursor-pointer lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-black bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa] font-century-gothic">
              Subscribe
            </button>
          </div>
          <div className="w-full h-[0.5px] bg-gray-200 mt-5"></div>

          <div className="text-center font-semibold text-gray-500 my-3 text-sm">
            &copy; 2024 NORTH STAR METRICS, All Rights Reserved.
          </div>
          <div className="text-left font-semibold text-gray-500 p-2 my-2 text-sm">
          <a href="/disclaimer" className="text-primaryCyan hover:underline">Disclaimer:</a> Trading in cryptocurrencies is subject to market & legal risks. Prices in one country may differ from prices in other countries. North Star Metrics does not guarantee any returns. Use North Star Metrics&apos;s services at your own risk.
          </div>

        </div>
      </div>
    </>
  );
};

export default MobileFooter;
