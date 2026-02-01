"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-16 max-w-full mx-auto text-center bg-[#f8faff] min-h-screen">

      {/* ---------- بخش معرفی کوتاه سایت ---------- */}
      <section className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#1E293B]">
          خوش آمدید
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#334155]">
          دنیایی از اطلاعات گوشی، لپ‌تاپ و راهکارهای روزمره اینجاست.
        </p>
      </section>

      {/* ---------- سه کارت اصلی ---------- */}
      <section className="flex flex-wrap justify-center gap-4 mb-12">
        <Link href="/mobile" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#93c5fd] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/phonss.jpg" alt="موبایل" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(17,92,255)] mt-2">معرفی موبایل</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4">جدیدترین مدل‌ها و بررسی تخصصی گوشی‌ها</p>
          </div>
        </Link>

        <Link href="/moqayese-phon" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#93c5fd] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/phon-vs.jpg" alt="موبایل" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#d940ff] mt-2">مقایسه ی موبایل </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4"> بررسی تخصصی گوشی‌ها</p>
          </div>
        </Link>

         <Link href="/rahnama-phon" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#a5b4fc] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/phon-mq.jpg" alt="راهنمای خرید" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2fcf20] mt-2">راهنمای خرید  موبایل</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4">راهنمای انتخاب بهترین  موبایل</p>
          </div>
        </Link>

        <Link href="/laptop" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#a5b4fc] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/laptopss.jpg" alt="لپ‌تاپ" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(17,92,255)] mt-2">معرفی لپ تاپ</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4">راهنمای انتخاب بهترین لپ‌تاپ‌ها</p>
          </div>
        </Link>

        <Link href="/moqayese-laptop" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#a5b4fc] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/hp-v-as.jpg" alt="لپ‌تاپ" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#d940ff] mt-2">مقایسه لپ تاپ</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4"> انتخاب بهترین لپ‌تاپ‌ها</p>
          </div>
        </Link>

        <Link href="/rahnama-laptop" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#a5b4fc] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/laptop-rrah.jpg" alt="لپ‌تاپ" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2fcf20] mt-2">راهنمای خرید  لپ تاپ</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4">راهنمای انتخاب بهترین لپ‌تاپ‌ها</p>
          </div>
        </Link>


        <Link href="/computer" className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
          <div className="bg-white border border-[#a5b4fc] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center">
            <div className="relative w-full aspect-square">
              <Image src="/images/abzarha.jpg" alt="کامپیوتر" fill className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(255,17,17)] mt-2">راهکارهای روزمره</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4"> مشکلات روزمرتو با گوشی  و لپ تاپت حل کن</p>
            
          </div>

        </Link>
      </section>
{/* ---------- راهنمای خرید ---------- */}

{/* ---------- مقایسه‌ها ---------- */}
<section className="mb-12">
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#1E3A8A]">مقایسه‌ها</h2>
  <Swiper spaceBetween={4} slidesPerView={1.5} sm-slidesPerView={2.5} md-slidesPerView={3.5} className="mb-4">
    <SwiperSlide className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
      <Link href="moqayese-phon/post-3">
        <div className="bg-white border border-[#60a5fa] rounded-2xl overflow-hidden shadow-lg text-center">
          <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-2">مقایسه گوشی A و B</p>
          <div className="relative w-full pt-[56.25%]">
            <Image src="/images/iphonvs.jpg" alt="مقایسه" fill className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>
        </div>
      </Link>
    </SwiperSlide>

    <SwiperSlide className="w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[24rem]">
      <Link href="moqayese-phon/post-2">
        <div className="bg-white border border-[#60a5fa] rounded-2xl overflow-hidden shadow-lg text-center">
          <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-2">مقایسه گوشی C و D</p>
          <div className="relative w-full pt-[56.25%]">
            <Image src="/images/a5636.jpg" alt="مقایسه" fill className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>
        </div>
      </Link>
    </SwiperSlide>
  </Swiper>
</section>
      {/* ---------- درباره من و ارتباط با ما ---------- */}
      <section className="bg-[#e0f2fe] py-12 px-4 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* درباره من */}
          <div className="bg-white border border-[#60a5fa] p-6 sm:p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#1E3A8A]">درباره من</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155]">
              من ساحل عزیزمحمدی هستم، طراح و برنامه‌نویس عاشق تکنولوژی. تجربه من شامل طراحی وب، اپلیکیشن و آموزش برنامه‌نویسی است.
            </p>
          </div>
          {/* ارتباط با ما */}
          <div className="bg-white border border-[#60a5fa] p-6 sm:p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#1E3A8A]">ارتباط با ما</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#334155] mb-4">
              برای ارتباط با من می‌توانید از شبکه‌های اجتماعی زیر استفاده کنید:
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>

    </main>
  );
}