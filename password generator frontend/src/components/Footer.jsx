import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
return (
<footer className="border-t border-purple-200 bg-white/90 px-4 py-5 shadow-sm backdrop-blur-md sm:px-5 sm:py-6">
<div className="mx-auto flex max-w-7xl items-center justify-center">
<p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs font-medium text-gray-500 sm:gap-2 sm:text-sm md:text-base">
<span>@Created by</span>

      <span className="font-semibold text-purple-700">
        Hifza Jadoon
      </span>

      <Heart
        size={16}
        className="fill-purple-500 text-purple-500 transition duration-300 hover:scale-125 sm:h-[18px] sm:w-[18px]"
      />
    </p>
  </div>
</footer>

);
};

export default Footer;