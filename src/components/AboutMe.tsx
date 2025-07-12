"use client";
import React from "react";

export default function AboutContact() {
  return (
    <footer className="bg-[#F15A28] px-4 sm:px-6 md:px-2 py-6" id="aboutme">
      <div className="flex flex-col justify-between  px-[60px] pt-[40px] pb-[10px]">
        <h1
          className="text-[#fff] text-4xl md:text-6xl"
          style={{ fontFamily: '"Mouse Memoirs", sans-serif' }}
        >
          About me!
        </h1>
        <div className="pt-5 text-[#fff] font-medium md:text-md space-y-4 text-justify md:text-left ">
          <p>
            I’m Ashutosh Salunkhe, a passionate and growth-driven Full-Stack Web
            Developer and Electrical Engineer. 
          </p>
          <p>
            What I love most is bridging the gap between technology and human
            interaction. I enjoy finding that sweet spot where code meets
            creativity, using my technical skills and eye for design to craft
            experiences that are inclusive, intuitive, and just a little bit
            delightful.
          </p>
          <p>
            Outside coding, you’ll find me exploring philosophy content, playing
            football, or{" "}
            <a
              href="https://www.duolingo.com/profile/ashutosh___10"
              className="underline"
              title="Learning Japanese"
            >
              学んでいる日本語
            </a>{" "}
            (Sukoshi zutsu).
          </p>
          <p>Thanks for stopping by!</p>
        </div>
        <div className="flex justify-start items-center gap-10 pt-7 flex-wrap">
          <h1
            className="text-[#fff] text-6xl"
            style={{ fontFamily: '"Mouse Memoirs", sans-serif' }}
          >
            contact:
          </h1>
          <a
            href="https://www.linkedin.com/in/ashutosh-salunkhe-1a8682373"
            className="flex justify-center items-center gap-2"
          >
            <img
              src="link.svg"
              alt="Linkedin logo"
              className="w-10 sm:w-5 md:w-16"
            />
            <h3 className="text-[#fff]">/AshutoshSalunkhe</h3>
          </a>
          
        </div>
      </div>
    </footer>
  );
}
