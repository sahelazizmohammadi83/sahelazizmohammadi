"use client";

import SocialLinks from "../../../components/SocialLinks";

export default function Post1() {
  return (
    <main className="w-full mx-auto px-4 py-10 text-center">
      <div className="mx-auto max-w-2xl">

        {/* عنوان */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#b00ff0]">
          مقاله نمونه: سفر به دنیای برنامه‌نویسی
        </h1>

        {/* پاراگراف اول */}
        <p className="text-base sm:text-lg text-[#1E293B] leading-relaxed mb-6 whitespace-pre-line">
          اینجا متن ابتدایی پستت رو می‌نویسی. مقدمه مقاله و توضیحات کلی.
        </p>

        {/* عکس اول */}
        <img
          src="/images/a1620.jpg"
          alt="توضیح عکس اول"
          className="w-full rounded-2xl shadow-md mb-4"
        />
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          این متن توضیح عکس اول هست.
        </p>

        {/* عکس دوم */}
        <img
          src="/images/a1621.jpg"
          alt="توضیح عکس دوم"
          className="w-full rounded-2xl shadow-md mb-4"
        />
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          توضیح عکس دوم، نکته‌ها و توضیحات بیشتر.
        </p>

        {/* عکس سوم */}
        <img
          src="/images/a1622.jpg"
          alt="توضیح عکس سوم"
          className="w-full rounded-2xl shadow-md mb-4"
        />
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          توضیح عکس سوم، جمع‌بندی یا نتیجه‌گیری.
        </p>

        {/* جدول نمونه */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">ویژگی</th>
                <th className="border px-4 py-2">ضعیف</th>
                <th className="border px-4 py-2">قوی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">تمرکز</td>
                <td className="border px-4 py-2">کم</td>
                <td className="border px-4 py-2">عمیق</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* سوشال لینک‌ها */}
        <SocialLinks />
      </div>
    </main>
  );
}