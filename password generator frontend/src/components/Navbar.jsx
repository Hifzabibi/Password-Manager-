import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/90 px-5 py-4 shadow-sm backdrop-blur-md sm:px-10">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <div className="flex items-center gap-3">
          
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105">
            PM
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-purple-900 sm:text-2xl">
              PassVault
            </h1>

            <span className="text-xs font-medium text-purple-400">
              Password Manager
            </span>
          </div>

        </div>

        <a
          href="https://github.com/Hifzabibi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-100 to-violet-100 px-4 py-2.5 text-purple-700 shadow-md transition duration-300 hover:scale-105 hover:border-purple-400 hover:from-purple-600 hover:to-violet-600 hover:text-white hover:shadow-lg"
        >
          <FaGithub
            size={23}
            className="transition duration-300 group-hover:rotate-6"
          />

          <span className="font-semibold">
            GitHub
          </span>
        </a>

      </div>

    </nav>
  );
};

export default Navbar;