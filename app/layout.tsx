import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aera Messenger | Conversations, Reimagined.",
  description: "Aera combines messaging, intelligent assistance, voice, files, communities, and productivity into one seamless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth antialiased dark`}>
      <body className="bg-background text-textPrimary min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
