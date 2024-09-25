/*import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../index.css';
import blogMainImg from '../../assets/Images/Blog/blogMain.png'; 
import blogImg1 from '../../assets/Images/Blog/blogImg1.png'; 
import blogImg2 from '../../assets/Images/Blog/blogImg2.png';
import blogImg3 from '../../assets/Images/Blog/blogImg3.png'; 
import profilePic from '../../assets/Images/Blog/profilePic.png'; 
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogListSection = () => {
  const swiperRef = useRef(null); // Reference for the swiper section
  const slides = useRef([]); // Reference for slides

  useEffect(() => {
    if (slides.current) {
      gsap.fromTo(
        slides.current,
        {
          opacity: 0,
          y: 100, // Start position for middle slide
          x: (i) => (i % 3 === 0 ? -100 : i % 3 === 2 ? 100 : 0), // Adjust direction (left, middle, right)
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 4,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: swiperRef.current, // Animation starts when Swiper is in view
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-cyan-50 jost-uniquifier py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl font-semibold text-left mb-10 sm:mb-14 font-montserrat">
          Our Latest Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between" ref={swiperRef}>
          {/* Main Blog Left Section 
          <div className="w-full lg:w-[600px] lg:pr-8 mb-10 lg:mb-0" ref={(el) => (slides.current[0] = el)}>
            <img 
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*L7tpgNK6Rg_09CBXJIp3sQ.jpeg"
              alt="Main Blog" 
              className="w-full h-auto rounded-lg mb-[-2%]"
            />
            <div className="flex items-center text-cyan-600 px-2 text-base sm:text-lg mb-[16%] ">
              <span className="flex items-center mr-[10%] mb-[-16%] ">
                <img src={profile} className="w-[20%] h-[20%] lg:w-[25%] lg:h-[25%] mr-[4%] font-century-gothic" />
                <h1 className="whitespace-nowrap text-xs md:text-sm">
                  By - Admin
                </h1>
              </span>
              <span className="flex items-center lg:ml-[-6%] mb-[-16%] ml-[-10%] font-century-gothic">
                <img src={comments} className="w-[20%] h-[20%] lg:w-[25%] lg:h-[25%] mr-[3%]" />
                <h1 className="whitespace-nowrap text-xs md:text-sm">
                  0 comments
                </h1>
              </span>
              <h4 className="ml-auto text-black mb-[-16%] font-century-gothic">6 minute read</h4>
            </div>

            <div className="flex items-center mt-[5%] mb-[4%]">
              <img 
                src={profilePic} 
                alt="Amit Chakraborty" 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-bold text-lg font-montserrat">Amit Chakraborty</h4>
                <p className="text-cyan-600 text-sm sm:text-base font-montserrat">Crypto Trader</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 font-century-gothic">
            Buy and Sell Crypto: Functions and Benefits of Binance Coin
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6 text-justify font-century-gothic ">
            Explore how to buy and sell crypto using Binance Coin. Learn about its burn mechanism, benefits, and role in top crypto exchanges like Binance.
            </p>
            <Link to="https://medium.com/@ntsmetrics/buy-and-sell-crypto-functions-and-benefits-of-binance-coin-2090e666eb5e" className="text-cyan-600 font-semibold inline-block">
              Read More...
            </Link>
          </div>

          {/* Blog List Right Section 
          <div className="w-full lg:w-[50%] mr-[1%] text-justify">
            

            {/* Blog Item 2 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[2] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*58VfCFFISe7eaCdtWTCi0g.jpeg"
                alt="Blog 2" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/crypto-exchanges-key-predictions-for-the-crypto-market-bf963f321f43" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Crypto Exchanges: Key Predictions for the Crypto Market
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                The second half of September 2024 will be extremely determinant for the cryptocurrency market.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">5 minute read</span>
                </p>
              </div>
            </div>


            {/* Blog Item 3 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[3] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png"
                alt="Blog 3" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/crypto-exchanges-how-they-are-revolutionizing-global-trade-f3ffa34a806c" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Crypto Exchanges: How They Are Revolutionizing Global Trade
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                Cryptocurrency has become a buzzword in the world of finance, with its influence rapidly spreading across different sectors of the economy.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">8 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 3 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[3] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg"
                alt="Blog 3" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/crypto-exchanges-how-they-are-revolutionizing-global-trade-d919f01a58d1" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Crypto Exchanges: How They Are Revolutionizing Global Trade
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                Cryptocurrency has become a buzzword in the world of finance, with its influence rapidly spreading across different sectors of the economy.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">7 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 4 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[4] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Na-_QCEsWqQbEAFdj9OoeA.jpeg" 
                alt="Blog 4" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/buy-crypto-studying-the-link-between-crypto-and-ai-7976d14e88db" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Buy Crypto: Studying the Link Between Crypto and AI
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                Buy Crypto and explore the synergy between AI and cryptocurrency investment. Learn how AI is reshaping the landscape on top crypto exchanges.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">4 minute read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListSection;*/






