"use client";

import SocialLinks from "../../../components/SocialLinks";

export default function Post2() {
  const content =``
  return (
    <main className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#b00ff0]">قانون جذب: درس دوم</h1>
      <p className="text-lg text-[#1E293B] leading-relaxed whitespace-pre-line mb-8">
        {content}
      </p>
      <div className="mt-[1cm]">
  <SocialLinks />
</div>
    </main>
  );
}