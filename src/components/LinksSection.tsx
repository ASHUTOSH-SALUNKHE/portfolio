import React from "react";
import NavButton from "./NavButton";


function LinksSection() {
  return (
    <div className="bg-[#5F202A]  flex-wrap justify-center items-center flex gap-4 sm:flex-row py-2 text-center">
      <div className="text-[#fff] text-[20px] sm:text-[28px] tracking-[-1px]">
        Quick Links
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/ASHUTOSH-SALUNKHE">
          <NavButton
            logo="/mail.png"
            text="Github"
            bgColor="bg-[#EA6250]"
            textColor="text-[#FFF2DC]"
          />
        </a>
        <a href="https://www.linkedin.com/in/ashutosh-salunkhe-1a8682373">
          <NavButton
            logo="/mail.png"
            text="Linkedin"
            bgColor="bg-[#EA6250]"
            textColor="text-[#FFF2DC]"
          />
        </a>
      </div>
    </div>
  );
}

export default LinksSection;
