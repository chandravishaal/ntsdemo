// import { useState, useEffect, useRef } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { gsap } from 'gsap';
// import { Link } from 'react-router-dom';
// import { MdCancel } from "react-icons/md";

// const AccordionMenuItem = ({ item, closeMenu, isOpen, toggleOpen }) => {
//   return (
//     <div className="w-full">
//       <div
//         className="flex justify-between items-center cursor-pointer p-3"
//         onClick={toggleOpen} // Toggle dropdown
//       >
//         <span className="text-black font-semibold">{item.label}</span>
//         <span>{isOpen ? '-' : '+'}</span>
//       </div>
//       {isOpen && item.dropdown && (
//         <ul className="pl-4">
//           {item.dropdown.map((subItem, index) => (
//             <li key={index} className="p-2">
//               <Link
//                 to={subItem.link}
//                 className="text-black hover:text-primary transition-colors"
//                 onClick={() => closeMenu()}
//               >
//                 {subItem.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// const AccordionMenu = ({ items, closeMenu }) => {
//   const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index); // Toggle the clicked accordion
//   };

//   return (
//     <div className="flex flex-col">
//       {items.map((item, index) => (
//         item.dropdown ? (
//           <AccordionMenuItem
//             key={index}
//             item={item}
//             closeMenu={closeMenu}
//             isOpen={openIndex === index} // Check if this accordion is open
//             toggleOpen={() => toggleAccordion(index)} // Toggle this accordion
//           />
//         ) : (
//           <div key={index}>
//             <Link
//               to={item.link}
//               className="block p-3 text-black hover:bg-gray-200"
//               onClick={() => closeMenu()}
//             >
//               {item.label}
//             </Link>
//           </div>
//         )
//       ))}
//     </div>
//   );
// };

// const Navbar = () => {
//   const mobileMenuRef = useRef(null); // Reference for the mobile menu
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // GSAP animation for mobile menu
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       const items = mobileMenuRef.current.querySelectorAll('li'); // Select all menu items
//       gsap.from(items, {
//         x: 100, // Slide from right
//         opacity: 0,
//         duration: 0.5,
//         stagger: 0.1, // Stagger animation for each item
//         ease: "power2.out",
//       });
//     }
//   }, [isMobileMenuOpen]); // Runs the animation whenever isMobileMenuOpen changes

//   const navLinks = [
//     { label: 'About', link: '/about' },
//     {
//       label: 'Service',
//       dropdown: [
//         { label: 'Converter', link: '/crypto-converter' },
//         { label: 'Our Services', link: '/services' },
//       ]
//     },
//     { label: 'Feature', link: '/features' },
//     { label: 'Learn',
//       dropdown: [
//         { label: 'News', link: '/news' },
//         { label: 'Blogs', link: '/blogs' },
//       ]
//     },
//     { label: 'Careers', link: '/careers' },
//     { label: 'OTC Desk', link: '/otcdesk' },
//   ];

//   return (
//     <nav className={`bg-secondaryGray w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-md' : 'static relative'}`} aria-label="Main Navigation">
//       <div className="mx-auto container md:px-10 lg:px-2 flex items-center justify-between p-3">
//         <Link to="/" aria-label="NSM Homepage">
//           <img src="https://ntsmetrics.com/img/nsm-logo-blue.png" className="w-32" alt="NSM Logo" />
//         </Link>
//         <div className="lg:hidden block text-2xl">
//           <GiHamburgerMenu size={30} color='white' onClick={() => setIsMobileMenuOpen(true)} />
//         </div>

//         {/* Mobile Menu */}
//         <div
//           ref={mobileMenuRef} // Ref for GSAP animation
//           className={`bg-white w-2/3 flex flex-col items-start fixed h-screen lg:hidden z-50 top-0 transition-all duration-500 ${isMobileMenuOpen ? 'right-0' : '-right-[100%]'} px-5`}
//         >
//           <div className='ml-auto mt-5 mb-10'>
//             <MdCancel size={30} color='black' onClick={() => setIsMobileMenuOpen(false)} />
//           </div>
//           <AccordionMenu items={navLinks} closeMenu={() => setIsMobileMenuOpen(false)} />

