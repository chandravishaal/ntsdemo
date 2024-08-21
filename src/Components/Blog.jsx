import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Blog = () => {
  return (
    <div id="main" className="min-h-screen w-full bg-white mt-11 flex flex-col items-center py-3 px-40 space-y-5">
      
      {/* Headings */}
      <div id="heading" className='flex flex-col items-center gap-4 mb-10'>
      <h1 className="text-primaryCyan text-5xl font-century-gothic font-normal mb-2">Our Latest Blog</h1>
      <h2 className="text-black text-2xl font-century-gothic font-normal  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
      </div>
      <div className="w-full flex justify-between items-start space-x-2">
        {/* Left Blog Post */}
        <div id="left" className="relative bg-white rounded-lg w-1/3 p-5 pb-12 hover:bg-primaryCyan transition duration-300 group">
        <div className="relative">
          <img
            src="/src/assets/Images/blog_1.png"
            alt="Bitcoin"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="mt-4 absolute right-4 -bottom-3 transition duration-300 group-hover:bg-white group-hover:text-black">
            <span className="text-white  text-lg  font-eras-bold bg-cyan-400 p-5 rounded-xl group-hover:bg-white group-hover:text-black">
                JULY 29, 2020</span>
          </div>
        </div>
        
        <div className="mt-10 flex justify-start items-end gap-4 text-black text-lg transition duration-300 group-hover:text-white">
          <i className="ri-user-settings-fill text-cyan-300 text-4xl transition duration-300 group-hover:text-white"></i>
          <span>By - Admin</span>
          <i className="ri-chat-search-line text-cyan-300 text-4xl transition duration-300 group-hover:text-white"></i>
          <span>0 comments</span>
        </div>
        <div className="mt-10 text-black font-century-gothic font-semibold transition duration-300 group-hover:text-white">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam,
            fugit dolor assumenda totam consequuntur corporis error delectus!</p>
        </div>
      </div>

        {/* Center Blog Post */}
        <div id="Center" className=" bg-primaryCyan relative  rounded-lg w-1/3 p-5 pb-12   group">
           <div className="relative">
          <img
            src="/src/assets/Images/blog_2.png"
            alt="Bitcoin"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="mt-4 absolute right-4 -bottom-3 transition duration-300 ">
            <span className="  text-lg  font-eras-bold bg-white p-5 rounded-xl text-black">
                JULY 29, 2020</span>
          </div>
         </div>

         <div className="mt-10 flex justify-start items-end gap-4 text-white text-lg">
          <i className="ri-user-settings-fill text-white text-4xl "></i>
          <span>By - Admin</span>
          <i className="ri-chat-search-line text-white text-4xl "></i>
          <span>0 comments</span>
         </div>
         <div className="mt-10 text-white font-century-gothic font-semibold ">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam,
            fugit dolor assumenda totam consequuntur corporis error delectus!</p>
          </div>

        </div>

        {/* Right Blog Post */}
        <div id="right" className="relative bg-white rounded-lg w-1/3 p-5 pb-12 hover:bg-primaryCyan transition duration-300 group">
           <div className="relative">
          <img
            src="/src/assets/Images/blog_3.png"
            alt="Bitcoin"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="mt-4 absolute right-4 -bottom-3 transition duration-300 group-hover:bg-white group-hover:text-black">
            <span className="text-white text-lg  font-eras-bold bg-cyan-400 p-5 rounded-xl group-hover:bg-white group-hover:text-black ">
                JULY 29, 2020</span>
          </div>
         </div>

         <div className="mt-10 flex justify-start items-end gap-4 text-black text-lg transition duration-300 group-hover:text-white">
          <i className="ri-user-settings-fill text-cyan-300 text-4xl transition duration-300 group-hover:text-white"></i>
          <span>By - Admin</span>
          <i className="ri-chat-search-line text-cyan-300 text-4xl transition duration-300 group-hover:text-white"></i>
          <span>0 comments</span>
         </div>
         <div className="mt-10 text-black font-century-gothic font-semibold transition duration-300 group-hover:text-white">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea excepturi ut modi officiis quibusdam ad asperiores quasi architecto magni debitis nostrum quisquam,
            fugit dolor assumenda totam consequuntur corporis error delectus!</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog
