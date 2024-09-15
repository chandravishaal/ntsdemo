import mobile1 from "../../assets/Images/ServicesImages/hero_mobile.png";
import mobile2 from "../../assets/Images/ServicesImages/hero_bg2.png";
import PrimaryButton from "../../Common/PrimaryButton";

// const ServicesHeroSection = () => {
//   return (
//     <section className="services-hero-bg mt-10 w-full flex items-center justify-center bg-cover bg-center">
//       <div
//         id="main"
//         className="container relative bg-cover bg-center bg-no-repeat h-[40rem] flex flex-col-reverse lg:flex-row items-center justify-center p-2"
//       >
//         <div
//           id="left"
//           className=" w-full md:w-1/2 h-full space-y-6 md:space-y-10 text-center md:text-left flex flex-col lg:mt-52"
//         >
//           <div id="heading">
//             <h2 className="text-2xl md:text-4xl font-century-gothic font-bold text-gray-800">
//               The Best Exchange to Buy,
//               <br />
//               <span className="text-cyan-400">Sell and Trade Crypto</span>
//             </h2>
//           </div>

//           <div id="heding2">
//             <p className="text-gray-950 text-lg px-5 md:px-0 md:text-xl font-antipasto-pro">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               <br className="hidden md:block" />
//               eiusmod tempor incididunt ut la.
//             </p>
//           </div>

//           <div id="button">
//             <PrimaryButton title="Get Started" />
//           </div>
//         </div>

//         <div
//           id="right"
//           className="w-full md:w-1/2 h-full flex justify-center md:justify-end mt-0  md:mt-0"
//         >
//           <div id="image" className="relative">
//             <div
//               id="img1"
//               className="w-40 md:w-96 -mb-7 md:-mb-12 mx-auto md:mx-0"
//             >
//               <img src={mobile1} alt="" className="relative md:left-72" />
//             </div>
//             <div
//               id="img2"
//               className="w-72 md:w-[50rem] pr-0 md:pr-16 mx-auto md:mx-0"
//             >
//               <img src={mobile2} alt="" className=" md:pl-10 md:ml-10" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesHeroSection;


const ServicesHeroSection  = () => {
  return (
    <section className="services-hero-bg py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto">
        <div className="flex-1 flex flex-col lg:items-start items-center px-10">
          <h1 className="text-5xl font-bold text-center lg:text-start leading-tight"><span className="">Best Exchange to Buy,</span> <br /> <span className="text-primaryCyan">Sell and Trade Crypto</span></h1>
          <p className="text-xl text-gray-600 text-center lg:text-start mt-4 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.</p>
          <PrimaryButton title="Get Started" />
        </div>
        <div className="flex w-[50rem] flex-1 flex-col relative mb-10">
          <img src={mobile1} className="lg:w-[25rem] md:w-[20rem] w-[15rem] translate-y-10 md:translate-y-14 lg:translate-x-12 mx-auto" alt="" />
          <img src={mobile2} className="lg:w-[50rem] md:w-[30rem] w-[25rem] mx-auto" alt="" />
        </div>

      </div>
    </section>
  )
}

export default ServicesHeroSection 