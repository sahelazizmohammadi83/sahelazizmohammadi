"use client";

import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center mt-4 mb-6" style={{ gap: "16px" }}>
    
      <Link href="https://t.me/sahelazizmohammadi" target="_blank"
      
      className="text-[#1a9eeb] hover:underline">
        کانال تلگرام
      </Link>
      <Link href="https://www.instagram.com/yourprofile" target="_blank" className="text-[#a53e9c] hover:underline">
        پیج اینستا
      </Link>
      <Link href="https://www.youtube.com/yourchannel" target="_blank" className="text-[#fd0c0c] hover:underline">
        یوتیوب
      </Link>
    </div>
  );
}
