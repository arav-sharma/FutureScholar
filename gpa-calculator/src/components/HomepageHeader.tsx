import React from "react";
import { poppinsNormal, poppinsLight } from "@/app/page";

const homepageHeader: React.FC = () => {

  const poppinsNormalFont = poppinsNormal.className;
  const poppinsLightFont = poppinsLight.className;

  return (
    <div className={`w-full bg-white shadow-md sticky top-0 z-50 py-2 ${poppinsNormalFont}`}>
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">
              BigFuture Allen HS 
            </h1>
          </div>
          <nav className={`}hidden md:flex space-x-10 text ${poppinsLightFont}`}>
           <button className="text-base text-xl text-[rgb(var(--text-color))] hover:text-gray-400 transition duration-300 CTS">
              <a href="/guides">Guides</a>
            </button>
            <button className="text-base text-xl text-[rgb(var(--text-color))] hover:text-gray-400 transition duration-300 CTS">
             <a href="/faq">FAQ</a>
            </button>
            <button className="text-base text-xl text-[rgb(var(--text-color))] hover:text-gray-400 transition duration-300 CTS">
              <a href="/login">Log in</a>
            </button>
            <button className={`appearance-none bg-[rgb(var(--primary-color))] text-white rounded-3xl cursor-pointer outline-none px-6 py-2 text-center no-underline transition-transform duration-300 ease-in-out select-none transform will-change-transform disabled:pointer-events-none shadow-md transition duration-500 hover:shadow-primary hover:-translate-y-1 active:translate-y-0`}>
              <a href="/createAccount">Create an Account</a>
            </button>
          </nav>
          <div className="md:hidden">
            <button className="text-base">
              Create Account
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default homepageHeader;
