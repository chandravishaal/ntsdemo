// const InfoTooltip = ({ text }) => (
//   <div className="relative group inline-block ml-1 ">
//     <span className="text-black text-lg hover:text-black-600 margin-left: 0.5rem ">
//     <i class="ri-error-warning-fill "></i>
//     </span>
//     <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
//       {text}
//     </div>
//   </div>
// );


// const SocialMediaOverview = () => {
//     return (
//       <div className="bg-cyan-50 h-[93rem] w-full mb-20">
//         {/* Header */}
//         <div className="text-center mb-10 w-full border border-b-black border-t-black py-6">
//           <h1 className="text-4xl font-bold font-century-gothic text-gray-800">Social</h1>
//         </div>
  
        
  
//         {/* Section 2: Highlights */}
//         <div className="flex flex-col md:flex-row items-start gap-8 container mx-auto rounded-xl mb-24 ">
//           <div className="flex-1 p-5">
//             <h2 className="text-3xl font-semibold font-century-gothic mb-4">
//               Some highlights about Bitcoin on social media
//             </h2>
//             <p className="text-gray-600 text-sm mb-2 font-century-gothic">
//               864,739 unique individuals are talking about Bitcoin and it is ranked #1 in most mentions and activity from collected posts. In the last 24 hours, across all social media platforms, Bitcoin has an average sentiment score of 3.5 out of 5. Finally, Bitcoin is becoming less newsworthy, with 78 news articles published about Bitcoin. This is a 40.58% decrease in news volume compared to yesterday.
//             </p>
//             <p className="text-gray-600 text-sm mb-2 font-century-gothic">
//               On Twitter, people are mostly bullish about Bitcoin. There were 57.04% of tweets with bullish sentiment compared to 8.23% of tweets with a bearish sentiment about Bitcoin. 34.73% of tweets were neutral about Bitcoin. These sentiments are based on 652,829 tweets.
//             </p>
//             <p className="text-gray-600 text-sm font-century-gothic">
//               On Reddit, Bitcoin was mentioned in 5,107 Reddit posts, and there were 8,748 comments about Bitcoin. On average, there were more upvotes compared to downvotes on Reddit posts and more upvotes compared to downvotes on Reddit comments.
//             </p>
//           </div>
//           <div className="flex-1">
//             <img
//               src="https://images.unsplash.com/photo-1518478164902-9e0290e8d7d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Bitcoin and social media"
//               className="rounded-lg object-cover w-full"
//             />
//           </div>
//         </div>
   
//         {/* Overview Section */}
//         <div className="mb-20 container mx-auto h-[40rem]">
            
//         <div className="mb-5">
//           <h2 className="text-3xl font-extrabold font-century-gothic mb-4">Overview
    
//          </h2>
//   <div className="grid grid-cols-4 gap-x-5 gap-y-6">
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Contributors
//         <span className='text-black  font-light'>
//             <InfoTooltip text="Demo" />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4">864,739 people</p> 
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Posts
//         <span className='text-black  font-light'>
//             <InfoTooltip text="Demo" />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4">516,486 posts</p> 
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Dominance
//         <span className='text-black  font-light'>
//             <InfoTooltip text="Demo" />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4"> 3.58%</p>
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Volume Rank
//         <span className='text-black  font-light'>
//             <InfoTooltip text="Demo" />
//            </span> 
//         </p>
//        <p className=" text-lg font-eras-bold font-medium mt-4"> #1</p>
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Average Sentiment
//         <span className='text-black  font-light'>
//             <InfoTooltip text="Demo" />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4"> 3.5 out of 5</p>
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">News Articles
//         <span className='text-black  font-light'>
//             <InfoTooltip text="Demo" />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4"> 78</p>
//       </div>
//     </div>
//   </div>
// </div>

