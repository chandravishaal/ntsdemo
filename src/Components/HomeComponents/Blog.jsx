// import BlogPost from './BlogPost';
// import 'remixicon/fonts/remixicon.css';
// import blog1 from '../../assets/Images/blog_1.png';
// import blog2 from '../../assets/Images/blog_2.png';
// import blog3 from '../../assets/Images/blog_3.png';

// const BlogPost = ({ image, date, author, comments, content, isCenter }) => {
//   return (
// <div
//   className={`relative rounded-lg w-full p-5 pb-12 transition duration-300 lg:transform lg:hover:scale-105 hover:z-30 cursor-pointer border-2 border-primaryCyan group ${
//     isCenter ? 'bg-primaryCyan' : 'bg-white hover:bg-primaryCyan'
//   }`}
// >
//   <div className="relative">
//     <img
//       src={image}
//       alt="Blog"
//       className="w-full h-full object-cover rounded-t-lg select-none"
//     />
//     <div
//       className={`mt-4 absolute right-4 -bottom-3 transition duration-300 p-5 rounded-xl font-eras-bold ${
//         isCenter
//           ? 'bg-white text-black'
//           : 'bg-cyan-400 text-white group-hover:bg-white group-hover:text-black'
//       }`}
//     >
//       {date}
//     </div>
//   </div>

//   <div
//     className={`mt-10 flex justify-start items-end gap-4 text-lg transition duration-300 ${
//       isCenter ? 'text-white' : 'text-black group-hover:text-white'
//     }`}
//   >
//     <i
//       className={`ri-user-settings-fill text-2xl ${
//         isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
//       }`}
//     ></i>
//     <span>By - {author}</span>
//     <i
//       className={`ri-chat-search-line text-2xl ${
//         isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
//       }`}
//     ></i>
//     <span>{comments} comments</span>
//   </div>

//   <div
//     className={`mt-10 font-century-gothic transition duration-300 ${
//       isCenter ? 'text-white' : 'text-black group-hover:text-white'
//     }`}
//   >
//     <p>{content}</p>
//   </div>
// </div>

//   );
// };



// const Blog = () => {
//   return (
//     <section className='bg-[#F5F8FF]'>
//     <div
//       id="main"
//       className="w-full bg-[#F5F8FF]  container mx-auto mt-11 flex flex-col items-center py-20 pb-32 space-y-5"
//     >
//       {/* Headings */}
//       <div id="heading" className="flex flex-col items-center gap-4 mb-10 px-5 text-center">
//         <h1 className="text-black font-medium text-5xl font-century-gothic mb-2">
//           Our Latest Blog
//         </h1>
//         <h2 className="text-black text-2xl font-century-gothic font-normal">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </h2>
//       </div>
//       <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
//         <BlogPost
//           image={blog1}
//           date="JULY 29, 2020"
//           author="Admin"
//           comments="0"
//           content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
//           isCenter={false}
//         />
//         <BlogPost
//           image={blog2}
//           date="JULY 29, 2020"
//           author="Admin"
//           comments="0"
//           content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
//           isCenter={false}
//         />
//         <BlogPost
//           image={blog3}
//           date="JULY 29, 2020"
//           author="Admin"
//           comments="0"
//           content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
//           isCenter={false}
//         />
//       </div>
//     </div>
//     </section>
//   );
// };

