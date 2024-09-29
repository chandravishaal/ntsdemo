import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../index.css';
import bannerImage from '../../assets/Images/background.png';
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from 'react-icons/ci';


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
                <img src={imageUrl} alt="Blog Visual" className="w-full h-auto rounded" />
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
        banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
        description: "Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt id itaque tempore iste ratione quod placeat officia. Iusto libero voluptatibus quis. ",
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
        description: "Simple tips for a healthier lifestyle.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        ],
        createdAt: "20.09.2024"
    },
    {
        title: "Traveling on a Budget",
        banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
        description: "How to explore the world without breaking the bank.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
        ],
        createdAt: "20.09.2024"
    },
    {
        title: "Mastering the Art of Cooking",
        banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
        description: "Tips for becoming a better cook at home.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },
]
const BlogList = () => {
    const [currentPage, setCurrentPage] = useState(1);
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
    );
};

export default BlogList;