//  {/* Twitter Section */}
// <div className="mb-5">
//   <h2 className="text-3xl font-extrabold font-century-gothic mb-4">Twitter</h2>
//   <div className="grid grid-cols-4 gap-x-5 gap-y-6">
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Tweet Count
//         <span className='text-black  font-light'>
//             <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4">652,829 people</p> 
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <div className="font-bold font-century-gothic uppercase  text-lg">Sentiment
//         <span className='text-black  font-light'>
//             <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
//            </span> 
//         </div>
//        <div className="flex justify-between gap-6">
//         <p className=" text-lg font-eras-bold font-medium mt-4">57.04% <br /> <span>Bullish</span></p> 
//         <p className=" text-lg font-eras-bold font-medium mt-4">34.73% <br /> <span>Neutral</span></p> 
//         <p className=" text-lg font-eras-bold font-medium mt-4">8.23%<br /> <span>Bearish</span></p> 
//        </div>
//       </div>
//     </div>
  
//        <div className="flex items-center pt-8 pl-5 rounded-2xl ">
//           <div className="bg-teal-400 h-5 w-2/3 rounded-l-2xl border border-teal-400"></div>
//               <div className="bg-gray-300 h-5 w-1/3 border-t border-b border-gray-300"></div>
//              <div className="bg-black h-5 w-1/12 rounded-r-2xl border border-black"></div>
//         </div>
//   </div>
// </div>

//  {/* Reddit Section */}
//  <div className="">
//   <h2 className="text-3xl font-extrabold font-century-gothic mb-4">Reddit</h2>
//   <div className="grid grid-cols-4 gap-x-5 gap-y-6">
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Posts
//         <span className='text-black  font-light'>
//             <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4">5,107</p> 
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Comments
//         <span className='text-black  font-light'>
//             <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4">8,748</p> 
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Post Score
//         <span className='text-black  font-light'>
//             <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4"> 84,879</p>
//       </div>
//     </div>
//     <div>
//       <div className="text-black p-9">
//         <p className="font-bold font-century-gothic uppercase  text-lg">Comment Score
//         <span className='text-black  font-light'>
//             <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
//            </span> 
//         </p>
//         <p className=" text-lg font-eras-bold font-medium mt-4">90,813 </p>
//       </div>
//     </div>
   
   
   
//   </div>
//       </div>
//          </div>
//             </div>
//     );
//   };
  
//   export default SocialMediaOverview;
  



import React from "react";
const InfoTooltip = ({ text }) => (
  <div className="relative group inline-block ml-1 ">
    <span className="text-black text-lg hover:text-black-600 margin-left: 0.5rem ">
    <i class="ri-error-warning-fill "></i>
    </span>
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 p-2 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
      {text}
    </div>
  </div>
);

