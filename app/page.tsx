"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <main className="px-[1rem] sm:px-[2rem] md:px-[3rem] max-w-full mx-auto text-center bg-[#f8faff] min-h-screen">
      
      {/* بخش معرفی کوتاه سایت */}
      <section className="mb-[1rem] sm:mb-[2rem]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#1E293B]">
          خوش آمدید
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#334155]">
          دنیایی از اطلاعات گوشی، لپ‌تاپ و کامپیوتر اینجاست.
        </p>
      </section>

      {/* سه کارت اصلی */}
      <section className="flex flex-col sm:flex-row justify-center items-stretch gap-[1rem] mb-[2rem]">
        <Link href="/mobile" className="flex-1">
          <div className="bg-[#ffffff] border border-[#93c5fd] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2563eb] mb-2">موبایل</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155]">جدیدترین مدل‌ها و بررسی تخصصی گوشی‌ها</p>
          </div>
        </Link>

        <Link href="/laptop" className="flex-1">
          <div className="bg-[#ffffff] border border-[#a5b4fc] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4f46e5] mb-2">لپ‌تاپ</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155]">راهنمای انتخاب بهترین لپ‌تاپ‌ها</p>
          </div>
        </Link>

        <Link href="/computer" className="flex-1">
          <div className="bg-[#ffffff] border border-[#c084fc] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#9333ea] mb-2">کامپیوتر</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155]">سیستم‌های آماده و قطعات پیشنهادی</p>
          </div>
        </Link>
      </section>

      {/* بخش راهنمای خرید گوشی */}
      <section className="mb-[2rem]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#1E3A8A]">راهنمای خرید بر اساس قیمت</h2>
        <Swiper spaceBetween={0.5} slidesPerView={1.5} sm-slidesPerView={2.5} md-slidesPerView={3.5} className="mb-[1rem]">
          <SwiperSlide className="w-[14rem] sm:w-[18rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem]">
            <div className="bg-[#ffffff] border border-[#60a5fa] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#334155]">راهنمای خرید گوشی ارزان</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[14rem] sm:w-[18rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem]">
            <div className="bg-[#ffffff] border border-[#60a5fa] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#334155]">راهنمای خرید گوشی متوسط</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* بخش مقایسه دو گوشی */}
      <section className="mb-[2rem]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#1E3A8A]">مقایسه‌ها</h2>
        <Swiper spaceBetween={0.5} slidesPerView={1.5} sm-slidesPerView={2.5} md-slidesPerView={3.5} className="mb-[1rem]">
          <SwiperSlide className="w-[14rem] sm:w-[18rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem]">
            <div className="bg-[#ffffff] border border-[#60a5fa] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#334155]">مقایسه گوشی A و B</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[14rem] sm:w-[18rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem]">
            <div className="bg-[#ffffff] border border-[#60a5fa] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#334155]">مقایسه گوشی C و D</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* بخش معرفی خودت */}
      <section className="mb-[2rem]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#1E3A8A]">درباره من</h2>
        <div className="bg-[#ffffff] border border-[#60a5fa] p-4 sm:p-6 md:p-8 shadow-lg">
          <p className="text-sm sm:text-base md:text-lg text-[#334155]">
            من ساحل عزیزمحمدی هستم، طراح و برنامه‌نویس عاشق تکنولوژی.
          </p>
        </div>
      </section>

      {/* ارتباط با ما + سوشال لینک */}
      <section className="mb-[2rem]">
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-[1rem] text-[#1E3A8A]">ارتباط با ما</h2>
        <SocialLinks />
      </section>

    </main>
  );
}