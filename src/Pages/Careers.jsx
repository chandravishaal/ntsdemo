import { useEffect, useState } from "react";
// import Blob from "../Common/Blobs";
import { MdArrowOutward } from "react-icons/md";
import careerBackground from "../assets/Images/carrerBackground.jpg";
import weListen from "../assets/Images/weListen.jpg";
import curve2 from "../assets/Images/curve2.png";
import curve3 from "../assets/Images/curve3.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const jobs = [
  {
    careerRole: "Product Designer",
    careerDescription:
      "We’re looking for a mid-level product designer to join our team.",
    work: {
      time: "Full-time", // Options: Full-time, Half-time, Part-time
      type: "Remote", // Options: Remote, Onsite, Hybrid
      percentage: "100%", // Work commitment as a percentage
    },
  },
  {
    careerRole: "Engineering Manager",
    careerDescription:
      "We’re looking for an experienced engineering manager to join our team.",
    work: {
      time: "Full-time",
      type: "Hybrid",
      percentage: "100%",
    },
  },
  {
    careerRole: "Customer Success Manager",
    careerDescription:
      "We’re looking for a customer success manager to join our team.",
    work: {
      time: "Part-time",
      type: "Onsite",
      percentage: "60%",
    },
  },
  {
    careerRole: "Account Executive",
    careerDescription:
      "We’re looking for an account executive to join our team.",
    work: {
      time: "Half-time",
      type: "Remote",
      percentage: "50%",
    },
  },
  {
    careerRole: "SEO Marketing Manager",
    careerDescription:
      "We’re looking for an experienced SEO marketing manager to join our team.",
    work: {
      time: "Full-time",
      type: "Hybrid",
      percentage: "100%",
    },
  },
];

const listenIcon = "https://cdn-icons-png.flaticon.com/512/6314/6314715.png"; // Replace with the URL of your icon
const careIcon = "https://cdn-icons-png.flaticon.com/512/6314/6314718.png"; // Replace with the URL of your icon
const improveIcon = "https://cdn-icons-png.flaticon.com/512/6314/6314724.png"; // Replace with the URL of your icon

const categories = [
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

// Define variants for smooth reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
};

const curveVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const MissionCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <img src={icon} alt={`${title} Icon`} className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-bold text-gray-800">
        We <span className="text-primaryCyan">{title}</span>
      </h3>
      <p className="text-gray-500 mt-4">{description}</p>
    </div>
  );
};

const JobListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const { ref: listenRef, inView: listenInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: careRef, inView: careInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: improveRef, inView: improveInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: achieveRef, inView: achieveInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="md:pt-20 lg:py-10 md:ml-10 relative">
      <div className="container mx-auto bg-gradient-to-b from-white to-cyan-50 rounded-lg flex flex-col md:flex-row items-center justify-center overflow-hidden py-5 px-4 md:px-8 lg:px-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <p className="text-center md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed md:leading-normal">
            Job Opportunities at
            <br />
            <span className="text-cyan-400 border-primaryCyan/15 block text-xl max-md:text-3xl md:text-3xl lg:text-4xl mt-2 max-md:mt-1">
              North Star Metrics
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={careerBackground}
            alt="Career Background"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      {/* Mission Section */}
      <div className="container mt-20 mx-auto px-5">
        <div className="px-8">
          {/* Heading Animation */}
          <motion.h1
            className="text-center my-12 font-bold text-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
          >
            Our Mission
          </motion.h1>

          {/* We Listen Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center"
            ref={listenRef}
            initial="hidden"
            animate={listenInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="md:w-1/2">
              <motion.h1 className="text-4xl font-bold text-black text-right">
                We <span className="text-primaryCyan">Listen</span>
              </motion.h1>
              <motion.p className="text-gray-700 mt-4 text-right">
                At our crypto suite, we take pride in listening to our
                customers' voices. We believe that every review, feedback, and
                suggestion is an opportunity for us to learn and grow. Our
                dedicated team actively listens to our customers' concerns,
                praises, and ideas, and we use this valuable feedback to shape
                our products and services...
              </motion.p>
            </div>
            <motion.div
              className="md:w-1/2 mt-4 md:mt-0 flex justify-center"
              variants={imageVariants}
            >
              <img
                src={weListen}
                alt="Illustration of a person pointing at a dashboard showing customer activity in real time"
                className="w-full max-w-md"
              />
            </motion.div>
          </motion.section>

          {/* Curve 2 Animation */}
          <motion.img
            src={curve2}
            alt="Curve Graphic"
            className="h-64 w-64 ml-96 py-8"
            initial="hidden"
            animate={listenInView ? "visible" : "hidden"}
            variants={curveVariants}
          />

          {/* We Care Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center"
            ref={careRef}
            initial="hidden"
            animate={careInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={imageVariants}
            >
              <img
                src="https://placehold.co/600x400"
                alt="Illustration of a world map with customer locations and chat bubbles"
                className="w-full max-w-md"
              />
            </motion.div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <motion.h1 className="text-4xl font-bold text-black">
                We <span className="text-primaryCyan">Care</span>
              </motion.h1>
              <motion.p className="text-gray-700 mt-4">
                We care deeply about our customers' success and well-being. We
                understand that navigating the complex world of cryptocurrency
                can be daunting, which is why we're dedicated to providing
                exceptional support and guidance...
              </motion.p>
            </div>
          </motion.section>

          {/* Curve 3 Animation */}
          <motion.img
            src={curve3}
            alt="Curve Graphic"
            className="h-32 w-64 ml-96 mt-6"
            initial="hidden"
            animate={careInView ? "visible" : "hidden"}
            variants={curveVariants}
          />

          {/* We Improve Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center mt-6"
            ref={improveRef}
            initial="hidden"
            animate={improveInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="md:w-1/2">
              <motion.h1 className="text-4xl font-bold text-black text-right">
                We <span className="text-primaryCyan">Improve</span>
              </motion.h1>
              <motion.p className="text-gray-700 my-4 py-3 text-right">
                We're committed to continuous improvement and innovation. Our
                team of experts stays at the forefront of industry trends,
                embracing cutting-edge technologies...
              </motion.p>
            </div>
            <motion.div
              className="md:w-1/2 md:mt-0 flex justify-center"
              variants={imageVariants}
            >
              <img
                src="https://placehold.co/600x400"
                alt="Illustration of a person pointing at a dashboard showing customer activity in real time"
                className="w-full max-w-md"
              />
            </motion.div>
          </motion.section>

          {/* Final Curve Image (Curve2 again for now, or use the actual one you prefer) */}
          <motion.img
            src={curve2}
            alt="Curve Graphic"
            className="h-90 w-52 ml-80"
            initial="hidden"
            animate={improveInView ? "visible" : "hidden"}
            variants={curveVariants}
          />

          {/* We Achieve Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center"
            ref={achieveRef}
            initial="hidden"
            animate={achieveInView ? "visible" : "hidden"}
            variants={sectionVariants}
          >
            <div className="mx-auto">
              <motion.h1 className="text-4xl font-bold text-black text-center">
                We <span className="text-primaryCyan">Achieve</span>
              </motion.h1>
              <motion.p className="mt-4 mb-8 text-gray-600 max-w-md text-center">
                We are dedicated to empowering individuals and businesses to
                unlock the full potential of cryptocurrency...
              </motion.p>
            </div>
          </motion.section>
        </div>
      </div>
      /{/* Hiring Banner */}
      <div className="container mx-auto mb-20 flex flex-col justify-between gap-5 px-4 md:px-0">
        <div className="mt-10">
          <span className="border-2 border-gray-800 text-gray-800 px-3 py-1.5 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base">
            We’re hiring!
          </span>
        </div>

        <div className="font-century-gothic mt-2 font-bold relative">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Be part of our mission
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            We&apos;re looking for passionate people to join us on our mission.
            We value <br className="hidden md:block" />
            flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-start gap-2 mb-2 font-bold overflow-x-auto hide-scrollbar px-4 md:px-0">
          <button
            onClick={() => setSelectedCategory("View all")}
            className={`px-3 py-1.5 rounded-full border-2 text-sm md:text-base whitespace-nowrap ${
              selectedCategory === "View all"
                ? "bg-black text-white"
                : "bg-white text-gray-800 border-gray-800"
            }`}
          >
            View all
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full border-2 text-sm md:text-base whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 border-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <hr />

        {/* Job List */}
        <div className="w-full">
          {jobs.map((job, index) => (
            <div key={index}>
              <div className="bg-transparent pt-6 pb-6 pr-6 pl-4 rounded-lg relative">
                {/* Job Content */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {job.careerRole}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {job.careerDescription}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-xl text-primaryCyan hidden md:flex"
                  >
                    Apply <MdArrowOutward />
                  </a>
                </div>

                {/* Work Details */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="border-2 border-gray-800 text-gray-800 px-3 py-1.5 rounded-full font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors">
                    <i className="ri-map-pin-line"></i> {job.work.percentage}{" "}
                    {job.work.time}
                  </span>
                  <span className="border-2 border-gray-800 text-gray-800 px-3 py-1.5 rounded-full font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors">
                    <i className="ri-time-line"></i>
                    <span> {job.work.type}</span>
                  </span>
                  <button className="border-2 border-gray-800 text-gray-800 px-3 py-1.5 rounded-full font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors">
                    <i className="ri-time-line"></i>
                    <span> Description</span>
                  </button>
                </div>
              </div>
              <hr className="border-gray-300 my-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
