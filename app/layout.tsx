import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIWITHAK | Anirudh Kolanupaka",
  description:
    "AIWITHAK is the portfolio of Anirudh Kolanupaka, showcasing AI engineering, Caffeinated Professor, project leadership, Responsible AI research, and trustworthy AI systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
