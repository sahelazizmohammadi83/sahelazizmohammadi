"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white p-4 text-center flex justify-center gap-8">
      <Link 
        href="/" 
        className="text-[#1E293B] hover:text-[#a1b916] transition-colors duration-300"
      >
        خانه
      </Link>
      |{" "}

      <Link 
        href="/barname-nevisi" 
        className="text-[#1E293B] hover:text-[#16a0b9] transition-colors duration-300"
      >
        برنامه‌نویسی
      </Link>|{"  "}

      

      <Link 
        href="/jazb" 
        className="text-[#1E293B] hover:text-[#801477] transition-colors duration-300"
      >
        قانون جذب
      </Link>
      |{" "}

      <Link 
        href="/zehn-poolsaz" 
        className="text-[#1E293B] hover:text-[#ce1d52] transition-colors duration-300"
      >
        ذهن پول‌ساز
      </Link>
    </header>
  );
}