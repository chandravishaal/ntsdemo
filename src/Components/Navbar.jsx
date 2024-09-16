import { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const navItems = useRef(null);
  const mobileMenuItems = useRef(null);  // Ref for mobile menu items
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const dropdownRef = useRef(null); // Ref for dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const items = navItems.current?.querySelectorAll('li');
    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 1,
      stagger: 0.3,
    });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const items = mobileMenuItems.current?.querySelectorAll('li');
      gsap.from(items, {
        opacity: 0,
        x: 100,  // Slide in from the right
        duration: 1,
        stagger: 0.1,  // Delay between items
        ease: 'power1.out'
      });
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (dropdownRef.current) {
      if (dropdownOpen) {
        gsap.fromTo(dropdownRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power1.out' }
        );
      } else {
        gsap.to(dropdownRef.current,
          { opacity: 0, y: 10, duration: 0.2, ease: 'power1.in' }
        );
      }
    }
  }, [dropdownOpen]);

  const Dropdown = ({ items }) => {
    return (
      <ul
        ref={dropdownRef}
        className="absolute top-4 w-[150px] bg-white shadow-lg rounded mt-2 p-2 z-40"
        onMouseEnter={() => setDropdownOpen(children)}
        onMouseLeave={() => setDropdownOpen(null)}
      >
        {items.map((item, index) => (
          <li key={index} className="text-black transition-colors p-2">
            <Link to={item.link} className="block">{item.label}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const NavLink = ({ to, children, onClick, dropdownItems }) => {
    return (
      <li
        className="relative hover:text-primary transition-colors font-semibold duration-200"
        onClick={onClick}
        onMouseEnter={() => dropdownItems && setDropdownOpen(children)}
        onMouseLeave={() => dropdownItems && setDropdownOpen(null)}
      >
        <Link to={to}>{children}</Link>
        {dropdownOpen === children && dropdownItems && (
          <Dropdown items={dropdownItems} />
        )}
      </li>
    );
  };

  const NavMenu = ({ items, isMobile, onClose }) => {
    return (
      <ul ref={isMobile ? mobileMenuItems : null} className={`flex ${isMobile ? 'flex-col items-start' : 'flex-row items-center'} gap-10`}>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={onClose}
            dropdownItems={item.dropdown}
          >
            {item.label}
          </NavLink>
        ))}
      </ul>
    );
  };

  const navLinks = [
    { label: 'About', link: '/about' },
    { label: 'Service', link: '/services', dropdown: [
        { label: 'Converter', link: '/crypto-converter' },
      ] 
    },
    { label: 'Feature', link: '/features' },
    { label: 'Cryptocurrency', link: '/cryptocurrency' },
    { label: 'FAQ\'s', link: '/faqs' },
    { label: 'Careers', link: '/careers' },
    { label: 'OTC Desk', link: '/otcdesk' },
    { label: 'Blog', link: '/blogs' },
  ];

  return (
    <nav className={`bg-[#252525] w-full ${isSticky ? 'fixed top-0 z-50 shadow-md' : 'static'} transition-all duration-300`} aria-label="Main Navigation">
      <div className="mx-auto container md:px-10 lg:px-2 flex items-center justify-between p-3">
        <Link to="/" aria-label="NSM Homepage">
          <img src="https://ntsmetrics.com/img/nsm-logo-blue.png" className="w-32" alt="NSM Logo" />
        </Link>
        <div className="lg:hidden block text-2xl">
          <GiHamburgerMenu size={30} color='white' onClick={() => setIsMobileMenuOpen(true)} />
        </div>

        <div className={`bg-white w-2/3 flex flex-col items-start fixed h-screen lg:hidden z-50 top-0 transition-all duration-500 ${isMobileMenuOpen ? 'right-0' : '-right-[100%]'} px-5`}>
          <div className='ml-auto mt-5 mb-10'>
            <MdCancel size={30} color='black' onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <NavMenu items={navLinks} isMobile={true} onClose={() => setIsMobileMenuOpen(false)} />

          <div className="flex items-center gap-5 w-full mb-5 justify-start mt-10">
            <button onClick={() => setIsMobileMenuOpen(false)} className="lg:px-4 lg:py-2 px-4 py-3 text-md button text-center select-none cursor-pointer w-1/4 lg:text-base text-sm font-semibold transition-all hover:bg-cyan-500 duration-200 outline-none text-white bg-primaryCyan rounded-[100px] shadow-[0_4px_#118baa]">
              Buy
            </button>
            <button onClick={() => setIsMobileMenuOpen(false)} className="lg:px-4 lg:py-2 px-4 py-3 text-md button text-center select-none cursor-pointer w-1/4 lg:text-base text-sm font-semibold transition-all duration-200 outline-none text-black bg-white rounded-[100px] shadow-[0_4px_#C0C0C0]">
              Sell
            </button>
          </div>
        </div>

        <div ref={navItems} className="lg:flex items-center hidden text-white text-base font-semibold gap-8">
          <NavMenu items={navLinks} isMobile={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
