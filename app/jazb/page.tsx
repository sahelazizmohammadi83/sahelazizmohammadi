"use client";

import Link from "next/link";
import SocialLinks from "../../components/SocialLinks";

const posts = [
  { slug: "post-1", title: "شروع مسیر جذب", desc: "محتوای کامل درس اول: تکنیک‌ها و نکات عملی برای جذب انرژی مثبت." },
  { slug: "post-2", title: "تقویت باورها", desc: "روش‌ها و تمرینات برای تثبیت باورهای موفقیت." },
];

export default function JazbMain() {
  return (
    <main className="max-w-3xl mx-auto py-8 px-4 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-[#801477] mb-8">قانون جذب</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="flex flex-col items-center w-full">
            <Link href={`/jazb/${post.slug}`} className="w-full sm:w-3/4">
              <div className="bg-white border border-black rounded-xl p-4 sm:p-6 shadow-md
                              cursor-pointer transition-all duration-300
                              hover:shadow-2xl hover:-translate-y-1 hover:scale-105 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-[#801477]">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base text-[#1E293B]">{post.desc}</p>
              </div>
            </Link>

            <div className="mt-4 w-full sm:w-3/4">
              
            </div>
          </div>
        ))}
      <SocialLinks />
      </div>
    </main>
  );
}

