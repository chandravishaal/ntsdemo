import { useEffect, useRef } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

import news from '../../assets/Images/Blog/icon1.png';
import Market from '../../assets/Images/Blog/icon2.png';
import investment from '../../assets/Images/Blog/icon3.png';
import Guides from '../../assets/Images/Blog/icon4.png';
import Security from '../../assets/Images/Blog/icon5.png';
import Features from '../../assets/Images/Blog/icon6.png';
import Studies from '../../assets/Images/Blog/icon7.png';
import Spotlight from '../../assets/Images/Blog/icon8.png';
import Interviews from '../../assets/Images/Blog/icon9.png';
import Issues from '../../assets/Images/Blog/icon10.png';
import Education from '../../assets/Images/Blog/icon11.png';
import Future from '../../assets/Images/Blog/icon12.png';
import { MdOutlineTimer } from "react-icons/md";


gsap.registerPlugin(ScrollTrigger);

const EachBlog = ({ title, date, description, imageUrl, author, profile, readTime }) => {
    return (
        <div className="flex flex-col items-start gap-8 rounded-2xl bg-white relative overflow-hidden"> {/* Set position relative to this container */}
            <div className="relative"> {/* Set position relative for child elements */}
                <img src={imageUrl} alt="Blog Visual" className="w-full h-[15rem] rounded-t-2xl transition ease-out duration-300 transform hover:scale-105 cursor-pointer" />

                {/* Category label */}
                <span className="absolute top-2 right-2 text-primaryCyan text-md font-bold px-2 py-1 rounded">
                Market Analysis and Trends {/* Display the category here */}
                </span>

                <h2 className="text-2xl font-bold mt-4 p-2">{title}</h2>
                <p className="text-gray-500 line-clamp-3 mt-2 px-2">{description}</p>
            </div>

            <div className="flex items-center justify-between w-full text-cyan-600 mb-4 px-2">
                <div className="flex items-center">
                    <img src={profile} alt="Profile" className="w-4 h-4 rounded-full object-cover mr-2" />
                    <span className='text-sm'>{author}</span>
                   
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                    <span className="mr-1"><MdOutlineTimer /></span>
                    <span className="text-gray-600">{readTime} m</span>
                </div>
            </div>
        </div>
    );
};




const MarketAnalysis_and_Trends = () => {
    const swiperRef = useRef(null);



    const blogPosts = [
        {
            title: "Data Analytics: Key to Decision and Business Growth",
            banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
            description: "Exploring the innovations that will shape our future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt id itaque tempore iste ratione quod placeat officia. Iusto libero voluptatibus quis.",
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
                    name: "Crypto News"
                }
            ],
            createdAt: "20.09.2024"
        },
        {
            title: "Data Analytics: Key to Decision and Business Growth",
            banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg",
            description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
            content: [
                "Data is essential for making informed decisions.",
                "Businesses leveraging data analytics are more competitive.",
                "Understanding market trends can drive growth."
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
                    id: "60d1d5e4f1a2b9299f40f0a1",
                    name: "Crypto News"
                }
            ],
            createdAt: "20.09.2024"
        },
        // New Blog Post
        {
            title: "Understanding Cryptocurrency: The Future of Finance",
            banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Na-_QCEsWqQbEAFdj9OoeA.jpeg",
            description: "Cryptocurrency is transforming how we think about money. This post explores its impact on the financial sector and beyond.",
            content: [
                "Cryptocurrencies are decentralized digital currencies.",
                "The blockchain technology behind them ensures transparency.",
                "Investing in crypto can be risky but rewarding."
            ],
            readTime: 6,
            author: {
                name: "Jane Doe",
                imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
            },
            activity: {
                likes: 200,
                dislikes: 10
            },
            categories: [
                {
                    id: "60d1d5e4f1a2b9299f40f0a2",
                    name: "Crypto News"
                }
            ],
            createdAt: "16.10.2024"
        }
    ];





    return (
        <section className="pb-10 pt-20 bg-gray-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-left mb-20">
                    <h1 className="text-4xl font-bold">Market Analysis and Trends</h1>
                    <h3 className="text-md font-medium text-gray-500 mt-4">
                        Stay informed with the latest trends, insights, and developments in the rapidly evolving world of cryptocurrencies and blockchain technology.
                    </h3>
                </div>

                {/* Check if there are blog posts available */}
                {blogPosts.length === 0 ? (
                    <p className="text-center text-gray-500">No posts available at the moment.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <EachBlog
                                key={index}
                                title={post.title}
                                date={post.createdAt}
                                likes={post.activity.likes}
                                description={post.description}
                                imageUrl={post.banner}
                                profile={post.author.imageUrl}
                                author={post.author.name}
                            />
                        ))}
                    </div>
                )}

                {/* Button to browse all posts */}
                <div className="text-center mt-12 mb-9">
                    <button className="bg-primaryCyan text-white px-4 py-2 text-2xl rounded-md">
                        View more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MarketAnalysis_and_Trends;