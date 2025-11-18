import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="transition-colors duration-500">
    
          <Header />
          <main className="max-w-xl mx-auto p-6">{children}</main>
          
      
    </html>
  );
}

