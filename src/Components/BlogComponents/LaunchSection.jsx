// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import '../../index.css';
// import rocket from '../../assets/Images/Blog/lst_sec_banner.png';
// import profile from '../../assets/Images/Blog/userIcon.png';
// import comments from '../../assets/Images/Blog/commentsIcon.png';

// const LaunchSection = () => {
//   useEffect(() => {
//     // GSAP animation
//     const tl = gsap.timeline({ defaults: { duration: 4, ease: "power1.out" } });
    
//     tl.from(".launch-header", { y: 50, opacity: 0 })
//       .from(".launch-image", { y: 50, opacity: 0 }, "<")
//       .from(".launch-meta", { y: 50, opacity: 0, stagger: 0.2 }, "<")
//       .from(".launch-description", { y: 50, opacity: 0 }, "<");
//   }, []);

//   return (
//     <div className="w-full py-[4%] bg-white px-8 lg:px-8">
//       <div className="container mx-auto jost-uniquifier">
//         <h1 className="launch-header text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-10 sm:mb-12 lg:mb-16 font-montserrat">
//           Lorem Ipsum is simply dummy
//         </h1>

//         {/* Image Section */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={rocket}
//             className="launch-image w-full h-auto rounded-xl"
//             alt="Rocket"
//           />
//         </div>

//         {/* By Admin and Comments Section */}
//         <div className="flex items-center launch-meta text-cyan-600 text-base sm:text-lg mb-[14%] ">
//           <span className="flex items-center mr-[10%] mb-[-1%] font-century-gothic">
//             <img src={profile} className="w-[22%] h-[22%] lg:w-[25%] lg:h-[25%] mr-[4%] " />
//             By - Admin
//           </span>
//           <span className="flex items-center lg:ml-[-6%] mb-[-1%] ml-[-10%] font-century-gothic">
//             <img src={comments} className="w-[22%] h-[22%] lg:w-[25%] lg:h-[25%] mr-[3%] " />
//             0 comments
//           </span>
//           <h4 className="ml-auto text-black mb-[-1%] font-century-gothic">6 minute read</h4>
//         </div>

//         {/* Description Section */}
//         <div className="launch-description mt-6 lg:mt-[-10%]">
//           <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-12 max-w-full lg:max-w-[900px] font-century-gothic">
//             Lorem Ipsum is simply dummy printing and typesetting industry.
//           </h2>
//           <p className="text-gray-700 text-base sm:text-lg text-justify font-century-gothic">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//             <br /><br />
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaunchSection;





// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import '../../index.css';
// import rocket from '../../assets/Images/Blog/lst_sec_banner.png';
// import profile from '../../assets/Images/Blog/userIcon.png';
// import comments from '../../assets/Images/Blog/commentsIcon.png';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const LaunchSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
    
//     // GSAP animation timeline
//     const tl = gsap.timeline({
//       defaults: { duration: 1, ease: "power1.out" },
//       scrollTrigger: {
//         trigger: section,
//         start: 'top 80%', 
//         toggleActions: 'play none none reset', 
//       }
//     });

//     // Animate header
//     tl.from(".launch-header", { y: 50, opacity: 0 })
//       .from(".launch-image", { scale: 0, opacity: 0 }, "<")
//       .from(".launch-meta", { y: 50, opacity: 0, stagger: 0.2 }, "<")
//       .from(".launch-description h2", { y: 50, opacity: 0, stagger: 0.5 , delay:0.5}, "<")
//       .from(".launch-description p", { y: 50, opacity: 0, stagger: 0.5 }, "<");
    
//     // Clean up the ScrollTrigger instance when the component unmounts
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="w-full py-[4%] bg-white px-8 lg:px-8">
//       <div className="container mx-auto jost-uniquifier">
//         <h1 className="launch-header text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-10 sm:mb-12 lg:mb-16 font-montserrat">
//           Lorem Ipsum is simply dummy
//         </h1>

//         {/* Image Section */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={rocket}
//             className="launch-image w-full h-auto rounded-xl"
//             alt="Rocket"
//           />
//         </div>

