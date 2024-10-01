
import { useEffect, useRef } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const MemberCard = () => {
  return (
    <div className="relative bg-white p-1 h-[27rem] rounded-3xl overflow-hidden cursor-pointer group">
      <img
        src="https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
        alt="Profile photo of a team member in a professional setting"
        className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:blur-md"
      />

      <div className="w-full top-[13rem] items-center absolute flex justify-center gap-4 opacity-0 group-hover:opacity-100">
        <FaLinkedinIn className="text-black text-4xl cursor-pointer" />
        <FaInstagram className="text-black text-4xl cursor-pointer" />
        <FaXTwitter className="text-black text-4xl cursor-pointer" />
        <FaFacebookF className="text-black text-4xl cursor-pointer" />
      </div>

      <div className="w-full h-[6rem] top-[15rem] absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-white opacity-100 group-hover:opacity-0">
        <div className="text-center">
          <p className="text-lg mt-2 font-century-gothic">Iffat Nigar</p>
          <p className="text-lg mb-2 font-century-gothic text-primaryCyan">Web Developer</p>
         {/*} <div className="flex justify-center gap-4 mb-2">
            <FaLinkedinIn className="text-black text-xl cursor-pointer" />
            <FaInstagram className="text-black text-xl cursor-pointer" />
            <FaXTwitter className="text-black text-xl cursor-pointer" />
            <FaFacebookF className="text-black text-xl cursor-pointer" />
          </div>*/}
        </div>
      </div>
    </div>
  );
};


const TeamMemberCard = () => {
  const swiperRef = useRef(null); // Ref for the Swiper instance

  useEffect(() => {
    const slides = swiperRef.current?.querySelectorAll('.swiper-slide');

    if (slides) {
      gsap.fromTo(
        slides,
        {
          opacity: 0,
          y: 100,
          x: (i) => (i % 3 === 0 ? -100 : i % 3 === 2 ? 100 : 0),
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: swiperRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const handleMouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop(); // Stop autoplay on mouse enter
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start(); // Start autoplay on mouse leave
  };

  return (
    <section className="pb-32 pt-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32">
          <h2 className="text-4xl font-bold mt-8 font-montserrat">Our executive team</h2>
          <p className="text-black text-lg mt-4 font-semibold font-century-gothic">
            Innovative Leaders Driving Crypto Excellence.
          </p>
        </div>

        <Swiper
          ref={swiperRef} // Set ref to Swiper
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
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <MemberCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMemberCard;



