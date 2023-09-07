import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metaworld",
  description: "Landing Page by NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
