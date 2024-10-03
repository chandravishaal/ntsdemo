// /*import { useState } from 'react';
// import missionImage from '../../assets/Images/handshake.png'; 

// const CompanySection = () => {
//     const [activeSection, setActiveSection] = useState('Mission');

//     const renderButton = (section) => {
//         const isActive = activeSection === section;
//         return (
//             <button
//                 className={`px-8 py-1 rounded-lg text-lg mt-20 cursor-pointer font-semibold ${
//                     isActive
//                         ? 'bg-primaryCyan text-white' 
//                         : 'border-2 border-primaryCyan text-sky-400 raleway-hero bg-transparent' 
//                 }`}
//                 onClick={() => setActiveSection(section)}
//             >
//                 {section}
//             </button>
//         );
//     };

//     const renderActiveSection = () => {
//         switch (activeSection) {
//             case 'Mission':
//                 return (
//                     <div className="py-16 rounded-lg raleway-hero text-blue mt-6">
//                         <div className="flex items-center gap-20 justify-between container mx-auto">
//                             <img src={missionImage} alt="Mission" className="w-[25rem] rounded-lg shadow-lg" />
//                             <div className="">
//                                 <h3 className="text-3xl text-primaryCyan mb-2">What defines us</h3>
//                                 <p className="text-3xl font-bold mb-3">
//                                     Lorem Ipsum is simply dummy text of the printing and </p>
//                                  <p className="text-mb font-light  mb-2 "> 
//                                     Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing. Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. 
//                                     </p>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             case 'Vision':
//                 return (
//                     <div className="py-16 rounded-lg raleway-hero text-blue mt-6">
//                         <div className="flex items-center gap-20 justify-between container mx-auto">
//                             <img src={missionImage} alt="Mission" className="w-[25rem] rounded-lg shadow-lg" />
//                             <div className="">
//                                 <h3 className="text-3xl text-primaryCyan mb-2">What defines</h3>
//                                 <p className="text-3xl font-bold mb-3">
//                                     Lorem Ipsum is simply dummy text of the printing and </p>
//                                  <p className="text-mb font-light  mb-2 "> 
//                                     Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing. Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. 
//                                     </p>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             case 'Values':
//                 return (
//                     <div className="py-16 rounded-lg raleway-hero text-blue mt-6">
//                         <div className="flex items-center gap-20 justify-between container mx-auto">
//                             <img src={missionImage} alt="Mission" className="w-[25rem] rounded-lg shadow-lg" />
//                             <div className="">
//                                 <h3 className="text-3xl text-primaryCyan mb-2">What us</h3>
//                                 <p className="text-3xl font-bold mb-3">
//                                     Lorem Ipsum is simply dummy text of the printing and </p>
//                                  <p className="text-mb font-light  mb-2 "> 
//                                     Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing. Typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. 
//                                     </p>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };
// */{/*
//     return (
//         <div className=" bg-gradient-to-b from-white to-cyan-50 py-16">
//             {/* Buttons for Mission, Vision, Values 
//             <div className="flex space-x-4 justify-center">
//                 {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
//             </div>

//             {/* Display the active section 
//             {renderActiveSection()}
//         </div>
//     );
// };

// export default CompanySection;*/}

// import { useState, useEffect, useRef } from 'react';
// import missionImage from '../../assets/Images/handshake.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const CompanySection = () => {
//     const [activeSection, setActiveSection] = useState('Mission');
//     const sectionRef = useRef(null);

//     const renderButton = (section) => {
//         const isActive = activeSection === section;
//         return (
//             <button
//                 className={`px-4 py-0.5 md:px-8 md:py-1 rounded-lg md:text-lg mt-4 cursor-pointer font-century-gothic ${isActive
//                         ? 'bg-primaryCyan text-black font-eras-bold'
//                         : 'border-2 border-primaryCyan text-black raleway-hero bg-transparent font-eras-bold'
//                     }`}
//                 onClick={() => setActiveSection(section)}
//             >
//                 {section}
//             </button>
//         );
//     };

//     useEffect(() => {
//         // Set up the ScrollTrigger animation with delay and duration
//         gsap.fromTo(
//             sectionRef.current,
//             { opacity: 0, y: 70 }, // Start values: hidden and slightly offset vertically
//             {
//                 opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3, // Add delay and adjust duration
//                 scrollTrigger: {
//                     trigger: sectionRef.current,  // Element to trigger on
//                     start: "top 80%",  // When the top of the section hits 80% of the viewport height
//                     end: "bottom 20%",  // End point of the scroll trigger
//                     toggleActions: "play none none reset",  // Re-trigger the animation on scroll into view
//                     onEnter: () => gsap.to(sectionRef.current, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 }), // Animation with delay and duration
//                     onLeaveBack: () => gsap.to(sectionRef.current, { opacity: 0, y: 50, duration: 1.2, delay: 0 }), // Reset with faster duration
//                 }
//             }
//         );
//     }, [activeSection]);

