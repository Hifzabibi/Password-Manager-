import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-purple-200 bg-white/90 px-5 py-6 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <p className="flex items-center gap-2 text-sm font-medium text-gray-500 sm:text-base">
          @Created by
          <span className="font-semibold text-purple-700">
            Hifza Jadoon
          </span>

          <Heart
            size={18}
            className="fill-purple-500 text-purple-500 transition duration-300 hover:scale-125"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;