//           {/* Buttons */}
//           <div className="flex items-center gap-5 w-full mb-5 justify-start mt-10">
//             <button onClick={() => setIsMobileMenuOpen(false)} className="lg:px-4 lg:py-2 px-4 py-3 text-md button text-center select-none cursor-pointer w-1/4 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
//               Buy
//             </button>
//             <button onClick={() => setIsMobileMenuOpen(false)} className="lg:px-4 lg:py-2 px-4 py-3 text-md button text-center select-none cursor-pointer w-1/4 lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-white rounded-[100px] shadow-[0_4px_#C0C0C0]">
//               Sell
//             </button>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="lg:flex items-center hidden text-slate-800 text-base font-semibold gap-8">
//           <ul className="flex flex-row items-center gap-10">
//             {navLinks.map((item, index) => (
//               item.dropdown ? (
//                 <li key={index} className="relative group hover:text-primary transition-colors font-semibold duration-200">
//                   <Link to={item.link}>{item.label}</Link>
//                   <div className="hidden group-hover:block absolute z-10">
//                     <Dropdown items={item.dropdown} />
//                   </div>
//                 </li>
//               ) : (
//                 <li key={index}>
//                   <Link to={item.link} className="text-slate-800">{item.label}</Link>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const Dropdown = ({ items }) => {
//   return (
//     <ul className="absolute top-0 w-[150px] bg-white shadow-lg rounded mt-0 p-2 z-[999]">
//       {items.map((item, index) => (
//         <li key={index} className="text-black transition-colors p-3 lg:hover:text-white lg:hover:bg-gray-400 rounded-lg">
//           <Link to={item.link} className="block">{item.label}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import PrimaryButton from "../Common/PrimaryButton";
import { IoMdArrowUp } from "react-icons/io";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsCalendar4Event } from "react-icons/bs";
import { LuBook } from "react-icons/lu";
import { MdOutlineVideoSettings } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { MdOutlinePolicy } from "react-icons/md";




const FlyOutLink = ({
  children,
  to,
  flyoutContent: FlyoutContent,
  placement,
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

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
                ? "-right-3"
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
                  ? "right-4" // Arrow aligned to the right
                  : "left-1/2 -translate-x-1/2" // Arrow centered
              }`}
            ></div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Learn Flyout Content
const LearnFlyoutContent = () => {
  return (
    <div className="flex gap-2 rounded-2xl bg-white p-2">
      <div className="p-5 w-[230px] flex flex-col gap-1">
        <h1 className="select-none text-3xl">Resources</h1>
        <p className="text-sm text-gray-400">Learn about crypto in the most easiest way and never forget again.</p>
        <div className="flex items-center gap-1 mt-5"><Link to="/learn" className="text-xl text-primaryCyan">Click to Learn</Link><span className="rotate-45 text-primaryCyan"><IoMdArrowUp /></span></div>
      </div>
      <div className="w-[2px] bg-gray-300"></div>
      <div className="flex w-[230px] flex-col px-2">
        <Link
          to="/learn-crypto"
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl"
        >
          <h1 className="mt-1 ml-2">
            <HiOutlineAcademicCap size={20} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-xl">Learn Crypto</h1>
            <h1 className="text-sm text-gray-400">Basics of Crypto</h1>
          </div>
        </Link>
        <Link
          to="/learn-crypto"
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl"
        >
          <h1 className="mt-1 ml-2">
            <BsCalendar4Event size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-xl">Events</h1>
            <h1 className="text-sm text-gray-400">Upcoming Events & Plans</h1>
          </div>
        </Link>
        <Link
          to="/learn-crypto"
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl"
        >
          <h1 className="mt-1 ml-2">
            <LuBook size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-xl">Blogs</h1>
            <h1 className="text-sm text-gray-400">checkout our latest blogs</h1>
          </div>
        </Link>
      </div>
      <div className="flex w-[230px] flex-col px-2">
        <Link
          to="/learn-crypto"
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl"
        >
          <h1 className="mt-1 ml-2">
            <MdOutlineVideoSettings size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center"><h1 className="text-xl">Videos </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
            <h1 className="text-sm text-gray-400">Get the latest videos</h1>
          </div>
        </Link>
        <Link
          to="/learn-crypto"
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl"
        >
          <h1 className="mt-1 ml-2">
            <PiNewspaperClipping size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center"><h1 className="text-xl">Newsletter </h1><span className="rotate-45"><IoMdArrowUp /></span></div>
            <h1 className="text-sm text-gray-400">Get the latest updates</h1>
          </div>
        </Link>
        <Link
          to="/learn-crypto"
          className="text-lg flex item-start gap-3 p-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-100 rounded-xl"
        >
          <h1 className="mt-1 ml-2">
            <MdOutlinePolicy size={17} />
          </h1>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center"><h1 className="text-xl">Crypto Policy </h1></div>
            <h1 className="text-sm text-gray-400">Read the rules</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
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
            flyoutContent={LearnFlyoutContent}
            placement="center"
          >
            Product
          </FlyOutLink>
          <FlyOutLink
            to="#"
            flyoutContent={LearnFlyoutContent}
            placement="center"
          >
            Company
          </FlyOutLink>
          <FlyOutLink
            to="#"
            flyoutContent={LearnFlyoutContent}
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

          <PrimaryButton title="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
