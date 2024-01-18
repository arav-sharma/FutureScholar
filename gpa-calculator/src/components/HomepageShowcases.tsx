import React from "react";

import { poppinsNormal } from "@/app/page";
const poppinsNormalFont = poppinsNormal.className;

const homepageShowcases: React.FC = () => {

  const reasons = [
    {
      title: "Data-Driven Admission Insights",
      description: "Harnessing the power of advanced analytics, we offer you a clear and accurate estimation of your college admission chances. Our approach considers a wide array of factors, including academic achievements, standardized test scores, and extracurriculars, ensuring a hollistic analysis."
    },
    {
      title: "Precision in Probability Calculations",
      description: "With our sophisticated algorithms and machine learning techniques, we calculate your admission probabilities with high precision. This empowers you to make informed decisions about which colleges to apply to, optimizing your application strategy."
    },
    {
      title: "Tailored Guidance for Your College Journey",
      description: "Every student's path to college is unique. Our platform recognizes this, offering personalized advice and suggestions. From selecting the right colleges to crafting compelling applications, we're with you at every step."
    },
  ];
  

  
  return (
    <div>
      <div id="showcaseOne" className="relative overflow-hidden mt-12">
        <img src="/yalePicture.jpg" alt="Campus Image" className="w-full object-cover h-1/6"/>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <h1 className="text-white text-4xl lg:text-6xl font-bold text-center">Envision Your Future.</h1>
          <p id="showcaseTwoScrollHere" className={`text-white text-base lg:text-xl text-center mt-10 px-48 ${poppinsNormalFont}`}>
            Empower yourself with Big Future Allen HS's tools and envision your future, calculate your grade point average throughout high school, input standardized test scores such as SAT, ACT, and AP/IB scores to see where you rank among renowned universities, and estimate likely admission chances.
          </p>
        </div>
      </div>

      <div id="showcaseTwo" className="py-24 px-40">
        <h1 className="text-black text-4xl lg:text-6xl font-bold text-center mb-16">Why Us?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-justify">
            {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="flex items-center mt-5">
                        <img src="/checkmark.png" className="w-auto h-8 mr-2"/>
                        <p className="font-bold">{reason.title}</p>
                    </div>
                    <p className="mt-5 mr-5">{reason.description}</p>
                </div> 
            ))}
        </div>
    </div>

      <div id="showcaseThree" className="relative overflow-hidden mt-2">
        <img src="/collegeCampusPicture.jpg" alt="Campus Image" className="w-full object-cover h-1/6"/>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <h1 className="text-white text-4xl lg:text-6xl font-bold text-center">How can we help you?</h1>
          <p className={`text-white text-base lg:text-xl text-justify mt-10 px-48 ${poppinsNormalFont}`}>
            Our platform provides students with a detailed analysis of their potential admission chances to various colleges, utilizing a comprehensive set of criteria including grades, extracurricular activities, essays, leadership positions, SAT/ACT scores, and AP/IB classes. We leverage data-driven insights and machine learning algorithms to offer realistic assessments tailored to each student's unique academic and extracurricular profile. By offering this personalized evaluation, we empower students to make informed decisions about where to apply, aligning their choices with their qualifications and aspirations. Our service not only demystifies the admission probabilities but also guides students in strengthening their applications for better outcomes.
          </p>
          <button className={`appearance-none bg-[rgb(var(--primary-color))] mt-3 text-white rounded-lg cursor-pointer outline-none px-6 py-2 text-center no-underline transition-transform duration-300 ease-in-out select-none transform will-change-transform disabled:pointer-events-none shadow-md transition duration-500 hover:shadow-primary hover:-translate-y-1 active:translate-y-0`}>
            <a href="/createAccount">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default homepageShowcases;
