import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SoftSave VN | Nền tảng tiết kiệm thông minh",
  description:
    "SoftSave VN giúp cá nhân, gia đình và đội nhóm xây dựng thói quen tài chính bền vững bằng tiết kiệm vi mô theo mục tiêu.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
