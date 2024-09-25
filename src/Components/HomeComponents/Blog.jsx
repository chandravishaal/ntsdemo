// // import BlogPost from './BlogPost';
// // import 'remixicon/fonts/remixicon.css';
// // import blog1 from '../../assets/Images/blog_1.png';
// // import blog2 from '../../assets/Images/blog_2.png';
// // import blog3 from '../../assets/Images/blog_3.png';

// // const BlogPost = ({ image, date, author, comments, content, isCenter }) => {
// //   return (
// // <div
// //   className={`relative rounded-lg w-full p-5 pb-12 transition duration-300 lg:transform lg:hover:scale-105 hover:z-30 cursor-pointer border-2 border-primaryCyan group ${
// //     isCenter ? 'bg-primaryCyan' : 'bg-white hover:bg-primaryCyan'
// //   }`}
// // >
// //   <div className="relative">
// //     <img
// //       src={image}
// //       alt="Blog"
// //       className="w-full h-full object-cover rounded-t-lg select-none"
// //     />
// //     <div
// //       className={`mt-4 absolute right-4 -bottom-3 transition duration-300 p-5 rounded-xl font-eras-bold ${
// //         isCenter
// //           ? 'bg-white text-black'
// //           : 'bg-cyan-400 text-white group-hover:bg-white group-hover:text-black'
// //       }`}
// //     >
// //       {date}
// //     </div>
// //   </div>

// //   <div
// //     className={`mt-10 flex justify-start items-end gap-4 text-lg transition duration-300 ${
// //       isCenter ? 'text-white' : 'text-black group-hover:text-white'
// //     }`}
// //   >
// //     <i
// //       className={`ri-user-settings-fill text-2xl ${
// //         isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
// //       }`}
// //     ></i>
// //     <span>By - {author}</span>
// //     <i
// //       className={`ri-chat-search-line text-2xl ${
// //         isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
// //       }`}
// //     ></i>
// //     <span>{comments} comments</span>
// //   </div>

// //   <div
// //     className={`mt-10 font-century-gothic transition duration-300 ${
// //       isCenter ? 'text-white' : 'text-black group-hover:text-white'
// //     }`}
// //   >
// //     <p>{content}</p>
// //   </div>
// // </div>

// //   );
// // };

// // const Blog = () => {
// //   return (
// //     <section className='bg-[#F5F8FF]'>
// //     <div
// //       id="main"
// //       className="w-full bg-[#F5F8FF]  container mx-auto mt-11 flex flex-col items-center py-20 pb-32 space-y-5"
// //     >
// //       {/* Headings */}
// //       <div id="heading" className="flex flex-col items-center gap-4 mb-10 px-5 text-center">
// //         <h1 className="text-black font-medium text-5xl font-century-gothic mb-2">
// //           Our Latest Blog
// //         </h1>
// //         <h2 className="text-black text-2xl font-century-gothic font-normal">
// //           Lorem Ipsum is simply dummy text of the printing and typesetting
// //           industry.
// //         </h2>
// //       </div>
// //       <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
// //         <BlogPost
// //           image={blog1}
// //           date="JULY 29, 2020"
// //           author="Admin"
// //           comments="0"
// //           content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
// //           isCenter={false}
// //         />
// //         <BlogPost
// //           image={blog2}
// //           date="JULY 29, 2020"
// //           author="Admin"
// //           comments="0"
// //           content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
// //           isCenter={false}
// //         />
// //         <BlogPost
// //           image={blog3}
// //           date="JULY 29, 2020"
// //           author="Admin"
// //           comments="0"
// //           content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
// //           isCenter={false}
// //         />
// //       </div>
// //     </div>
// //     </section>
// //   );
// // };

// // export default Blog;

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'remixicon/fonts/remixicon.css';
// import blog1 from '../../assets/Images/blog_1.png';
// import blog2 from '../../assets/Images/blog_2.png';
// import blog3 from '../../assets/Images/blog_3.png';
// import { Link } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const BlogPost = ({ title, image, date, author, comments, content, isCenter, redirectLink }) => {
//   return (
//     <a href={redirectLink}>
//     <div to="https://www.google.com"
//       className={`relative rounded-lg w-full h-[37rem] p-5 pb-12 transition duration-300 lg:transform lg:hover:scale-105 hover:z-30 cursor-pointer border-2 border-primaryCyan group ${
//         isCenter ? 'bg-primaryCyan' : 'bg-white hover:bg-primaryCyan'
//       }`}
//     >
//       <div className="relative">
//         <img
//           src={image}
//           alt="Blog"
//           className="w-[20rem] h-[15rem] object-cover rounded-t-lg select-none"
//         />
//         <div
//           className={`mt-4 absolute right-4 -bottom-3 transition duration-300 p-5 rounded-xl font-eras-bold ${
//             isCenter
//               ? 'bg-white text-black'
//               : 'bg-cyan-400 text-white group-hover:bg-white group-hover:text-black'
//           }`}
//         >
//           {date}
//         </div>
//       </div>

