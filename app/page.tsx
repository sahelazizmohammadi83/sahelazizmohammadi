"use client";

import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <main className="  px-[2cm] max-w-full sm:max-w-xl md:max-w-2xl mx-auto sm:px-6 md:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-12 sm:mb-16">
        سلام به سایت ساحل عزیزمحمدی خوش آمدید
      </h1>

      {/* کارت برنامه‌نویسی */}
      <Link href="/barname-nevisi">
  <div className="bg-white border border-black rounded-[3rem]   px-  py-6 sm:p-8 mb-[2cm] shadow-md
                  cursor-pointer transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105
                  mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#0331ff]">
      برنامه‌نویسی
    </h2>
    <p className="text-lg sm:text-xl md:text-2xl text-[#092bc4]">
      اطلاعات و آموزش های برنامه نویسی
    </p>
  </div>
</Link>
      {/* کارت ذهن */}
      <Link href="/zehn">
        <div className="bg-white border border-black rounded-[3rem] p-6 sm:p-8 mb-6 shadow-md
                        cursor-pointer transition-all duration-300
                        hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105
                        mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#9d0baa]">
           خودسازی و ذهنیت
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#380347]">
            تقویت باورهای ذهنی و موفقیت.
          </p>
        </div>
      </Link>

      

      {/* لینک شبکه‌های اجتماعی */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        
        <div className="mt-[1cm]">
  <SocialLinks />
</div>
      </div>
    </main>
  );
}