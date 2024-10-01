/*import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import bannerImage from '../../assets/Images/background.png';
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  const [activeFilter, setActiveFilter] = useState('Tags'); // Default filter

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-banner', {
      scrollTrigger: {
        trigger: '.hero-banner',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.4,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
    // Additional filtering logic can be implemented here
  };

  return (
    <div className="relative w-full h-auto hero-banner">
      {/* For larger screens *
      <div
        className="hidden lg:block w-full h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="p-8">
          <h1 className="font-bold text-5xl text-center mb-4">Our Articles</h1>
          <div className="text-center mb-6 w-full max-w-lg h-20 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam esse soluta accusamus est a consequatur, iusto fugit iure quae minus, harum at facilis ullam hic sunt itaque dolor voluptate?
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-4/12 mr-4">
              <IoIosSearch className="absolute left-3 top-2 text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-10 w-full rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
              />
            </div>
            <select
              id="filter"
              value={activeFilter}
              onChange={handleFilterChange}
              className="p-2 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
            >
              <option value="Tags">Tags</option>
              <option value="News">News</option>
              <option value="Blog">Blog</option>
              <option value="Events">Events</option>
              <option value="Updates">Updates</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;*/

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import bannerImage from '../../assets/Images/background.png';
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from 'react-icons/ci';
import Category from './Category';

import blogMainImg from '../../assets/Images/Blog/blogMain.png';
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


const EachBlog = ({ title, date, description, imageUrl, author, profile, readTime }) => {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-2">
      <div>
        <img src={imageUrl} alt="Blog Visual" className="w-full h-[200px] rounded" />
        <h2 className="text-2xl font-bold mt-2">{title}</h2>
        <p className="text-gray-500 line-clamp-2">{description}</p>
      </div>

      <div className="flex items-center justify-between w-full text-cyan-600 mb-4">
        <div className="flex items-center">
          <img src={profile} alt="Profile" className="w-4 h-4 rounded-full mr-2" />
          <span className='text-sm'>{author}</span>
          <span className='text-sm mx-2'></span> {/* Separator */}
          <span className='text-sm'>25 Sept 2024</span>
        </div>
        <div className="text-sm  text-cyan-600">{readTime} minute read</div>
      </div>
    </div>


  );
};


const blogPosts = [
  {
    title: "The Future of Technology",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*58VfCFFISe7eaCdtWTCi0g.jpeg",
    description: "Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt id itaque tempore iste ratione quod placeat officia. Iusto libero voluptatibus quis. ",
    content: [
      "Technology is evolving at an unprecedented pace.",
      "From AI to quantum computing, the possibilities are endless.",
      "It's crucial to stay informed about these advancements."
    ],
    readTime: 5,
    author: {
      name: "Jane Doe",
      imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
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
    description: "Simple tips for a healthier lifestyle.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: [
      "Incorporating fruits and vegetables into your diet is essential.",
      "Regular exercise can greatly improve your health.",
      "Mental well-being is just as important as physical health."
    ],
    readTime: 4,
    author: {
      name: "John Smith",
      imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
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
    ],
    createdAt: "20.09.2024"
  },
  {
    title: "Traveling on a Budget",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg",
    description: "How to explore the world without breaking the bank.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: [
      "Researching your destination can save you money.",
      "Travel during off-peak seasons to find better deals.",
      "Consider hostels or vacation rentals as accommodations."
    ],
    readTime: 6,
    author: {
      name: "Alice Johnson",
      imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
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
    ],
    createdAt: "20.09.2024"
  },
  {
    title: "Mastering the Art of Cooking",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Na-_QCEsWqQbEAFdj9OoeA.jpeg",
    description: "Tips for becoming a better cook at home.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content: [
      "Start with simple recipes to build your confidence.",
      "Experiment with spices to enhance flavors.",
      "Always taste your food as you cook."
    ],
    readTime: 3,
    author: {
      name: "Bob Brown",
      imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
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
    ],
    createdAt: "20.09.2024"
  },
  {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L7tpgNK6Rg_09CBXJIp3sQ.jpeg",
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
    ],
    createdAt: "20.09.2024"
  },
  {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg",
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
    ],
    createdAt: "20.09.2024"
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
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  }, {
    title: "The Importance of Mental Health",
    banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
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
    ],
    createdAt: "20.09.2024"
  },
];



