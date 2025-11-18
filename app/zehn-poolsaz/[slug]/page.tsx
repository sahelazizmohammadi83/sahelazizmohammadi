"use client";

import { useParams } from "next/navigation"; 

export default function ZehnPost() {
  const { slug } = useParams();

  const posts: { [key: string]: { title: string; content: string } } = {
    "post-1": {
      title: "ذهن پول‌ساز",
      content: "محتوای درس اول ذهن پول‌ساز: تمرین‌ها و تکنیک‌های عملی."
    },
    "post-2": {
      title: "باورهای مثبت",
      content: "محتوای درس دوم: روش‌ها و تمرینات برای تثبیت باورهای مثبت."
    }
  };

  const post = posts[slug as string];

  if (!post) return <p className="text-center mt-20 text-xl">پست یافت نشد</p>;

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#096428]">{post.title}</h1>
      <p className="text-lg text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {post.content}
      </p>


    </main>
  );
}