import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../index.css';
import blogMainImg from '../../assets/Images/Blog/blogMain.png';
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogListSection = () => {

  const blogPosts = [
    {
      title: "The Future of Technology",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Exploring the innovations that will shape our future.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: profile
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ]
    },
    {
      title: "Healthy Living: Tips and Tricks",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Simple tips for a healthier lifestyle.",
      content: [
        "Incorporating fruits and vegetables into your diet is essential.",
        "Regular exercise can greatly improve your health.",
        "Mental well-being is just as important as physical health."
      ],
      readTime: 4,
      author: {
        name: "John Smith",
        imageUrl: profile
      },
      activity: {
        likes: 85,
        dislikes: 2
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a2",
          name: "Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a3",
          name: "Wellness"
        }
      ]
    },
    {
      title: "Traveling on a Budget",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "How to explore the world without breaking the bank.",
      content: [
        "Researching your destination can save you money.",
        "Travel during off-peak seasons to find better deals.",
        "Consider hostels or vacation rentals as accommodations."
      ],
      readTime: 6,
      author: {
        name: "Alice Johnson",
        imageUrl: profile
      },
      activity: {
        likes: 120,
        dislikes: 1
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a4",
          name: "Travel"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a5",
          name: "Budgeting"
        }
      ]
    },
    {
      title: "Mastering the Art of Cooking",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Tips for becoming a better cook at home.",
      content: [
        "Start with simple recipes to build your confidence.",
        "Experiment with spices to enhance flavors.",
        "Always taste your food as you cook."
      ],
      readTime: 3,
      author: {
        name: "Bob Brown",
        imageUrl: profile
      },
      activity: {
        likes: 95,
        dislikes: 0
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a6",
          name: "Cooking"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a7",
          name: "Food"
        }
      ]
    },
    {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Understanding mental health and its significance.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-cyan-50 jost-uniquifier py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl font-semibold text-centre mb-10 sm:mb-14 font-montserrat">
          Our Latest Blogs
        </h1>

        <div className="flex flex-col lg:flex-row  justify-between">
          {/* Main Blog Section */}
          <div className="w-full lg:w-[500px] lg:h-[300px] lg:pr-4 mb-10 lg:mb-0"> {/* Adjusted width and added height */}
            <img
              src={blogPosts[0].banner}
              alt="Main Blog"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex items-center text-cyan-600 mb-4">
              <img src={profile} className="w-6 h-6 mr-2" />
              <span>By - Admin</span>
              <img src={comments} className="w-6 h-6 ml-4 mr-2" />
              <span>{blogPosts[0].commentsCount} comments</span>
              <span className="ml-auto">{blogPosts[0].readTime} minute read</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-gray-700 mb-6 text-justify">{blogPosts[0].description}</p>
            <Link to={blogPosts[0].link} className="text-cyan-600 font-semibold">
              Read More...
            </Link>
          </div>


          {/* Blog List Section */}
          <div className="w-full lg:w-[50%] text-justify">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="flex items-start mb-8">
                <img
                  src={post.banner}
                  alt={post.title}
                  className="w-[28%] h-[18%] object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <Link to={post.link} className="font-bold text-sm sm:text-lg mb-2">
                    {post.title}
                  </Link>
                  <p className="text-gray-600 mb-2 line-clamp-2">
                    {post.description}
                  </p>
                  <p className="text-cyan-600 text-sm">
                    Trading | <span className="text-black">{post.readTime} minute read</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListSection;


