"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white p-4 text-center flex justify-center gap-4">
  <Link href="/">خانه</Link>
  <span>|</span>  {/* ← درست */}
  <Link href="/barname-nevisi">برنامه‌نویسی</Link>
  <span>|</span>
  <Link href="zehn"> خودسازی وذهنیت</Link>
</header>
  );
}