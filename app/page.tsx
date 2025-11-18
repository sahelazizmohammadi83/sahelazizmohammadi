"use client";

import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <main className="max-w-full sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-12 sm:mb-16">
        بخش‌های اصلی سایت
      </h1>

      {/* کارت برنامه‌نویسی */}
      <Link href="/barname-nevisi">
        <div className="bg-white border border-black rounded-xl p-6 sm:p-8 mb-6 shadow-md
                        cursor-pointer transition-all duration-300
                        hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105
                        mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#0331ff]">
            برنامه‌نویسی
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#092bc4]">
            آموزش‌های پروژه‌محور برای ورود به بازار کار.
          </p>
        </div>
      </Link>

      {/* کارت ذهن پول‌ساز */}
      <Link href="/zehn-poolsaz">
        <div className="bg-white border border-black rounded-xl p-6 sm:p-8 mb-6 shadow-md
                        cursor-pointer transition-all duration-300
                        hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105
                        mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#096800]">
            ذهن پول‌ساز
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#1E293B]">
            تقویت باورهای ثروت‌ساز و مسیر ذهنی موفقیت.
          </p>
        </div>
      </Link>

      {/* کارت قانون جذب */}
      <Link href="/jazb">
        <div className="bg-white border border-black rounded-xl p-6 sm:p-8 mb-6 shadow-md
                        cursor-pointer transition-all duration-300
                        hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105
                        mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#9b07c0]">
            قانون جذب
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#8b0c8b]">
            مسیر مخصوص آموزش‌ها و نکات جذب.
          </p>
        </div>
      </Link>

      {/* لینک شبکه‌های اجتماعی */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        <SocialLinks />
      </div>
    </main>
  );
}