"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <main className="px-[2cm] max-w-full mx-auto text-center bg-[#f8faff] min-h-screen">
      
      {/* بخش معرفی کوتاه سایت */}
      <section className="mb-[1cm]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-[#1E293B]">
          خوش آمدید
        </h1>
        <p className="text-[1rem] sm:text-xl text-[#334155]">
          دنیایی از اطلاعات گوشی، لپ‌تاپ و کامپیوتر اینجاست.
        </p>
      </section>

      {/* سه کارت اصلی */}
      <section className="flex flex-col sm:flex-row justify-center items-stretch gap-[0.5cm] mb-[2cm]">
        <Link href="/mobile" className="flex-1">
          <div className="bg-[#ffffff] border border-[#93c5fd] rounded-[3rem] p-8 shadow-lg   
                          hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-[2rem] sm:text-3xl font-bold text-[#2563eb] mb-2">موبایل</h2>
            <p className="text-[1rem] text-[#334155]">جدیدترین مدل‌ها و بررسی تخصصی گوشی‌ها</p>
          </div>
        </Link>

        <Link href="/laptop" className="flex-1">
          <div className="bg-[#ffffff] border border-[#a5b4fc] rounded-[3rem] p-8 shadow-lg   
                          hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-[2rem] sm:text-3xl font-bold text-[#4f46e5] mb-2">لپ‌تاپ</h2>
            <p className="text-[1rem] text-[#334155]">راهنمای انتخاب بهترین لپ‌تاپ‌ها</p>
          </div>
        </Link>

        <Link href="/computer" className="flex-1">
          <div className="bg-[#ffffff] border border-[#c084fc] rounded-[3rem] p-8 shadow-lg   
                          hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <h2 className="text-[2rem] sm:text-3xl font-bold text-[#9333ea] mb-2">کامپیوتر</h2>
            <p className="text-[1rem] text-[#334155]">سیستم‌های آماده و قطعات پیشنهادی</p>
          </div>
        </Link>
      </section>

      {/* بخش راهنمای خرید گوشی */}
      <section className="mb-[2cm]">
        <h2 className="text-[2rem] font-bold mb-4 text-[#1E3A8A]">راهنمای خرید بر اساس قیمت</h2>
        <Swiper spaceBetween={8} slidesPerView={3.5} className="mb-[1cm]">
       <SwiperSlide className="w-[250px]">
            <div className="bg-[#ffffff] border border-[#60a5fa] w-[20rem] h-[15rem] p-6 shadow-lg text-center">
              <p className=" text-[1rem] text-[#334155]">راهنمای خرید گوشی ارزان</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[250px]">
            <div className="bg-[#ffffff] border border-[#60a5fa] w-[20rem] h-[15rem] p-6 shadow-lg text-center">
              <p className="text-[#334155]">راهنمای خرید گوشی متوسط</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* بخش مقایسه دو گوشی */}
      <section className="mb-[2cm]">
        <h2 className="text-[2rem] font-bold mb-4 text-[#1E3A8A]">مقایسه‌ها</h2>
        <Swiper spaceBetween={8} slidesPerView={3.5} className="mb-[1cm]">
          <SwiperSlide className="w-[250px]">
            <div className="bg-[#ffffff] border border-[#60a5fa] w-[20rem] h-[15rem] p-6 shadow-lg text-center">
              <p className="text-[#334155]">مقایسه گوشی A و B</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=""> {/* مستطیلی */}
            <div className="bg-[#ffffff] border border-[#60a5fa] w-[20rem] h-[15rem] p-6 shadow-lg text-center">
              <p className="text-[#334155]">مقایسه گوشی C و D</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* بخش معرفی خودت */}
      <section className="mb-[2cm]">
        <h2 className="text-[2rem] font-bold mb-4 text-[#1E3A8A]">درباره من</h2>
        <div className="bg-[#ffffff] border border-[#60a5fa] p-8 shadow-lg">
          <p className="text-[1rem] text-[#334155]">
            من ساحل عزیزمحمدی هستم، طراح و برنامه‌نویس عاشق تکنولوژی.
          </p>
        </div>
      </section>

      {/* ارتباط با ما + سوشال لینک */}
      <section className="mb-[2cm]">
        <h2 className="text-xl font-bold mb-[1cm] text-[#1E3A8A]">ارتباط با ما</h2>
        <SocialLinks />
      </section>

    </main>
  );
}