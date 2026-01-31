"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "../../components/SearchBar";
import SocialLinks from "../../components/SocialLinks";

const posts = [
  {
    slug: "post-1",
    title: "جاوا اسکریپت چیست؟",
    desc: "آشنایی با مفاهیم پایه و کاربرد های جاوا اسکریپت",
    image: "/images/a5636.jpg",
  },
  {
    slug: "post-2",
    title: "فریم ورک نکست چیست؟",
    desc: "آشنایی با مفاهیم پایه و کاربرد های نکست",
    image: "/images/next.jpg",
  },
  {
    slug: "post-3",
    title: "اهمیت هدر در سایت چیست؟",
    desc: "فواید هدر در سایت",
    image: "/images/header.jpg",
  },
  {
    slug: "post-4",
    title: "انواع سبک سایت های مختلف",
    desc: "برای ایده گرفتن موضوع سایت جدیدت",
    image: "/images/design.jpg",
  },
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
    <main className="max-w-4xl mx-auto py-12 px-4 text-center">

      {/* Search */}
      <div className="mb-12 max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-[#0331ff] mb-12">
        برنامه‌نویسی
      </h1>

      <div className="space-y-10">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="flex justify-center">
            <Link href={`/laptop/${post.slug}`} className="w-full max-w-xl">
              <div
                className="bg-white border rounded-2xl p-6 shadow-md
                transition-all duration-300 cursor-pointer
                hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full max-w-sm mx-auto rounded-xl object-cover mb-6"
                />

                {/* Text */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#011779]">
                  {post.title}
                </h2>
                <p className="text-base sm:text-xl text-[#1027fa]">
                  {post.desc}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <SocialLinks />
      </div>
    </main>
  );
}