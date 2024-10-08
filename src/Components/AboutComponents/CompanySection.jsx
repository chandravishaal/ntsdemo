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
//                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between bg-white/40 container mx-auto rounded-lg px-5 py-4">
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
//                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between bg-white/40 container mx-auto rounded-lg px-5 py-4">
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
//                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between bg-white/40 container mx-auto rounded-lg px-5 py-4">
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
//         // <div className="bg-gradient-to-b from-white to-cyan-50 py-16 px-5">
//         //     {/* Buttons for Mission, Vision, Values */}
//         //     <div className="flex md:flex-row space-x-1 md:space-x-4 justify-center">
//         //         {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
//         //     </div>

//         //     {/* Display the active section */}
//         //     {renderActiveSection()}
//         // </div>

//         <div className="relative pt-32 lg:py-16 px-5">
//             {/* Circular Background with Blur */}
//             <div className="absolute inset-0 flex justify-center items-center">
//             <div className="circlePosition w-[590px] h-[400px] bg-primaryCyan/40 rounded-lg absolute z-1 top-[60%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[150px]"></div>
//             </div>

//             <div className="relative z-10">
//                 <div className="flex md:flex-row space-x-1 md:space-x-4 justify-center">
//                     {['Mission', 'Vision', 'Values'].map(section => renderButton(section))}
//                 </div>
//                 {renderActiveSection()}
//             </div>
//         </div>
//     );
// };

// export default CompanySection;


















import React, { useRef } from 'react';
import image1 from '../../assets/Images/handshake.png';

const Partners = () => {
    const containerRef1 = useRef();
    const containerRef2 = useRef();
    const containerRef3 = useRef();

    const handleMouseMove = (e, containerRef) => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const maxOffset = 2; 
        const translateX = Math.min(Math.max(offsetX - container.clientWidth / 2, -maxOffset), maxOffset);
        const translateY = Math.min(Math.max(offsetY - container.clientHeight / 2, -maxOffset), maxOffset);

        // combining movement and scaling
        container.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`; 

        // bringing the hovered card to the front
        container.style.zIndex = '100'; 
    };

    const handleMouseLeave = (containerRef) => {
        const container = containerRef.current;
        container.style.transform = ''; 
        container.style.zIndex = ''; 
    };

    return (
        <div className="relative h-[700px] px-5">
            {/* blur effect */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="circlePosition w-[850px] h-[450px] bg-primaryCyan/30 rounded-lg absolute z-1 top-[50%] left-[53%] translate-x-[-50%] translate-y-[-50%] blur-[400px]"></div>
            </div>

            <div className="min-h-[30rem] h-auto w-full flex items-center justify-center">
                <div className="w-full md:w-1/2 h-full px-5 md:h-[100%]  flex justify-center items-center">
                
                    <div className="relative  scroll-py-36 px-5">
                    <h2 className="text-3xl text-black mt-16 -mb-2 underline  font-bold font-century-gothic text-center">Join the Digital Revolution</h2>

                        <section className="flex flex-row items-center mt-16 justify-center relative z-10 min-h-[20rem] sm:min-h-[30rem]">
                            {/* 1sttt card*/}
                            <div ref={containerRef1}
                                className="flex flex-col bg-white/95 w-[250px]  sm:w-[310px] -mr-32 h-[250px] sm:h-[430px] items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer border-primaryCyan/100 border-[1px]"
                                onMouseMove={(e) => handleMouseMove(e, containerRef1)}
                                onMouseLeave={() => handleMouseLeave(containerRef1)}>
                              
                                <div className='md:w-[92%] -mt-2'>
                                    <img src="https://cdn.pixabay.com/photo/2015/08/01/21/11/euro-870761_1280.jpg" className="rounded-lg shadow-lg w-full h-[250px] object-cover" alt="Mission" />
                                </div>
                                <div className='md:w-[90%] mb-2 mt-8'>
                                    <h1 className="font-bold text-2xl text-black font-montserrat text-center border-b border-black/30 pb-1">Our Vision</h1>
                                </div>
                                <div className='md:w-[90%] mt-4'>
                                    <h2 className="text-lg text-black mt-1 font-century-gothic text-center">Join the Digital Revolution</h2>
                                </div>
                            </div>

                            {/* 2nd card */}
                            <div ref={containerRef2}
                                className="flex flex-col bg-white/95 w-[250px]  p-4 sm:w-[340px] h-[250px] sm:h-[470px] items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer z-20 border-primaryCyan/100 border-[1px]"
                                onMouseMove={(e) => handleMouseMove(e, containerRef2)}
                                onMouseLeave={() => handleMouseLeave(containerRef2)}>
                                
                                <div className='md:w-[92%] -mt-12'>
                                    <img src={image1} className="rounded-lg shadow-lg w-full h-[250px] object-cover" alt="Mission" />
                                </div>
                                <div className='md:w-[90%] mb-2 mt-8'>
                                    <h1 className="font-bold text-2xl text-black font-montserrat text-center border-b border-black/30 pb-1">Our Mission</h1>
                                </div>
                                <div className='md:w-[90%] mt-4'>
                                    <h2 className="text-lg text-black mt-1 font-century-gothic text-center">Join the Digital Revolution</h2>
                                </div>
                                
                            </div>

                            {/* 3rd card*/}
                            <div ref={containerRef3} className='flex flex-col bg-white/95 w-[250px] sm:w-[310px] -ml-32  h-[250px] sm:h-[430px] items-center justify-center rounded-2xl transition-transform duration-700 ease-in-out cursor-pointer border-primaryCyan/100 border-[1px] p-4'
                            onMouseMove={(e) => handleMouseMove(e, containerRef3)}
                            onMouseLeave={() => handleMouseLeave(containerRef3)}>

                                <div className='md:w-[92%] -mt-2'>
                                    <img src="https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg" className="rounded-lg shadow-lg w-full h-[250px] object-cover" alt="Mission" />
                                </div>
                                <div className='md:w-[90%] mb-2 mt-8'>
                                    <h1 className="font-bold text-2xl text-black font-montserrat text-center border-b border-black/30 pb-1">Our Values</h1>
                                </div>
                                <div className='md:w-[90%] mt-4'>
                                    <h2 className="text-lg text-black mt-1 font-century-gothic text-center">Join the Digital Revolution</h2>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;