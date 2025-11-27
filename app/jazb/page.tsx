"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "../../components/SearchBar";
import SocialLinks from "../../components/SocialLinks";

// داده‌های پست‌ها
const posts = [
  {
    slug: "post-1",
    title: "قانون جذب : درس اول",
    desc: "تقویت باورهای ذهنی و  موفقیت.",
  },
  {
    slug: "post-2",
    title: "قانون جذب : درس دوم",
    desc: "تمرین‌ها و تکنیک‌های عملی برای قدرت ذهنی.",
  },
];

export default function ZehnPoolsazMain() {
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
      {/* Search */}
      <div className="mb-12 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      <h1 className="text-5xl font-bold text-[#5a0a80] mb-12"> قانون جذب</h1>

      <div className="space-y-6 mt-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.slug} href={`/jazb/${post.slug}`}>
              <div
                className="bg-white border border-black rounded-xl p-8 shadow-md 
                cursor-pointer transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-2 hover:scale-105 mx-auto text-center"
              >
                <h2 className="text-3xl font-bold mb-4 text-[#99078d]">
                  {post.title}
                </h2>
                <p className="text-2xl text-[#450957]">{post.desc}</p>
              </div>
            </Link>
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