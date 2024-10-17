import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import PrimaryButton from "../Common/PrimaryButton";
import { IoMdArrowUp } from "react-icons/io";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsCalendar4Event } from "react-icons/bs";
import { LuBook } from "react-icons/lu";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";


const FlyOutLink = ({
  children,
  to,
  flyoutContent: FlyoutContent,
  placement,
}) => {
  const [open, setOpen] = useState(false);
  const navigate= useNavigate();

  const showFlyout = open && FlyoutContent;
  const handleClick = (path) => {
    setOpen(false);
    setTimeout(()=>{
      navigate(path);
    },10)
    
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit group"
    >
      <Link
        to={to}
        className="relative flex items-center text-slate-800 font-century-gothic"
      >
        {children}
        <span
          className={`${
            open ? "rotate-180" : "rotate-0"
          } transition-all duration-500`}
        >
          <MdKeyboardArrowDown />
        </span>
      </Link>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: placement === "center" ? "-50%" : "0" }}
            className={`absolute top-8 rounded-xl ${
              placement === "right"
                ? "-right-16"
                : placement === "center"
                ? "left-1/2 -translate-x-1/2"
                : "left-0"
            } z-40 bg-white shadow-md mt-2 navcontent-shadow p-4`}
          >
            {/* Optional decorative div */}
            <div className="absolute -top-6 bg-transparent left-0 right-0 z-50 h-6"></div>

            {/* Center the arrow */}
            <div
              className={`absolute -top-2 rotate-45 w-4 h-4 bg-white ${
                placement === "right"
                  ? "right-24" // Arrow aligned to the right
                  : "left-1/2 -translate-x-1/2" // Arrow centered
              }`}
            ></div>
            <FlyoutContent handleClose={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Learn Flyout Content
const LearnFlyoutContent = ({handleClose}) => {
  return (
    <div className="flex gap-2 rounded-2xl bg-white p-2 font-century-gothic">
      <div className="p-5 w-[230px] flex flex-col gap-1">
        <h1 className="select-none text-xl font-medium">Resources</h1>
        <p className="text-xs text-gray-400">Learn about crypto in the most easiest way and never forget again.</p>
        <div className="flex items-center gap-1 mt-5"><Link to="/learn" onClick={handleClose} className="text-lg text-primaryCyan cursor-pointer">Click to Learn</Link><span className="rotate-45 text-primaryCyan"><IoMdArrowUp /></span></div>
      </div>
      <div className="w-[2px] bg-gray-300"></div>
      <div className="flex w-[230px] flex-col px-2">
        <div
          onClick={()=>handleClose('/learn-crypto')}
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <h1 className="mt-1 ml-2">
            <HiOutlineAcademicCap size={20} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-base">Learn Crypto</h1>
            <h1 className="text-xs text-gray-400">Basics of Crypto</h1>
          </div>
        </div>
        <div
           onClick={()=>handleClose('/learn-crypto')}
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <h1 className="mt-1 ml-2">
            <BsCalendar4Event size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-base">Events</h1>
            <h1 className="text-xs text-gray-400">Upcoming Events & Plans</h1>
          </div>
        </div>
        <div
          onClick={()=>handleClose('/blogs')}
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <h1 className="mt-1 ml-2">
            <LuBook size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-base">Blogs</h1>
            <h1 className="text-xs text-gray-400">checkout our latest blogs</h1>
          </div>
        </div>
      </div>
      <div className="flex w-[230px] flex-col px-2">
        <div
           onClick={()=>handleClose('/learn-crypto')}
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <h1 className="mt-1 ml-2">
            <MdOutlineVideoSettings size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center"><h1 className="text-base">Videos </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
            <h1 className="text-xs text-gray-400">Get the latest videos</h1>
          </div>
        </div>
        <div
           onClick={()=>handleClose('#newsletter')}
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <h1 className="mt-1 ml-2">
            <IoNewspaperOutline size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center"><h1 className="text-base">Newsletter </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
            <h1 className="text-xs text-gray-400">Get the latest updates</h1>
          </div>
        </div>
        <div
           onClick={()=>handleClose('/learn-crypto')}
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
        >
          <h1 className="mt-1 ml-2">
            <MdOutlinePolicy size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center"><h1 className="text-base">Crypto Policy </h1></div>
            <h1 className="text-xs text-gray-400">Read the rules</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

// Company Flyout Content
const CompanyFlyoutContent = ({handleClose}) => {
    return (
      <div className="flex gap-2 rounded-2xl bg-white p-2 font-century-gothic">
        <div className="p-5 w-[230px] flex flex-col gap-1">
          <h1 className="select-none text-xl font-medium">About Us</h1>
          <p className="text-xs text-gray-400">Know about our goals and achievements.</p>
          <div className="flex items-center gap-1 mt-5"><div to="/learn"  onClick={()=>handleClose('/learn')} className="text-lg text-primaryCyan">Click to know</div><span className="rotate-45 text-primaryCyan"><IoMdArrowUp /></span></div>
        </div>
        <div className="w-[2px] bg-gray-300"></div>
        <div className="flex w-[230px] flex-col px-2">
          <div
            onClick={()=>handleClose('/about')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
           <h1 className="mt-1 ml-2">
              <IoIosInformationCircleOutline size={20} className="my-0.5" />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">About</h1>
              <h1 className="text-xs text-gray-400">Our Achievements</h1>
            </div>
          </div>

          <div
             onClick={()=>handleClose('/careers')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-3">
              <BsBriefcase size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">Careers</h1>
              <h1 className="text-xs text-gray-400">We are hiring</h1>
            </div>
          </div>
          <div
             onClick={()=>handleClose('/news')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-3">
              <IoNewspaperOutline size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">News</h1>
              <h1 className="text-xs text-gray-400">checkout latest crypto News</h1>
            </div>
          </div>
        </div>
        <div className="flex w-[230px] flex-col px-2">
          <div
             onClick={()=>handleClose('/contact')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <RiCustomerService2Line size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Contact </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
              <h1 className="text-xs text-gray-400">Get for any query</h1>
            </div>
          </div>
          <div
             onClick={()=>handleClose('/services')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <MdMiscellaneousServices size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Services </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
              <h1 className="text-xs text-gray-400">Check our services</h1>
            </div>
          </div>
          <div
             onClick={() => handleClose('/about#partners')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <FaRegHandshake size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Partners </h1></div>
              <h1 className="text-xs text-gray-400">Know our partners</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

// Individual Flyout Content
const IndividualFlyoutContent = ({handleClose}) => {
    return (
      <div className="flex gap-2 rounded-2xl bg-white p-2 font-century-gothic">
        <div className="p-5 w-[230px] flex flex-col gap-1">
          <h1 className="select-none text-xl font-medium">Solo</h1>
          <p className="text-xs text-gray-400">Our Standalone Products for individuals</p>
          <div className="flex items-center gap-1 mt-5"><div  onClick={()=>handleClose('/learn')} className="text-lg text-primaryCyan cursor-pointer">Click to know</div><span className="rotate-45 text-primaryCyan"><IoMdArrowUp /></span></div>
        </div>
        <div className="w-[2px] bg-gray-300"></div>
        <div className="flex w-[230px] flex-col px-2">
          <div
             onClick={()=>handleClose('/CryptoConverter')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoCartOutline size={20} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">Buy and Sell</h1>
              <h1 className="text-xs text-gray-400">Trade your coins</h1>
            </div>
          </div>
          <div
             onClick={()=>handleClose('/learn-crypto')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-3">
              <IoWalletOutline size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">Wallets</h1>
              <h1 className="text-xs text-gray-400">Most secure wallets</h1>
            </div>
          </div>
        </div>
        <div className="flex w-[230px] flex-col px-2">
          <div
             onClick={()=>handleClose('/learn-crypto')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoMdTime size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Coming Soon </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
              <h1 className="text-xs text-gray-400">Under Development</h1>
            </div>
          </div>
          <div
            onClick={()=>handleClose('/learn-crypto')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoMdTime size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Coming Soon </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
              <h1 className="text-xs text-gray-400">Under Development</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

// Product Flyout Content
const ProducFlyoutContent = ({handleClose}) => {
    return (
      <div className="flex gap-2 rounded-2xl bg-white p-2 font-century-gothic">
        <div className="p-5 w-[230px] flex flex-col gap-1">
          <h1 className="select-none text-xl font-medium">Crypto tools</h1>
          <p className="text-xs text-gray-400">Our Standalone Producys for individuals</p>
          <div className="flex items-center gap-1 mt-5"><div  onClick={()=>handleClose('/learn')} className="text-lg text-primaryCyan cursor-pointer">Click to know</div><span className="rotate-45 text-primaryCyan"><IoMdArrowUp /></span></div>
        </div>
        <div className="w-[2px] bg-gray-300"></div>

        <div className="flex w-[230px] flex-col px-2">
          <div
             onClick={()=>handleClose('/crypto-converter')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoCartOutline  size={20} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">Buy and Sell</h1>
              <h1 className="text-xs text-gray-400">Trade your coins</h1>
            </div>
          </div>
          <div
            onClick={()=>handleClose('/learn-crypto')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoWalletOutline size={17} className="mx-0.5" />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-base">Wallets</h1>
              <h1 className="text-xs text-gray-400">Most secure wallets</h1>
            </div>
          </div>
        </div>
        <div className="flex w-[230px] flex-col px-2">
          <div
             onClick={()=>handleClose('/learn-crypto')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoMdTime size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Coming Soon </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
              <h1 className="text-xs text-gray-400">Under Development</h1>
            </div>
          </div>
          <div
             onClick={()=>handleClose('/learn-crypto')}
            className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl cursor-pointer"
          >
            <h1 className="mt-1 ml-2">
              <IoMdTime size={17} />
            </h1>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center"><h1 className="text-base">Coming Soon </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
              <h1 className="text-xs text-gray-400">Under Development</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

const DesktopNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-secondaryGray w-full z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 shadow-md" : "relative"
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
        <div className="flex items-center gap-10">
          <Link to="/prices" className="font-century-gothic">
            Prices
          </Link>
          <Link to="/exchange" className="font-century-gothic">
            Exchange
          </Link>
          {/* Fixed FlyOutLink usage */}
          <FlyOutLink
            to="#"
            flyoutContent={ProducFlyoutContent}
            placement="center"
          >
            Product
          </FlyOutLink>
          <FlyOutLink
            to="#"
            flyoutContent={CompanyFlyoutContent}
            placement="center"
          >
            Company
          </FlyOutLink>
          <FlyOutLink
            to="#"
            flyoutContent={IndividualFlyoutContent}
            placement="center"
          >
            Individual
          </FlyOutLink>
          <FlyOutLink
            to="#"
            flyoutContent={LearnFlyoutContent}
            placement="right"
          >
            Learn
          </FlyOutLink>

        </div>
        <div>
          <PrimaryButton title="Login" />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

