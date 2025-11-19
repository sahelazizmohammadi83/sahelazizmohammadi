"use client";
import SocialLinks from "../../../components/SocialLinks";
export default function Post1() {
  const post = {
    title: "شروع برنامه‌نویسی",
    content: `ر این درس با اصول اولیه برنامه‌نویسی آشنا می‌شوید و محیط توسعه را آماده می‌کنیم.
    
سلام با ما باشید.
خط جدید اینجا ایجاد شده.`
  };

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      {/* عنوان پست */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0331ff]">
        {post.title}
      </h1>

      {/* محتوای پست */}
      <p className="text-base sm:text-lg text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {post.content}
      </p>

      {/* Social Links */}
      <div className="mt-[1cm]">
  <SocialLinks />

      </div>
    </main>
  );
}