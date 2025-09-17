import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Optimize",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-6 bg-white" suppressHydrationWarning>
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
