"use client";

import SocialLinks from "../../../components/SocialLinks";

export default function Post1() {
  const content =`hbdjjgglnlkpsjgipwtjipjwsjkrlhktjpiejfishjeksdfkjxjptioujpirupejgkj;jferj"qirhj`;

  // مسیر تصویر: میتونی هر عکس دلخواه بذاری داخل public/images
  const image = "/images/a1620.jpg";

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* عنوان */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-[#b00ff0]">
        خودسازی و ذهنیت: درس اول
      </h1>

      {/* تصویر */}
      {image && (
        <div className="mb-6 w-full flex justify-center">
          <img
            src={image}
            alt="خودسازی و ذهنیت"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* متن */}
      <p className="text-base sm:text-lg md:text-xl text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {content}
      </p>

      {/* Social Links */}
      <div className="flex justify-center mt-8">
        <SocialLinks />
      </div>
    </main>
  );
}