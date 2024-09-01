// import BlogPost from './BlogPost';
import 'remixicon/fonts/remixicon.css';
import blog1 from '../assets/Images/blog_1.png';
import blog2 from '../assets/Images/blog_2.png';
import blog3 from '../assets/Images/blog_3.png';

const BlogPost = ({ image, date, author, comments, content, isCenter }) => {
  return (
    <div
      className={`relative rounded-lg w-1/3 p-5 pb-12 transition duration-300 transform hover:scale-105 hover:z-30 cursor-pointer border-2 border-primaryCyan group ${
        isCenter ? 'bg-primaryCyan' : 'bg-white hover:bg-primaryCyan'
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt="Blog"
          className="w-full h-full object-cover rounded-t-lg select-none"
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
        className={`mt-10 font-century-gothic transition duration-300 ${
          isCenter ? 'text-white' : 'text-black group-hover:text-white'
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};



const Blog = () => {
  return (
    <div
      id="main"
      className="w-full bg-white mb-32 container mx-auto mt-11 flex flex-col items-center py-3 space-y-5"
    >
      {/* Headings */}
      <div id="heading" className="flex flex-col items-center gap-4 mb-10">
        <h1 className="text-primaryCyan text-5xl font-century-gothic font-normal mb-2">
          Our Latest Blog
        </h1>
        <h2 className="text-black text-2xl font-century-gothic font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
      </div>
      <div className="w-full flex justify-between items-start gap-4 space-x-2">
        <BlogPost
          image={blog1}
          date="JULY 29, 2020"
          author="Admin"
          comments="0"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
          isCenter={false}
        />
        <BlogPost
          image={blog2}
          date="JULY 29, 2020"
          author="Admin"
          comments="0"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
          isCenter={false}
        />
        <BlogPost
          image={blog3}
          date="JULY 29, 2020"
          author="Admin"
          comments="0"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam, fugit dolor assumenda totam consequuntur corporis error delectus!"
          isCenter={false}
        />
      </div>
    </div>
  );
};

export default Blog;
