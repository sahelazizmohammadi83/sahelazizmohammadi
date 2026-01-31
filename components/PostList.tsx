"use client";

import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  image?: string | null;
  createdAt: string;
};

// category: string => نام دسته‌بندی (laptop, mobile, compare-mobile, ...)
export default function PostList({ category }: { category: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  // دریافت پست‌ها از سرور
  const fetchPosts = async () => {
    const res = await fetch("/api/posts?category=" + category);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [category]);

  const togglePost = (id: number) => {
    setOpenPostId(prev => (prev === id ? null : id));
  };

  return (
    <main className="p-6 max-w-5xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center mb-6">{category.toUpperCase()} POSTS</h1>

      {posts.map(post => (
        <div
          key={post.id}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => togglePost(post.id)}
        >
          <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-48 h-48 object-cover rounded"
              />
            )}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-bold text-xl">{post.title}</h2>
              <p className="text-gray-600 mt-1">{post.content.slice(0, 100)}...</p>
              <small className="text-gray-400">{new Date(post.createdAt).toLocaleString()}</small>
            </div>
          </div>

          {openPostId === post.id && (
            <div className="p-4 bg-gray-50 border-t">
              <p>{post.content}</p>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}