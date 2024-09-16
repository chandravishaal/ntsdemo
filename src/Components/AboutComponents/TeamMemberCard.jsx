/*import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Pagination, Autoplay } from 'swiper/modules';

const MemberCard = () => {
  return (
    <div className="bg-white p-1 h-[27rem] rounded-3xl relative select-none cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1562159278-1253a58da141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-[300px] object-cover rounded-br-[14rem] rounded-t-3xl mb-1"
      />
      <div className="absolute bg-primaryCyan h-32 w-12 right-7 top-1 flex flex-col text-white p-2 items-center gap-4">
        <FaLinkedinIn className="-rotate-90 cursor-pointer text-xl" />
        <FaInstagram className="-rotate-90 cursor-pointer text-xl" />
        <FaXTwitter className="-rotate-90 cursor-pointer text-xl" />
        <FaFacebookF className="-rotate-90 cursor-pointer text-xl" />
      </div>
      <div className="p-3">
        <h1 className="text-3xl font-semibold mb-2">John Doe</h1>
        <p className="text-lg mb-3">Web Developer</p>
        <div className="bg-primaryCyan w-10 h-1"></div>
      </div>
    </div>
  );
};

const TeamMemberCard = () => {
  return (
    <section className="pb-32 pt-20 teamMembers-background">
      <div className="container mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl font-bold mt-8">Our executive team</h2>
          <p className="text-black text-lg mt-4 font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s <br /> standard dummy
            text ever since the 1500s,
          </p>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]} // Include Autoplay module
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000, // Delay between slides in milliseconds (3 seconds)
            disableOnInteraction: false, // Allow user interaction without stopping autoplay
          }}
          
        >
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMemberCard;*/


import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Pagination, Autoplay } from 'swiper/modules';


const MemberCard = () => {
  return (
    <div className="bg-white p-1 h-[27rem] rounded-3xl relative select-none cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1562159278-1253a58da141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-[300px] object-cover rounded-br-[14rem] rounded-t-3xl mb-1"
      />
      <div className="absolute bg-primaryCyan h-32 w-12 right-7 top-1 flex flex-col text-white p-2 items-center gap-4">
        <FaLinkedinIn className="-rotate-90 cursor-pointer text-xl" />
        <FaInstagram className="-rotate-90 cursor-pointer text-xl" />
        <FaXTwitter className="-rotate-90 cursor-pointer text-xl" />
        <FaFacebookF className="-rotate-90 cursor-pointer text-xl" />
      </div>
      <div className="p-3">
        <h1 className="text-3xl font-semibold mb-2">John Doe</h1>
        <p className="text-lg mb-3">Web Developer</p>
        <div className="bg-primaryCyan w-10 h-1"></div>
      </div>
    </div>
  );
};

const TeamMemberCard = () => {
  return (
    <section className="pb-32 pt-20  bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32">
          <h2 className="text-4xl font-bold mt-8">Our executive team</h2>
          <p className="text-black text-lg mt-4 font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s <br /> standard dummy
            text ever since the 1500s.
          </p>
        </div>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { // Mobile screens
              slidesPerView: 1,
            },
            768: { // Tablets
              slidesPerView: 2,
            },
            1024: { // Larger screens
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
          <SwiperSlide><MemberCard /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMemberCard;

