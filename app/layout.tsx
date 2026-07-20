import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiwithak.info"),

  title: {
    default: "AIWITHAK | Anirudh Kolanupaka",
    template: "%s | AIWITHAK",
  },

  description:
    "Portfolio of Anirudh Kolanupaka, an AI Engineer and Founding Engineer specializing in Generative AI, RAG, agentic systems, Responsible AI, LLM evaluation, and trustworthy AI applications.",

  keywords: [
    "Anirudh Kolanupaka",
    "AIWITHAK",
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "RAG Engineer",
    "Agentic AI",
    "Responsible AI",
    "AI Ethics",
    "Caffeinated Professor",
    "LangChain",
    "LangGraph",
    "OpenAI",
    "Machine Learning Engineer",
  ],

  authors: [
    {
      name: "Anirudh Kolanupaka",
      url: "https://aiwithak.info",
    },
  ],

  creator: "Anirudh Kolanupaka",
  publisher: "AIWITHAK",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiwithak.info",
    siteName: "AIWITHAK",
    title: "AIWITHAK | Anirudh Kolanupaka",
    description:
      "AI Engineer and Founding Engineer building Generative AI, RAG, agentic workflows, Responsible AI, and trustworthy AI systems.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AIWITHAK | Anirudh Kolanupaka",
    description:
      "AI Engineer and Founding Engineer building Generative AI, RAG, agentic workflows, Responsible AI, and trustworthy AI systems.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}