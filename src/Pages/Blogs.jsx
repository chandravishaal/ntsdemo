import HeroSection from '../Components/BlogComponents/HeroSection';
import Category from '../Components/BlogComponents/Category';
import InstagramSection from '../Components/BlogComponents/InstagramSection';
import BlogListSection from '../Components/BlogComponents/BlogListSection';
import BlogFeatureSection from '../Components/BlogComponents/BlogFeatureSection';
import LaunchSection from '../Components/BlogComponents/LaunchSection';
import BlogList from '../Components/BlogComponents/blogList';
import ExploreCategoryList from '../Components/BlogComponents/ExploreCategories';
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
      <LaunchSection /> */}
      <InnovationSection blogPosts={blogPosts}/>
      <ExploreCategoryList items={items}/>


    </div>
  )
}

export default Blog;
