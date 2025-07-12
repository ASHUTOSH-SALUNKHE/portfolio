"use client";

import React, { useState } from "react";
import ProjectFolderTabs from "./ProjectFolderTabs";
import ProjectCard from "./ProjectCard";


function ProjectSection() {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(0);

  const projects = [
    {
      name: "Nitro Krypt",
      date: "",
      title: "",
      image: "/Projects/nitroKrypt.png",
      description:
        "Nitro-Krypt is a modern decentralized application (dApp) that allows users to send cryptocurrency across the world using Ethereum smart contracts. Built with React.js and styled using Tailwind CSS, it integrates MetaMask for wallet connection and leverages Solidity for secure on-chain transactions.",
      stack: [
        "React.js",
        "Solidity",
        "Hardhat",
        "Tailwind CSS",
        "MetaMask",
        "Ethereum Blockchain",
      ],
      link: "https://github.com/ASHUTOSH-SALUNKHE/nitro-krypt",
    },
    {
      name: "Social Media",
      date: "",
      title: "",
      image: "/Projects/socialmedia.png",
      description:
        "A modern social media platform built with Next.js App Router, featuring user authentication with Clerk, and a robust backend using PostgreSQL + Prisma.It supports dynamic/static routes, server/client components, and real-time interactions like posting, following, and file uploads via UploadThing.Styled with Tailwind CSS & Shadcn, the app includes server actions, API integrations, optimistic updates, and error handling using loading.tsx, error.tsx, and not-found.tsx.",
      stack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Clerk",
        "Tailwind CSS",
        "UploadThing",
      ],
      link: "https://social-media-six-zeta.vercel.app/",
    },
    {
      name: "Nitro Solar AI",
      date: "",
      title: "",
      image: "/Projects/solar.png",
      description:
        "Nitro – Smart Solar Prediction with AI is an innovative full-stack web application designed to predict solar panel energy output using artificial intelligence. Built using Next.js, the app integrates modern tools like Clerk for authentication, Convex DB for backend data handling, and Gemini AI to generate intelligent, personalized energy predictions. By collecting real-time inputs such as panel type, shading percentage, location (latitude and longitude), and environmental conditions, Nitro provides accurate, user-specific power output estimates. Additionally, it features a built-in voice assistant powered by VAPI, allowing users to interact naturally with the system using spoken commands. Styled with Tailwind CSS for a responsive and elegant UI, Nitro represents a unique blend of clean design, AI-driven insights, and real-time user engagement for the renewable energy sector.",
      stack: [
        "Next.js (App Router)",
        "Tailwind CSS",
        "Shadcn/UI",
        "VAPI (Voice Assistant API)",
        "Clerk",
        "Convex DB",
        "Gemini AI (Google’s AI) ",
        "Typescript",
      ],
      link: "https://solar-prediction.vercel.app",
    },
    {
      name: "Fullstack Chat App",
      date: "",
      title: "",
      image: "/Projects/chat.png",
      description:
        "This project is a full-stack real-time chat application built using the powerful MERN stack (MongoDB, Express.js, React.js, and Node.js) combined with Socket.io for real-time communication. It features JWT-based authentication and authorization, ensuring secure login and protected routes for user access. The frontend is beautifully styled using Tailwind CSS along with DaisyUI, offering a modern and responsive user interface. Zustand is used for global state management, efficiently handling application-wide states like user data, current chats, and message updates. Real-time messaging is powered by Socket.io, enabling instant message delivery and live online/offline user status without page refresh. The app includes robust error handling on both the client and server sides, ensuring smooth user experience even when issues occur.",
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
        "DaisyUI",
      ],
      link: "https://fullstack-chat-app-gj68.onrender.com/",
    },
    {
      name: "Exam-Registeration portal",
      date: "",
      title: "",
      image: "/NobleIt/Homepage.jpeg",
      description:
        "The Exam Registration Portal by Blockchain is a MERN stack project developed during the Noble IT internship. It uses Clerk for secure user authentication and blockchain exclusively for processing registration fee payments. The system includes key components like Sign In, Homepage, Admin Panel, Profile, Help Desk, Register and Edit Forms. Admins can manage student data and registrations, while students can securely register and track their status.",
      stack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Clerk",
        "Shadcn UI",
        "Tailwind CSS",
        "Blockchain",
        "Zustand",
        "Axios",
        "Cloudinary",
      ],
      link: "https://exam-registeration.onrender.com/",
    },
  ];

  return (
    <div className="bg-[#262626] in-h-screen px-4 sm:px-6 md:px-2 pb-10" id="developments">
      <div className=" flex justify-between  px-[60px] pt-[40px] pb-[10px]">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: hovered ? "'Teko', cursive" : "'Inter', serif",
          }}
          className="text-[#DAFFDE] text-3xl md:text-6xl sm:tracking-[-2px] md:tracking-[-2px] transition-all duration-300"
          id="dev"
        >
          {hovered ? "डेवेलपमेंट प्रोजेक्ट्s" : "Development Projects"}
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
          <a href="https://github.com/ASHUTOSH-SALUNKHE">
            <img
              src="black.svg"
              alt="an arrow"
              className="h-15 sm:h-10 md:h-20"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-full w-full p-4 sm:p-6 md:p-10 gap-6 md:gap-10">
        <ProjectFolderTabs
          tabs={projects.map((p) => p.name)}
          selected={selected}
          onSelect={setSelected}
        />
        <ProjectCard {...projects[selected]} />
      </div>
    </div>
  );
}

export default ProjectSection;