//     const renderActiveSection = () => {
//         switch (activeSection) {
//             case 'Mission':
//                 return (
//                     <div ref={sectionRef} className="container mx-auto py-8">
//                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between container mx-auto rounded-lg px-5 py-4">
//                             <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                                 <img
//                                     src={missionImage}
//                                     alt="North Star Metrics team symbolizing partnership and collaboration"
//                                     className="rounded-lg shadow-lg w-full h-[250px] object-cover"
//                                 />
//                             </div>
//                             <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
//                                 <div className="md:w-11/12 text-center md:text-left">
//                                     <h1 className="text-3xl font-bold text-black font-montserrat ">Our Mission</h1>
//                                     <h2 className="text-lg text-black mt-1 font-century-gothic">Join the Digital Revolution</h2>
//                                     <p className="text-gray-800 mt-2 font-century-gothic text-sm">
//                                     Our mission is to provide a secure and user-friendly platform for cryptocurrency trading, ensuring accessibility, transparency, and reliability. We aim to promote transparency and reliability in the digital asset trading industry, too thereby enhancing the overall user experience.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             case 'Vision':
//                 return (
//                     <div ref={sectionRef} className="container mx-auto py-8">
//                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between container mx-auto rounded-lg px-5 py-4">
//                             <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                                 <img
//                                     src="https://cdn.pixabay.com/photo/2015/08/01/21/11/euro-870761_1280.jpg"
//                                     alt="Financial growth and investment opportunities symbolized by currency and graphs"
//                                     className="rounded-lg shadow-lg w-full h-[250px] object-cover"
//                                 />
//                             </div>
//                             <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
//                                 <div className="md:w-11/12 text-center md:text-left">
//                                     <h2 className="text-3xl font-bold text-black font-montserrat">Our Vision</h2>
//                                     <h3 className="text-lg text-black mt-1 font-century-gothic">Join the Digital Revolution</h3>
//                                     <p className="text-gray-800 mt-2 font-century-gothic text-sm">
//                                     Our vision is to be the leading cryptocurrency trading platform, revolutionizing the digital economy by providing global access to global crypto markets and fostering financial freedom through innovation and trust, setting new standards for trust and ease of use.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             case 'Values':
//                 return (
//                     <div ref={sectionRef} className="container mx-auto py-8">
//                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between container mx-auto rounded-lg px-5 py-4">
//                             <div className="w-full md:w-1/3 mb-4 md:mb-0">
//                                 <img
//                                      src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg"
//                                     alt="Technological innovation and advanced solutions in the financial sector"
//                                     className="rounded-lg shadow-lg w-full h-[250px] object-cover"
//                                 />
//                             </div>
//                             <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
//                                 <div className="md:w-11/12 text-center md:text-left">
//                                     <h2 className="text-3xl font-bold text-black font-montserrat">Our Values</h2>
//                                     <h3 className="text-lg text-black mt-1 font-century-gothic">Join the Digital Revolution</h3>
//                                     <p className="text-gray-800 mt-2 font-century-gothic text-sm">
//                                     North Star Metrics prioritizes integrity, customer-centricity, and continuous improvement in all its operations, focusing on security, transparency, innovation, and customer satisfaction, fostering trust and collaboration to drive the future of cryptocurrency.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="bg-gradient-to-b from-white to-cyan-50 py-16 px-5">
//             {/* Buttons for Mission, Vision, Values */}
//             <div className="flex md:flex-row space-x-1 md:space-x-4 justify-center">
//                 {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
//             </div>

//             {/* Display the active section */}
//             {renderActiveSection()}
//         </div>
//     );
// };

// export default CompanySection;


