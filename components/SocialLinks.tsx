"use client";

import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-[1cm] mt-6">
      <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"
      className="mx-3.5">
        <FaTelegramPlane size={40} className="text-[#03afff] w-20 h-20 hover:text-[#0331ff] transition-colors"/>
      </a>
      <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
        <FaInstagram  size={40} className="text-[#e203ff] w-20 h-20 hover:text-[#ff0381] transition-colors"/>
      </a>
      <a href="https://youtube.com/username" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={40} className="text-[#ff0318]  hover:text-[#d11818] transition-colors"/>
      </a>
    </div>
  );
}