"use client";

import { useParams } from "next/navigation";

export default function JazbPost() {
  const { slug } = useParams(); // دریافت slug از URL

  // می‌توانی داده‌ها را دستی یا از یک آرایه/آیتم‌ها بیاوری
  const posts: { [key: string]: { title: string; content: string } } = {
    "post-1": {
      title: "شروع مسیر جذب",
      content: "محتوای کامل درس اول: تکنیک‌ها و نکات عملی برای جذب انرژی مثبت."
    },
    "post-2": {
      title: "تقویت باورها",
      content: "محتوای کامل درس دوم: روش‌ها و تمرینات برای تثبیت باورهای موفقیت."
    }
  };

  const post = posts[slug as string];

  if (!post) return <p className="text-center mt-20 text-xl">پست یافت نشد</p>;

  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#9b07c0]">{post.title}</h1>
      <p className="text-lg text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {post.content}
      </p>
    </main>
  );
}
