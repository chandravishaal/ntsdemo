import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../index.css';
import blogMainImg from '../../assets/Images/Blog/blogMain.png';
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
const InnovationSection = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="max-w-6xl mx-auto md:ml-5 sm:ml-5 mb-8">
        <h2 className="text-4xl md:text-6xl font-semibold mb-2 ml-2 sm:ml-2 md:ml-2 lg:ml-2">Innovation</h2>
        <p className="text-gray-500 ml-2 sm:ml-2 md:ml-2 lg:ml-2">Discover the latest innovations reshaping industries and business models.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {blogPosts.map((blogPost, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={blogPost.banner}
              alt={blogPost.title}
              className="w-full h-48 object-cover transition ease-out duration-300 transform hover:scale-105 cursor-pointer"
            />
            <div className="p-6">
              <div className="text-blue-500 font-medium">{blogPost.categories.map(category => category.name).join(', ')}</div>
              <div className="text-gray-400 text-sm mb-2">{blogPost.createdAt}</div>
              <h3 className="text-lg font-bold mb-2  cursor-pointer transition-colors duration-300 hover:text-blue-500">
                {blogPost.title}
              </h3>
              <p className="text-gray-600 cursor-pointer transition-colors duration-300 hover:text-blue-500">
                {blogPost.description}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={blogPost.author.imageUrl || profileImageFallback}
                  alt={blogPost.author.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700 font-semibold">{blogPost.author.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const blogPosts = [
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
      createdAt:
       "3hrs ago"
      ,
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
      createdAt:  "6hrs ago"
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
      createdAt: "8hrs ago"
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
      createdAt: "1day ago"
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
    // }, {
    //   title: "The Importance of Mental Health",
    //   banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    //   description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
    //   content: [
    //     "Mental health affects how we think, feel, and act.",
    //     "It's important to seek help when needed.",
    //     "Practicing mindfulness can improve your mental well-being."
    //   ],
    //   readTime: 5,
    //   author: {
    //     name: "Emma Wilson",
    //     imageUrl: profile
    //   },
    //   activity: {
    //     likes: 200,
    //     dislikes: 3
    //   },
    //   categories: [
    //     {
    //       id: "60d1d5e4f1a2b9299f40f0a8",
    //       name: "Mental Health"
    //     },
    //     {
    //       id: "60d1d5e4f1a2b9299f40f0a9",
    //       name: "Self-Care"
    //     }
    //   ],
    //   createdAt: "20.09.2024"
    // }, {
    //   title: "The Importance of Mental Health",
    //   banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    //   description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
    //   content: [
    //     "Mental health affects how we think, feel, and act.",
    //     "It's important to seek help when needed.",
    //     "Practicing mindfulness can improve your mental well-being."
    //   ],
    //   readTime: 5,
    //   author: {
    //     name: "Emma Wilson",
    //     imageUrl: profile
    //   },
    //   activity: {
    //     likes: 200,
    //     dislikes: 3
    //   },
    //   categories: [
    //     {
    //       id: "60d1d5e4f1a2b9299f40f0a8",
    //       name: "Mental Health"
    //     },
    //     {
    //       id: "60d1d5e4f1a2b9299f40f0a9",
    //       name: "Self-Care"
    //     }
    //   ],
    //   createdAt: "20.09.2024"
    //  }, {
    //   title: "The Importance of Mental Health",
    //   banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
    //   description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
    //   content: [
    //     "Mental health affects how we think, feel, and act.",
    //     "It's important to seek help when needed.",
    //     "Practicing mindfulness can improve your mental well-being."
    //   ],
    //   readTime: 5,
    //   author: {
    //     name: "Emma Wilson",
    //     imageUrl: profile
    //   },
    //   activity: {
    //     likes: 200,
    //     dislikes: 3
    //   },
    //   categories: [
    //     {
    //       id: "60d1d5e4f1a2b9299f40f0a8",
    //       name: "Mental Health"
    //     },
    //     {
    //       id: "60d1d5e4f1a2b9299f40f0a9",
    //       name: "Self-Care"
    //     }
    //   ],
    //   createdAt: "20.09.2024"
     }
];


export default InnovationSection;

