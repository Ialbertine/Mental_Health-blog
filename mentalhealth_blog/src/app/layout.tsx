import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Mental Health Blog",
  description: "A blog about mental health and how to take care of it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900"> {/* Added background color and text color */}
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Center the content with padding */}
          {children}
        </main>
      </body>
    </html>
  );
}
