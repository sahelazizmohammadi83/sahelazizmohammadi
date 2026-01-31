"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="max-w-5xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-12 text-[#0331ff]">همه پست‌ها</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="flex flex-col items-center">
              <Link href={`/post?id=${post.id}`} className="w-full sm:w-3/4">
                <div className="bg-white border rounded-2xl p-8 shadow-md cursor-pointer hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="line-clamp-3 text-[#1027fa]">{post.content}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-xl mt-12 text-[#334155]">هیچ پستی یافت نشد.</p>
        )}
      </div>
    </main>
  );
}