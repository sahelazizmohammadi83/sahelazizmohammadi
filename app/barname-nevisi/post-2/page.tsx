"use client";
import SocialLinks from "../../../components/SocialLinks";
export default function Post2() {
  const title = "برنامه‌نویسی پروژه‌محور: درس دوم";

  const content = `در این درس تمرین‌ها و تکنیک‌های توسعه اپلیکیشن واقعی را بررسی می‌کنیم.
می‌توانید با انجام پروژه‌های عملی مهارت خود را بالا ببرید.;`

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#011779]">
        {title}
      </h1>

      <p className="text-base sm:text-lg text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {content}
      </p>

      <div className="mt-6 w-full sm:w-3/4 mx-auto">
        
       <SocialLinks />  
      </div>
    </main>
  );
}