const SocialMediaOverview = () => {
  return (
    <div className="bg-cyan-50 w-full mb-20">
      {/* Header */}
      <div className="text-center mb-10 w-full border border-b-black border-t-black py-6">
        <h1 className="text-3xl md:text-4xl font-bold font-century-gothic text-gray-800">
          Social
        </h1>
      </div>

      {/* Section 2: Highlights */}
      <div className="flex flex-col md:flex-row items-start gap-8 container mx-auto rounded-xl mb-24 px-4">
        <div className="flex-1 p-5">
          <h2 className="text-2xl md:text-3xl font-semibold font-century-gothic mb-4">
            Some highlights about Bitcoin on social media
          </h2>
          <p className="text-gray-600 text-sm mb-2 font-century-gothic">
            864,739 unique individuals are talking about Bitcoin and it is
            ranked #1 in most mentions and activity from collected posts. In the
            last 24 hours, across all social media platforms, Bitcoin has an
            average sentiment score of 3.5 out of 5. Finally, Bitcoin is
            becoming less newsworthy, with 78 news articles published about
            Bitcoin. This is a 40.58% decrease in news volume compared to
            yesterday.
          </p>
          <p className="text-gray-600 text-sm mb-2 font-century-gothic">
            On Twitter, people are mostly bullish about Bitcoin. There were
            57.04% of tweets with bullish sentiment compared to 8.23% of tweets
            with a bearish sentiment about Bitcoin. 34.73% of tweets were
            neutral about Bitcoin. These sentiments are based on 652,829 tweets.
          </p>
          <p className="text-gray-600 text-sm font-century-gothic">
            On Reddit, Bitcoin was mentioned in 5,107 Reddit posts, and there
            were 8,748 comments about Bitcoin. On average, there were more
            upvotes compared to downvotes on Reddit posts and more upvotes
            compared to downvotes on Reddit comments.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1518478164902-9e0290e8d7d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bitcoin and social media"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 mb-20">
      {/* Overview Section */}
      <div className="mb-5">
        <h2 className="text-2xl md:text-3xl font-extrabold font-century-gothic mb-4">
          Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
          {/* Each block */}
          {[
            { title: "Contributors", value: "864,739 people" },
            { title: "Posts", value: "516,486 posts" },
            { title: "Dominance", value: "3.58%" },
            { title: "Volume Rank", value: "#1" },
            { title: "Average Sentiment", value: "3.5 out of 5" },
            { title: "News Articles", value: "78" },
          ].map((item, index) => (
            <div key={index} className="py-6 text-center md:text-start md:text-start">
              <p className="font-bold font-century-gothic uppercase text-lg">
                {item.title}
                <span className="text-black font-light">
                  <InfoTooltip text="Demo" />
                </span>
              </p>
              <p className="text-lg font-eras-bold font-medium mt-4">
                {item.value}
              </p>
              {/* Horizontal line for small screens */}
              <hr className="block md:hidden border-gray-300 my-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Twitter Section */}
      <div className="mb-5">
        <h2 className="text-2xl md:text-3xl font-extrabold font-century-gothic mb-4">
          Twitter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6">
          <div className="py-6 text-center md:text-start">
            <p className="font-bold font-century-gothic uppercase text-lg">
              Tweet Count
              <span className="text-black font-light">
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </span>
            </p>
            <p className="text-lg font-eras-bold font-medium mt-4">
              652,829 tweets
            </p>
            <hr className="block md:hidden border-gray-300 my-4" />
          </div>
          <div className="py-6 text-center md:text-start">
            <div className="font-bold font-century-gothic uppercase text-lg">
              Sentiment
              <span className="text-black font-light">
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
              <p className="text-lg font-eras-bold font-medium">
                57.04% <br /> <span>Bullish</span>
              </p>
              <p className="text-lg font-eras-bold font-medium">
                34.73% <br /> <span>Neutral</span>
              </p>
              <p className="text-lg font-eras-bold font-medium">
                8.23% <br /> <span>Bearish</span>
              </p>
            </div>
            <hr className="block md:hidden border-gray-300 my-4" />
          </div>

          {/* Sentiment Bar */}
          <div className="flex items-center justify-center md:pt-8  pt-0 md:mb-0 mb-6 md:px-5 px-10">
            <div className="bg-teal-400 h-5 w-2/3 rounded-l-2xl"></div>
            <div className="bg-gray-300 h-5 w-1/3 border border-gray-300"></div>
            <div className="bg-black h-5 w-1/12 rounded-r-2xl border border-black"></div>
          </div>
        </div>
      </div>

      {/* Reddit Section */}
      <div className="pb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold font-century-gothic mb-4 ">
          Reddit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6">
          <div className="py-6 text-center md:text-start">
            <p className="font-bold font-century-gothic uppercase text-lg">
              Posts
              <span className="text-black font-light">
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </span>
            </p>
            <p className="text-lg font-eras-bold font-medium mt-4">5,107</p>
            <hr className="block md:hidden border-gray-300 my-4" />
          </div>
          <div className="py-6 text-center md:text-start">
            <p className="font-bold font-century-gothic uppercase text-lg">
              Comments
              <span className="text-black font-light">
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </span>
            </p>
            <p className="text-lg font-eras-bold font-medium mt-4">8,748</p>
            <hr className="block md:hidden border-gray-300 my-4" />
          </div>
          <div className="py-6 text-center md:text-start">
            <p className="font-bold font-century-gothic uppercase text-lg">
              Post Score
              <span className="text-black font-light">
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </span>
            </p>
            <p className="text-lg font-eras-bold font-medium mt-4">84,879</p>
            <hr className="block md:hidden border-gray-300 my-4" />
          </div>
          <div className="py-6 text-center md:text-start">
            <p className="font-bold font-century-gothic uppercase text-lg">
              Comment Score
              <span className="text-black font-light">
                <InfoTooltip text="The percentage of change in the value compared to 24 hours ago." />
              </span>
            </p>
            <p className="text-lg font-eras-bold font-medium mt-4">90,813</p>
            <hr className="block md:hidden border-gray-300 my-4" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SocialMediaOverview;
