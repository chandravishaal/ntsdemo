import React from 'react'
import HeroSection from '../Components/BlogComponents/HeroSection';
import Navbar from '../Components/BlogComponents/Navbar';
import InstagramSection from '../Components/BlogComponents/InstagramSection';
import BlogListSection from '../Components/BlogComponents/BlogListSection';
import BlogFeatureSection from '../Components/BlogComponents/BlogFeatureSection';
import LaunchSection from '../Components/BlogComponents/LaunchSection';

const Blog = () => {
  return (
    <div className="font-sans bg-gray-100">
      <HeroSection />
      <Navbar />
      <InstagramSection />
      <BlogListSection />
      <BlogFeatureSection/>
      <LaunchSection />
    </div>
  )
}

export default Blog;