//       <div
//         className={`mt-10 flex justify-start items-end gap-4 mb-10 text-lg transition duration-300 ${
//           isCenter ? 'text-white' : 'text-black group-hover:text-white'
//         }`}
//       >
//         <i
//           className={`ri-user-settings-fill text-2xl ${
//             isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
//           }`}
//         ></i>
//         <span>By - {author}</span>
//         <i
//           className={`ri-chat-search-line text-2xl ${
//             isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
//           }`}
//         ></i>
//         <span>{comments} comments</span>
//       </div>

//       <div>
//         <h1 className={`font-bold text-lg line-clamp-2 ${
//           isCenter ? 'text-white' : 'text-black group-hover:text-white'
//         }`}>{title}</h1>
//       </div>

//       <div
//         className={`mt-2 font-century-gothic transition line-clamp-5 duration-300 ${
//           isCenter ? 'text-white' : 'text-black group-hover:text-white'
//         }`}
//       >
//         <p>{content}</p>
//       </div>
//     </div>
//     </a>
//   );
// };

// const Blog = () => {
//   const blogRef = useRef(null); // Ref for the blog container

//   useEffect(() => {
//     const blogPosts = blogRef.current?.querySelectorAll('.blog-post');

//     if (blogPosts) {
//       gsap.fromTo(
//         blogPosts,
//         {
//           opacity: 0,
//           y: 100, // Start from below
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.5,
//           delay:0.3,
//           stagger: 0.4,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: blogRef.current, // Trigger when the blog section is in view
//             start: 'top 60%',
//             toggleActions: 'play none none reset',
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section className="bg-[#F5F8FF]">
//       <div
//         id="main"
//         className="w-full bg-[#F5F8FF] container mx-auto mt-11 flex flex-col items-center py-20 pb-32 space-y-5"
//         ref={blogRef} // Set ref to the container
//       >
//         {/* Headings */}
//         <div id="heading" className="flex flex-col items-center gap-4 mb-10 px-5 text-center">
//           <h1 className="text-black font-medium text-5xl font-century-gothic mb-2">
//             Our Latest Blog
//           </h1>
//           <h2 className="text-black text-2xl font-century-gothic font-normal">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </h2>
//         </div>

