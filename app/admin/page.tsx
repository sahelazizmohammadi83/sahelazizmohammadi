"use client";

import { useState, useEffect } from "react";
import AdminWrapper from "./components/AdminPageWrapper";

type Post = {
  id: number;
  title: string;
  content: string;
  category?: string | null;
  image?: string | null;
  createdAt: string;
};

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postTitle, setPostTitle] = useState("");
  const [postExcerpt, setPostExcerpt] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postImage, setPostImage] = useState<File | null>(null);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  const token = process.env.NEXT_PUBLIC_ADMIN_PASSWORD!;

  // ---------- Fetch Posts ----------
  const fetchData = async () => {
    const res = await fetch("/api/posts");
    setPosts(await res.json());
  };

  useEffect(() => { fetchData(); }, []);

  // ---------- Add or Update Post ----------
  const addOrUpdatePost = async () => {
    if (!postTitle || !postContent ||!postExcerpt) return;

    const formData = new FormData();
    formData.append("title", postTitle);
    formData.append("content", postContent);
    if (postCategory) formData.append("category", postCategory);
    if (postImage) formData.append("image", postImage);

    const url = editingPostId ? `/api/posts?id=${editingPostId}` : "/api/posts";
    const method = editingPostId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "x-admin-token": token }, // فقط token
      body: formData,
    });

    setPostTitle(""); setPostContent(""); setPostCategory(""); setPostExcerpt(""); setPostImage(null); setEditingPostId(null);
    await fetchData();
  };

  // ---------- Edit Post ----------
  const editPost = (post: Post) => {
    setEditingPostId(post.id);
    setPostTitle(post.title);
    setPostContent(post.content);
    setPostCategory(post.category || "");
  };

  // ---------- Delete Post ----------
  const deletePost = async (id: number) => {
    await fetch(`/api/posts?id=${id}`, {
      method: "DELETE",
      headers: { "x-admin-token": token },
    });
    await fetchData();
  };

  return (
    <AdminWrapper>
      <div className="p-6 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel - Posts</h1>

        {/* ---------- Form Add / Edit ---------- */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
          <input
            type="text"
            placeholder="Title"
            value={postTitle}
            onChange={e => setPostTitle(e.target.value)}
            className="border p-2 rounded w-full md:w-64 text-center"
          />

          <input
            value={postExcerpt}
            onChange={e => setPostExcerpt(e.target.value)}
            placeholder="توضیح کوتاه پست (excerpt)"
            className="border p-2 rounded w-full md:w-[500px] text-center"
          />
          <input
            type="text"
            placeholder="Content"
            value={postContent}
            onChange={e => setPostContent(e.target.value)}
            className="border p-2 rounded w-full md:w-64 text-center"
          />
          <select
            value={postCategory}
            onChange={e => setPostCategory(e.target.value)}
            className="border p-2 rounded w-full md:w-64 text-center"
          >
            <option value="">Select Category</option>
            <option value="mobile">موبایل</option>
            <option value="moqayese-phon">موبایل مقایسه</option>
            <option value="rahnama-phon">موبایل راهنما خرید</option>
            <option value="laptop">لپ تاپ</option>
            <option value="moqayese-laptop">لپ تاپ مقایسه</option>
            <option value="rahnama-laptop">راهنمای خرید لپ تاپ</option>
            <option value="computer">راهکارها</option>
          </select>
          <input
            type="file"
            onChange={e => setPostImage(e.target.files?.[0] || null)}
            className="border p-2 rounded w-full md:w-64 text-center"
          />
          <button
            onClick={addOrUpdatePost}
            className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
          >
            {editingPostId ? "Update" : "Add"}
          </button>
        </div>

        {/* ---------- Posts List ---------- */}
        <div className="flex flex-col gap-4">
          {posts.map(post => (
            <div
              key={post.id}
              className="border p-4 rounded flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-4"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-48 h-48 object-cover rounded"
                  />
                )}
                <div>
                  <h2 className="font-bold text-lg">{post.title}</h2>
                  <p>{post.content}</p>
                  {post.category && <p className="italic text-sm">Category: {post.category}</p>}
                  <small>{new Date(post.createdAt).toLocaleString()}</small>
                </div>
              </div>

              <div className="flex gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => editPost(post)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminWrapper>
  );
}