// export default Blog;


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';
import blog1 from '../../assets/Images/blog_1.png';
import blog2 from '../../assets/Images/blog_2.png';
import blog3 from '../../assets/Images/blog_3.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const BlogPost = ({ image, date, author, comments, content, isCenter, redirectLink }) => {
  return (
    <a href={redirectLink}>
    <div to="https://www.google.com"
      className={`relative rounded-lg w-full h-[33rem] p-5 pb-12 transition duration-300 lg:transform lg:hover:scale-105 hover:z-30 cursor-pointer border-2 border-primaryCyan group ${
        isCenter ? 'bg-primaryCyan' : 'bg-white hover:bg-primaryCyan'
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt="Blog"
          className="w-[20rem] h-[15rem] object-cover rounded-t-lg select-none"
        />
        <div
          className={`mt-4 absolute right-4 -bottom-3 transition duration-300 p-5 rounded-xl font-eras-bold ${
            isCenter
              ? 'bg-white text-black'
              : 'bg-cyan-400 text-white group-hover:bg-white group-hover:text-black'
          }`}
        >
          {date}
        </div>
      </div>

      <div
        className={`mt-10 flex justify-start items-end gap-4 text-lg transition duration-300 ${
          isCenter ? 'text-white' : 'text-black group-hover:text-white'
        }`}
      >
        <i
          className={`ri-user-settings-fill text-2xl ${
            isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
          }`}
        ></i>
        <span>By - {author}</span>
        <i
          className={`ri-chat-search-line text-2xl ${
            isCenter ? 'text-white' : 'text-cyan-300 group-hover:text-white'
          }`}
        ></i>
        <span>{comments} comments</span>
      </div>

      <div
        className={`mt-10 font-century-gothic transition line-clamp-5 duration-300 ${
          isCenter ? 'text-white' : 'text-black group-hover:text-white'
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
    </a>
  );
};

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

  return (
    <section className="bg-[#F5F8FF]">
      <div
        id="main"
        className="w-full bg-[#F5F8FF] container mx-auto mt-11 flex flex-col items-center py-20 pb-32 space-y-5"
        ref={blogRef} // Set ref to the container
      >
        {/* Headings */}
        <div id="heading" className="flex flex-col items-center gap-4 mb-10 px-5 text-center">
          <h1 className="text-black font-medium text-5xl font-century-gothic mb-2">
            Our Latest Blog
          </h1>
          <h2 className="text-black text-2xl font-century-gothic font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
          <div className="blog-post">
            <BlogPost
              image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimhzr7_Pk0Hm6b-O1piRtbPF1UkTRMKDJ-LGqgleyyWsDKAn0zrkKuG1KikSMEMB7OpCL2MLBm0ZxQEYY88HbhEZ93OmRiS7uS4PJEcvn6o847kldri1RSd0VYieUkab9sWHixMR_BEoZDnqlwWBaW_D8_piPx7LWicM5a1fE31fWRnuYSYi0HoxaB-A/s1024/a-digital-illustration-of-a-cryptic-fortune-teller-GMetv56SQWW9MzoVbNQRMw-VEnPpY7VTgeJJ9EMgtkpag.jpeg"
              date="SEPT 18, 2024"
              author="Admin"
              comments="0"
              content="Explore the accuracy of major cryptocurrency predictions from 2017 to 2024, including Bitcoin's price forecasts, the rise of top crypto exchanges, and more."
              isCenter={false}
              redirectLink={"https://northstarmetrics.blogspot.com/2024/09/cryptocurrency-forecasts-reviewing.html"}
            />
          </div>
          <div className="blog-post">
            <BlogPost
              image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3l2G2bIYlg6KEUa5m6dI5K_qNcJ6dtEf7szbGr8yLjbW499JaBn3yiHya2n7hMJdjtbAvjrv8Nf7q-PDAffJqfKg1T2T28oFVBpndUV-KdqNukY235fZuBAyOTRIs1LwCSNuptFYwyyijUtdGsi8KnIztlrcJU_obNtyRWcw0_zicmLYczq_tFkVSrQ/s6000/2109.i607.016.S.m012.c12.fintech%20isometric%20flowchart.jpg"
              date="SEPT 14, 2024"
              author="Admin"
              comments="0"
              content="Learn how the crypto trading platform is transforming the financial business. Understand the influence of cryptocurrency exchanges on traditional finance."
              isCenter={false}
              redirectLink={"https://northstarmetrics.blogspot.com/2024/09/crypto-trading-platform-transforming.html"}
            />
          </div>
          <div className="blog-post">
            <BlogPost
              image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgutycWbtxBMxsXpphYNxaBE3spH7VcHRPaStdH6DaBR5btdVOyNZL8HCs0nbR6mIWkobQh7jjGfYMSiep7ZcBUQSf3S3DVx57yU64O60Chz6Mf9LsAEFh7LBHSyBVFjh4qi3mlXBvdsu0vQQRWrHyZBIr90l1IWyXoVSmn3Npmx-Vk8ea-TpaMJfROJA/w640-h640/a-stock-market-chart-with-a-sharp-upward-trend-the-c_GxoTgpTZSkx18tcd1GsQ-U10HKbWQTm-fSmcEKeo76Q.jpeg"
              date="SEPT 17, 2024"
              author="Admin"
              comments="0"
              content="Discover how the crypto trading platform drives Bitcoin adoption in India across various sectors like e-commerce, travel, real estate, and more."
              isCenter={false}
              redirectLink={"https://northstarmetrics.blogspot.com/2024/09/crypto-trading-platform-rise-of-bitcoin.html"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
