import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="transition-colors duration-500">
      <body className="bg-white text-center">
        <Header />

        <main className="mx-auto px-8 sm:px-10 md:px-12 lg:px-16 max-w-3xl">
          <div className="text-center">
            {/* متن‌ها وسط‌چین، فونت وزیری و کمی کوچکتر */}
            <div className="prose mx-auto text-center">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}