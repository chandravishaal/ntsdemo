import Marquee from "react-fast-marquee";
import { SiComma } from "react-icons/si";
import star from '../../assets/Images/HomeImages/star.png';
import { useEffect, useState } from "react";

const EachTestimonial = ({ isMobile }) => {
  return (
    <div
      className={`flex flex-col items-start rounded-2xl bg-[#F3F4F6] p-8 mx-5 outline shadow-md outline-gray-300 outline-[0.2px] my-2 ${isMobile ? 'w-[calc(100vw-60px)]' : 'w-[350px]'}`}
    >
      <div className="flex items-start rotate-180 mb-3">
        <h1 className="text-primaryCyan text-xl"><SiComma /></h1>
        <h1 className="text-primaryCyan text-xl"><SiComma /></h1>
      </div>
      <h1 className="mb-5 font-semibold text-sm font-century-gothic">
        Creative geniuses who listen, understand and craft captivating visuals -
        an agency which understands people&apos;s needs
      </h1>
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-8 h-8 object-cover rounded-full"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-xs font-bold font-antipasto-pro">Samantha Johanson</h1>
          <h1 className="text-[11px] text-gray-400 font-antipasto-pro">CEO of ABC Company</h1>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size and toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500); // Check if the width is less than 500px (mobile size)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="flex bh-white flex-col py-20 items-center justify-center container mx-auto space-y-7 px-5">
        <div className="flex items-center gap-3 p-2 px-2 bg-black rounded-3xl">
          <div className="star p-2 bg-primaryCyan rounded-full">
            <img src={star} className="w-3" alt="" />
          </div>
          <h1 className="text-white text-xs lg:text-sm px-4 font-century-gothic">
            Rated 4/5 by over 1 lakh users
          </h1>
        </div>

        <h1 className="lg:text-4xl text-3xl text-center font-bold font-century-gothic">
          Words of praise from <br /> others about our presence.
        </h1>

        {/* First Marquee */}
        <Marquee
          gradient={!isMobile} // No gradient for mobile, true for larger screens
          gradientColor="white"
          loop={0}
          speed={60}
          pauseOnHover={true}
        >
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
        </Marquee>

        {/* Second Marquee */}
        <Marquee
          gradient={!isMobile} // No gradient for mobile, true for larger screens
          gradientColor="white"
          loop={0}
          speed={60}
          pauseOnHover={true}
          direction="right"
        >
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
          <EachTestimonial isMobile={isMobile} />
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