//         {/* Blog Posts */}
//         <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
//           <div className="blog-post">
//             <BlogPost
//               image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimhzr7_Pk0Hm6b-O1piRtbPF1UkTRMKDJ-LGqgleyyWsDKAn0zrkKuG1KikSMEMB7OpCL2MLBm0ZxQEYY88HbhEZ93OmRiS7uS4PJEcvn6o847kldri1RSd0VYieUkab9sWHixMR_BEoZDnqlwWBaW_D8_piPx7LWicM5a1fE31fWRnuYSYi0HoxaB-A/s1024/a-digital-illustration-of-a-cryptic-fortune-teller-GMetv56SQWW9MzoVbNQRMw-VEnPpY7VTgeJJ9EMgtkpag.jpeg"
//               date="SEPT 18, 2024"
//               author="Admin"
//               comments="0"
//               content="Explore the accuracy of major cryptocurrency predictions from 2017 to 2024, including Bitcoin's price forecasts, the rise of top crypto exchanges, and more."
//               isCenter={false}
//               title=" Cryptocurrency Forecasts: Reviewing Plans from 2017 - 2024"
//               redirectLink={"https://northstarmetrics.blogspot.com/2024/09/cryptocurrency-forecasts-reviewing.html"}
//             />
//           </div>
//           <div className="blog-post">
//             <BlogPost
//               image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3l2G2bIYlg6KEUa5m6dI5K_qNcJ6dtEf7szbGr8yLjbW499JaBn3yiHya2n7hMJdjtbAvjrv8Nf7q-PDAffJqfKg1T2T28oFVBpndUV-KdqNukY235fZuBAyOTRIs1LwCSNuptFYwyyijUtdGsi8KnIztlrcJU_obNtyRWcw0_zicmLYczq_tFkVSrQ/s6000/2109.i607.016.S.m012.c12.fintech%20isometric%20flowchart.jpg"
//               date="SEPT 14, 2024"
//               author="Admin"
//               comments="0"
//               content="Learn how the crypto trading platform is transforming the financial business. Understand the influence of cryptocurrency exchanges on traditional finance."
//               isCenter={false}
//               title = " Crypto Trading Platform: Transforming the Banking Industry"
//               redirectLink={"https://northstarmetrics.blogspot.com/2024/09/crypto-trading-platform-transforming.html"}
//             />
//           </div>
//           <div className="blog-post">
//             <BlogPost
//               image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgutycWbtxBMxsXpphYNxaBE3spH7VcHRPaStdH6DaBR5btdVOyNZL8HCs0nbR6mIWkobQh7jjGfYMSiep7ZcBUQSf3S3DVx57yU64O60Chz6Mf9LsAEFh7LBHSyBVFjh4qi3mlXBvdsu0vQQRWrHyZBIr90l1IWyXoVSmn3Npmx-Vk8ea-TpaMJfROJA/w640-h640/a-stock-market-chart-with-a-sharp-upward-trend-the-c_GxoTgpTZSkx18tcd1GsQ-U10HKbWQTm-fSmcEKeo76Q.jpeg"
//               date="SEPT 17, 2024"
//               author="Admin"
//               comments="0"
//               content="Discover how the crypto trading platform drives Bitcoin adoption in India across various sectors like e-commerce, travel, real estate, and more."
//               isCenter={false}
//               title = "Crypto Trading Platform: Rise of Bitcoin in Indian Market"
//               redirectLink={"https://northstarmetrics.blogspot.com/2024/09/crypto-trading-platform-rise-of-bitcoin.html"}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import { useEffect, useRef } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {

  const blogRef = useRef(null); // Ref for the blog container

  useEffect(() => {
    const blogPosts = blogRef.current?.querySelectorAll('.blog-post');

    if (blogPosts) {
      gsap.fromTo(
        blogPosts,
        {
          opacity: 0,
          y: 100, // Start from below
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay:0.3,
          stagger: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: blogRef.current, // Trigger when the blog section is in view
            start: 'top 60%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }
  }, []);


  const EachBlog = () => {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-2 outline outline-[0.2px] outline-gray-300 shadow-md">
        <h1 className="text-lg font-semibold px-1 font-century-gothic">
          Data Analytics: Key to Decision and Business Growth
        </h1>
        <div className="flex items-center px-1 gap-3">
          <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm outline whitespace-nowrap outline-[0.2px] outline-gray-300">
            <span className="text-primaryCyan">
              <CiCalendarDate size={15} />
            </span>
            <h1>24 Sept 2024</h1>
          </div>
          <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm outline outline-[0.2px] outline-gray-300">
            <span className="text-primaryCyan">
              <FaHeart />
            </span>
            <h1>10k</h1>
          </div>
        </div>
        <h1 className="line-clamp-2 text-sm px-1 font-montserrat">
          Data is the new currency of the digital age. data insight holds the
          key to unlocking new era of business growth and success.
        </h1>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover h-[300px] rounded-xl z-40"
            alt=""
          />
          <div className="bg-white pr-2 pb-2 pt-1 absolute z-50 top-0 left-0 rounded-br-xl">
            <div className="bg-white group hover:bg-[#F3F4F6] transition-all duration-300 p-3 outline outline-[2px] rounded-xl outline-gray-400">
              <Link to="/" className="flex items-center">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2 text-primaryCyan">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={blogRef} className="container mx-auto py-20 px-5 lg:px-0">
      <div
        id="heading"
        className="flex flex-col items-center gap-4 mb-20 px-5 text-center"
      >
        <h1 className="text-black font-semibold text-4xl font-century-gothic mb-2">
          Our Latest Blog
        </h1>
        <h2 className="text-black text-2xl font-century-gothic font-normal">
        Our blog provides the latest crypto news, tips, and strategies, ranging from beginner tips to advanced strategies.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className='blog-post'>
          <EachBlog />
        </div>
        <div className='blog-post'>
          <EachBlog />
        </div>
        <div className='blog-post'>
          <EachBlog />
        </div>
      </div>
    </div>
  );
};

export default Blog;
