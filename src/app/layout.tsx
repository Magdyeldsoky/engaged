import type { Metadata, Viewport } from "next";
import { Cairo, Alexandria } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-cairo",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-alexandria",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "دعوة خطوبة: مجدي ❤️ منة",
  description: "يسرنا دعوتكم لمشاركتنا أجمل لحظات حياتنا في حفل خطوبة مجدي ومنة - الجمعة 13 نوفمبر 2026 بقرية زوير",
  openGraph: {
    title: "حفل خطوبة مجدي ومنة 💍",
    description: "نتشرف بحضوركم لمشاركتنا فرحتنا يوم الجمعة 13 نوفمبر 2026 الساعة 7:00 مساءً بقرية زوير - شبين الكوم",
    url: "https://engaged-xzcy.vercel.app",
    siteName: "حفل خطوبة مجدي ومنة",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "دعوة حفل خطوبة مجدي ومنة",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "حفل خطوبة مجدي ومنة 💍",
    description: "نتشرف بحضوركم لمشاركتنا فرحتنا يوم الجمعة 13 نوفمبر 2026",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`${cairo.variable} ${alexandria.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="bg-luxury-black text-luxury-cream antialiased selection:bg-luxury-gold selection:text-luxury-black overflow-x-hidden min-h-screen">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}