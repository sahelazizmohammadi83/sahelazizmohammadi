"use client";

import Link from "next/link";
import SocialLinks from "../../components/SocialLinks";

export default function Matn() {
  const content =` اینجا متن پستت رو می‌نویسی
ریسپانسیو واقعی
`
;
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#ff1403] mb-12">
        رزرو تبلیغات و قوانین آن
      </h1>

      {/* نمایش محتوا */}
      <p className="text-base sm:text-lg text-gray-800 whitespace-pre-line">
        {content}
      </p>

      <div className="mt-16">
        <SocialLinks />
      </div>
    </main>
  );
}