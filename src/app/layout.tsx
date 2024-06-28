import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GG Dashboard",
  description: "Quick Assestment APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col max-w-[1260px] m-auto p-6 lg:px-20 lg:py-12">
          <h1 className="text-2xl font-bold mb-3">Dashboard</h1>
          <div className="bg-white p-4 rounded border shadow-md">
            <div className="flex flex-col xl:flex-row">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
