import type { Metadata } from "next";
import { Space_Grotesk, Vazirmatn } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "امیرحسین بخشی | Amirhossein Bakhshi — Full Stack & Math Lover",
  description:
    "سایت شخصی امیرحسین بخشی | ۱۶ ساله | Full-Stack Developer (Next.js • React • Laravel) | عاشق ریاضی | در حال مهاجرت به آمریکا | آینده‌ی میلیاردر",
  keywords: [
    "امیرحسین بخشی",
    "Amirhossein Bakhshi",
    "Next.js",
    "React",
    "Laravel",
    "Portfolio",
    "Math",
    "Full Stack",
  ],
  authors: [{ name: "Amirhossein Bakhshi" }],
  openGraph: {
    title: "امیرحسین بخشی | Cosmic Portfolio",
    description: "Full-Stack Developer • Math Lover • Future Billionaire",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${space.variable} ${vazir.variable}`}>
      <body className="font-sans antialiased bg-[#050510] text-white">
        <div className="stars" />
        {children}
      </body>
    </html>
  );
}
