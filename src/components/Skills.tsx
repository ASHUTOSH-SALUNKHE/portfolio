"use client";

import React, { useState } from "react";

const skillData = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Shadcn/UI",
  ],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "PostgreSQL", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
  Languages: ["English" , "Hindi" , "Marathi"]
};

const categories: SkillCategory[] = Object.keys(skillData) as SkillCategory[];
type SkillCategory = keyof typeof skillData;
const Skills = () => {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-[#9F79B4] px-4 sm:px-6 md:px-2 py-6" id="skills">
      {/* Title Section */}
      <div className="flex justify-between px-[60px] pt-[40px] pb-[10px]">
        <div className="flex flex-col gap-3">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              fontFamily: hovered ? "'Amita', cursive" : "'Inter', serif",
            }}
            className="text-[#F4E0FF] text-4xl md:text-6xl sm:tracking-[-5px] md:tracking-[-5px] font-semibold transition-all duration-300"
            id="design"
          >
            {hovered ? "स्किल्सs" : "Skills"}
          </div>
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
              src="purple.svg"
              alt="an arrow"
              className="h-15 sm:h-10 md:h-20"
            />
          </a>
        </div>
      </div>

      {/* Skills Content */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 mt-8">
        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:w-1/2 lg:w-1/3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-[#7A4B99] border border-[#F4E0FF] text-white shadow-lg shadow-white/30"
                  : "bg-[#F4E0FF] text-[#5C3572] hover:bg-[#e7d2f8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill List */}
        <div className="w-full md:w-1/2 border border-[#F4E0FF] rounded-xl p-6">
          <h3 className="text-xl text-white font-bold mb-4">{active}</h3>
          <div className="space-y-3">
            {skillData[active].map((skill, idx) => (
              <div key={idx}>
                <p className="text-white">{skill}</p>
                <div className="h-[3px] bg-[#F4E0FF] rounded-sm w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
