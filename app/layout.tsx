// app/layout.tsx
"use client"; // ← اضافه شد تا کامپوننت Client شود

import "./globals.css";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="transition-colors duration-500">
      <body className="bg-gray-50">
        {/* هدر سایت */}
        <Header />

        {/* محتوای اصلی سایت */}
        <main className="max-w-xl mx-auto p-4 sm:p-6 md:p-8">{children}</main>

        {/* سوشال لینک‌ها در پایین صفحه */}
        <footer className="mt-10">
          <SocialLinks />
        </footer>
      </body>
    </html>
  );
}