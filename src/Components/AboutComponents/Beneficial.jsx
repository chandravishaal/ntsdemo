/*import { useState, useEffect, useRef } from 'react';
import TeamImage from '../../assets/Images/team.png';
import icon2 from '../../assets/Images/background.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { gsap } from 'gsap';

const Beneficial = () => {
    // Initialize activeDropdown with 0 to have the first item open by default
    const [activeDropdown, setActiveDropdown] = useState(0);

    const handleToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    // Create refs for the left and right sections
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        // Animate the left and right sections on component mount
        const tl = gsap.timeline();

        tl.fromTo(leftSectionRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
        )
            .fromTo(rightSectionRef.current,
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                "-=1.5" // start at the same time as left section
            );
    }, []);

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center p-6 py-12 md:py-20 rounded-lg transition-all duration-300 ${isExpanded ? md:'h-auto' : 'h-55rem'} "
            style={{
                backgroundImage: `url(${icon2})`,
                backgroundSize: 'cover', // Cover the whole area
                backgroundPosition: 'center', // Center the background image
               // height: '50rem', // Default height for larger screens
            }}
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto md:gap-10 lg:gap-20 relative">
                {/* Left Section with Dropdowns *
                < div  ref={leftSectionRef} className="w-full md:w-1/2 cursor-pointer flex flex-col items-start mt-8 md:mt-5" >
                    <h2 className="text-4xl font-semibold raleway-hero text-gray-800 mb-8 font-montserrat ">How is this beneficial for you?</h2>
                    {
                        ['Secure Transactions', 'User-Friendly Experience', 'Diverse Crypto Options', 'Instant Access', 'Expert Assistance'].map((title, index) => (
                            <div key={index} className="w-full mb-2">
                                <button
                                    className={`w-full bg-primaryCyan text-black font-semibold p-4 rounded-lg text-left flex justify-between items-center font-century-gothic transition-all duration-300 ${activeDropdown === index ? 'rounded-b-none' : ''}`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>{title}</span>
                                    <span
                                        className={`transform transition-all duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`}
                                    >
                                        <MdOutlineKeyboardArrowDown />
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeDropdown === index ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <p className="bg-sky-100 text-gray-800 p-4 font-semibold rounded-lg rounded-t-none font-century-gothic">
                                        {title === 'Secure Transactions' && 'Buy and sell cryptocurrency confidently, being sure that your assets are safe.'}
                                        {title === 'User-Friendly Experience' && 'We make buying and selling crypto easier than ever, whether you are a beginner or an experienced trader.'}
                                        {title === 'Diverse Crypto Options' && 'Access a wide range of cryptocurrencies for buying and selling, enabling diversification of your portfolio.'}
                                        {title === 'Instant Access' && 'Ensure to have an easy and flexible approach towards buying and selling cryptocurrencies with our on-the-go and seamless platform.'}
                                        {title === 'Expert Assistance' && 'Avail yourself of professional service with a support team that stays on the job around the clock regarding any issue with buying and selling crypto.'}
                                    </p>
                                </div>
                            </div>

                        ))}
                </div>

                {/* Right Section with Image *
                < div  ref={rightSectionRef} className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center mb-8 md:mb-0" >
                    <img src={TeamImage} alt="A team of professionals working together in a modern office environment" className="object-contain h-60 md:h-full w-full md:w-[30rem] lg:w-full" />
                </div >
            </div >
        </div >
    );
};

export default Beneficial;   */


import { useState, useEffect, useRef } from 'react';
import TeamImage from '../../assets/Images/team.png';
import icon2 from '../../assets/Images/background.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { gsap } from 'gsap';

const Beneficial = () => {
    // Initialize activeDropdown with 0 to have the first item open by default
    const [activeDropdown, setActiveDropdown] = useState(0);

    const handleToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    // Create refs for the left and right sections
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        // Animate the left and right sections on component mount
        const tl = gsap.timeline();

        tl.fromTo(leftSectionRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
        )
            .fromTo(rightSectionRef.current,
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                "-=1.5" // start at the same time as left section
            );
    }, []);

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center px-6 py-6 md:py-20 rounded-lg  md:h-[50rem] h-[62rem]"
            style={{
                backgroundImage: `url(${icon2})`,
                backgroundSize: 'cover', // Cover the whole area
                backgroundPosition: 'center', // Center the background image
                // height: '50rem', // Default height for larger screens
            }}
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto gap-0 md:gap-10 lg:gap-20 relative">
                {/* Left Section with Dropdowns */}
                < div ref={leftSectionRef} className="w-full md:w-1/2 cursor-pointer flex flex-col items-start mt-8 md:mt-5" >
                    <h2 className="text-3xl md:text-4xl font-semibold raleway-hero text-gray-800 mb-8 font-montserrat text-center md:text-left">
                        How is this beneficial for you?
                    </h2>

                    {
                        ['Secure Transactions', 'User-Friendly Experience', 'Diverse Crypto Options', 'Instant Access', 'Expert Assistance'].map((title, index) => (
                            <div key={index} className="w-full mb-2">
                                <button
                                    className={`w-full bg-primaryCyan text-black font-semibold p-4 rounded-lg text-left flex justify-between items-center font-century-gothic transition-all duration-300 ${activeDropdown === index ? 'rounded-b-none' : ''}`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>{title}</span>
                                    <span
                                        className={`transform transition-all duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`}
                                    >
                                        <MdOutlineKeyboardArrowDown />
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeDropdown === index ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <p className="bg-sky-100 text-gray-800 p-4 font-semibold rounded-lg rounded-t-none font-century-gothic">
                                        {title === 'Secure Transactions' && 'Buy and sell cryptocurrency confidently, being sure that your assets are safe.'}
                                        {title === 'User-Friendly Experience' && 'We make buying and selling crypto easier than ever, whether you are a beginner or an experienced trader.'}
                                        {title === 'Diverse Crypto Options' && 'Access a wide range of cryptocurrencies for buying and selling, enabling diversification of your portfolio.'}
                                        {title === 'Instant Access' && 'Ensure to have an easy and flexible approach towards buying and selling cryptocurrencies with our on-the-go and seamless platform.'}
                                        {title === 'Expert Assistance' && 'Avail yourself of professional service with a support team that stays on the job around the clock regarding any issue with buying and selling crypto.'}
                                    </p>
                                </div>
                            </div>

                        ))}
                </div>

                {/* Right Section with Image */}
                < div ref={rightSectionRef} className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0" >
                    <img src={TeamImage} alt="A team of professionals working together in a modern office environment" className="object-contain h-60 md:h-full w-full md:w-[30rem] lg:w-full" />
                </div >
            </div >
        </div >
    );
};

export default Beneficial;