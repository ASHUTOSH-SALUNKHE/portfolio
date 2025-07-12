import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Header from "@/components/Header";
import InternSection from "@/components/InternSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";


export default function page() {
  return (
    <div>

      <Navbar />
      
      <Header />

      <InternSection />

      <Education />

      <ProjectSection />

      <Skills />

      <AboutMe />

    </div>
  );
}

