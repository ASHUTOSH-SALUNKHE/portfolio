"use client";

import React, { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  location: string;
  desc: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2019",
    title: "SSC",
    location: "Pradnya Prabodhani Prashala , Sangli",
    desc: "	Maharashtra State Board of Secondary and Higher Secondary Education (90.40%)",
  },
  {
    year: "2022",
    title: "Diploma",
    location: "Walchand College Of Engineering, Sangli",
    desc: "Electrical Engineering (82%)",
  },
  {
    year: "2025",
    title: "Degree (BTech)",
    location: "ADCET, Ashta",
    desc: "Electrical Engineering (7.77)",
  },
];

const Education = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-[#1b7e92] min-h-screen px-4 sm:px-6 md:px-10 pb-10 text-white" id="education">
      {/* Header */}
      <div className="flex justify-between items-center px-[60px] pt-[40px] pb-[10px]">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: hovered
              ? "'Yatra One', cursive"
              : "'Bebas Neue', serif",
            WebkitTextStrokeWidth: hovered ? "0.5px" : "0.5px",
            WebkitTextStrokeColor: hovered ? "#666666" : "#666",
          }}
          className="text-[#b6f4ef] text-4xl md:text-7xl sm:tracking-[-2px] md:tracking-[-2px] transition-all duration-300"
          id="intern"
        >
          {hovered ? "एजुकेशनs" : "Education"}
        </div>

        {/* Arrow Link */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transition: "transform 0.3s ease",
            transform: hovered ? "rotate(38deg)" : "rotate(0deg)",
          }}
        >
          <a
            href="https://www.linkedin.com/in/ashutosh-salunkhe-1a8682373"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/green.svg"
              alt="arrow icon"
              className="h-10 sm:h-10 md:h-20"
            />
          </a>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative border-l-4 border-orange-400 pl-6 mt-10">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-12 relative ml-4">
            <div className="absolute w-4 h-4 bg-orange-400 rounded-full -left-6 top-2"></div>
            <p className="text-sm text-gray-300 mb-2">{item.year}</p>
            <div className="bg-yellow-200 border border-orange-400 rounded-xl p-5 shadow-lg">
              <h3 className="text-lg font-bold text-[#1F2937] ">
                {item.title}
              </h3>
              <p className="text-[#374151] font-semibold">{item.location}</p>
              <p className="text-sm text-[#D97706] mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
