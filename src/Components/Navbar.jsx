import { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (!isSticky) setIsSticky(true);
      } else {
        if (isSticky) setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  useEffect(() => {
    const items = navItems.current.querySelectorAll('li');

    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 1,
      stagger: 0.3
    })
  }, [])

  return (
    <nav className={`bg-black w-full ${isSticky ? 'sticky top-0 z-50 shadow-md' : 'static'} transition-all duration-300`} aria-label="Main Navigation">
      <div className="mx-auto container md:px-10 lg:px-2 flex items-center justify-between p-3">
        <Link to="/" aria-label="NSM Homepage">
          <img src="https://ntsmetrics.com/img/nsm-logo-blue.png" className="w-32" alt="NSM Logo" />
        </Link>
        <div className="lg:hidden block text-2xl">
          <GiHamburgerMenu size={30} />
        </div>
        <ul  ref={navItems} className="lg:flex items-center overflow-hidden text-white hidden text-base font-semibold gap-8">
          <li>
            {/* <Link to="/About">About us</Link> */}
            <Link to="/About">About</Link>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#features">Feature</a>
          </li>
          <li>  
            <a href="/crypto-converter">Crypto Converter</a>
          </li>
          <li>
            <a href="#cryptocurrency">Cryptocurrency</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
