import React from "react";
import { poppinsNormal, poppinsLight } from "@/app/page";

const homepageFooter: React.FC = () => {

  const poppinsNormalFont = poppinsNormal.className;
  const poppinsLightFont = poppinsLight.className;

  return (
    <div className="flex justify-center w-full">
      <footer className="sticky z-50 bottom-0 bg-transparent rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://gpa-allenhs.com/" className="hover:underline">Big Future Allen HS™</a> - All Rights Reserved
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/privacy-policy" className="hover:underline me-4 md:me-6 ml-20">Privacy Policy</a>
              </li>
              <li>
                  <a href="/faq" className="hover:underline me-4 md:me-6">FAQ</a>
              </li>
              <li>
                  <a href="/createAccount" className="hover:underline me-4 md:me-6">Create an Account</a>
              </li>
          </ul>
          </div>
      </footer>
    </div>

  );
};

export default homepageFooter;
