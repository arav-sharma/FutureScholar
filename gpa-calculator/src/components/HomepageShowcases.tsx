import React from "react";

import { poppinsNormal } from "@/app/page";
const poppinsNormalFont = poppinsNormal.className;

const homepageShowcases: React.FC = () => {
  return (
    <div className="relative overflow-hidden mt-12">
      <img src="/yalePicture.jpg" alt="Campus Image" className="w-full object-cover h-1/6"/>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <h1 className="text-white text-4xl lg:text-6xl font-bold text-center">Envision Your Future.</h1>
        <p className={`text-white text-base lg:text-xl text-center mt-10 px-48 ${poppinsNormalFont}`}>
          Empower yourself with Big Future Allen HS's tools and envision your future, calculate your grade point average throughout high school, input standardized test scores such as SAT, ACT, and AP/IB scores to see where you rank among renowned universities, and estimate likely admission chances.
        </p>
      </div>
    </div>
  );
};

export default homepageShowcases;
