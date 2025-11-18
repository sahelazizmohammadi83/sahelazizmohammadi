"use client";

import { useParams } from "next/navigation";

export default function ProgrammingPost() {
  const { slug } = useParams(); // دریافت slug از URL

  // داده‌های پست‌های برنامه‌نویسی
  const posts: { [key: string]: { title: string; content: string } } = {
    "post-1": {
      title: "شروع برنامه‌نویسی",
      content: `در این درس با اصول اولیه برنامه‌نویسی آشنا می‌شوید و محیط توسعه را آماده می‌کنیم
     
      سلام با ما باشید`
    },
    "post-2": {
      title: "پروژه اول",
      content: "ساخت اولین پروژه عملی و تمرین مفاهیم پایه برنامه‌نویسی ."
      
    },
    "post-3": {
      title: "تمرین پیشرفته",
      content: `تمرین‌ها و چالش‌های پیشرفته برای افزایش مهارت برنامه‌نویسی` 
    }
  };

  const post = posts[slug as string];

  if (!post)
    return (
      <p className="text-center mt-20 text-xl text-[#334155]">
        پست یافت نشد
      </p>
    );

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#0331ff]">{post.title}</h1>
     <p className="text-lg text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {post.content}
      </p>
    </main>
  );
}