//         {/* By Admin and Comments Section */}
//         <div className="flex items-center launch-meta text-cyan-600 text-base sm:text-lg mb-[14%]">
//           <span className="flex items-center mr-[10%] mb-[-1%] font-century-gothic">
//             <img src={profile} className="w-[22%] h-[22%] lg:w-[25%] lg:h-[25%] mr-[4%]" />
//             By - Admin
//           </span>
//           <span className="flex items-center lg:ml-[-6%] mb-[-1%] ml-[-10%] font-century-gothic">
//             <img src={comments} className="w-[22%] h-[22%] lg:w-[25%] lg:h-[25%] mr-[3%]" />
//             0 comments
//           </span>
//           <h4 className="ml-auto text-black mb-[-1%] font-century-gothic">6 minute read</h4>
//         </div>

//         {/* Description Section */}
//         <div className="launch-description mt-6 lg:mt-[-10%]">
//           <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-12 max-w-full lg:max-w-[900px] font-century-gothic">
//             Lorem Ipsum is simply dummy printing and typesetting industry.
//           </h2>
//           <p className="text-gray-700 text-base sm:text-lg text-justify font-century-gothic">
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//           <p className="text-gray-700 text-base sm:text-lg text-justify font-century-gothic mt-6">
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaunchSection;





import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../../index.css';
import rocket from '../../assets/Images/Blog/lst_sec_banner.png';
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LaunchSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    // GSAP animation timeline for the entire section
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power1.out" },
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // Start when top of section reaches 80% of viewport
        toggleActions: 'play none none reset', // Play animation only when it enters
      }
    });

    // Image scales from 0 to original size
    tl.from(".launch-header", { y: 50, opacity: 0 })
      .from(".launch-image", { scale: 0, opacity: 0 }, "<")
      .from(".launch-meta", { y: 50, opacity: 0, stagger: 0.2 }, "<");
    
    // Individual ScrollTrigger for h2 and paragraphs
    gsap.from(".launch-description h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".launch-description h2",
        start: 'top 10%', // Start when h2 reaches 90% of viewport
        toggleActions: 'play none none reset',
      }
    });

    // Animate each paragraph with a stagger
    gsap.from(".launch-description p", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".launch-description p",
        start: 'top 10%', // Start when paragraphs reach 90% of viewport
        toggleActions: 'play none none reset',
      }
    });

    // Clean up the ScrollTrigger instances when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-[4%] bg-white px-8 lg:px-8">
      <div className="container mx-auto jost-uniquifier">
        <h1 className="launch-header text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-10 sm:mb-12 lg:mb-16 font-montserrat">
          Lorem Ipsum is simply dummy
        </h1>

        {/* Image Section */}
        <div className="flex justify-center mb-6">
          <img
            src={rocket}
            className="launch-image w-full h-auto rounded-xl"
            alt="Rocket"
          />
        </div>

        {/* By Admin and Comments Section */}
        <div className="flex items-center launch-meta text-cyan-600 text-base sm:text-lg mb-[14%]">
          <span className="flex items-center mr-[10%] mb-[-1%] font-century-gothic">
            <img src={profile} className="w-[22%] h-[22%] lg:w-[25%] lg:h-[25%] mr-[4%]" />
            By - Admin
          </span>
          <span className="flex items-center lg:ml-[-6%] mb-[-1%] ml-[-10%] font-century-gothic">
            <img src={comments} className="w-[22%] h-[22%] lg:w-[25%] lg:h-[25%] mr-[3%]" />
            0 comments
          </span>
          <h4 className="ml-auto text-black mb-[-1%] font-century-gothic">6 minute read</h4>
        </div>

        {/* Description Section */}
        <div className="launch-description mt-6 lg:mt-[-10%]">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-12 max-w-full lg:max-w-[900px] font-century-gothic">
            Lorem Ipsum is simply dummy printing and typesetting industry.
          </h2>
          <p className="text-gray-700 text-base sm:text-lg text-justify font-century-gothic mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-gray-700 text-base sm:text-lg text-justify font-century-gothic">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchSection;
