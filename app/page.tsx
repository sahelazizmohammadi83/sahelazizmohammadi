"use client";
import Image from "next/image";
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
              <div className="w-[18rem] h-[50rem] sm:w-[24rem] sm:h-[14rem] md:w-[32rem] md:h-[18rem] lg:w-[50rem] lg:h-[18rem]">
                <Image src="/images/iphonvs.jpg" alt="مقایسه" fill className="object-cover" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[14rem] sm:w-[18rem] md:w-[20rem] h-[10rem] sm:h-[12rem] md:h-[15rem]">
            <div className="bg-[#ffffff] border border-[#60a5fa] rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-lg text-center">
              <p className="text-sm sm:text-base md:text-lg text-[#334155]">مقایسه گوشی C و D</p>
              <div className="w-[18rem] h-[50rem] sm:w-[24rem] sm:h-[14rem] md:w-[32rem] md:h-[18rem] lg:w-[50rem] lg:h-[18rem]">
                <Image src="/images/a5636.jpg" alt="مقایسه" fill className="object-cover" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
{/* ---------- درباره من و ارتباط با ما ---------- */}
<section className="bg-[#e0f2fe] py-12 px-6 sm:px-12 md:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* درباره من */}
    <div className="bg-white border border-[#60a5fa] p-8 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1E3A8A]">درباره من</h2>
      <p className="text-base sm:text-lg text-[#334155]">
        من ساحل عزیزمحمدی هستم، طراح و برنامه‌نویس عاشق تکنولوژی. تجربه من شامل طراحی وب، اپلیکیشن و آموزش برنامه‌نویسی است.
      </p>
    </div>

    {/* ارتباط با ما */}
    <div className="bg-white border border-[#60a5fa] p-8 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1E3A8A]">ارتباط با ما</h2>
      <p className="text-base sm:text-lg text-[#334155] mb-6">
        برای ارتباط با من می‌توانید از شبکه‌های اجتماعی زیر استفاده کنید:
      </p>
      <SocialLinks />
    </div>

  </div>
</section>
    </main>
  );
}