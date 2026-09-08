import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
return (
<nav className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 sm:py-4 lg:px-10">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-3">

    {/* Logo */}
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-lg">
        PM
      </div>

      <div className="flex min-w-0 flex-col">
        <h1 className="truncate text-base font-bold tracking-tight text-purple-900 sm:text-xl lg:text-2xl">
          PassVault
        </h1>

        <span className="text-[10px] font-medium text-purple-400 sm:text-xs">
          Password Manager
        </span>
      </div>
    </div>

    {/* GitHub Button */}
    <a
      href="https://github.com/Hifzabibi"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex shrink-0 items-center gap-1 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-100 to-violet-100 px-3 py-2 text-purple-700 shadow-md transition duration-300 hover:scale-105 hover:border-purple-400 hover:from-purple-600 hover:to-violet-600 hover:text-white hover:shadow-lg sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5"
    >
      <FaGithub
        size={20}
        className="transition duration-300 group-hover:rotate-6 sm:text-[23px]"
      />

      <span className="hidden font-semibold xs:inline sm:inline">
        GitHub
      </span>
    </a>

  </div>
</nav>

);
};

export default Navbar;