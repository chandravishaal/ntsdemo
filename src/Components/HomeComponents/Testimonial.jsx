import React from "react";
import Marquee from "react-fast-marquee";

const EachTestimonial = () => {
  return (
    <div className="w-[350px] rounded-2xl bg-[#F3F4F6] p-8 mx-5 outline outline-gray-300 outline-[0.2px] my-2">
      <img
        src="https://www.svgrepo.com/show/96336/inverted-commas.svg"
        className="w-7 rotate-180 mb-3"
        alt=""
      />
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
  return (
    <div className="h-screen flex flex-col items-center justify-center container mx-auto space-y-7">

      <div className="flex items-center gap-3 p-2 px-2 bg-black rounded-3xl">
        <div className="star p-2 bg-primaryCyan rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl25vi2BQ2AbyT-HATPqHIEBE0Yf3h5SD4uw&s" className="w-3" alt="" />
        </div>
        <h1 className="text-white px-4 font-century-gothic">Rated 4/5 by over 1lakh users</h1>
      </div>

      <h1 className="text-4xl text-center font-bold font-century-gothic">Words of praise from < br/> others about our presence.</h1>

      {/* First Marquee */}
      <Marquee gradient={true} gradientColor="white" loop={0} speed={60} pauseOnHover="true">
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
      </Marquee>

      {/* Second Marquee */}
      <Marquee gradient={true} gradientColor="white" loop={0} speed={60} pauseOnHover="true" direction="right">
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
        <EachTestimonial />
      </Marquee>
    </div>
  );
};

export default Testimonial;
