"use client";

import SocialLinks from "../../../components/SocialLinks";

export default function Post1() {
  const content = 
`اینجا متن پستت رو می‌نویسی.
ریسپانسیو واقعی.`

;

  return (
    <main className="w-full mx-auto px-4 py-10 text-center">

      {/* کانتینر دسکتاپ */}
      <div className="mx-auto max-w-xl">

        {/* تصویر */}
        <img
          src="/images/a1620.jpg"
          alt="Post image"
          className="
            w-full
            rounded-2xl
            shadow-md
            mb-8
          "
        />

        {/* عنوان */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#b00ff0]">
          خودسازی و ذهنیت: درس اول
        </h1>

        {/* متن */}
        <p className="
          text-base
          sm:text-lg
          text-[#1E293B]
          leading-relaxed
          whitespace-pre-line
        ">
          {content}
        </p>

        <div className="mt-12">
          <SocialLinks />
        </div>

      </div>
    </main>
  );
}