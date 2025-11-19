"use client";

import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center mt-4 mb-6" style={{ gap: "16px" }}>
    
      <Link href="https://t.me/sahelazizmohammadi" target="_blank"
      
      className="text-[#1a9eeb] hover:underline">
       برای تمرین های عالی و رایگان بیا اینجا=تلگرام
      </Link>
      <Link href="https://www.instagram.com/sahelazizm" target="_blank" className="text-[#a53e9c] hover:underline">
       برای راهکارهای سریع و خفن بیااینجا=اینستگرام
      </Link>
      <Link href="https://youtube.com/@sahelazizm?si=VOpO5nx4-eStb_OM" target="_blank" className="text-[#fd0c0c] hover:underline">
        برای دیدن آموزش های رایگان و پروژه محور بیااینجا=یوتیوب
      </Link>
    </div>
  );
}
