import React from 'react';

// Import Remix Icon CSS
import 'remixicon/fonts/remixicon.css';

const BlogInfo = () => {
    // Dummy data
    const blogData = {
        title: "Just focus on yourself, nobody actually cares about what you do",
        subtitle: "No one really cares about what we do or what we think; they have their own problems.",
        author: {
            name: "Kevin Ho",
            profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
            // followText: "Follow"
        },
        readTime: "5 min read",
        date: "May 12, 2022",
        likes: 1200,
        comments: 288,
        shares: 0,
        mainImage: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*kqwfoTxUa38RIUIZBQU2uA.jpeg",
        photoCredit: {
            name: "Siarhei Horbach",
            source: "Unsplash"
        },
        content: [
            { "type": "paragraph", "text": "I always thought that everybody was watching." },
            { "type": "paragraph", "text": "I went to a coffee shop. I order a coffee and then walk my way to my seat with my friend. I’m overreacting because everyone is watching. I feel like I’m doing something wrong or have something on my face." },
            { "type": "paragraph", "text": "Most of my time at the cafe is spent almost focusing on my sitting position, how people see my face, etc." },
            { "type": "question", "text": "What are the things that I’m actually doing wrong?" },
            { "type": "paragraph", "text": "The same story happens when I go to the gym." },
            { "type": "paragraph", "text": "I’m a beginner, and I may do some exercises with bad form. I feel like I made a mistake in my workout, and I’m worried people might think I look stupid." },
            { "type": "paragraph", "text": "I always thought that everybody was judging." },
            { "type": "paragraph", "text": "At the coffee shop, I thought that I was doing something wrong. I might go to the wrong toilet. I’m afraid of someone judging me based on how I look and behave." },
            { "type": "boldData", "text": "I always thought that everybody was watching." },
            { "type": "paragraph", "text": "The other time is when I’m working on something. I want to improve myself by going to the gym or writing every day. I am afraid sometimes that my family or my friends are going to judge me for doing that." },
            { "type": "paragraph", "text": "They might judge me based on how I work out or why I spend my time writing every day. This all ends up being overthinking about what I do." },
            { "type": "heading", "level": 2, "text": "There's something wrong with me" },
            { "type": "paragraph", "text": "The same story happens when I go to the gym." },
            { "type": "paragraph", "text": "I’m a beginner, and I may do some exercises with bad form. I feel like I made a mistake in my workout, and I’m worried people might think I look stupid." },
            { "type": "paragraph", "text": "I always thought that everybody was judging." },
            { "type": "paragraph", "text": "At the coffee shop, I thought that I was doing something wrong. I might go to the wrong toilet. I’m afraid of someone judging me based on how I look and behave." },
            { "type": "boldData", "text": "This might feel like a spotlight effect." },
            { "type": "paragraph", "text": "The other time is when I’m working on something. I want to improve myself by going to the gym or writing every day. I am afraid sometimes that my family or my friends are going to judge me for doing that." },
            { "type": "paragraph", "text": "They might judge me based on how I work out or why I spend my time writing every day. This all ends up being overthinking about what I do." },
            { "type": "heading", "level": 2, "text": "Then I realized" },
            { "type": "fadedData", "text": "No one really cares." },
            { "type": "fadedData", "text": "No one even really wants to care." },
            { "type": "heading", "level": 2, "text": "No one really cares." },
            { "type": "paragraph", "text": "We thought that people were watching us." },
            { "type": "paragraph", "text": "I don’t want to say that we are narcissistic, because I’m not going to talk about that. I’m just saying that it is normal to feel like that. Feeling that people might be judging us or watching us." },
            { "type": "boldData", "text": "It’s not okay if we take action based on that." },
            { "type": "LineData", "text": "How people see us ", "emphasis": "should not control us." },
            { "type": "LineData", "text": "How people judge us ", "emphasis": "should not control us." },
            { "type": "LineData", "text": "How people perceive us ", "emphasis": " should not control us." },
            { "type": "paragraph", "text": "Except if you find it beneficial for your change, though." },
            { "type": "paragraph", "text": "There are times when people give me some advice, but I don’t accept it. I get offensive, but I know that I was doing something wrong. This is where you need to set aside your ego and become better." },
            { "type": "paragraph", "text": "Even so, those who saw and judged us controlled us without considering what was best for us." },
            { "type": "heading", "level": 2, "text": "What can you learn?" },
            { "type": "paragraph", "text": "What you can learn from this article is that you need to focus on yourself." },
            { "type": "highlight", "text": "Just work on yourself. Train hard. Be better. Wake up early. Sleep enough." },
            { "type": "paragraph", "text": "Those are what you need to focus on. You don’t have to think about how people see you or how they behave toward you. Just focus on yourself and improve yourself." },
            { "type": "boldData", "text": "At least every day for 1%." },
            { "type": "paragraph", "text": "When I stop thinking about other people, realizing that they don’t care, I become more focused. I became more controlled. I have the freedom to do what I want to do." },
            { "type": "paragraph", "text": "At least you learn from those mistakes." },
            { "type": "paragraph", "text": "You become better. You evaluate yourself." },
            { "type": "paragraph", "text": "I always thought that everybody was watching." },
            { "type": "paragraph", "text": "I always thought that everybody was watching." },
            { "type": "paragraph", "text": "Those are much more important than what other people see or judge." },
            {
                "type": "list", "items": [
                    "Focus on yourself.",
                    "Improve yourself.",
                    "Have tunnel vision."
                ]
            },
            { "type": "fadedData", "text": "It’s just you and yourself to become the best version of who you are." },

        ]
    };



    return (
        <section className="md:pt-20 lg:py-10">
            <div className="container mx-auto mb-20 flex flex-col justify-between gap-5 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2">{blogData.title}</h1>
                    <p className="text-gray-600 mb-4">{blogData.subtitle}</p>
                    <div className="flex items-center mb-8">
                        <img src={blogData.author.profilePicture} alt="Profile picture of the author" className="w-10 h-10 rounded-full mr-2" />
                        <div>
                            <p className="font-bold">{blogData.author.name}</p>
                            <span className="text-gray-500 mb-4">{blogData.readTime}</span>
                            <span className="text-gray-500 mb-4 ml-4">{blogData.date}</span>
                        </div>
                    </div>

                    <hr className="my-2 mb-3" />
                    <div className="flex items-center text-gray-500 mb-4 ">
                        <i className="ri-heart-line mr-2"></i> {blogData.likes}
                        <i className="ri-chat-3-line ml-4 mr-2"></i> {blogData.comments}
                        <i className="ri-share-line ml-4"></i> {blogData.shares}
                    </div>
                    <hr className="my-2" />

                    <img src={blogData.mainImage} alt="A person sitting alone in a dark room with a spotlight on them" className="w-full mb-4 mt-12" />
                    <p className="flex text-gray-500 text-sm mb-4 justify-center">Photo by<span className="underline">{blogData.photoCredit.name}</span> on <span className="underline ">{blogData.photoCredit.source}</span></p>
                    <div className='mt-12'>
                        {blogData.content.map((item, index) => {
                            if (item.type === "paragraph") {
                                return <p key={index} className="mb-4 mt-4">{item.text}</p>;
                            } else if (item.type === "heading") {
                                return <h2 key={index} className={`text-xl font-bold mb-2`}>{item.text}</h2>;
                            } else if (item.type === "list") {
                                return (
                                    <ul key={index} className="list-disc list-inside mb-4">
                                        {item.items.map((listItem, listIndex) => (
                                            <li key={listIndex} className='m-2'>{listItem}</li>
                                        ))}
                                    </ul>
                                );
                            } else if (item.type === "question") {
                                return <p key={index} className="font-semibold mb-4">{item.text}</p>;
                            } else if (item.type === "boldData") {
                                return <p key={index} className="font-semibold mb-4">{item.text}</p>;
                            } else if (item.type === "fadedData") {
                                return <p key={index} className="text-gray-700 text-2xl m-6">{item.text}</p>;
                            }
                            else if (item.type === "LineData") {
                                return <div key={index}>
                                    <div className="border-l-4 border-black pl-4  py-4 space-y-6">
                                        <span className="text-xl italic tracking-wide">{item.text}</span>
                                        <span className="font-bold text-xl italic tracking-wide">{item.emphasis}</span>
                                    </div>

                                </div>;
                            } else if (item.type === "highlight") {
                                return <div key={index} className="flex justify-between items-center p-2 mb-4">
                                    <p className="font-serif text-lg text-gray-800  bg-gray-100">{item.text}</p>
                                    <span className="text-sm text-gray-500">Top highlight</span>
                                </div>;
                            }
                            return null; // For any unrecognized type
                        })}
                    </div>


                   
                   
                
                </div>
            </div>


        </section>
    );
}

export default BlogInfo;

