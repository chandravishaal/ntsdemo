import HeroSection from '../Components/BlogComponents/HeroSection';
import Category from '../Components/BlogComponents/Category';
import InstagramSection from '../Components/BlogComponents/InstagramSection';
import BlogListSection from '../Components/BlogComponents/BlogListSection';
import BlogFeatureSection from '../Components/BlogComponents/BlogFeatureSection';
import LaunchSection from '../Components/BlogComponents/LaunchSection';
import BlogList from '../Components/BlogComponents/blogList';
import ExploreCategoryList from '../Components/BlogComponents/ExploreCategories';
import CryptonewCatogery from '../Components/BlogComponents/Cryptonews_Catogery';
import MarketAnalysis_and_Trends from '../Components/BlogComponents/Market Analysis_and_Trends';
import { items } from '../Components/BlogComponents/ExploreCategories';
import InnovationSection, { blogPosts } from '../Components/BlogComponents/InnovationSection';

const Blog = () => {
  return (
    <div className="font-sans bg-gray-100">
     {/* <HeroSection />
     <Category />
     <InstagramSection />
     <BlogListSection />
     <BlogFeatureSection/>
      <LaunchSection /> */}

      {/* <BlogList/><Category />
      <InstagramSection />
      <BlogListSection />
      <BlogListSection />
      <BlogFeatureSection/>
      <LaunchSection /> 
      <InnovationSection blogPosts={blogPosts}/>*/}
      <BlogListSection />
      <CryptonewCatogery/>
      <MarketAnalysis_and_Trends/>
      <ExploreCategoryList items={items} />


    </div>
  )
}

export default Blog;
