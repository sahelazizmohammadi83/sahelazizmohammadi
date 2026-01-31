"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // رمز از env میاد
    // حتماً تو .env بزار NEXT_PUBLIC_ADMIN_PASSWORD=رمزتو
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      // ست کردن وضعیت ورود
      localStorage.setItem("isAdmin", "true");
      router.push("/admin"); // رفتن به پنل اصلی
    } else {
      setError("رمز اشتباه است!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl mb-4 font-bold">Admin Login</h1>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border p-2 mb-2 w-64"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 w-64 hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

