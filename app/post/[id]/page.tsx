"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
};

export default function PostPage() {
  const searchParams = useSearchParams();
  const postIdStr = searchParams.get("id");
  const postId = postIdStr ? Number(postIdStr) : NaN;

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!isNaN(postId)) {
      fetch(`/api/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [postId]);

  if (!postIdStr || isNaN(postId)) {
    return <p className="text-center py-12">آیدی پست نامعتبر است</p>;
  }

  if (!post) {
    return <p className="text-center py-12">در حال بارگذاری پست...</p>;
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mb-4 w-full rounded-lg object-cover"
        />
      )}
      <p className="text-base leading-relaxed">{post.content}</p>

      <Link href="/posts" className="mt-6 inline-block text-blue-600">
        بازگشت به همه پست‌ها
      </Link>
    </main>
  );
}