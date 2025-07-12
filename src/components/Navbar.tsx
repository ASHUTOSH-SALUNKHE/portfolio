"use client";

import React, { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-screen lg:px-[50px] py-[21px] bg-white backdrop-blur-[50px] fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="flex justify-between items-center">
        <a href="#header">
          <img
            src="ashutoshsign.png"
            className="w-40 h-15 ml-5 lg:ml-0"
            alt="Logo"
          />
        </a>

        <div className="relative flex-col lg:flex">
          {/* Mobile Toggle Button */}
          <div
            className="lg:hidden text-amber-950 cursor-pointer select-none mr-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <div className="text-2xl">✖</div>
            ) : (
              <img src="menu.svg"></img>
            )}
          </div>

          {/* Menu List */}
          {/* Menu List */}
          <ul
            className={`transition-all duration-300 ease-in-out lg:flex-row lg:relative lg:pt-0 lg:gap-4 absolute right-0 top-[57px] lg:top-0 flex-col bg-white z-50 ${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex lg:w-full w-[65vw] rounded-lg shadow-md lg:shadow-none  `}
          >
            {/* Menu Items */}
            {[
              {
                href: "#aboutme",
                text: "About Me",
                icon: "sparkle.svg",
                bg: "hover:bg-[#e0f2ff] lg:bg-[#e0f2ff]",
                color: "text-[#70aaf3]",
              },
              {
                href: "#internships",
                text: "Internships",
                icon: "briefcase-business.svg",
                bg: "hover:bg-[#e5fab5] lg:bg-[#e5fab5]",
                color: "text-[#82b123]",
              },
              {
                href: "#education",
                text: "Education",
                icon: "graduation-cap.svg",
                bg: "hover:bg-[#ffe8eb] lg:bg-[#ffe8eb]",
                color: "text-[#eb80a4]",
              },
              {
                href: "#developments",
                text: "Development",
                icon: "laptop.svg",
                bg: "hover:bg-[#daffde] lg:bg-[#daffde]",
                color: "text-[#2cbd85]",
              },
              {
                href: "#skills",
                text: "Skills",
                icon: "skill.svg",
                bg: "hover:bg-[#f3e0ff] lg:bg-[#f3e0ff]",
                color: "text-[#bb8ad7]",
              },
              {
                href: "#",
                text: "Resume",
                icon: "file.svg",
                bg: "hover:bg-[#fff5d7] lg:bg-[#fff5d7]",
                color: "text-[#fccc2d]",
              },
            ].map((item, index) => (
              <li key={index} className="w-full lg:w-auto">
                <a
                  href={item.href}
                  className={`${item.bg} px-4 py-2 lg:px-4 lg:py-2 rounded-md lg:rounded-[5px] inline-flex items-center gap-2 w-full lg:w-auto`}
                >
                  <div className="relative hidden lg:block h-5 w-5">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span
                    className={`${item.color} text-[16px] lg:text-[15px] font-medium h-8 lg:h-auto w-full lg:w-auto flex justify-center items-center lg:justify-center lg:items-center`}
                  >
                    {item.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
