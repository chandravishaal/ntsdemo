import { useState } from "react";
// import Blob from "../Common/Blobs";
import { MdArrowOutward } from "react-icons/md";

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

const categories = [
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const JobListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all");

  return (
    <section className="md:pt-20 lg:py-10 md:ml-10 relative">
      {/* <Blob /> */}
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
          <p className="text-sm md:text-lg text-gray-600 mb-8">
            We&apos;re looking for passionate people to join us on our mission.
            We value <br className="hidden md:block" />
            flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
        </div>

        {/* category filters */}
        <div className="flex justify-start gap-2 mb-2 font-bold overflow-x-auto hide-scrollbar px-4 md:px-0 max-md:px-0">
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

        {/* job list */}
        <div className="w-full">
          {jobs.map((job, index) => (
            <div key={index}>
              <div className="bg-transparent pt-6 pb-6 pr-6 pl-4 rounded-lg relative">
                {/* Job content */}
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