const HeroSection = () => {
  const [activeFilter, setActiveFilter] = useState('Tags'); // Default filter
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-banner', {
      scrollTrigger: {
        trigger: '.hero-banner',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.4,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };


  
  const postsPerPage = 12;

  // Calculate the total number of pages after the first 4 posts
  const totalPosts = blogPosts.length - 4; // Exclude the first 4 posts
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Get the current posts to display (after skipping the first 4)
  const currentPosts = blogPosts.slice(
    4 + (currentPage - 1) * postsPerPage,
    4 + currentPage * postsPerPage
  );

  // Handle pagination click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePaginationChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };





  return (
    <>
      {/*first section */}


      <div className="relative w-full h-auto hero-banner">
        {/* Background Image */}
        <div
          className="w-full h-[60vh] md:h-[30vh] lg:h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="p-6 md:p-8 flex flex-col justify-center items-center h-full">
            <h1 className="font-bold text-4xl md:text-5xl text-center mb-3">Our Articles</h1>
            <div className="text-center mb-4 w-full max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam esse soluta accusamus est a consequatur, iusto fugit iure quae minus, harum at facilis ullam hic sunt itaque dolor voluptate?
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="relative w-full mb-4 md:mb-0 md:w-4/12">
                <IoIosSearch className="absolute left-3 top-2 text-gray-500 text-xl" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 pl-10 w-full rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
                />
              </div>
              <select
                id="filter"
                value={activeFilter}
                onChange={handleFilterChange}
                className="p-2 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black transition duration-200 w-full md:w-auto md:ml-4"
              >
                <option value="Tags">Tags</option>
                <option value="News">News</option>
                <option value="Blog">Blog</option>
                <option value="Events">Events</option>
                <option value="Updates">Updates</option>
              </select>
            </div>
          </div>
        </div>
      </div>



      {/*<Category />*/}
      {/* Second section */}



      <div className="w-full bg-gray-100 py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-10 sm:mb-14 font-montserrat">
            Our Latest Blogs
          </h1>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Blog Section */}
            <div className="w-full lg:w-[500px] mb-10 lg:mb-0 flex flex-col">
              <img
                src={blogPosts[0].banner}
                alt={`Main Blog - ${blogPosts[0].title}`}
                className="w-full h-80 rounded mb-4"
              />
              <div className="flex items-center text-cyan-600 mb-4">
                <img
                  src={blogPosts[0].author.imageUrl}
                  alt={`${blogPosts[0].author.name} Profile`}
                  className="w-6 h-6 mr-2 rounded-full" // Circular profile image
                />
                <span>By - {blogPosts[0].author.name || 'Admin'}</span>
                <span className='text-sm mx-2 font-bold'>.</span> {/* Separator */}
                <span className='text-sm'>25 Sept 2024</span>
                <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm ml-2">
                  <span className="text-primaryCyan">
                    <FaHeart />
                  </span>
                  <h1>{blogPosts[0].activity.likes}</h1>
                </div>
                <span className="ml-auto">{blogPosts[0].readTime} minute read</span>
              </div>

              <h2 className="text-2xl font-bold">{blogPosts[0].title}</h2>
              <p className="text-gray-700 mb-4 text-justify font-century-gothic line-clamp-2">{blogPosts[0].description}</p>
              <Link to={blogPosts[0].link} className="text-cyan-600 font-semibold">
                Read More...
              </Link>
            </div>

            {/* Blog List Section */}
            <div className="w-full lg:w-[60%] flex flex-col justify-between">
              {blogPosts.slice(1, 4).map((post, index) => (
                <Link to={post.link} key={index} className="flex items-start mb-4" style={{ height: '140px', width: '100%' }}>
                  <img
                    src={post.banner}
                    alt={post.title}
                    className="w-[180px] h-[100%] rounded mr-4"
                  />
                  <div className="flex flex-col items-start gap-3">
                    <div>
                      <h1 className="font-bold text-lg sm:text-2xl">{post.title}</h1> {/* Increased font size */}
                      <p className="text-gray-500 mb-2 line-clamp-2 font-century-gothic">{post.description}</p>
                    </div>

                    <div className="flex items-center justify-between w-full text-cyan-600 mb-4">
                      <div className="flex items-center">
                        <img src={post.author.imageUrl} alt="Profile" className="w-4 h-4 rounded-full mr-2" />
                        <span className='text-sm'>{post.author.name}</span>
                        <span className='text-sm mx-2 font-bold'>.</span> {/* Separator */}
                        <span className='text-sm'>25 Sept 2024</span>
                      </div>
                      <div className="text-sm text-cyan-600">{post.readTime} minute read</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>


          </div>
        </div>
      </div>

      {/*third section */}


      <div className="w-full bg-white py-20 px-5 lg:px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* Display paginated posts */}
            {currentPosts.map((post, index) => (
              <div key={index + 4} className="w-full">
                <EachBlog
                  title={post.title}
                  date={post.createdAt}
                  description={post.description}
                  imageUrl={post.banner}
                  readTime={post.readTime}
                  author={post.author.name}
                  profile={post.author.imageUrl}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 0 && (
            <div className="relative flex items-center justify-center mt-7">
              <button
                onClick={() => handlePaginationChange("prev")}
                className={`text-4xl ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={currentPage === 1}
              >
                <IoMdArrowDropleftCircle />
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 border rounded-lg ${currentPage === index + 1 ? "bg-gray-300 text-black" : "bg-white text-black"}`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => handlePaginationChange("next")}
                className={`text-4xl ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={currentPage === totalPages}
              >
                <IoMdArrowDroprightCircle />
              </button>
            </div>
          )}
        </div>
      </div>
    </>


  );
};

export default HeroSection;







