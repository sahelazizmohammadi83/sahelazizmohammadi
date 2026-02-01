"use client";

import SocialLinks from "../../../components/SocialLinks";

export default function Post1() {
  return (
    <main className="w-full mx-auto px-4 py-10 text-center">
      {/* کانتینر */}
      <div className="mx-auto max-w-xl">

        {/* تصویر */}
        <img
          src="/images/a1620.jpg"
          alt="Post image"
          className="w-full rounded-2xl shadow-md mb-8"
        />

        {/* عنوان */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#b00ff0]">
          خودسازی و ذهنیت: درس اول
        </h1>

        {/* متن پست */}
        <p className="text-base sm:text-lg text-[#1E293B] leading-relaxed mb-8 whitespace-pre-line">
          اینجا متن پستت رو می‌نویسی.
          {"\n"}
          ریسپانسیو واقعی.
          {"\n\n"}
          در ادامه یک جدول نمونه می‌بینی:
        </p>

        {/* جدول */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">ویژگی</th>
                <th className="border px-4 py-2">سطح ضعیف</th>
                <th className="border px-4 py-2">سطح قوی</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">تمرکز</td>
                <td className="border px-4 py-2">پراکنده</td>
                <td className="border px-4 py-2">عمیق</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-4 py-2">انگیزه</td>
                <td className="border px-4 py-2">موقت</td>
                <td className="border px-4 py-2">پایدار</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">نتیجه</td>
                <td className="border px-4 py-2">نیمه‌کاره</td>
                <td className="border px-4 py-2">موفق</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* سوشال */}
        <SocialLinks />
      </div>
    </main>
  );
}