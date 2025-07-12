"use client";

import React, { useState, useRef } from "react";
import InternCard from "./InternCard";


function InternSection() {
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="bg-[rgb(237,255,146)] in-h-screen px-4 sm:px-6 md:px-2 pb-10 text-black"
      id="internships"
    >
      <div className=" flex justify-between  px-[60px] pt-[40px] pb-[10px]">
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
          className="text-[#23AD7E] text-4xl md:text-7xl sm:tracking-[-2px] md:tracking-[-2px] transition-all duration-300"
          id="intern"
        >
          {hovered ? "वर्क & इंटर्नशिपs" : "Work & Internships"}
        </div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: hovered ? "rotate(38deg)" : "rotate(0deg)",
          }}
        >
          <a href="https://www.linkedin.com/in/ashutosh-salunkhe-1a8682373">
            <img
              src="/green.svg"
              alt="an arrow"
              className="h-[60px] sm:h-10 md:h-20 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
      <div className="relative w-full px-5">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2rounded-full px-3"
        >
          <img src="left.svg" alt="Left" className="w-10 h-10" />
        </button>

        <div
          ref={scrollRef}
          className="scroll-container flex gap-6 overflow-x-auto scrollbar-hide-px-4 sm:px-10 py-5 px-4 scroll-smooth snap-x snap-mandatory justify-center"
        >
          <InternCard
            number="1"
            duration="Feb 2025 - May 2025"
            companyName="Noble IT Service"
            position="MERN Stack Developer"
            points={[
              "Developed and maintained websites using MongoDB, Express.js, React.js, and Node.js.",
              "Provided technical support and troubleshooting for web applications.",
              "Participated in regular team meetings to review code, brainstorm features, and discuss development workflows.",
            ]}
            buttons={[
              {
                logo: "laptop.svg",
                text: "Web Design",
                bgColor: "bg-[#DAFFDE]",
                textColor: "text-[#23AD7E]",
              },
            ]}
            link="/NobleIt"
          />
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
        >
          <img src="right.svg" alt="Right" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}

export default InternSection;
