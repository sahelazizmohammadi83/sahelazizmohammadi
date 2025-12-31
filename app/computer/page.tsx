"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "../../components/SearchBar";
import SocialLinks from "../../components/SocialLinks";

const posts = [
  {
    slug: "post-1",
    title: " جاوا اسکریپت چیست؟  ",
    desc: "آشنایی با مفاهیم پایه و کاربرد های جاوا اسکریپت",
  },
  {
    slug: "post-2",
    title: " فریم ورک نکست چیست  ",
    desc: " آشنایی با مفاهیم پایه و کاربرد های نکست",
  },
  {
    slug: "post-3",
    title: "اهمیت هدر در سایت چیست؟",
    desc: "فواید هدر در سایت",
  },
   {
    slug: "post-4",
    title: "انواع سبک سایت های مختلف",
    desc: "برای ایده گرفتن موضوع سایت جدیدت",
  }

];

export default function BarnameNevisiMain() {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lower) ||
          post.desc.toLowerCase().includes(lower)
      )
    );
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-center">

      {/* Search Bar */}
      <div className="mb-12 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-[#0331ff] mb-12">
        برنامه‌نویسی
      </h1>

      <div className="space-y-6 mt-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug} className="flex flex-col items-center">
              <Link href={`/computer/${post.slug}`} className="w-full sm:w-3/4">
                <div
                  className="bg-white border border-black rounded-xl p-6 sm:p-8 shadow-md
                  cursor-pointer transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                  mx-auto text-center"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#011779]">
                    {post.title}
                  </h2>
                  <p className="text-base sm:text-2xl text-[#1027fa]">{post.desc}</p>
                </div>
              </Link>

              {/* SocialLinks زیر هر پست */}
              <div className="mt-4 w-full sm:w-3/4">

              </div>
            </div>
          ))
        ) : (
          <p className="text-xl mt-12 text-[#334155]">هیچ پستی یافت نشد.</p>
        )}
      </div>
      <div className="mt-[1cm]">
  <SocialLinks />
</div>
  
    </main>
  );
}