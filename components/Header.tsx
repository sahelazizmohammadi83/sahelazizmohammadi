"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaLaptop, FaDesktop, FaMobileAlt, FaChartBar, FaMoneyBillWave, FaHome } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* منو سمت راست */}
        <button
          className="text-2xl text-[#819dbe]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* آیکون‌ها وسط */}
        <nav className="flex items-center justify-center gap-10 mx-auto">
          <Link href="/" className="flex flex-col items-center gap-2 text-[#06347c] hover:text-[#0331ff] transition">
            <FaHome className="text-2xl" />
            <span className="text-sm mt-1">صفحه اصلی |</span>
          </Link>
          <Link href="/mobile" className="flex flex-col items-center gap-2 text-[#06347c] hover:text-[#0331ff] transition">
            <FaMobileAlt className="text-2xl" />
            <span className="text-sm mt-1">موبایل |</span>
          </Link>
          <Link href="/laptop" className="flex flex-col items-center gap-2 text-[#06347c] hover:text-[#0331ff] transition">
            <FaLaptop className="text-2xl" />
            <span className="text-sm mt-1">لپ‌تاپ |</span>
          </Link>
          <Link href="/computer" className="flex flex-col items-center gap-2 text-[#06347c] hover:text-[#0331ff] transition">
            <FaDesktop className="text-2xl" />
            <span className="text-sm mt-1">کامپیوتر</span>
          </Link>
        </nav>

        {/* جای خالی برای بالانس */}
        <div className="w-8"></div>
      </div>

      {/* منو بازشو */}
      {menuOpen && (
  <div
    className="fixed top-0 left-0 w-[7cm] h-[40cm] bg-[#dee3ee] z-50 flex flex-col items-start justify-start gap-[1cm] p-4 rounded-lg"
  >
    <Link
      href="/"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-[0.2cm] text-[#9b59b6] hover:text-[#be90d4] transition-colors"
    >
      <FaHome /> صفحه اصلی
    </Link>
    <Link
      href="/laptop"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-[0.2cm] text-[#a5d8ff] hover:text-[#33bfff] transition-colors"
    >
      <FaLaptop /> لپ‌تاپ
    </Link>
    <Link
      href="/computer"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-[0.2cm] text-[#f5a623] hover:text-[#ffce54] transition-colors"
    >
      <FaDesktop /> کامپیوتر
    </Link>
    <Link
      href="/mobile"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-[0.2cm] text-[#ff6b6b] hover:text-[#ff8787] transition-colors"
    >
      <FaMobileAlt /> گوشی
    </Link>
    <Link
      href="/compare"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-[0.2cm] text-[#9b59b6] hover:text-[#be90d4] transition-colors"
    >
      <FaChartBar /> مقایسه
    </Link>
    <Link
      href="/guide"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-[0.2cm] text-[#2ecc71] hover:text-[#55efc4] transition-colors"
    >
      <FaMoneyBillWave /> راهنمای خرید
    </Link>
  </div>
)}

    </header>
  );
}