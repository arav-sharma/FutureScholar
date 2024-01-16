import React from "react";
import { poppinsNormal, poppinsLight } from "@/app/page";

const homepageHero: React.FC = () => {

  const poppinsNormalFont = poppinsNormal.className;
  const poppinsLightFont = poppinsLight.className;

  return (
    <div>
      <div className={`${poppinsNormalFont} h-screen px-48 -mt-20 leading-relaxed text-xl text-justify flex items-center`}>
        <div>
          <p className={`text-7xl leading-relaxed mb-5`}>
            Your Dreams, <br/>
            Our Mission.
          </p>
          <p className="text-2xl leading-relaxed mb-5">
          "Empowering your journey to higher education
          <br/> by navigating the complexities of college
          <br/>   applications with ease and expertise."
          </p>
          <button className={`appearance-none bg-[rgb(var(--secondary-color))] text-black rounded-lg cursor-pointer mr-3 outline-none px-6 py-2 text-center no-underline transition-transform duration-300 ease-in-out select-none transform will-change-transform disabled:pointer-events-none shadow-md transition duration-500 hover:shadow-secondary hover:-translate-y-1 active:translate-y-0`}>
            <a href="#  ">How does it work?</a>
          </button>
          <button className={`appearance-none bg-[rgb(var(--primary-color))] text-white rounded-lg cursor-pointer outline-none px-6 py-2 text-center no-underline transition-transform duration-300 ease-in-out select-none transform will-change-transform disabled:pointer-events-none shadow-md transition duration-500 hover:shadow-primary hover:-translate-y-1 active:translate-y-0`}>
            <a href="/createAccount">Get Started</a>
          </button>
        </div>
        <img src="https://i.postimg.cc/FRCHMw0c/360-F-268556012-c1-WBa-KFN5rj-Rx-R2ey-V33zn-K4qn-Ye-KZjm.jpg" className="ml-auto rounded-lg"/>
      </div>
    </div>

  );
};

export default homepageHero;