import { useState, useEffect, useRef } from 'react';
import missionImage from '../../assets/Images/handshake.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
    const [activeSection, setActiveSection] = useState('Mission');
    const sectionRef = useRef(null);

    const renderButton = (section) => {
        const isActive = activeSection === section;
        return (
            <button
                className={`px-4 py-0.5 md:px-8 md:py-1 rounded-lg md:text-lg mt-4 cursor-pointer font-century-gothic ${isActive
                        ? 'bg-primaryCyan text-black font-eras-bold'
                        : 'border-2 border-primaryCyan text-black raleway-hero bg-transparent font-eras-bold'
                    }`}
                onClick={() => setActiveSection(section)}
            >
                {section}
            </button>
        );
    };

    useEffect(() => {
        // Set up the ScrollTrigger animation with delay and duration
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 70 }, // Start values: hidden and slightly offset vertically
            {
                opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3, // Add delay and adjust duration
                scrollTrigger: {
                    trigger: sectionRef.current,  // Element to trigger on
                    start: "top 80%",  // When the top of the section hits 80% of the viewport height
                    end: "bottom 20%",  // End point of the scroll trigger
                    toggleActions: "play none none reset",  // Re-trigger the animation on scroll into view
                    onEnter: () => gsap.to(sectionRef.current, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 }), // Animation with delay and duration
                    onLeaveBack: () => gsap.to(sectionRef.current, { opacity: 0, y: 50, duration: 1.2, delay: 0 }), // Reset with faster duration
                }
            }
        );
    }, [activeSection]);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'Mission':
                return (
                    <div ref={sectionRef} className="container mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between bg-white/40 container mx-auto rounded-lg px-5 py-4">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <img
                                    src={missionImage}
                                    alt="North Star Metrics team symbolizing partnership and collaboration"
                                    className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
                                <div className="md:w-11/12 text-center md:text-left">
                                    <h1 className="text-3xl font-bold text-black font-montserrat ">Our Mission</h1>
                                    <h2 className="text-lg text-black mt-1 font-century-gothic">Join the Digital Revolution</h2>
                                    <p className="text-gray-800 mt-2 font-century-gothic text-sm">
                                    Our mission is to provide a secure and user-friendly platform for cryptocurrency trading, ensuring accessibility, transparency, and reliability. We aim to promote transparency and reliability in the digital asset trading industry, too thereby enhancing the overall user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Vision':
                return (
                    <div ref={sectionRef} className="container mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between bg-white/40 container mx-auto rounded-lg px-5 py-4">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <img
                                    src="https://cdn.pixabay.com/photo/2015/08/01/21/11/euro-870761_1280.jpg"
                                    alt="Financial growth and investment opportunities symbolized by currency and graphs"
                                    className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
                                <div className="md:w-11/12 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-black font-montserrat">Our Vision</h2>
                                    <h3 className="text-lg text-black mt-1 font-century-gothic">Join the Digital Revolution</h3>
                                    <p className="text-gray-800 mt-2 font-century-gothic text-sm">
                                    Our vision is to be the leading cryptocurrency trading platform, revolutionizing the digital economy by providing global access to global crypto markets and fostering financial freedom through innovation and trust, setting new standards for trust and ease of use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Values':
                return (
                    <div ref={sectionRef} className="container mx-auto py-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between bg-white/40 container mx-auto rounded-lg px-5 py-4">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <img
                                     src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg"
                                    alt="Technological innovation and advanced solutions in the financial sector"
                                    className="rounded-lg shadow-lg w-full h-[250px] object-cover"
                                />
                            </div>
                            <div className="md:pl-10 flex flex-col justify-center w-full md:w-2/3">
                                <div className="md:w-11/12 text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-black font-montserrat">Our Values</h2>
                                    <h3 className="text-lg text-black mt-1 font-century-gothic">Join the Digital Revolution</h3>
                                    <p className="text-gray-800 mt-2 font-century-gothic text-sm">
                                    North Star Metrics prioritizes integrity, customer-centricity, and continuous improvement in all its operations, focusing on security, transparency, innovation, and customer satisfaction, fostering trust and collaboration to drive the future of cryptocurrency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        // <div className="bg-gradient-to-b from-white to-cyan-50 py-16 px-5">
        //     {/* Buttons for Mission, Vision, Values */}
        //     <div className="flex md:flex-row space-x-1 md:space-x-4 justify-center">
        //         {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
        //     </div>

        //     {/* Display the active section */}
        //     {renderActiveSection()}
        // </div>

        <div className="relative py-16 px-5">
            {/* Circular Background with Blur */}
            <div className="absolute inset-0 flex justify-center items-center">
            <div className="circlePosition w-[590px] h-[400px] bg-primaryCyan/40 rounded-lg absolute z-1 top-[60%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[150px]"></div>
            </div>
            
            <div className="relative z-10">
                <div className="flex md:flex-row space-x-1 md:space-x-4 justify-center">
                    {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
                </div>
                {renderActiveSection()}
            </div>
        </div>
    );
};

export default CompanySection;