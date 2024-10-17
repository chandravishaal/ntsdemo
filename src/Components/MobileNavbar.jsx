import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsCalendar4Event } from "react-icons/bs";
import { LuBook } from "react-icons/lu";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";




const AccordionItem = ({ title, children, isExpanded, toggleAccordion }) => {
  return (
    <div className="border-gray-200">
      <button
        className="w-full text-left p-4 text-base font-semibold flex justify-between items-center"
        onClick={toggleAccordion}
      >
        {title}
        <span className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}>
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
            <div className="py-3 text-lg">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null); // Keep track of the expanded accordion
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };
  const handleStandaloneClick = (path) => {

    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 0)

  };
  const handleAccordionNavigation = (path) => {
    setIsOpen(false); 
    setTimeout(() => {
      setExpandedAccordion(null);  
    }, 50);

    setTimeout(() => {
      navigate(path);
    }, 0)  
  };

  return (
    <nav
      className={`bg-secondaryGray w-full z-50 transition-all duration-300 ${isSticky ? "fixed top-0 shadow-md" : "relative"
        }`}
      aria-label="Main Navigation"
    >
      <div className="mx-auto container md:px-10 lg:px-2 flex items-center justify-between p-3">
        <Link to="/" aria-label="NSM Homepage">
          <img
            src="https://ntsmetrics.com/img/nsm-logo-blue.png"
            className="w-32"
            alt="NSM Logo"
          />
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col w-7 gap-1 items-center"
        >
          <div
            className={`w-full bg-black rounded-md h-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></div>
          <div
            className={`w-full bg-black rounded-md h-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          ></div>
          <div
            className={`w-full bg-black rounded-md h-1 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          ></div>
        </div>
      </div>

      {/* Accordion and standalone links inside motion div */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className={`absolute bg-white z-50 w-full h-screen p-4 overflow-auto`}
          >
            <div className="flex flex-col items-start gap-2">
              <button className="bg-black  w-full text-white text-lg rounded-lg font-semibold text-center py-2 font-century-gothic">Login</button>
              <button className="bg-white border border-gray-400 font-semibold w-full text-center text-primaryCyan text-lg rounded-lg py-2 font-century-gothic">Register</button>
            </div>
            {/* Accordion items */}
            <AccordionItem
              title="Products"
              isExpanded={expandedAccordion === 0}
              toggleAccordion={() => toggleAccordion(0)}
            >
              <div onClick={() => handleAccordionNavigation('/crypto-converter')} className="py-2 text-sm flex items-center gap-1">
                <span><IoCartOutline /></span>Buy and Sell
              </div>
              <div onClick={() => handleAccordionNavigation('/product1')} className="py-2 text-sm flex items-center gap-1">
                <span><IoWalletOutline /></span>Wallets
              </div>
            </AccordionItem>

            <AccordionItem
              title="Company"
              isExpanded={expandedAccordion === 1}
              toggleAccordion={() => toggleAccordion(1)}
            >
              <div onClick={() => handleAccordionNavigation('/about')} className="py-2 text-sm flex items-center gap-1">
                <span><IoIosInformationCircleOutline /></span>About
              </div>
              <div onClick={() => handleAccordionNavigation('/careers')} className="py-2 text-sm flex items-center gap-1">
                <span><BsBriefcase /></span>Careers
              </div>
              <div onClick={() => handleAccordionNavigation('/news')} className="py-2 text-sm flex items-center gap-1">
                <span><IoNewspaperOutline /></span>News
              </div>
              <div onClick={() => handleAccordionNavigation('/contact')} className="py-2 text-sm flex items-center gap-1">
                <span><RiCustomerService2Line /></span>Contact
              </div>
              <div onClick={() => handleAccordionNavigation('/services')} className="py-2 text-sm flex items-center gap-1">
                <span><MdMiscellaneousServices /></span>Services
              </div>
              <div onClick={() => handleAccordionNavigation('/about#partners')} className="py-2 text-sm flex items-center gap-1">
                <span><FaRegHandshake /></span>Partners
              </div>
            </AccordionItem>

            <AccordionItem
              title="Individual"
              isExpanded={expandedAccordion === 2}
              toggleAccordion={() => toggleAccordion(2)}
            >
              <div onClick={() => handleAccordionNavigation('/converter')} className="py-2 text-sm flex items-center gap-1">
                <span><IoCartOutline /></span>Buy and Sell
              </div>
              <div onClick={() => handleAccordionNavigation('/faq')} className="py-2 text-sm flex items-center gap-1">
                <span><IoWalletOutline /></span>Wallets
              </div>
              <div onClick={() => handleAccordionNavigation('/faq')} className="py-2 text-sm flex items-center gap-1">
                <span><IoMdTime /></span>Coming soon
              </div>
              <div onClick={() => handleAccordionNavigation('/faq')} className="py-2 text-sm flex items-center gap-1">
                <span><IoMdTime /></span>Coming Soon
              </div>
            </AccordionItem>

            <AccordionItem
              title="Learn"
              isExpanded={expandedAccordion === 3}
              toggleAccordion={() => toggleAccordion(3)}
            >
              <div onClick={() => handleAccordionNavigation('/blog')} className="py-2 text-sm flex items-center gap-1">
                <span><HiOutlineAcademicCap /></span>Learn Crypto
              </div>
              <div onClick={() => handleAccordionNavigation('/faq')} className="py-2 text-sm flex items-center gap-1">
                <span><BsCalendar4Event /></span>Events
              </div>
              <div onClick={() => handleAccordionNavigation('/blogs')} className="py-2 text-sm flex items-center gap-1">
                <span><LuBook /></span>Blogs
              </div>
              <div onClick={() => handleAccordionNavigation('/video')} className="py-2 text-sm flex items-center gap-1">
                <span><MdOutlineVideoSettings /></span>Videos
              </div>
              <div onClick={() => handleAccordionNavigation('#newsletter')} className="py-2 text-sm flex items-center gap-1">
                <span><IoNewspaperOutline /></span>Newsletter
              </div>
              <div onClick={() => handleAccordionNavigation('/policy')} className="py-2 text-sm flex items-center gap-1">
                <span><MdOutlinePolicy /></span>Crypto Policy
              </div>
            </AccordionItem>

            {/* Standalone div's */}
            <div className="flex flex-col items-start">
              <div
                onClick={() => handleStandaloneClick('/prices')}
                className="w-full text-left p-4 text-base font-semibold"
              >
                Prices
              </div>
              <div
                onClick={() => handleStandaloneClick('/exchange')}
                className="w-full text-left p-4 text-base font-semibold"
              >
                Exchange
              </div>
              <div
                onClick={() => handleStandaloneClick('/contact')}
                className="w-full text-left p-4 text-base font-semibold flex items-center gap-4"
              >
                Contact Us <span className="rotate-45"><IoMdArrowUp /></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
