import React from 'react'

const ComingSoon = () => {
  return (
    <section className='lg:h-screen flex items-center justify-center'>
        <div>
            <h1 className='text-5xl lg:text-7xl font-montserrat font-bold text-center mt-72 md:mt-96 lg:mt-0 animate-gradient'>Coming <br /> Soon</h1>
        </div>
    </section>


  )
}

export default ComingSoon


// import React, { useRef } from 'react';

// import React, { useRef } from 'react';
// import React, { useRef } from 'react';

// const CircularBoxes = () => {
//   const containerRef = useRef();
//   const circlesRef = useRef([]);

//   const handleMouseMove = (e) => {
//       const container = containerRef.current;
//       const rect = container.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;

//       // Gentle movement within a smaller region for the container
//       const maxOffset = 10; // Limit the movement to 10 pixels
//       container.style.transform = `translate(${Math.min(Math.max(offsetX - container.clientWidth / 2, -maxOffset), maxOffset)}px, ${Math.min(Math.max(offsetY - container.clientHeight / 2, -maxOffset), maxOffset)}px)`;
      
//       // Move circles based on cursor position
//       circlesRef.current.forEach((circle) => {
//           const circleRect = circle.getBoundingClientRect();
//           const circleOffsetX = e.clientX - circleRect.left;
//           const circleOffsetY = e.clientY - circleRect.top;
//           circle.style.transform = `translate(${Math.min(Math.max(circleOffsetX - circle.clientWidth / 2, -maxOffset), maxOffset)}px, ${Math.min(Math.max(circleOffsetY - circle.clientHeight / 2, -maxOffset), maxOffset)}px)`;
//       });
//   };

//   const handleMouseLeave = () => {
//       const container = containerRef.current;
//       container.style.transform = ''; // tReset position

//       // Reset circles' positions
//       circlesRef.current.forEach((circle) => {
//           circle.style.transform = ''; // to Reset position
//       });
//   };

//   return (
//       <div className="flex flex-col items-center justify-center h-screen">
//           <div
//               ref={containerRef}
//               className="grid grid-cols-2 gap-4 w-72 h-72 bg-red-500 p-4 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//           >
//               {[...Array(4)].map((_, index) => (
//                   <div
//                       key={index}
//                       ref={(el) => (circlesRef.current[index] = el)}
//                       className="bg-black rounded-full w-16 h-16 transition-transform duration-300 ease-in-out"
//                   />
//               ))}
//           </div>
//       </div>
//   );
// };

// export default CircularBoxes;
